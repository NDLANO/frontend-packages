/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { breakpoints, mq, spacing } from '@ndla/core';
import { ListResource, BlockResource } from '@ndla/ui';

const ListResourceWrapper = styled.div`
  margin: ${spacing.xsmall} 0;
`;

const BlockResourceWrapper = styled.div`
  display: flex;
  gap: ${spacing.large};
  ${mq.range({ until: breakpoints.mobileWide })} {
    flex-direction: column;
  }
`;
const BlockResourceExample = styled.div`
  display: flex;
  flex-direction: column;
`;

interface BlockExampleProps {
  resourceTypes: { id: string; name: string }[];
  tags: string[];
  menu?: ReactNode;
}

const resourceTypesArr = [
  { id: 'urn:resourcetype:learningPath', name: 'Læringssti' },
  { id: 'urn:resourcetype:subjectMaterial', name: 'Fagstoff' },
  { id: 'urn:resourcetype:tasksAndActivities', name: 'Oppgaver og aktiviteter' },
  { id: 'urn:resourcetype:reviewResource', name: 'Vurderingsressurs' },
  { id: 'urn:resourcetype:externalResource', name: 'Ekstern læringsressurs' },
  { id: 'urn:resourcetype:SourceMaterial', name: 'Kildemateriale' },
];

export const ResourcesExample = ({ resourceTypes, tags, menu }: BlockExampleProps) => {
  return (
    <>
      <BlockResourceWrapper>
        <BlockResourceExample>
          <h3>Blokkressurs</h3>
          <BlockResource
            id="2ae58e7d-ea25-49f0-b2a5-1f11830f8c04"
            key={'blockResource'}
            title="Helt Vanlig Tittel"
            resourceTypes={resourceTypes}
            tags={tags}
            description={'Dette er for eksempel en fagbeskrivelse! Dersom den er for lang vil den bli forkortet'}
            resourceImage={{
              src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
              alt: '',
            }}
            link={''}
            menu={menu}
          />
        </BlockResourceExample>
        <BlockResourceExample>
          <h3>Blokkressurs uten bilde</h3>
          <BlockResource
            id="2ae58e7d-ea25-49f0-b2a5-1f11830f8c04"
            key={'blockResource'}
            title="Helt Vanlig Tittel"
            resourceTypes={resourceTypes}
            tags={tags}
            description={'Dette er for eksempel en fagbeskrivelse! Dersom den er for lang vil den bli forkortet'}
            resourceImage={{
              src: '',
              alt: '',
            }}
            link={''}
            menu={menu}
          />
        </BlockResourceExample>
      </BlockResourceWrapper>
      <h3> Standard Ressurs som laster</h3>
      <ListResource
        isLoading
        id={'b572358d-0807-4594-bd37-b2bc52d2a6b6'}
        key={'defaultResource'}
        title="Titler kan også kuttes av"
        resourceTypes={resourceTypes}
        tags={['veldiglangtag', 'kjempelangtag', 'tag3medrartnavn', 'matte', 'matematikk']}
        description={'En helt vanlig beskrivelse.'}
        resourceImage={{
          src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
          alt: '',
        }}
        link={''}
        menu={menu}
      />
      <h3> Standard Ressurs</h3>
      <ListResource
        id={'b572358d-0807-4594-bd37-b2bc52d2a6b6'}
        key={'defaultResource'}
        title="Titler kan også kuttes av"
        resourceTypes={resourceTypes}
        tags={['veldiglangtag', 'kjempelangtag', 'tag3medrartnavn', 'matte', 'matematikk']}
        description={'En helt vanlig beskrivelse.'}
        resourceImage={{
          src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
          alt: '',
        }}
        link={''}
        menu={menu}
      />
      <h3>Ressurs med tom beskrivelse</h3>
      <ListResource
        id={'181c1b06-683f-472b-900c-cf25979d22ac'}
        key={'withoutDescription'}
        title="Min Tittel"
        resourceTypes={resourceTypes}
        description={''}
        tags={tags}
        resourceImage={{
          src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
          alt: '',
        }}
        link={''}
        menu={menu}
      />

      <h3>Ressurs uten beskrivelse, tags og meny</h3>
      <ListResource
        id={'1c9e14ac-b734-4d8e-a2d6-5b37051d65d4'}
        key={'minimalResource'}
        title="Minimal ressurs"
        resourceTypes={resourceTypes}
        resourceImage={{
          src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
          alt: '',
        }}
        link={''}
        menu={menu}
      />
      <h3>Ressurs uten beskrivelse, tags og meny. Uten bilde</h3>

      {resourceTypesArr.map((rt, index) => {
        return (
          <ListResourceWrapper key={index}>
            <ListResource
              id={'1c9e14ac-b734-4d8e-a2d6-5b37051d65d4'}
              key={'minimalResource'}
              title="Minimal ressurs"
              resourceTypes={[rt]}
              resourceImage={{
                src: '',
                alt: '',
              }}
              link={''}
              menu={menu}
            />
          </ListResourceWrapper>
        );
      })}
    </>
  );
};

export default ResourcesExample;
