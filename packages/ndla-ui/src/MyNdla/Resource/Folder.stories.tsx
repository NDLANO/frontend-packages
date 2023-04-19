import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Pencil } from '@ndla/icons/action';
import { DeleteForever } from '@ndla/icons/editor';
import { defaultParameters } from '../../../../../stories/defaults';

import Folder from './Folder';

export default {
  title: 'Enkle komponenter/Mappe',
  component: Folder,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  argTypes: {
    menuItems: {
      control: false,
    },
  },
  args: {
    id: '3d88300c-1186-47f5-a99a-8ea93fa20981',
    title: 'Dette er min tittel',
    subFolders: 3,
    subResources: 3,
    description: '',
    link: '',
    type: 'list',
    menuItems: [
      { icon: <Pencil />, text: 'Rediger', onClick: () => {} },
      { icon: <DeleteForever />, text: 'Slett', onClick: () => {}, type: 'danger' },
    ],
    isShared: true,
  },
} as Meta<typeof Folder>;

export const FolderStory: StoryFn<typeof Folder> = (args) => {
  return <Folder {...args} />;
};
