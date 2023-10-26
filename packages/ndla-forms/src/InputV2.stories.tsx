/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from '@storybook/react';
import { InputV2 } from '.';
import { defaultParameters } from '../../../stories/defaults';

export default {
  title: 'Forms/Input',
  tags: ['autodocs'],
  component: InputV2,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    label: 'Title',
    name: 'title',
    labelHidden: false,
    before: <span>Before input</span>,
    after: <span>After input</span>,
    error: 'An error occurred',
    white: false,
  },
  argTypes: {
    before: { control: false },
    after: { control: false },
  },
} as Meta<typeof InputV2>;

export const Default: StoryObj<typeof InputV2> = {};
