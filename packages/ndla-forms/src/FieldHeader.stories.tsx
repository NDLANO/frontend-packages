/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from '@storybook/react';
import FieldHeader from './FieldHeader';
import { defaultParameters } from '../../../stories/defaults';

export default {
  title: 'Forms/FieldHeader',
  tags: ['autodocs'],
  component: FieldHeader,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    title: 'This is a title',
    subTitle: 'This is a subtitle',
    width: 1,
    children: <p>You can place anything here</p>,
  },
  render: (args) => (
    <div>
      <FieldHeader {...args} />
      You can place an input here if you want to.
    </div>
  ),
} as Meta<typeof FieldHeader>;

export const FieldHeaderStory: StoryObj<typeof FieldHeader> = {};
FieldHeaderStory.storyName = 'FieldHeader';
