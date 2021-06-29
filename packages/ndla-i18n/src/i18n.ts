/*
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import i18n from 'i18next';
import { initReactI18next, I18nextProvider, withTranslation, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const DETECTION_OPTIONS = {
  order: ['path', 'localStorage', 'htmlTag'],
  caches: ['localStorage'],
  lookupLocalStorage: 'i18nextLng',
};

const initializeI18n = (languages: string[], translation: any) => {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      detection: DETECTION_OPTIONS,
      fallbackLng: 'nb',
      supportedLngs: languages,
      resources: translation,
    });

  return i18n;
};

export { initializeI18n, useTranslation, I18nextProvider, withTranslation };
