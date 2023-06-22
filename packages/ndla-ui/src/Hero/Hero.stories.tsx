/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { defaultParameters } from '../../../../stories/defaults';
import { Hero } from './Hero';

const StyledDiv = styled.div`
  width: 1000px;
`;

export default {
  title: 'Enkle komponenter/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
    layout: 'centered',
  },
  args: {
    contentType: 'assessment-resources',
  },
} as Meta<typeof Hero>;

export const HeroStory: StoryFn<typeof Hero> = ({ ...args }) => (
  <Hero {...args}>
    <StyledDiv />
  </Hero>
);

HeroStory.storyName = 'Hero';
