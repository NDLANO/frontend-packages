/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes, Component } from 'react';
import Helmet from 'react-helmet';
import {
  addEventListenerForResize,
  updateIFrameDimensions,
  addAsideClickListener,
  removeEventListenerForResize,
  removeAsideClickListener,
} from 'ndla-article-scripts';

import { Article } from '../../src';
import ArticleByline from './ArticleByline';
import LicenseExample from './LicenseExample';

class ArticleExample extends Component {

  componentDidMount() {
    addEventListenerForResize();
    updateIFrameDimensions();
    addAsideClickListener();
  }

  componentWillUnmount() {
    removeEventListenerForResize();
    removeAsideClickListener();
  }

  render() {
    const { article, withLicenseExample, notitle } = this.props;

    const scripts = article.requiredLibraries ? article.requiredLibraries.map(lib => ({ src: lib.url, type: lib.mediaType })) : [];
    return (
      <Article>
        <Helmet
          title={`NDLA | ${article.title}`}
          script={scripts}
        />
        { withLicenseExample && <LicenseExample /> }
        { notitle ? null : <h1>{article.title}</h1> }
        <ArticleByline authors date article={article} />
        <Article.Introduction introduction={article.introduction} />
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        { article.footNotes ? <Article.FootNotes footNotes={article.footNotes} /> : null }
        { withLicenseExample && <LicenseExample /> }
      </Article>
    );
  }
}

ArticleExample.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  withLicenseExample: PropTypes.bool,
  notitle: PropTypes.bool,
};


export default ArticleExample;
