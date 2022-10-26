/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { defaultParameters } from '../../designmanual/stories/defaults';
import ButtonV2 from './ButtonV2';

export default {
  title: 'Enkle komponenter/Knapp/Standard',
  component: ButtonV2,
  parameters: {
    ...defaultParameters,
  },
  args: {
    colorTheme: 'primary',
    children: 'Button',
    size: 'normal',
    variant: 'solid',
    shape: 'normal',
    fontWeight: 'normal',
  },
} as ComponentMeta<typeof ButtonV2>;

export const ButtonStory: ComponentStory<typeof ButtonV2> = (args) => {
  return <ButtonV2 {...args} />;
};

ButtonStory.storyName = 'Standard';
