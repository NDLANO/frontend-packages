/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const DETECTION_OPTIONS = {
  order: ['localStorage', 'path', 'htmlTag'],
  caches: ['localStorage'],
  lookupLocalStorage: 'i18nextLng',
};

const lng = ['nn', 'nb', 'en'];

export const isValidLocale = (locale: string) => lng.find(l => l === locale) !== undefined;

i18n.on('languageChanged', function(lng) {
  if (typeof document != 'undefined') {
    document.documentElement.lang = lng;
  }
  if (typeof window != 'undefined') {
    const paths = window.location.pathname.split('/');
    const basename = isValidLocale(paths[1]) ? `${paths[1]}` : '';
    if (!(basename === '' && lng === 'nb')) {
      const { search } = window.location;
      window.history.replaceState({}, 'NDLA', `/${lng}/${search}`);
    }
  }
});

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: DETECTION_OPTIONS,
    fallbackLng: 'nb',
    resources: {},
  });

export default i18n;
