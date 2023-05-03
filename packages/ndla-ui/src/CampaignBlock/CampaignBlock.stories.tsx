/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CampaignBlock from './CampaignBlock';
import { defaultParameters } from '../../../../stories/defaults';

export default {
  title: 'Enkle komponenter/Campaign Block',
  component: CampaignBlock,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {},
} as Meta<typeof CampaignBlock>;

export const BothImages: StoryObj<typeof CampaignBlock> = {
  args: {
    title: { title: 'NDLA film', language: 'nb-no' },
    description: {
      text: 'NDLA film er en tjeneste i samarbeid med Norgesfilm. Denne tjenesten lar deg se en rekke spillefilmer, kortfilmer, dokumentarer og serier. Du kan også se undervisningsfilm og filmklipp. Velkommen inn i filmens verden!',
      language: 'nb-no',
    },
    headingLevel: 'h2',
    url: {
      url: '#',
      text: 'Gå til NDLA film',
    },
    imageBefore: {
      alt: '',
      src: 'https://api.test.ndla.no/image-api/raw/n2UYRxEG.png',
    },
    imageAfter: {
      alt: '',
      src: 'https://api.test.ndla.no/image-api/raw/8GOxOhjr.png',
    },
  },
};

export const SingleImage: StoryObj<typeof CampaignBlock> = {
  args: {
    title: { title: 'FN-dagen 24. oktober!', language: 'nb-no' },
    description: {
      text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  quis nostrud exercitation ',
      language: 'nb-no',
    },
    url: {
      url: '#',
      text: 'Les mer om FN-dagen',
    },
    imageAfter: {
      alt: 'FN-symbol',
      src: 'https://api.test.ndla.no/image-api/raw/LkmDGtip.png',
    },
  },
};
