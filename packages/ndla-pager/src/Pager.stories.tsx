/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { defaultParameters } from '../../../stories/defaults';
import Pager from './Pager';

export default {
  title: 'Enkle komponenter/Pager',
  component: Pager,
  parameters: {
    ...defaultParameters,
  },
  args: {
    page: 1,
    lastPage: 2,
    query: {},
    small: true,
  },
} as ComponentMeta<typeof Pager>;

export const PagerStory: ComponentStory<typeof Pager> = ({ ...args }) => {
  return <Pager {...args}></Pager>;
};

PagerStory.storyName = 'Pager';
