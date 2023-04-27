/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FrontpageEducationalProgramsCard from './FrontpageEducationalProgramsCard';
import { defaultParameters } from '../../../../stories/defaults';

export default {
  title: 'Enkle komponenter/FrontpageEducationalProgramsCard',
  component: FrontpageEducationalProgramsCard,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {
    programTitel: 'Elektro og datateknologi',
    programIMGDesk: 'https://api.test.ndla.no/image-api/raw/ajvkVKKR.svg?width=600&ts=1682591987993',
    programIMGMob: 'https://api.test.ndla.no/image-api/raw/YIAprLg9.svg?width=600&ts=1682592022017',
  },
} as Meta<typeof FrontpageEducationalProgramsCard>;

export const FrontpageEducationalProgramsCardStory: StoryFn<typeof FrontpageEducationalProgramsCard> = ({
  ...args
}) => {
  return <FrontpageEducationalProgramsCard {...args} />;
};

FrontpageEducationalProgramsCardStory.storyName = 'FrontpageEducationalProgramsCard';
