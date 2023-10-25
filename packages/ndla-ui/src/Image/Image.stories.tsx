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

export const LazyLoad: StoryObj<typeof Image> = {
  args: {
    alt: 'Lyspære',
    src: 'https://api.staging.ndla.no/image-api/raw/Ide.jpg',
    lazyLoad: true,
    lazyLoadSrc: `data:image/svg+xml;utf8,
    <svg xmlns="http://www.w3.org/2000/svg" height="400" width="100%">
      <rect x="0" y="0" width="100%" height="100%" style="fill:#EFF0F2;">
      <animate attributeType="XML" attributeName="fill" values="#EFF0F2;#E8E3E3;#EFF0F2;" dur="3s" repeatCount="indefinite"/>
      </rect>
      </svg>
      `,
  },
};
