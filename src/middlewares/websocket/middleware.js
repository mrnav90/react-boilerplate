import { eventChannel } from 'redux-saga';
import { call, fork, take, apply } from 'redux-saga/effects';
import { ActionTypes } from 'config/constants';
import WebSocketConnector from './connector';
import * as handlers from './handlers';

function createConnector() {
  const socket = new WebSocketConnector();
  socket.subscribeListener();
  return socket;
}

function subscribeChannel(connector) {
  return eventChannel(emit => {
    connector.socketClient.on('message', payload => {
      emit({ event: payload.event, data: payload.data });
    });

    const unsubscribe = () => {
      connector.socketClient.disconnect();
    };

    return unsubscribe;
  });
}

function* sendEvent(connector) {
  while (true) {
    const { payload } = yield take(ActionTypes.SEND_EVENT_WEBSOCKET);
    yield apply(connector, connector.emit, [
      { event: payload.event, data: payload.data },
    ]);
  }
}

function* receiveEvent(channel) {
  while (true) {
    const payload = yield take(channel);
    const noop = () => null;
    const handle = handlers[`event_${payload.event}`] || noop;
    yield fork(handle, payload.data);
  }
}

export default function* workerConnection() {
  // const { payload } = yield take(ActionTypes.CONNECT_WEBSOCKET);
  const connector = yield call(createConnector);
  const channel = yield call(subscribeChannel, connector);
  yield fork(receiveEvent, channel);
  yield fork(sendEvent, connector);
}
