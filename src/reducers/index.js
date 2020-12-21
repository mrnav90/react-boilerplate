import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from 'config/routes';
import translation from './translation';
import modal from './modal';
import app from './app';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    i18n: translation,
    modal,
    app,
    ...injectedReducers,
  });

  return rootReducer;
}
