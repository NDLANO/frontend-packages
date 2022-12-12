/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonV2 } from '@ndla/button';
import React from 'react';
import { defaultParameters } from '../../../designmanual/stories/defaults';
import Tooltip from './Tooltip';

export default {
  title: 'Enkle komponenter/Tooltip',
  component: Tooltip,
  parameters: {
    ...defaultParameters,
  },
  args: {
    children: 'Button',
    tooltip: 'Tooltip',
  },
  argTypes: {
    hydrateHTML: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

export const TooltipStory: ComponentStory<typeof Tooltip> = ({ children, ...args }) => {
  return (
    <Tooltip {...args}>
      <ButtonV2>{children}</ButtonV2>
    </Tooltip>
  );
};

TooltipStory.storyName = 'Tooltip';
