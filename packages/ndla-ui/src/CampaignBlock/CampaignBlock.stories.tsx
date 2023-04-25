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
  args: {},
} as Meta<typeof CampaignBlock>;

export const CampaignBlockStory: StoryFn<typeof CampaignBlock> = ({ ...args }) => {
  return <CampaignBlock {...args} />;
};

CampaignBlockStory.storyName = 'CampaignBlock';
