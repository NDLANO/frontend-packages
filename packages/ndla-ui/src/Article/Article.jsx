/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import ArticleIntroduction from './ArticleIntroduction';
import ArticleFootNotes from './ArticleFootNotes';
import ArticleContent from './ArticleContent';

const classes = new BEMHelper({
  name: 'article',
  prefix: 'c-',
});

export const Article = ({ children }) => (
  <article {...classes()}>
    <section> {children} </section>
  </article>
);

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

Article.Introduction = ArticleIntroduction;
Article.FootNotes = ArticleFootNotes;
Article.Content = ArticleContent;

export default Article;
