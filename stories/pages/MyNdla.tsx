/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { LayoutItem, OneColumn } from '@ndla/ui';
import { ButtonV2, IconButtonV2 } from '@ndla/button';
import { Pencil } from '@ndla/icons/action';
import { DeleteForever } from '@ndla/icons/editor';
//@ts-ignore
import { HorizontalMenu } from '@ndla/icons/contentType';
import { DropdownMenu, DropdownContent, DropdownItem, DropdownTrigger } from '@ndla/dropdown-menu';
import ResourcesExample from '../organisms/ResourcesExample';
import FolderResourcesExample from '../organisms/FolderResourcesExample';
import FolderInputExample from '../organisms/FolderInputExample';
//@ts-ignore
import { StoryIntro } from '../wrappers';

const tags = ['tag', 'tag', 'tag', 'tag'];

const resourceTypes = [{ id: 'urn:resourcetype:subjectMaterial', name: 'Fagstoff' }];

export const ResourceMenu = () => (
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

export const MyNdla = () => {
  return (
    <div>
      <StoryIntro title="Komponenter for Min NDLA" />
      <OneColumn>
        <LayoutItem layout="center">
          <h2>Ny mappe</h2>
          <FolderInputExample />
          <h2>Mappe</h2>
          <FolderResourcesExample menu={<ResourceMenu />} />

          <h2> Ressurser </h2>
          <ResourcesExample resourceTypes={resourceTypes} tags={tags} menu={<ResourceMenu />} />
        </LayoutItem>
      </OneColumn>
    </div>
  );
};

export default MyNdla;
