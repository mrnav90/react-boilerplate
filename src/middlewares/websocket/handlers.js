import { put } from 'redux-saga/effects';
import { handleReceiveEventWebSocket } from 'actions';

export function* event_message(data) {
  yield put(handleReceiveEventWebSocket(data));
}
