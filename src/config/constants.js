import langEn from 'i18n/en.json';
import langJa from 'i18n/ja.json';

export * as ActionTypes from './action-types';
export { default as RESOURCES } from './resources';

export const I18N_DATA = {
  en: langEn,
  ja: langJa,
};

export const DEFAULT_LANGUAGE = 'ja';
export const REQUEST_HEADER = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

// eslint-disable-next-line no-useless-escape
export const EMAIL_REGEX = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;

// eslint-disable-next-line no-useless-escape
export const REGEX_URL = /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export const GOOGLE_WEB_FONT = {
  google: {
    families: ['Noto Sans JP:400,700'],
  },
  active: () => {
    sessionStorage.fonts = true;
  },
};

export const GOOGLE_WEB_FONT_STATUS = {
  inactive: 'inactive',
  active: 'active',
  loading: 'loading',
};

export const KEY_CODES = {
  comma: 188,
  enter: 13,
  space: 32,
};

export const LINK = {
  help: 'https://support.calling.fun/page-2820/',
};

export const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
