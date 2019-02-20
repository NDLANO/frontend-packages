/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import {
  RelatedArticleList,
  RelatedArticle,
  TasksAndActivitiesBadge,
  SubjectMaterialBadge,
  ExternalLearningResourcesBadge,
  AssessmentResourcesBadge,
  SubjectBadge,
  SourceMaterialBadge,
} from '@ndla/ui';
import { toggleRelatedArticles } from '@ndla/article-scripts';
import { articleResources, exerciseResources } from '../../dummydata/index';

export const RelatedArticleExerciseList = () => (
  <RelatedArticleList messages={{ title: 'Relaterte artikler' }}>
    <RelatedArticle
      title={exerciseResources[0].name}
      icon={<TasksAndActivitiesBadge background />}
      modifier="tasks-and-activities"
      introduction={exerciseResources[0].introduction}
      to="#"
    />
    <RelatedArticle
      title={exerciseResources[1].name}
      icon={<TasksAndActivitiesBadge background />}
      modifier="tasks-and-activities"
      introduction={exerciseResources[1].introduction}
      to="#"
    />
  </RelatedArticleList>
);

export const RelatedArticleMixedList = () => (
  <RelatedArticleList messages={{ title: 'Relaterte artikler' }}>
    <RelatedArticle
      title={exerciseResources[0].name}
      icon={<TasksAndActivitiesBadge background />}
      modifier="tasks-and-activities"
      introduction={exerciseResources[0].introduction}
      to="#"
    />
    <RelatedArticle
      title={articleResources[1].name}
      icon={<SubjectMaterialBadge background />}
      modifier="subject-material"
      introduction={articleResources[1].introduction}
      to="#"
    />
  </RelatedArticleList>
);

export const RelatedArticleExternal = () => (
  <RelatedArticleList messages={{ title: 'Relaterte artikler' }}>
    <RelatedArticle
      title="Bioteknologinemda"
      icon={<ExternalLearningResourcesBadge background />}
      modifier="external-learning-resources"
      introduction="Bioteknologinemnda er et frittstående, rådgivende organ som er oppnevnt av Regjeringen og hjemlet (begrunnet) i Genteknologiloven og Bioteknologiloven."
      linkInfo="Nettside hos bion.no"
      to="#"
    />
    <RelatedArticle
      title="Tittel på ekstern lenke"
      icon={<ExternalLearningResourcesBadge background />}
      modifier="external-learning-resources"
      introduction="https://www.url.no/visuelt/vin…"
      linkInfo="Nettside hos helsedirektoratet.no"
      to="#"
    />
  </RelatedArticleList>
);

class ExpandExample extends Component {
  componentDidMount() {
    toggleRelatedArticles();
  }

  render() {
    const articles = [
      <RelatedArticle
        title={articleResources[0].name}
        icon={<SubjectMaterialBadge background />}
        modifier="subject-material"
        introduction={articleResources[0].introduction}
        to="#"
        key={articleResources[0].name}
      />,
      <RelatedArticle
        title={articleResources[1].name}
        icon={<SubjectMaterialBadge background />}
        modifier="subject-material"
        introduction={articleResources[1].introduction}
        to="#"
        key={articleResources[1].name}
      />,
      <RelatedArticle
        title={articleResources[2].name}
        icon={<SourceMaterialBadge background />}
        modifier="source-material"
        introduction={articleResources[2].introduction}
        to="#"
        key={articleResources[2].name}
      />,
      <RelatedArticle
        title={articleResources[3].name}
        icon={<AssessmentResourcesBadge background />}
        modifier="assessment-resources"
        introduction={articleResources[3].introduction}
        to="#"
        key={articleResources[3].name}
      />,

      <RelatedArticle
        title={articleResources[4].name}
        icon={<SubjectBadge background />}
        modifier="subject"
        introduction={articleResources[4].introduction}
        to="#"
        key={articleResources[4].name}
      />,
    ];

    return (
      <RelatedArticleList
        messages={{
          title: 'Relaterte artikler',
          showMore: 'Vis flere relaterte artikler',
          showLess: 'Vis mindre',
        }}>
        {articles}
      </RelatedArticleList>
    );
  }
}

export default ExpandExample;
