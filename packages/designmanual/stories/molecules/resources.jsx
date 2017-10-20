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
  id: 'subject-material',
  title: 'Fagstoff',
  description: 'Relaterte emneartikler',
  viewAllLinkTitle: 'Mer fagstoff',
  resources: articleResources,
  icon: 'Document',
  type: 'Fagstoff',
};
const resourceGroup1 = {
  id: 'type-learning-path',
  title: 'Læringsstier',
  viewAllLinkTitle: 'Flere læringsstier',
  description: 'Tilknyttet dette emnet',
  resources: learningPathResources,
  icon: 'Path',
  type: 'Læringsstier',
};
const resourceGroup3 = {
  id: 'tasks-and-activities',
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

export const ArticleResourceList = () => (
  <ResourceSubsetListComponent
    resourceGroups={resourceGroups1}
    resourceToLinkProps={toLink}
    toResourceTab={() => '#'}
  />
);

export const LearningPathResourceList = () => (
  <ResourceSubsetListComponent
    resourceGroups={resourceGroups2}
    resourceToLinkProps={toLink}
    toResourceTab={() => '#'}
  />
);

export const ExerciseResourceList = () => (
  <ResourceSubsetListComponent
    resourceGroups={resourceGroups3}
    resourceToLinkProps={toLink}
    toResourceTab={() => '#'}
  />
);

export const ResourceSubsetList = () => (
  <ResourceSubsetListComponent
    resourceGroups={resourceGroups}
    resourceToLinkProps={toLink}
    toResourceTab={() => '#'}
  />
);
