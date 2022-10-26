/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Cross } from '@ndla/icons/action';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { defaultParameters } from '../../designmanual/stories/defaults';
import IconButtonV2 from './IconButtonV2';

export default {
  title: 'Enkle komponenter/Knapp/Med ikon',
  component: IconButtonV2,
  parameters: {
    ...defaultParameters,
  },
  args: {
    colorTheme: 'primary',
    children: <Cross />,
    size: 'small',
    variant: 'solid',
    fontWeight: 'normal',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof IconButtonV2>;

export const IconButtonStory: ComponentStory<typeof IconButtonV2> = (args) => {
  return <IconButtonV2 {...args} />;
};

IconButtonStory.storyName = 'Med ikon';
