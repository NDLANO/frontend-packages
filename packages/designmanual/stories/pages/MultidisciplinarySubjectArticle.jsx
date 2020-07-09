/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';

import { MultidisciplinarySubjectHeader } from '@ndla/ui';
import ArticleLoader from '../article/ArticleLoader';

const MultidisciplinarySubjectArticle = ({
  articleId = '22220',
  subjects = [],
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

  const onArticleLoaded = article => {
    setArticle(article);
  };
  return (
    <>
      {article && (
        <>
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

export default MultidisciplinarySubjectArticle;
