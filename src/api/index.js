import axios from 'axios';
import reduxAPI from 'redux-api';
import auth from './auth';
import './http-interceptors';

const wrapRequestAPI = (request, rootUrl) => {
  const url = rootUrl || API_URL;
  return reduxAPI(request)
    .use('fetch', axios)
    .use('rootUrl', url);
};

const authRequest = wrapRequestAPI(auth);

export { authRequest };
