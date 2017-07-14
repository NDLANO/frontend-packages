/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { TopicBreadcrumb } from '../../src';
import { topicList, subjectList } from '../../dummydata/index';

export const TopicBreadcrumbDefault = () =>
  <TopicBreadcrumb
    subject={subjectList[1]}
    topicPath={topicList.slice(2)}
    subjectsTitle="Fag"
    toSubjects={() => '#'}
    toTopic={() => '#'}>
    Du er her:
  </TopicBreadcrumb>;

export default TopicBreadcrumbDefault;
