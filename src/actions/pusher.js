import { ActionTypes } from 'config/constants';
import { action } from 'typesafe-actions';

export const connectPusher = (channel, userIdentity) =>
  action(ActionTypes.CONNECT_PUSHER, { channel, userIdentity });

export const sendEventPusher = (event, data) =>
  action(ActionTypes.SEND_EVENT_PUSHER, { event, data });

export const handleReceiveEventPusher = data =>
  action(ActionTypes.RECEIVE_EVENT_PUSHER, data);
