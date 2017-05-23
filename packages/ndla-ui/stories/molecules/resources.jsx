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
  title: 'Lærestoff',
  description: 'Relaterte emneartikler',
  viewAllLinkTitle: 'Mer lærestoff',
  resources: articleResources.slice(0, 2),
  icon: 'Document',
  type: 'Lærestoff',
};
const resourceGroup2 = {
  title: 'Læringsstier',
  viewAllLinkTitle: 'Flere læringsstier',
  description: 'Tilknyttet dette emnet',
  resources: learningPathResources.slice(0, 2),
  icon: 'Path',
  type: 'Læringsstier',
};
const resourceGroup3 = {
  title: 'Oppgaver og aktiviteter',
  description: 'Relatert til emnet',
  viewAllLinkTitle: 'Flere oppgaver og aktiviteter',
  resources: exerciseResources.slice(0, 2),
  icon: 'Pencil',
  type: 'Oppgaver og aktiviteter',
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
