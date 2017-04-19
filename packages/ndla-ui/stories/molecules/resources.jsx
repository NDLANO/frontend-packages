/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ResourceSubsetList as ResourceSubsetListComponent } from '../../src';
import { learningPathResources, articleResources, exerciseResources } from '../../dummydata/index';


const toLink = () => ({
  href: '#',
});

/*
const Search = (
  <div className="u-margin-top">
    <input type="text" className="" placeholder="Søk" />
    <button className="search c-button c-button--transparent"><Icon.Search /></button>
  </div>
);
*/
const resourceGroup1 = {
  title: 'Fagstoff',
  description: 'Foretrekker du å se en video, eller lese en tekst? Velg selv.',
  viewAllLinkTitle: 'Se alt fagstoff \u2192',
  resources: articleResources.slice(0, 2),
  color: 'red',
  icon: 'Document',
  tags: ['film', 'forelesning', 'illustrasjoner', 'simulering'],
};
const resourceGroup2 = {
  title: 'Læringsstier',
  viewAllLinkTitle: 'Se alle læringsstier \u2192',
  description: 'Gå steg for steg gjennom emnet.',
  resources: learningPathResources.slice(0, 2),
  color: 'yellow',
  icon: 'Path',
};
const resourceGroup3 = {
  title: 'Oppgaver',
  description: 'Lær bedre gjennom å løse konkrete oppgaver.',
  viewAllLinkTitle: 'Se alle oppgaver \u2192',
  resources: exerciseResources.slice(0, 2),
  color: 'green',
  icon: 'Pencil',
};


const resourceGroups = [
  resourceGroup1,
  resourceGroup2,
  resourceGroup3,
];

const resourceGroups1 = [
  resourceGroup1,
];
const resourceGroups2 = [
  resourceGroup2,
];
const resourceGroups3 = [
  resourceGroup3,
];


export const ArticleResourceList = () => (
  <ResourceSubsetListComponent resourceGroups={resourceGroups1} resourceToLinkProps={toLink} toResourceTab={() => '#'} />
);


export const LearningPathResourceList = () => (
  <ResourceSubsetListComponent resourceGroups={resourceGroups2} resourceToLinkProps={toLink} toResourceTab={() => '#'} />
);

export const ExerciseResourceList = () => (
  <ResourceSubsetListComponent resourceGroups={resourceGroups3} resourceToLinkProps={toLink} toResourceTab={() => '#'} />
);


export const ResourceSubsetList = () => (
  <ResourceSubsetListComponent resourceGroups={resourceGroups} resourceToLinkProps={toLink} toResourceTab={() => '#'} />
);
