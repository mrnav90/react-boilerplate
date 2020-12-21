import { ActionTypes, DEFAULT_LANGUAGE, I18N_DATA } from 'config/constants';
import { setLocale, setTranslations } from 'react-i18nify';
import { setLanguage, getLanguage } from 'utils';

export const initialState = {
  locale: getLanguage() ? getLanguage() : DEFAULT_LANGUAGE,
};

setTranslations(I18N_DATA);
setLocale(initialState.locale);

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_LANGUAGE:
      setLocale(action.payload.locale);
      setLanguage(action.payload.locale);
      return {
        ...state,
        locale: action.payload.locale,
      };
    default:
      return state;
  }
};
