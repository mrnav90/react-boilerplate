import axios from 'axios';
import { REQUEST_HEADER } from 'config/constant';
import './HttpInterceptors';

export default class HttpRequest {
  constructor() {
    this.apiURL = API_URL;
    this.headers = REQUEST_HEADER;
    this.axios = axios;
  }

  get(path, params) {
    const requestUrl = this.apiURL + path;
    const requestConfig = params ? { params, headers: this.headers } : { headers: this.headers };
    return this.axios.get(requestUrl, requestConfig);
  }

  post(path, data) {
    const requestUrl = this.apiURL + path;
    return this.axios.post(requestUrl, data, { headers: this.headers });
  }

  put(path, data) {
    const requestUrl = this.apiURL + path;
    return this.axios.put(requestUrl, data, { headers: this.headers });
  }

  patch(path, data) {
    const requestUrl = this.apiURL + path;
    return this.axios.patch(requestUrl, data, { headers: this.headers });
  }

  delete(path, params) {
    const requestUrl = this.apiURL + path;
    const requestConfig = params ? { params, headers: this.headers } : { headers: this.headers };
    return this.axios.delete(requestUrl, requestConfig);
  }

  custom(config) {
    return this.axios(config);
  }

  setHeaders(headers) {
    this.headers = Object.assign(this.headers, headers);
  }
}
