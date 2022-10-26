/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DeleteForever, Folder } from '@ndla/icons/editor';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { defaultParameters } from '../../designmanual/.storybook/defaults';
import MenuButton from './MenuButton';

export default {
  title: 'Enkle komponenter/Knapp/Menyknapp',
  component: MenuButton,
  parameters: {
    ...defaultParameters,
  },
  args: {
    menuItems: [
      { icon: <Folder />, text: 'Legg til', onClick: () => {} },
      { icon: <DeleteForever />, text: 'Fjern', onClick: () => {}, type: 'danger' },
    ],
    size: 'normal',
  },
  argTypes: {
    menuIcon: {
      table: {
        defaultValue: {
          summary: '<HorizontalMenu />',
        },
      },
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof MenuButton>;

export const ButtonWithMenu: ComponentStory<typeof MenuButton> = (args) => {
  return <MenuButton {...args} />;
};

ButtonWithMenu.storyName = 'Menyknapp';
