/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import messagesEN from "../locale/messages-en";
import messagesNB from "../locale/messages-nb";
import messagesNN from "../locale/messages-nn";
import messagesSE from "../locale/messages-se";

export const supportedTranslationLanguages = ["nb", "nn", "en", "se"] as const;
const i18nInstance = i18n.use(initReactI18next);

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
