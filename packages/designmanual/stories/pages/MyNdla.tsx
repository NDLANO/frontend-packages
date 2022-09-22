/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { ListResource, BlockResource, Folder } from '@ndla/ui';
import { MenuItemProps } from '@ndla/button';
import { FolderInput } from '@ndla/ui';
import { Pencil } from '@ndla/icons/action';
import { DeleteForever } from '@ndla/icons/editor';
import MyNdlaResourceView from '../molecules/MyNdlaResourceView';

//@ts-ignore
import ComponentInfo from '../ComponentInfo';

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const BlockFolderWrapper = styled.div`
  display: flex;
  gap: ${spacing.small};
`;

export const menuItems: MenuItemProps[] = [
  { icon: <Pencil />, text: 'Rediger', onClick: () => {} },
  { icon: <DeleteForever />, text: 'Slett', onClick: () => {}, type: 'danger' },
];

const tags = ['tag', 'tag', 'tag', 'tag'];

const topics = ['Matte', 'Naturfag'];

export const MyNdla = () => {
  return (
    <Wrapper>
      <ComponentInfo
        status={3}
        components={
          <>
            <h2>Folder</h2>
            <Folder
              id={'2cd1579a-4e1a-4213-ba73-02373aae504c'}
              key={'listFolder'}
              link={''}
              title={'Dette er min tittel'}
              subFolders={3}
              subResources={3}
              type={'list'}
              menuItems={menuItems}
            />
            <h2>Legg til mappe</h2>
            <FolderInput
              autoFocus
              label="name"
              name="name"
              labelHidden
              // eslint-disable-next-line no-console
              onSave={() => console.log('onAddFolder')}
              // eslint-disable-next-line no-console
              onClose={() => console.log('onClose')}
            />
            <h2>Blokkvisning av folder</h2>
            <BlockFolderWrapper>
              <Folder
                id={'3d88300c-1186-47f5-a99a-8ea93fa20981'}
                key={'blockFolder'}
                link={''}
                title={'Dette er min tittel'}
                subFolders={3}
                subResources={3}
                type={'block'}
                menuItems={menuItems}
              />
              <Folder
                id={'2cd86f5d-6d8e-44cf-9803-40fed974bde7'}
                key={'blockFolder2'}
                link={''}
                title={'Dette er min tittel'}
                subFolders={3}
                subResources={3}
                type={'block'}
                menuItems={menuItems}
              />
              <Folder
                id={'9aeaf3c5-8b3f-454a-9bdd-4fd1af3543df'}
                key={'blockFolder3'}
                link={''}
                title={'Dette er min tittel'}
                subFolders={3}
                subResources={3}
                type={'block'}
                menuItems={menuItems}
              />
            </BlockFolderWrapper>
            <h2> Ressurser </h2>
            <h3>Blokkressurs</h3>
            <BlockResource
              id="2ae58e7d-ea25-49f0-b2a5-1f11830f8c04"
              key={'blockResource'}
              title="Helt Vanlig Tittel"
              topics={topics}
              tags={tags}
              description={'Dette er for eksempel en fagbeskrivelse! Dersom den er for lang vil den bli forkortet'}
              resourceImage={{
                src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                alt: '',
              }}
              link={''}
              menuItems={menuItems}
            />
            <h3> Standard Ressurs</h3>
            <ListResource
              id={'b572358d-0807-4594-bd37-b2bc52d2a6b6'}
              key={'defaultResource'}
              title="Titler kan også kuttes av"
              topics={topics}
              tags={['veldiglangtag', 'kjempelangtag', 'tag3medrartnavn', 'matte', 'matematikk']}
              description={'En helt vanlig beskrivelse.'}
              resourceImage={{
                src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                alt: '',
              }}
              link={''}
              menuItems={menuItems}
            />
            <h3>Ressurs med tom beskrivelse</h3>
            <ListResource
              id={'181c1b06-683f-472b-900c-cf25979d22ac'}
              key={'withoutDescription'}
              title="Min Tittel"
              topics={topics}
              description={''}
              tags={tags}
              resourceImage={{
                src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                alt: '',
              }}
              link={''}
              menuItems={menuItems}
            />
            <h3>Ressurs uten beskrivelse, tags og meny</h3>
            <ListResource
              id={'1c9e14ac-b734-4d8e-a2d6-5b37051d65d4'}
              key={'minimalResource'}
              title="Minimal ressurs"
              topics={topics}
              resourceImage={{
                src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                alt: '',
              }}
              link={''}
              menuItems={menuItems}
            />
          </>
        }
        onSite={[
          <Wrapper>
            <MyNdlaResourceView
              folders={[
                { title: 'name', link: 'hey', id: '0709ef14-249f-4c60-88b9-9fe6babfcb4c' },
                { title: 'Ny mappe', link: '', id: '7520961a-2726-43c7-8320-6fe2890790d0' },
                { title: 'Eldre mappe', link: '', id: '5855ed59-4725-4f6a-9684-156b3c1b8afb' },
                { title: 'Eldre mappe', link: '', id: '567c1dc0-d2e2-49c2-9676-494108a7bf53' },
              ]}
              resources={[
                {
                  id: '61532e39-7623-4c14-b544-350cc9c2cba4',
                  title: 'My Resource',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                    alt: '',
                  },
                },
                {
                  id: '94c16735-7485-4f95-9591-f61df6291d87',
                  title: 'My Resource',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                    alt: '',
                  },
                },
                {
                  id: 'ee3b8780-3056-4696-a33e-6c4609530a40',
                  title: 'My Resource',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                    alt: '',
                  },
                },
                {
                  id: '787b735e-bcd8-4b22-ae37-349a18013c43',
                  title: 'My Resource',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                    alt: '',
                  },
                },
              ]}
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
