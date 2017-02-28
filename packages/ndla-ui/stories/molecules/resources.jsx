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
import { learningPathResources, articleResources } from '../../dummydata/index';


const toLink = () => ({
  href: '#',
});

export const ArticleResourceList = () => (
  <ResourceList resources={articleResources} resourceToLinkProps={toLink} />
);


export const LearningPathResourceList = () => (
  <ResourceList resources={learningPathResources} resourceToLinkProps={toLink} />
);

const resourceGroups = [
  {
    title: 'Fagstoff',
    viewAllLinkTitle: 'Se alt fagstoff',
    resources: articleResources.slice(0, 2),
  },
  {
    title: 'Læringsstier',
    viewAllLinkTitle: 'Se alle læringsstier',
    resources: learningPathResources.slice(0, 2),
  },
];

export const ResourceSubsetList = () => (
  <ResourceSubsetListComponent resourceGroups={resourceGroups} resourceToLinkProps={toLink} toResourceTab={() => '#'} />
);

export const ResourceTabs = () => (
  <div className="u-margin-top-large">
    <Tabs
      modifier="muted"
      tabs={[
          { key: 'all', displayName: 'Alle', content: <ResourceSubsetList /> },
          { key: 'learningPath', displayName: 'Læringsstier', content: <LearningPathResourceList /> },
          { key: 'subjectMaterial', displayName: 'Fagstoff', content: <ArticleResourceList /> },
      ]}
    />
  </div>
);
