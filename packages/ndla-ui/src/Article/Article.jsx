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
import { getLicenseByAbbreviation } from '@ndla/licenses';
import isString from 'lodash/isString';
import parse from 'html-react-parser';

import ArticleFootNotes from './ArticleFootNotes';
import ArticleContent from './ArticleContent';
import ArticleByline from './ArticleByline';
import LayoutItem from '../Layout';
import { ArticleShape } from '../shapes';
import ArticleHeaderWrapper from './ArticleHeaderWrapper';

const classes = new BEMHelper({
  name: 'article',
  prefix: 'c-',
});

export const ArticleWrapper = ({ children, modifier, id }) => (
  <article id={id} {...classes(undefined, modifier)}>
    {children}
  </article>
);

ArticleWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  modifier: PropTypes.string,
  id: PropTypes.string,
};

export const ArticleTitle = ({ children, icon, label }) => {
  const modifiers = [];
  if (icon) {
    modifiers.push('icon');
  }

  let labelView = null;

  if (label) {
    labelView = <p>{label}</p>;
  }

  return (
    <div {...classes('title', modifiers)}>
      {icon}
      {labelView}
      <h1>{children}</h1>
    </div>
  );
};

ArticleTitle.propTypes = {
  hasCompetenceGoals: PropTypes.bool,
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  icon: PropTypes.node,
};

ArticleTitle.defaultProps = {
  icon: null,
  label: null,
};

export const ArticleIntroduction = ({
  children,
  renderMarkdown = text => {
    return text;
  },
}) => {
  if (isString(children)) {
    return (
      <p className="article_introduction">{parse(renderMarkdown(children))}</p>
    );
  }
  if (children) {
    return <p className="article_introduction">{children}</p>;
  }
  return null;
};

ArticleIntroduction.propTypes = {
  children: PropTypes.node,
  renderMarkdown: PropTypes.func,
};

export const Article = ({
  article,
  icon,
  additional,
  licenseBox,
  modifier,
  messages,
  children,
  locale,
  competenceGoals,
  id,
  renderMarkdown,
}) => {
  const {
    title,
    introduction,
    published,
    content,
    footNotes,
    copyright: { license: licenseObj, creators, rightsholders, processors },
  } = article;

  const license = getLicenseByAbbreviation(licenseObj.license, locale)
    .abbreviation;

  let authors = creators;
  if (Array.isArray(authors) && authors.length === 0) {
    authors = rightsholders;
  }
  if (Array.isArray(authors) && authors.length === 0) {
    authors = processors;
  }

  return (
    <ArticleWrapper modifier={modifier} id={id}>
      <LayoutItem layout="center">
        <ArticleHeaderWrapper competenceGoals={competenceGoals}>
          <ArticleTitle icon={icon} label={messages.label}>
            {title}
          </ArticleTitle>
          <ArticleIntroduction renderMarkdown={renderMarkdown}>
            {introduction}
          </ArticleIntroduction>
          <ArticleByline
            {...{
              authors,
              published,
              license,
              additional,
              licenseBox,
            }}
          />
        </ArticleHeaderWrapper>
      </LayoutItem>
      <LayoutItem layout="center">
        <ArticleContent content={content} />
      </LayoutItem>
      <LayoutItem layout="center">
        {footNotes && footNotes.length > 0 && (
          <ArticleFootNotes footNotes={footNotes} />
        )}
      </LayoutItem>
      <LayoutItem layout="extend">{children}</LayoutItem>
    </ArticleWrapper>
  );
};

Article.propTypes = {
  article: ArticleShape.isRequired,
  modifier: PropTypes.string,
  icon: PropTypes.node,
  licenseBox: PropTypes.node,
  locale: PropTypes.string,
  additional: PropTypes.bool,
  competenceGoals: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  children: PropTypes.node,
  id: PropTypes.string,
  messages: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
  renderMarkdown: PropTypes.func,
};

Article.defaultProps = {
  licenseBox: null,
  additional: null,
  competenceGoals: null,
  icon: null,
  children: null,
};

export default Article;
