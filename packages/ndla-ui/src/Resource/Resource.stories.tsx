/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DropdownMenu, DropdownContent, DropdownItem, DropdownTrigger } from '@ndla/dropdown-menu';
import { ButtonV2, IconButtonV2 } from '@ndla/button';
import { HorizontalMenu } from '@ndla/icons/contentType';
import { Pencil } from '@ndla/icons/action';
import { DeleteForever } from '@ndla/icons/editor';
import ListResource from './ListResource';
import { defaultParameters } from '../../../../stories/defaults';

const StoryResourceMenu = () => (
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
);

export default {
  title: 'Components/Resources/ListResource',
  component: ListResource,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  argTypes: {
    resourceImage: {
      control: false,
    },
    resourceTypes: {
      control: false,
    },
    headingLevel: {
      control: false,
    },
    menu: {
      control: false,
    },
  },
  args: {
    id: '1234',
    link: '',
    title: 'Tittel til ressurs',
    resourceImage: {
      src: '',
      alt: '',
    },
    resourceTypes: [{ id: 'urn:resourcetype:learningPath', name: 'Læringssti' }],
    menu: <StoryResourceMenu />,
    tags: ['tag', 'tag', 'tag', 'tag'],
  },
} as Meta<typeof ListResource>;

export const ListResourceStory: StoryFn<typeof ListResource> = (args) => {
  return <ListResource {...args} />;
};

ListResourceStory.storyName = 'ListResource';
