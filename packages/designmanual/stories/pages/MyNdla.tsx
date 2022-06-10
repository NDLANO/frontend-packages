/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import styled from '@emotion/styled';
import { ListResource, BlockResource, FolderPreview } from '@ndla/ui';
import { MoreButton } from '@ndla/button';
import MyNdlaResourceView from '../molecules/MyNdlaResourceView';

//@ts-ignore
import ComponentInfo from '../ComponentInfo';

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const MyNdla = () => {
  return (
    <Wrapper>
      <ComponentInfo
        status={1}
        components={
          <>
            <h2> Ressurser </h2>
            <h3>Blokkressurs</h3>
            <BlockResource
              title="Helt Vanlig Tittel"
              topics={['Matte', 'Naturfag']}
              tags={['tag', 'tag', 'tag']}
              description={'Dette er for eksempel en fagbeskrivelse! Dersom den er for lang vil den bli forkortet'}
              resourceImage={{
                src: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
                alt: 'alt',
              }}
              link={''}
              actionMenu={<MoreButton />}
            />
            <h3> Standard Ressurs</h3>
            <ListResource
              title="Titler kan også kuttes av"
              topics={['Matte', 'Naturfag']}
              tags={['veldiglangtag', 'kjempelangtag', 'tag3medrartnavn', 'matte', 'matematikk']}
              description={'En helt vanlig beskrivelse.'}
              resourceImage={{
                src: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
                alt: 'alt',
              }}
              link={''}
              actionMenu={<MoreButton />}
            />
            <h3>Ressurs uten beskrivelse</h3>
            <ListResource
              title="Min Tittel"
              topics={['Matte', 'Naturfag']}
              description={''}
              tags={['tag', 'tag', 'tag']}
              resourceImage={{
                src: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
                alt: 'alt',
              }}
              link={''}
              actionMenu={<MoreButton />}
            />
            <h3>Ressurs uten beskrivelse, tags og meny</h3>
            <ListResource
              title="Minimal ressurs"
              topics={['Matte', 'Naturfag']}
              resourceImage={{
                src: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
                alt: 'alt',
              }}
              link={''}
              actionMenu={<MoreButton />}
            />
            <h2> Mappevisning </h2>
            <FolderPreview layout="list" title="Title" link="" subFolders={3} subResources={3} key={''} />
          </>
        }
        onSite={[
          <Wrapper>
            <MyNdlaResourceView
              folders={[
                { title: 'name', link: 'hey' },
                { title: 'Ny mappe', link: '' },
                { title: 'Eldre mappe', link: '' },
                { title: 'Eldre mappe', link: '' },
              ]}
              resources={[
                {
                  title: 'My Resource',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
                    alt: 'alt',
                  },
                },
                {
                  title: 'My Resource',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
                    alt: 'alt',
                  },
                },
                {
                  title: 'My Resource',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9YBKL8UUmH3-VklAvsuDv7D1I4KrNRFswqOwIhEcmx5NnMfUUUuNCAYB6flaehu4Jnbw&usqp=CAU',
                    alt: 'alt',
                  },
                },
                {
                  title: 'My Resource',
                  link: '',
                  topics: ['Oppgave', 'Norsk', 'Muntlig'],
                  tags: ['tag', 'tag', 'tag'],
                  description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak",
                  resourceImage: {
                    src: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
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
