/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ArticleIntroduction from './ArticleIntroduction';
import ArticleFootNotes from './ArticleFootNotes';
import ArticleContent from './ArticleContent';
import ArticleWrapper from './ArticleWrapper';
import ArticleTitle from './ArticleTitle';
import ArticleByline from './ArticleByline';
import LayoutItem from '../Layout';
import { ArticleShape } from '../shapes';

export const Article = ({
  article,
  icon,
  licenseBox,
  modifier,
  messages,
  children,
}) => (
  <ArticleWrapper modifier={modifier}>
    <LayoutItem layout="center">
      <ArticleTitle title={article.title} icon={icon} />
      <ArticleIntroduction introduction={article.introduction} />
      <ArticleByline
        messages={messages}
        authors={article.copyright.authors}
        license={article.copyright.license.license}
        updated={article.updated}>
        {licenseBox}
      </ArticleByline>
    </LayoutItem>
    <LayoutItem layout="center">
      <ArticleContent content={article.content} />
    </LayoutItem>
    <LayoutItem layout="center">
      {article.footNotes &&
        Object.keys(article.footNotes).length > 0 && (
          <ArticleFootNotes footNotes={article.footNotes} messages={messages} />
        )}
      {children}
    </LayoutItem>
  </ArticleWrapper>
);

Article.propTypes = {
  article: ArticleShape.isRequired,
  modifier: PropTypes.string,
  icon: PropTypes.node,
  licenseBox: PropTypes.node,
  children: PropTypes.node,
  messages: PropTypes.shape({
    edition: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    writtenBy: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
