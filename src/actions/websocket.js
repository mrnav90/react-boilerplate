import { ActionTypes } from 'config/constants';
import { action } from 'typesafe-actions';

export const connectWebSocket = () => action(ActionTypes.CONNECT_WEBSOCKET);

export const sendEventWebSocket = (event, data) =>
  action(ActionTypes.SEND_EVENT_WEBSOCKET, { event, data });

export const handleReceiveEventWebSocket = data =>
  action(ActionTypes.RECEIVE_EVENT_WEBSOCKET, data);
