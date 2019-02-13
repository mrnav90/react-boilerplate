import langEn from 'i18n/en.json';
import langJa from 'i18n/ja.json';

const I18N_DATA = {
  en: langEn,
  ja: langJa,
};
const DEFAULT_LANGUAGE = 'en';
const REQUEST_HEADER = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

export {
  I18N_DATA,
  REQUEST_HEADER,
  DEFAULT_LANGUAGE,
};
