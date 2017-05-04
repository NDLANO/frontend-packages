/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';

import { Article, OneColumn } from '../../src';
import ArticleByline from './ArticleByline';
import LicenseExample from './LicenseExample';
import TopicBreadcrumbDefault from '../molecules/breadcrumbs';

const ArticleExample = ({ article, withLicenseExample, notitle }) => (
  <section className="c-article-content">
    <OneColumn cssModifier="narrow">
      <section>
        <TopicBreadcrumbDefault />
        { withLicenseExample && <LicenseExample /> }
        { notitle ? null : <h1>{article.title}</h1> }
        <ArticleByline article={article} />
        <Article.Introduction introduction={article.introduction} />
      </section>
    </OneColumn>
    <OneColumn cssModifier="narrow">
      <Article.Content content={article.content} />
    </OneColumn>
    <OneColumn cssModifier="narrow">
      <section>
        { article.footNotes ? <Article.FootNotes footNotes={article.footNotes} /> : null }
        { withLicenseExample && <LicenseExample /> }
      </section>
    </OneColumn>
  </section>
);

ArticleExample.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  withLicenseExample: PropTypes.bool,
  notitle: PropTypes.bool,
};


export default ArticleExample;
