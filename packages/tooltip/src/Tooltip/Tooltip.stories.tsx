/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from '@storybook/react';
import { ButtonV2 } from '@ndla/button';
import { defaultParameters } from '../../../../stories/defaults';
import Tooltip from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
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
} as Meta<typeof Tooltip>;

export const TooltipStory: StoryFn<typeof Tooltip> = ({ children, ...args }) => {
  return (
    <Tooltip {...args}>
      <ButtonV2>{children}</ButtonV2>
    </Tooltip>
  );
};

TooltipStory.storyName = 'Tooltip';
