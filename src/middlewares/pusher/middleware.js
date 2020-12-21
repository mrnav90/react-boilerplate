import { eventChannel } from 'redux-saga';
import { call, fork, take, apply } from 'redux-saga/effects';
import { ActionTypes } from 'config/constants';
import PusherConnector from './connector';
import * as handlers from './handlers';

function createConnector(userIdentity) {
  const random = parseInt(Math.random() * 10000000, 10);
  const padUserIdentity = userIdentity ? `${userIdentity}-` : null;
  const identity = padUserIdentity ? `${padUserIdentity}${random}` : null;
  return new PusherConnector(identity);
}

function subscribeChannel(connector) {
  return eventChannel(emit => {
    connector.privateChannel.bind('client-events', dataEvent => {
      emit(dataEvent);
    });

    const unsubscribe = () => {
      connector.disconnect();
    };

    return unsubscribe;
  });
}

function* sendEvent(connector) {
  while (true) {
    const { payload } = yield take(ActionTypes.SEND_EVENT_PUSHER);
    yield apply(connector, connector.trigger, [payload.event, payload.data]);
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
  const { payload } = yield take(ActionTypes.CONNECT_PUSHER);
  const connector = yield call(createConnector, payload.userIdentity);
  connector.subscribeChannel(payload.channel);
  const channel = yield call(subscribeChannel, connector);
  yield fork(receiveEvent, channel);
  yield fork(sendEvent, connector);
}
