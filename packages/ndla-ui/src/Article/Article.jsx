/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { getLicenseByAbbreviation } from 'ndla-licenses';
import isString from 'lodash/isString';
import { isMobile } from 'react-device-detect';

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

export class ArticleHeaderWrapper extends Component {
  componentDidMount() {
    if (isMobile) {
      const heroContentList = document.querySelectorAll('.c-article__header');
      if (heroContentList.length === 1) {
        heroContentList[0].scrollIntoView(true);
        window.scrollBy(0, heroContentList[0].offsetTop - 120); // Adjust for header
      }
    }
  }

  render() {
    return <div {...classes('header')}>{this.props.children}</div>;
  }
}

ArticleHeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ArticleTitle = ({ children, icon, label, hasCompetenceGoals }) => {
  const modifiers = [];
  if (icon) {
    modifiers.push('icon');
  }

  if (hasCompetenceGoals) {
    modifiers.push('with-competence-goals');
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

export const ArticleIntroduction = ({ children }) => {
  if (isString(children)) {
    /* Since article introduction is already escaped from the api
       we run into a double escaping issues as React escapes all strings.
       Use dangerouslySetInnerHTML to circumvent the issue */
    return (
      <p
        className="article_introduction"
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }
  if (children) {
    return <p className="article_introduction">{children}</p>;
  }
  return null;
};

ArticleIntroduction.propTypes = {
  children: PropTypes.node,
};

export const Article = ({
  article: {
    title,
    introduction,
    updated,
    content,
    footNotes,
    copyright: { license: licenseObj, creators, rightsholders },
  },
  icon,
  additional,
  licenseBox,
  modifier,
  messages,
  children,
  competenceGoals,
  competenceGoalsNarrow,
}) => {
  const license = getLicenseByAbbreviation(licenseObj.license).abbreviation;
  const showCreators = Array.isArray(creators) && creators.length > 0;
  const authors = showCreators ? creators : rightsholders;

  return (
    <ArticleWrapper modifier={modifier}>
      <LayoutItem layout="center">
        <ArticleHeaderWrapper>
          {competenceGoals}
          <ArticleTitle
            icon={icon}
            label={messages.label}
            hasCompetenceGoals={competenceGoals !== null}>
            {title}
          </ArticleTitle>
          <ArticleIntroduction>{introduction}</ArticleIntroduction>
          <ArticleByline
            {...{
              authors,
              updated,
              license,
              additional,
              licenseBox,
            }}
          />
          {competenceGoalsNarrow}
        </ArticleHeaderWrapper>
      </LayoutItem>
      <LayoutItem layout="center">
        <ArticleContent content={content} />
      </LayoutItem>
      <LayoutItem layout="center">
        {footNotes &&
          footNotes.length > 0 && <ArticleFootNotes footNotes={footNotes} />}
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
  additional: PropTypes.bool,
  competenceGoals: PropTypes.node,
  competenceGoalsNarrow: PropTypes.node,
  children: PropTypes.node,
  messages: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
};

Article.defaultProps = {
  licenseBox: null,
  additional: null,
  competenceGoals: null,
  competenceGoalsNarrow: null,
  icon: null,
  children: null,
};

export default Article;
