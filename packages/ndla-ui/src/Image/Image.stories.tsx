/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from '@storybook/react';
import Image from './Image';
import { defaultParameters } from '../../../../stories/defaults';

export default {
  title: 'Components/Image',
  tags: ['autodocs'],
  component: Image,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    alt: 'Mann med maske',
    src: 'https://api.test.ndla.no/image-api/raw/id/604',
  },
} as Meta<typeof Image>;

export const Default: StoryObj<typeof Image> = {};

export const Crop: StoryObj<typeof Image> = {
  args: {
    crop: {
      startX: 14.59,
      endX: 79.63,
      startY: 20,
      endY: 100,
    },
  },
};

export const FocalPoint: StoryObj<typeof Image> = {
  args: {
    focalPoint: {
      x: 65.08,
      y: 45.28,
    },
    sizes: '(min-width: 320px) 320px',
  },
};
