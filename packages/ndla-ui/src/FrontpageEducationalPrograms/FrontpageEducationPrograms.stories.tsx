/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FrontpageEducationalPrograms from './FrontpageEducationalPrograms';
import { defaultParameters } from '../../../../stories/defaults';

export default {
  title: 'Enkle komponenter/FrontpageEducationalPrograms',
  component: FrontpageEducationalPrograms,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {},
} as Meta<typeof FrontpageEducationalPrograms>;

export const FrontpageEducationalProgramsStory: StoryFn<typeof FrontpageEducationalPrograms> = ({ ...args }) => {
  return <FrontpageEducationalPrograms {...args} />;
};

FrontpageEducationalProgramsStory.storyName = 'FrontpageEducationalPrograms';
