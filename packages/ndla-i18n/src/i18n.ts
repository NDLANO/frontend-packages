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
import messagesEN from './locale/messages-en';
import messagesNN from './locale/messages-nn';
import messagesNB from './locale/messages-nb';

const DETECTION_OPTIONS = {
  order: ['path', 'localStorage', 'htmlTag'],
  caches: ['localStorage'],
  lookupLocalStorage: 'i18nextLng',
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: DETECTION_OPTIONS,
    fallbackLng: 'nb',
    supportedLngs: ['nb', 'nn', 'en'],
    resources: {
      en: {
        translation: messagesEN,
      },
      nn: {
        translation: messagesNN,
      },
      nb: {
        translation: messagesNB,
      },
    },
  });

export { i18n, useTranslation, I18nextProvider, withTranslation };
