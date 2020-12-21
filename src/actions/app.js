import { ActionTypes } from 'config/constants';
import { action } from 'typesafe-actions';

export const startLoading = () => action(ActionTypes.START_LOADING);
export const stopLoading = () => action(ActionTypes.STOP_LOADING);
