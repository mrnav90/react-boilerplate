import { I18n } from 'react-i18nify';
import toastr from 'toastr';

export {
  setUserInfo,
  getUserInfo,
  setAccessToken,
  getAccessToken,
  isAuthenticated,
  revokeUser,
  setLanguage,
  getLanguage,
  setCSRFToken,
  getCSRFToken,
} from './cookie';

export function translate(key, data) {
  return I18n.t(key, data);
}

export function notification(message, type) {
  toastr.options.preventDuplicates = true;
  toastr.options.positionClass = 'toast-top-center';
  switch (type) {
    case 'success':
      toastr.success(message);
      break;
    case 'error':
      toastr.error(message);
      break;
    case 'warning':
      toastr.warning(message);
      break;
    case 'remove':
      toastr.remove();
      break;
    case 'clear':
      toastr.clear();
      break;
    default: break;
  }
}
