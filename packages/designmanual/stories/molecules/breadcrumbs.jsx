/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { Breadcrumb, BreadcrumbBlock as BreadcrumbBlockUI } from 'ndla-ui';

const subjectData = {
  id: 'id',
  name: 'Fag',
};

const topicData = [
  {
    id: 'id1',
    name: 'Hovedemne',
  },
  {
    id: 'id2',
    name: 'Underemne',
  },
  {
    id: 'id3',
    name: 'Tittel på side',
  },
];

export const BreadcrumbDefault = () => (
  <Breadcrumb
    subject={subjectData}
    topicPath={topicData}
    subjectsTitle="Fag"
    toSubjects={() => '#'}
    toTopic={() => '#'}
  />
);

export default BreadcrumbDefault;

export const BreadcrumbBlock = () => (
  <BreadcrumbBlockUI
    subject={subjectData}
    topicPath={topicData}
    toTopic={() => '#'}
  />
);
