# @ndla/locales

Translation files for NDLA projects.

## Installation

```sh
yarn add @ndla/locales
```

## Usage

```ts
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import { messagesEN, messagesNB, messagesNN, messagesSE } from "@ndla/ui";

const i18nInstanceWithTranslations = createInstance().use(initReactI18next);

i18nInstanceWithTranslations.init({
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

export { i18nInstanceWithTranslations };
```
