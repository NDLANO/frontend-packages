/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes, Component } from 'react';

import { Article, enableResponsiveTables } from '../../src';
import ArticleByline from './ArticleByline';
import LicenseExample from './LicenseExample';

const toggle = (el) => {
  document.querySelectorAll(`${el.target.dataset.target} div`).forEach(target => target.classList.toggle('expanded'));
};

class ArticleExample extends Component {

  componentDidMount() {
    enableResponsiveTables();
  }

  render() {
    const { article, withLicenseExample } = this.props;
    return (
      <Article>
        <button className="c-button c-button--small c-factbox-toggler u-margin-top-small" onClick={toggle} data-target="aside">Toggle boxes</button>
        { withLicenseExample && <LicenseExample /> }
        <h1>{article.title}</h1>
        <ArticleByline date article={article} />
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
};


export default ArticleExample;
