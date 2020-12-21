import { eventChannel } from 'redux-saga';
import { call, fork, take, apply } from 'redux-saga/effects';
import { ActionTypes } from 'config/constants';
import SocketIOConnector from './connector';
import * as handlers from './handlers';

function createConnector(params) {
  const socket = new SocketIOConnector(params);
  socket.subscribeListener();
  return socket;
}

function subscribeChannel(connector) {
  return eventChannel(emit => {
    connector.socketClient.on('message', (event, data) => {
      emit({ event, data });
    });

    const unsubscribe = () => {
      connector.socketClient.disconnect();
    };

    return unsubscribe;
  });
}

function* sendEvent(connector) {
  while (true) {
    const { payload } = yield take(ActionTypes.SEND_EVENT_SOCKET_IO);
    yield apply(connector, connector.emit, [
      'message',
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
  const { payload } = yield take(ActionTypes.CONNECT_SOCKET_IO);
  let params = {};
  if (payload.token) {
    params = {
      query: {
        token: payload.token,
      },
    };
  }
  const connector = yield call(createConnector, params);
  const channel = yield call(subscribeChannel, connector);
  yield fork(receiveEvent, channel);
  yield fork(sendEvent, connector);
}
