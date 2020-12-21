import { ActionTypes } from 'config/constants';
import { action } from 'typesafe-actions';

export const showModal = (body, customProps) =>
  action(ActionTypes.SHOW_MODAL, { body, customProps });

export const closeModal = () => action(ActionTypes.CLOSE_MODAL);
