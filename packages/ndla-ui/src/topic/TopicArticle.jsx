/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import {
//   addEventListenerForResize,
//   updateIFrameDimensions, addAsideClickListener,
//   removeEventListenerForResize,
//   removeAsideClickListener,
// } from 'ndla-article-scripts';
// import { presets } from 'react-motion';
// import ReactCollapse from 'react-collapse';
// import Icon from '../icons/Icon';

import Article from '../article/Article';
import ArticleContent from '../article/ArticleContent';
// import Button from '../button/Button';
// import ArticleFootNotes from '../article/ArticleFootNotes';
import { ArticleShape } from '../shapes';


// class TopicArticle extends Component {
const TopicArticle = ({ article, notitle }) => (

    // const { article, notitle } = this.props;
    // const { isOpen } = this.state;
    // return (
  <section>
    { notitle ? null : <h1 className="c-article__title">{article.title}</h1> }
    <Article.Introduction introduction={article.introduction} />
    { article.footNotes }
    <ArticleContent className="c-article--narrow" dangerouslySetInnerHTML={{ __html: article.content }} />
  </section>
    // );
);

TopicArticle.propTypes = {
  article: ArticleShape.isRequired,
  notitle: PropTypes.bool,
};

export default TopicArticle;
