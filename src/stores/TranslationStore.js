import { observable, action, computed } from 'mobx';
import { DEFAULT_LANGUAGE, I18N_DATA } from 'config/constant';
import { setLanguage, getLanguage } from 'utils/cookie';
import { I18n } from 'react-i18nify';

class TranslationStore {
  @observable locale = getLanguage() ? getLanguage() : DEFAULT_LANGUAGE;

  @observable data = I18N_DATA;

  constructor() {
    I18n.setLocaleGetter(() => this.locale);
    I18n.setTranslationsGetter(() => this.data);
  }

  @action changeLanguage = () => {
    this.locale = this.locale === 'en' ? 'ja' : 'en';
    setLanguage(this.locale);
    I18n.forceComponentsUpdate();
  }

  @action setTranslations = (data) => {
    this.data = data;
    I18n.forceComponentsUpdate();
  }

  @computed get getCurrentLanguage() {
    return this.locale;
  }
}

export default new TranslationStore();
