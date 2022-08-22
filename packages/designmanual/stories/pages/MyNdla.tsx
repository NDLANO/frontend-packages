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

const tags = ['tag', 'tag', 'tag'];

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
              autoSelect
              // eslint-disable-next-line no-console
              onAddFolder={() => console.log('onAddFolder')}
              // eslint-disable-next-line no-console
              onClose={() => console.log('onClose')}
            />
            <h2>Blokkvisning av folder</h2>
            <BlockFolderWrapper>
              <Folder
                key={'blockFolder'}
                link={''}
                title={'Dette er min tittel'}
                subFolders={3}
                subResources={3}
                type={'block'}
                menuItems={menuItems}
              />
              <Folder
                key={'blockFolder2'}
                link={''}
                title={'Dette er min tittel'}
                subFolders={3}
                subResources={3}
                type={'block'}
                menuItems={menuItems}
              />
              <Folder
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
              key={'blockResource'}
              title="Helt Vanlig Tittel"
              topics={topics}
              tags={tags}
              description={'Dette er for eksempel en fagbeskrivelse! Dersom den er for lang vil den bli forkortet'}
              resourceImage={{
                src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                alt: 'alt',
              }}
              link={''}
              menuItems={menuItems}
            />
            <h3> Standard Ressurs</h3>
            <ListResource
              key={'defaultResource'}
              title="Titler kan også kuttes av"
              topics={topics}
              tags={['veldiglangtag', 'kjempelangtag', 'tag3medrartnavn', 'matte', 'matematikk']}
              description={'En helt vanlig beskrivelse.'}
              resourceImage={{
                src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                alt: 'alt',
              }}
              link={''}
              menuItems={menuItems}
            />
            <h3>Ressurs med tom beskrivelse</h3>
            <ListResource
              key={'withoutDescription'}
              title="Min Tittel"
              topics={topics}
              description={''}
              tags={tags}
              resourceImage={{
                src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                alt: 'alt',
              }}
              link={''}
              menuItems={menuItems}
            />
            <h3>Ressurs uten beskrivelse, tags og meny</h3>
            <ListResource
              key={'minimalResource'}
              title="Minimal ressurs"
              topics={topics}
              resourceImage={{
                src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                alt: 'alt',
              }}
              link={''}
            />
          </>
        }
        onSite={[
          <Wrapper>
            <MyNdlaResourceView
              folders={[
                { title: 'Naturfag', link: '' },
                { title: 'Matte', link: '' },
                { title: 'Historie', link: '' },
                { title: 'Norsk', link: '' },
                { title: 'Amerika historie', link: '' },
                { title: 'Australia historie', link: '' },
                { title: 'Bygg', link: '' },
                { title: 'Medisin', link: '' },
              ]}
              resources={[
                {
                  title: 'Norsktekst',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                    alt: 'alt',
                  },
                },
                {
                  title: 'Alfabetet',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                    alt: 'alt',
                  },
                },
                {
                  title: 'Alt om matte',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                    alt: 'alt',
                  },
                },
                {
                  title: 'En ressurs',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                    alt: 'alt',
                  },
                },
                {
                  title: 'Historien om det britiske imperiet',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                    alt: 'alt',
                  },
                },
                {
                  title: 'Banankrigen',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                    alt: 'alt',
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
