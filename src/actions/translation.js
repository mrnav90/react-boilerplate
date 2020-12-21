import { ActionTypes } from 'config/constants';
import { action } from 'typesafe-actions';

export const changeLanguage = locale =>
  action(ActionTypes.CHANGE_LANGUAGE, { locale });
