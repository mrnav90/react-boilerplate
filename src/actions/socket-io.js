import { ActionTypes } from 'config/constants';
import { action } from 'typesafe-actions';

export const connectSocketIO = token =>
  action(ActionTypes.CONNECT_SOCKET_IO, { token });

export const sendEventSocketIO = (event, data) =>
  action(ActionTypes.SEND_EVENT_WEBSOCKET, { event, data });

export const handleReceiveEventSocketIO = data =>
  action(ActionTypes.RECEIVE_EVENT_SOCKET_IO, data);
