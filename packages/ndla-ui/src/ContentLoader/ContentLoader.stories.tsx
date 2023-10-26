/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from '@storybook/react';
import ContentLoader from '.';
import { defaultParameters } from '../../../../stories/defaults';

export default {
  title: 'Components/ContentLoader',
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    speed: 2,
  },
  argTypes: {
    children: { control: false },
  },
  component: ContentLoader,
} as Meta<typeof ContentLoader>;

export const ImageOrVideo: StoryObj<typeof ContentLoader> = {
  args: {
    width: 1000,
    height: 750,
    children: (
      <>
        <rect x="0" y="0" rx="3" ry="3" width="800" height="600" />
        <rect x="20" y="610" rx="3" ry="3" width="600" height="30" />
        <rect x="20" y="650" rx="3" ry="3" width="400" height="30" />
        <circle cx="30" cy="700" r="15" fill="purple" />
        <circle cx="70" cy="700" r="15" fill="purple" />
        <circle cx="110" cy="700" r="15" fill="purple" />
      </>
    ),
  },
};

export const Article: StoryObj<typeof ContentLoader> = {
  args: {
    width: 1000,
    height: 1050,
    children: (
      <>
        <rect x="100" y="0" rx="3" ry="3" width="800" height="60" />
        <rect x="100" y="100" rx="3" ry="3" width="800" height="25" />
        <rect x="100" y="140" rx="3" ry="3" width="800" height="25" />
        <rect x="100" y="180" rx="3" ry="3" width="400" height="25" />
        <rect x="0" y="260" rx="3" ry="3" width="1000" height="600" />
        <rect x="100" y="900" rx="3" ry="3" width="800" height="20" />
        <rect x="100" y="930" rx="3" ry="3" width="800" height="20" />
        <rect x="100" y="970" rx="3" ry="3" width="800" height="20" />
        <rect x="100" y="1000" rx="3" ry="3" width="600" height="20" />
      </>
    ),
  },
};
