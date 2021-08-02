import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const DETECTION_OPTIONS = {
  order: ['path', 'localStorage', 'htmlTag'],
  caches: ['localStorage'],
  lookupLocalStorage: 'i18nextLng',
};

export const i18nInstance = i18n.use(initReactI18next);

i18nInstance.init({
  detection: DETECTION_OPTIONS,
  fallbackLng: 'nb',
});
