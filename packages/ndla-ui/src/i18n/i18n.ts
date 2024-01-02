/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import messagesEN from "../locale/messages-en";
import messagesNB from "../locale/messages-nb";
import messagesNN from "../locale/messages-nn";
import messagesSE from "../locale/messages-se";
import messagesSMA from "../locale/messages-sma";

const DETECTION_OPTIONS = {
  order: ["path", "localStorage", "htmlTag"],
  caches: ["localStorage"],
  lookupLocalStorage: "i18nextLng",
};

export const supportedTranslationLanguages = ["nb", "nn", "en", "se", "sma"] as const;
const i18nInstance = i18n.use(initReactI18next).use(LanguageDetector);

i18nInstance.init({
  compatibilityJSON: "v3",
  detection: DETECTION_OPTIONS,
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
    sma: {
      translation: messagesSMA,
    },
  },
});

export { i18nInstance };
