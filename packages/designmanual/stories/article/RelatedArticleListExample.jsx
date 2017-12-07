/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { RelatedArticleList, RelatedArticle } from 'ndla-ui';
import { Document, Pencil } from 'ndla-icons/common';
import { articleResources, exerciseResources } from '../../dummydata/index';

export const RelatedArticleExerciseList = () => (
  <RelatedArticleList messages={{ title: 'Relaterte artikler' }}>
    <RelatedArticle
      title={exerciseResources[0].title}
      icon={<Pencil />}
      modifier="tasks-and-activities"
      introduction={exerciseResources[0].introduction}
      to="#"
    />
    <RelatedArticle
      title={exerciseResources[1].title}
      icon={<Pencil />}
      modifier="tasks-and-activities"
      introduction={exerciseResources[1].introduction}
      to="#"
    />
  </RelatedArticleList>
);

export const RelatedArticleMixedList = () => (
  <RelatedArticleList messages={{ title: 'Relaterte artikler' }}>
    <RelatedArticle
      title={exerciseResources[0].title}
      icon={<Pencil />}
      modifier="tasks-and-activities"
      introduction={exerciseResources[0].introduction}
      to="#"
    />
    <RelatedArticle
      title={articleResources[1].title}
      icon={<Document />}
      modifier="subject-material"
      introduction={articleResources[1].introduction}
      to="#"
    />
  </RelatedArticleList>
);
export default () => (
  <RelatedArticleList messages={{ title: 'Relaterte artikler' }}>
    <RelatedArticle
      title={articleResources[0].title}
      icon={<Document />}
      modifier="subject-material"
      introduction={articleResources[0].introduction}
      to="#"
    />
    <RelatedArticle
      title={articleResources[1].title}
      icon={<Document />}
      modifier="subject-material"
      introduction={articleResources[1].introduction}
      to="#"
    />
  </RelatedArticleList>
);
