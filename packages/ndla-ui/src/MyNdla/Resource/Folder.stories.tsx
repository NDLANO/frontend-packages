import { Meta, StoryFn } from '@storybook/react';
import { Pencil } from '@ndla/icons/action';
import { DeleteForever } from '@ndla/icons/editor';
import { DropdownMenu, DropdownTrigger, DropdownContent, DropdownItem } from '@ndla/dropdown-menu';
import { ButtonV2, IconButtonV2 } from '@ndla/button';
import { HorizontalMenu } from '@ndla/icons/contentType';
import { defaultParameters } from '../../../../../stories/defaults';

import Folder from './Folder';

export default {
  title: 'Components/Folder',
  component: Folder,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  argTypes: {
    menu: {
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
    menu: (
      <DropdownMenu>
        <DropdownTrigger>
          <IconButtonV2 aria-label="Show more" title="Show more" variant="ghost" colorTheme="light">
            <HorizontalMenu />
          </IconButtonV2>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>
            <ButtonV2 variant="ghost" colorTheme="light" shape="sharp" size="small" fontWeight="normal">
              <Pencil />
              Rediger
            </ButtonV2>
          </DropdownItem>
          <DropdownItem>
            <ButtonV2 variant="ghost" colorTheme="danger" shape="sharp" size="small" fontWeight="normal">
              <DeleteForever />
              Slett
            </ButtonV2>
          </DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    ),
    isShared: true,
  },
} as Meta<typeof Folder>;

export const FolderStory: StoryFn<typeof Folder> = (args) => {
  return <Folder {...args} />;
};
