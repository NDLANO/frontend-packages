/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';

import { BreadCrumblist, MultidisciplinarySubjectHeader } from '@ndla/ui';
import { injectT } from '@ndla/i18n';
import ArticleLoader from '../article/ArticleLoader';

const MultidisciplinarySubjectArticle = ({
  articleId = '22220',
  subjects = [],
  t,
}) => {
  const [article, setArticle] = useState(null);
  const subjectsLinks = [];

  if (subjects.includes('climate')) {
    subjectsLinks.push({
      label: 'Bærekraftig utvikling',
      url: '#',
    });
  }
  if (subjects.includes('democracy')) {
    subjectsLinks.push({
      label: 'Demokrati og medborgerskap',
      url: '#',
    });
  }
  if (subjects.includes('publicHealth')) {
    subjectsLinks.push({
      label: 'Folkehelse og livsmestring',
      url: '#',
    });
  }

  const breadCrumb = [
    {
      label: t('frontpageMultidisciplinarySubject.heading'),
      id: 1,
      url: '#',
      typename: 'Home',
    },
  ];
  if (article) {
    breadCrumb.push({
      label: article.title,
      id: 2,
      url: '#',
      typename: 'Subjecttype',
      isCurrent: true,
    });
  }

  const onArticleLoaded = article => {
    setArticle(article);
  };
  return (
    <>
      {article && (
        <>
          <BreadCrumblist items={breadCrumb} startOffset={268} />
          <MultidisciplinarySubjectHeader
            subjects={subjects}
            subjectsLinks={subjectsLinks}
          />
        </>
      )}
      <ArticleLoader
        cleanInContext
        id="mainContentId"
        articleId={articleId}
        onArticleLoaded={onArticleLoaded}
        hideForm
        hideCompetenceGoals
      />
    </>
  );
};

export default injectT(MultidisciplinarySubjectArticle);
