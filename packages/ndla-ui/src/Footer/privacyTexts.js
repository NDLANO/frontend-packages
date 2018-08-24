import React from 'react';

import { ContentGeneralNb, ContentCookiesNb } from './privacy_nb';
import { ContentGeneralNn, ContentCookiesNn } from './privacy_nn';
import { ContentGeneralEn, ContentCookiesEn } from './privacy_en';

export const privacyTexts = {
  nb: {
    linkLabel: 'Personvernserklæring',
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
    linkLabel: 'Personvernserklæring',
    header: 'Retningslinjer for bruk av informasjonskapslar',
    tabs: [
      {
        title: 'Generelt',
        content: <ContentGeneralNn />,
      },
      {
        title: 'Informasjonskapslar',
        content: <ContentCookiesNn />,
      },
    ],
  },
  en: {
    linkLabel: 'Personvernserklæring',
    header:
      '(Only available in norwegian). Retningslinjer for personvern og bruk av informasjonskapsler',
    tabs: [
      {
        title: 'General info',
        content: <ContentGeneralEn />,
      },
      {
        title: 'Cookies',
        content: <ContentCookiesEn />,
      },
    ],
  },
};
