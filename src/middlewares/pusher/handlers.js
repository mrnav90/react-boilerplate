import { put } from 'redux-saga/effects';
import { handleReceiveEventPusher } from 'actions';

export function* event_message(data) {
  yield put(handleReceiveEventPusher(data));
}
