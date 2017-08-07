/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Article, OneColumn, LayoutItem } from 'ndla-ui';
import ArticleByline from './ArticleByline';
import LicenseExample from './LicenseExample';

const ArticleExample = ({ article, withLicenseExample, notitle }) =>
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        {notitle
          ? null
          : <h1>
              {article.title}
            </h1>}
        <Article.Introduction introduction={article.introduction} />
        <ArticleByline article={article} />
      </LayoutItem>
      <LayoutItem layout="center">
        <Article.Content content={article.content} />
      </LayoutItem>
      <LayoutItem layout="center">
        {article.footNotes
          ? <Article.FootNotes footNotes={article.footNotes} />
          : null}
        {withLicenseExample && <LicenseExample />}
      </LayoutItem>
    </article>
  </OneColumn>;

ArticleExample.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  withLicenseExample: PropTypes.bool,
  notitle: PropTypes.bool,
};

export default ArticleExample;
