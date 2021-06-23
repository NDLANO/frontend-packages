/*
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18nextProvider } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import { useTranslation } from 'react-i18next';

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
    resources: {},
  });
export { i18n, useTranslation, I18nextProvider, withTranslation };
