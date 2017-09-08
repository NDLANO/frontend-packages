/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ResourceSubsetList as ResourceSubsetListComponent } from 'ndla-ui';
import {
  learningPathResources,
  articleResources,
  exerciseResources,
} from '../../dummydata/index';

const toLink = () => ({
  href: '#',
});

const resourceGroup2 = {
  id: 'urn-resource-type-6c0bd4b9-23cb-43bf-affa-557e673d2c73',
  title: 'Fagstoff',
  description: 'Relaterte emneartikler',
  viewAllLinkTitle: 'Mer fagstoff',
  resources: articleResources,
  icon: 'Document',
  type: 'Fagstoff',
};
const resourceGroup1 = {
  id: 'urn-resource-type-0368610f-19bf-4a6f-86fa-9e6ea8876511',
  title: 'Læringsstier',
  viewAllLinkTitle: 'Flere læringsstier',
  description: 'Tilknyttet dette emnet',
  resources: learningPathResources,
  icon: 'Path',
  type: 'Læringsstier',
};
const resourceGroup3 = {
  id: 'urn-resource-type-622364e0-8cea-4083-9ce1-74e33e14e0b4',
  title: 'Oppgaver og aktiviteter',
  description: 'Relatert til emnet',
  viewAllLinkTitle: 'Flere oppgaver og aktiviteter',
  resources: exerciseResources,
  icon: 'Pencil',
  type: 'Oppgaver og aktiviteter',
};

const resourceGroups = [resourceGroup1, resourceGroup2, resourceGroup3];

const resourceGroups1 = [resourceGroup1];
const resourceGroups2 = [resourceGroup2];
const resourceGroups3 = [resourceGroup3];

export const ArticleResourceList = () =>
  <ResourceSubsetListComponent
    resourceGroups={resourceGroups1}
    resourceToLinkProps={toLink}
    toResourceTab={() => '#'}
  />;

export const LearningPathResourceList = () =>
  <ResourceSubsetListComponent
    resourceGroups={resourceGroups2}
    resourceToLinkProps={toLink}
    toResourceTab={() => '#'}
  />;

export const ExerciseResourceList = () =>
  <ResourceSubsetListComponent
    resourceGroups={resourceGroups3}
    resourceToLinkProps={toLink}
    toResourceTab={() => '#'}
  />;

export const ResourceSubsetList = () =>
  <ResourceSubsetListComponent
    resourceGroups={resourceGroups}
    resourceToLinkProps={toLink}
    toResourceTab={() => '#'}
  />;
