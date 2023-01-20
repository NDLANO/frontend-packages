/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { LayoutItem, OneColumn } from '@ndla/ui';
import { MenuItemProps } from '@ndla/button';
import { Pencil } from '@ndla/icons/action';
import { DeleteForever } from '@ndla/icons/editor';
//@ts-ignore
import ResourcesExample from '../organisms/ResourcesExample';
import FolderResourcesExample from '../organisms/FolderResourcesExample';
import FolderInputExample from '../organisms/FolderInputExample';
//@ts-ignore
import { StoryIntro } from '../wrappers';

export const menuItems: MenuItemProps[] = [
  { icon: <Pencil />, text: 'Rediger', onClick: () => {} },
  { icon: <DeleteForever />, text: 'Slett', onClick: () => {}, type: 'danger' },
];

const tags = ['tag', 'tag', 'tag', 'tag'];

const resourceTypes = [{ id: 'urn:resourcetype:subjectMaterial', name: 'Fagstoff' }];

export const MyNdla = () => {
  return (
    <div>
      <StoryIntro title="Komponenter for Min NDLA" />
      <OneColumn>
        <LayoutItem layout="center">
          <h2>Ny mappe</h2>
          <FolderInputExample />
          <h2>Mappe</h2>
          <FolderResourcesExample menuItems={menuItems} />

          <h2> Ressurser </h2>
          <ResourcesExample resourceTypes={resourceTypes} tags={tags} menuItems={menuItems} />
        </LayoutItem>
      </OneColumn>
    </div>
  );
};

export default MyNdla;
