/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Article, OneColumn } from '../../src';
import ArticleByline from './ArticleByline';
import LicenseExample from './LicenseExample';


const ArticleExample = ({ article, withLicenseExample, notitle }) => (
  <article>
    <OneColumn cssModifier="narrow">
      <section className="c-article-content">
        <section className="c-article--narrow">
          { withLicenseExample && <LicenseExample /> }
          { notitle ? null : <h1>{article.title}</h1> }
        </section>
        <Article.Introduction introduction={article.introduction} />
        <section className="c-article--narrow">
          <ArticleByline article={article} />
        </section>
        <OneColumn cssModifier="narrow">
          <section className="c-article--narrow">
            <section>
              <Article.Content content={article.content} />
            </section>
          </section>
        </OneColumn>
        { article.footNotes ? <Article.FootNotes footNotes={article.footNotes} /> : null }
        { withLicenseExample && <LicenseExample /> }
      </section>
    </OneColumn>
  </article>
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
