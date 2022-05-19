/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { ResourcesView, ResourceElement, FolderElement } from '@ndla/ui';

const layout = 'block';
export const MyNdla = () => (
  <ResourcesView layout={layout}>
    <ResourceElement
      layout={layout}
      title="My Resource"
      topics={['Oppgave', 'Video', 'Interaktiv']}
      tags={['tag', 'tag', 'tag']}
      resourceImage={{
        alt: 'alt',
        src: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
      }}
      link=""
    />
    <FolderElement layout={layout} title="My folder" subFolders={3} subResources={3} link="" />
  </ResourcesView>
);

export default MyNdla;
