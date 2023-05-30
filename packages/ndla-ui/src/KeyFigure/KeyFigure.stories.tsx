/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { defaultParameters } from '../../../../stories/defaults';
import KeyFigure from './KeyFigure';

export default {
  title: 'Enkle komponenter/Nøkkeltall',
  component: KeyFigure,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
    layout: 'centered',
  },
  args: {
    title: '500',
    subtitle: 'TVERRFAGLIGE RESSURSER',
    image: {
      alt: 'Nøkkeltall tverrfaglig',
      src: 'https://api.test.ndla.no/image-api/raw/wMowCjRg.svg',
    },
  },
} as Meta<typeof KeyFigure>;

export const KeyFigureStory: StoryFn<typeof KeyFigure> = ({ ...args }) => {
  return <KeyFigure {...args} />;
};

KeyFigureStory.storyName = 'Nøkkeltall';
