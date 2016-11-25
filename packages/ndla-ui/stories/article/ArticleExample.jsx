/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';

import { Article } from '../../src';

const ArticleExample = ({ article }) => (
  <Article>
    <h1>{article.title}</h1>
    <Article.Introduction introduction={article.introduction} />
    <div dangerouslySetInnerHTML={{ __html: article.content }} />
    { article.footNotes ? <Article.FootNotes footNotes={article.footNotes} /> : null }
  </Article>
);

ArticleExample.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};


export default ArticleExample;
