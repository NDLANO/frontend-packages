import React from 'react';

import { ContentGeneralNb, ContentCookiesNb } from './privacy_nb';
import { ContentGeneralNn, ContentCookiesNn } from './privacy_nn';
import { ContentGeneralEn, ContentCookiesEn } from './privacy_en';

export const privacyTexts = {
  nb: {
    header: 'Retningslinjer for personvern og bruk av informasjonskapsler',
    tabs: [
      {
        title: 'Generelt',
        content: <ContentGeneralNb />,
      },
      {
        title: 'Informasjonskapsler',
        content: <ContentCookiesNb />,
      },
    ],
  },
  nn: {
    header: 'Retningslinjer for personvern og bruk av informasjonskapsler',
    tabs: [
      {
        title: 'Generelt',
        content: <ContentGeneralNn />,
      },
      {
        title: 'Cookies og lovtekst',
        content: <ContentCookiesNn />,
      },
    ],
  },
  en: {
    header: 'Retningslinjer for personvern og bruk av informasjonskapsler',
    tabs: [
      {
        title: 'Generelt',
        content: <ContentGeneralEn />,
      },
      {
        title: 'Cookies og lovtekst',
        content: <ContentCookiesEn />,
      },
    ],
  },
};
