import React from 'react';

import { ContentGeneralNb, ContentCookiesNb } from './privacy_nb';
import { ContentGeneralNn, ContentCookiesNn } from './privacy_nn';
import { ContentGeneralEn, ContentCookiesEn } from './privacy_en';

export const privacyTexts = {
  nb: {
    linkLabel: 'Informasjonskapsler og personvern',
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
    linkLabel: 'Informasjonskapslar og personvern',
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
    linkLabel: 'Privacy and cookies',
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
