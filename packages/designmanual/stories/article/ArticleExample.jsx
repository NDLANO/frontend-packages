/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  ArticleIntroduction,
  ArticleContent,
  ArticleFootNotes,
  OneColumn,
  LayoutItem,
} from 'ndla-ui';
import ArticleByline from './ArticleByline';
import LicenseExample from './LicenseExample';

const ArticleExample = ({ article, withLicenseExample, reset }) => (
  <OneColumn cssModifier="narrow">
    <article className={reset ? 'c-article c-article--clean' : 'c-article'}>
      <LayoutItem layout="center">
        <h1>{article.title}</h1>
        <ArticleIntroduction introduction={article.introduction} />
        <ArticleByline article={article} />
      </LayoutItem>
      <LayoutItem layout="center">
        <ArticleContent content={article.content} />
      </LayoutItem>
      <LayoutItem layout="center">
        {article.footNotes ? (
          <ArticleFootNotes footNotes={article.footNotes} />
        ) : null}
        {withLicenseExample && <LicenseExample />}
      </LayoutItem>
    </article>
  </OneColumn>
);

ArticleExample.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  withLicenseExample: PropTypes.bool,
  notitle: PropTypes.bool,
  reset: PropTypes.bool,
};

export default ArticleExample;
