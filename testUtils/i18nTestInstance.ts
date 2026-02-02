/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { messagesEN, messagesNN, messagesNB, messagesSE } from "@ndla/locales";
import i18next, { type i18n } from "i18next";
import { initReactI18next } from "react-i18next";

export const supportedTranslationLanguages = ["nb", "nn", "en", "se"] as const;
const i18nInstance: i18n = i18next.use(initReactI18next);

i18nInstance.init({
  fallbackLng: "nb",
  supportedLngs: supportedTranslationLanguages,
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
    se: {
      translation: messagesSE,
    },
  },
});

export { i18nInstance };
