/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import Tabs from 'ndla-tabs';

import { ResourceList, ResourceSubsetList as ResourceSubsetListComponent } from '../../src';
import { learningPathResources, articleResources, exerciseResources } from '../../dummydata/index';


const toLink = () => ({
  href: '#',
});

export const ArticleResourceList = () => (
  <ResourceList resources={articleResources} resourceToLinkProps={toLink} />
);


export const LearningPathResourceList = () => (
  <ResourceList resources={learningPathResources} resourceToLinkProps={toLink} />
);

export const ExerciseResourceList = () => (
  <ResourceList resources={exerciseResources} resourceToLinkProps={toLink} />
);

const resourceGroups = [
  {
    title: 'Læringsstier',
    viewAllLinkTitle: 'Se alle læringsstier \u2192',
    description: 'Gå steg for steg gjennom emnet.',
    resources: learningPathResources.slice(0, 2),
    color: 'blue',
    icon: 'Path',
  },
  {
    title: 'Fagstoff',
    description: 'Foretrekker du å se en video, eller lese en tekst? Velg selv.',
    viewAllLinkTitle: 'Se alt fagstoff \u2192',
    resources: articleResources.slice(0, 2),
    color: 'red',
    icon: 'Document',
    tags: ['film', 'forelesning', 'illustrasjoner', 'simulering'],
  },
  {
    title: 'Oppgaver',
    description: 'Lær bedre gjennom å løse konkrete oppgaver.',
    viewAllLinkTitle: 'Se alle oppgaver \u2192',
    resources: exerciseResources.slice(0, 2),
    color: 'green',
    icon: 'Pencil',
  },
];

export const ResourceSubsetList = () => (
  <ResourceSubsetListComponent resourceGroups={resourceGroups} resourceToLinkProps={toLink} toResourceTab={() => '#'} />
);

export const ResourceTabs = () => (
  <div className="u-margin-top-huge">
    <Tabs
      modifier="muted"
      tabs={[
          { title: 'Alle', content: <ResourceSubsetList /> },
          { title: 'Læringsstier', content: <LearningPathResourceList /> },
          { title: 'Fagstoff', content: <ArticleResourceList /> },
          { title: 'Oppgaver', content: <ArticleResourceList /> },
      ]}
    />
  </div>
);
