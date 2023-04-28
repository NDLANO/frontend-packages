/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CampaignBlock from './CampaignBlock';
import { defaultParameters } from '../../../../stories/defaults';

export default {
  title: 'Enkle komponenter/Campaign Block',
  component: CampaignBlock,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {
    title: { title: 'FN-dagen 24.oktober!', language: 'nb-no' },
    description: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  quis nostrud exercitation',
      language: 'nb-no',
    },
    url: {
      url: '#',
      text: 'Les mer om FN-dagen',
    },
    imageBefore: {
      alt: 'FN-symbol',
      src: 'https://api.test.ndla.no/image-api/raw/LkmDGtip.png',
    },
    imageAfter: {
      alt: 'FN-symbol',
      src: 'https://api.test.ndla.no/image-api/raw/LkmDGtip.png',
    },
  },
} as Meta<typeof CampaignBlock>;

export const CampaignBlockStory: StoryFn<typeof CampaignBlock> = ({ ...args }) => {
  return <CampaignBlock {...args} />;
};

CampaignBlockStory.storyName = 'CampaignBlock';
