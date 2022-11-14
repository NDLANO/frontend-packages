/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import styled from '@emotion/styled';
import { MenuItemProps } from '@ndla/button';
import { Pencil } from '@ndla/icons/action';
import { DeleteForever } from '@ndla/icons/editor';
import MyNdlaResourceView from '../molecules/MyNdlaResourceView';
//@ts-ignore
import { ResourceData } from '../../dummydata/index';
//@ts-ignore
import ComponentInfo from '../ComponentInfo';
import ResourcesExample from '../organisms/ResourcesExample';
import FolderResourcesExample from '../organisms/FolderResourcesExample';
import FolderInputExample from '../organisms/FolderInputExample';
const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const menuItems: MenuItemProps[] = [
  { icon: <Pencil />, text: 'Rediger', onClick: () => {} },
  { icon: <DeleteForever />, text: 'Slett', onClick: () => {}, type: 'danger' },
];

const tags = ['tag', 'tag', 'tag', 'tag'];

const resourceTypes = [{ id: 'urn:resourcetype:subjectMaterial', name: 'Fagstoff' }];

export const MyNdla = () => {
  return (
    <Wrapper>
      <ComponentInfo
        status={3}
        components={
          <>
            <h2>Ny mappe</h2>
            <FolderInputExample />
            <h2>Mappe</h2>
            <FolderResourcesExample menuItems={menuItems} />

            <h2> Ressurser </h2>
            <ResourcesExample resourceTypes={resourceTypes} tags={tags} menuItems={menuItems} />
          </>
        }
        onSite={[
          <Wrapper key={1}>
            <MyNdlaResourceView
              folders={[
                { title: 'name', link: 'hey', id: '0709ef14-249f-4c60-88b9-9fe6babfcb4c' },
                { title: 'Ny mappe', link: '', id: '7520961a-2726-43c7-8320-6fe2890790d0' },
                { title: 'Eldre mappe', link: '', id: '5855ed59-4725-4f6a-9684-156b3c1b8afb' },
                { title: 'Eldre mappe', link: '', id: '567c1dc0-d2e2-49c2-9676-494108a7bf53' },
              ]}
              resources={ResourceData}
            />
          </Wrapper>,
        ]}
        reactCode={`
        <ResourceElement
        title={title}
        topics={topics}
        tags={tags}
        description={description}
        resourceImage={{
          alt: resourceImage.alt,
          src: resourceImage.src,
        }}
        link={link}
      />
      `}
        usesPropTypes={[
          {
            name: 'title',
            type: 'string',
            default: 'Required',
            description: 'Ressursens tittel',
          },
          {
            name: 'link',
            type: 'string',
            default: 'Required',
            description: 'Lenke til ressursen',
          },
          {
            name: 'ResourceImage',
            type: 'ResourceImageProps {alt, src}',
            default: 'Required',
            description: 'interface som tar inn alt og src for ressursets thumbnail-bilde',
          },
          {
            name: 'topics',
            type: 'string[]',
            default: 'undefined',
            description: 'Tar inn en liste med strenger',
          },
          {
            name: 'tags',
            type: 'string[]',
            default: 'undefined',
            description: 'Tar inn en liste med strenger',
          },

          {
            name: 'description',
            type: 'string',
            default: 'undefined',
            description: 'Kort beskrivelse av ressursen',
          },
        ]}></ComponentInfo>
    </Wrapper>
  );
};

export default MyNdla;
