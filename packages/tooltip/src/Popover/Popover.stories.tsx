/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonV2 from '@ndla/button';
import { defaultParameters } from '../../../designmanual/stories/defaults';
import Popover from './Popover';

export default {
  title: 'Enkle komponenter/Popover',
  component: Popover,
  parameters: {
    ...defaultParameters,
  },
  args: {
    children: 'Button',
    popover: 'Popover',
  },
  argTypes: {
    hydrateHTML: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Popover>;

export const TooltipStory: ComponentStory<typeof Popover> = ({ children, ...args }) => {
  return (
    <Popover {...args}>
      <ButtonV2>{children}</ButtonV2>
    </Popover>
  );
};

TooltipStory.storyName = 'Popover';
