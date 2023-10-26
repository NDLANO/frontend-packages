/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '.';
import { defaultParameters } from '../../../stories/defaults';

export default {
  title: 'Components/Spinner',
  tags: ['autodocs'],
  component: Spinner,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    size: 'large',
  },
} as Meta<typeof Spinner>;

export const Default: StoryObj = {};
