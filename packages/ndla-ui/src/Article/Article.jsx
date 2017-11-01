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
import ArticleFootNotes from './ArticleFootNotes';
import ArticleContent from './ArticleContent';
import ArticleByline from './ArticleByline';
import LayoutItem from '../Layout';
import { ArticleShape } from '../shapes';

const classes = new BEMHelper({
  name: 'article',
  prefix: 'c-',
});

export const ArticleWrapper = ({ children, modifier }) => (
  <article {...classes(undefined, modifier)}>{children}</article>
);

ArticleWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  modifier: PropTypes.string,
};

export const ArticleTitle = ({ children, icon }) => {
  if (icon) {
    return (
      <h1 {...classes('title', 'icon')}>
        {icon}
        {children}
      </h1>
    );
  }

  return <h1 {...classes('title')}>{children}</h1>;
};

ArticleTitle.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
};

export const ArticleIntroduction = ({ children }) =>
  children ? <p className="article_introduction">{children}</p> : null;

ArticleIntroduction.propTypes = {
  children: PropTypes.node,
};

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
      <ArticleTitle icon={icon}>{article.title}</ArticleTitle>
      <ArticleIntroduction>{article.introduction}</ArticleIntroduction>
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
