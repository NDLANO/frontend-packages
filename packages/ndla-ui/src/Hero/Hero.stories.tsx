/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import { Hero } from './Hero';
import { defaultParameters } from '../../../../stories/defaults';

const StyledDiv = styled.div`
  width: 1000px;
`;

export default {
  title: 'Components/Hero',
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
