import { put } from 'redux-saga/effects';
import { handleReceiveEventSocketIO } from 'actions';

export function* event_message(data) {
  yield put(handleReceiveEventSocketIO(data));
}
