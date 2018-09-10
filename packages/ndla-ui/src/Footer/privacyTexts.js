import React from 'react';

import { PrivacyNb } from './privacy_nb';
import { PrivacyNn } from './privacy_nn';
import { PrivacyEn } from './privacy_en';

export const privacyTexts = {
  nb: {
    linkLabel: 'Personvernserklæring',
    content: <PrivacyNb />,
  },
  nn: {
    linkLabel: 'Personvernserklæring',
    content: <PrivacyNn />,
  },
  en: {
    linkLabel: 'Cookies Policy',
    content: <PrivacyEn />,
  },
};
