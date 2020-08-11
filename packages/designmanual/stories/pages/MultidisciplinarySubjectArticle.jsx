/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';

import { Breadcrumblist, MultidisciplinarySubjectHeader } from '@ndla/ui';
import { injectT } from '@ndla/i18n';
import { ArticleSideBar } from '@ndla/ui';
import ArticleLoader from '../article/ArticleLoader';
import LicenseBox from '../article/LicenseBox';

const MultidisciplinarySubjectArticle = ({
  articleId = '22220',
  subjects = [],
  t,
}) => {
  const [article, setArticle] = useState(null);
  const [resourcesRef, setResourcesRef] = useState(null);
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

  const onArticleLoaded = (article, resourcesRef) => {
    setResourcesRef(resourcesRef);
    setArticle(article);
  };

  const onToResourcesClick = e => {
    e.preventDefault();
    window.scrollTo({
      top: resourcesRef.current.getBoundingClientRect().top + window.scrollY,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {article && (
        <>
          <Breadcrumblist items={breadCrumb} startOffset={268}>
            <ArticleSideBar
              licenseBox={<LicenseBox />}
              copyPageUrlLink={window.location}
              onLinkToResourcesClick={onToResourcesClick}
              linkToResources="#"
            />
          </Breadcrumblist>
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
