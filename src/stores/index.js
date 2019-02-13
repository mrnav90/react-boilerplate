import { RouterStore } from 'mobx-react-router';
import TranslationStore from './TranslationStore';

export default {
  routing: new RouterStore(),
  translation: TranslationStore,
};
