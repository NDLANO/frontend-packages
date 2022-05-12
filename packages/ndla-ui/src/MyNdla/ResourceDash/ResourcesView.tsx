/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React from 'react';
import ResourceElement from './ResourceElement';
import FolderElement from './Folderelement';
import DashOptions from './DashOptions';
const ResourcesWrapper = styled.div``;

export const ResourcesView = () => {
  return (
    <>
      <DashOptions></DashOptions>
      <ResourcesWrapper>
        <FolderElement title="My folder" subFolders={3} subResources={3} link="" />
        <ResourceElement
          title="My Resource"
          topic="Oppgave"
          tags={['tag', 'tag', 'tag']}
          resourceImage={{
            alt: 'alt',
            src: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
          }}
          link=""
        />
        <ResourceElement
          title="My Resource"
          topic="Oppgave"
          tags={['tag', 'tag', 'tag']}
          resourceImage={{
            alt: 'alt',
            src: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
          }}
          link=""
        />
      </ResourcesWrapper>
    </>
  );
};

export default ResourcesView;
