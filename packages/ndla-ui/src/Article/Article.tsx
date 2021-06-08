/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';
import styled from "@emotion/styled"
import { getLicenseByAbbreviation } from '@ndla/licenses';
import isString from 'lodash/isString';
import parse from 'html-react-parser';

import { mq, breakpoints, fonts } from '@ndla/core';
import { useIntersectionObserver } from '@ndla/hooks';
import { injectT, tType } from '@ndla/i18n';
import { Article as ArticleType, Locale } from '../types';
import ArticleFootNotes from './ArticleFootNotes';
import ArticleContent from './ArticleContent';
import ArticleByline from './ArticleByline';
// @ts-ignore
import LayoutItem from '../Layout';
import ArticleHeaderWrapper from './ArticleHeaderWrapper';
import ArticleNotions, { NotionItem, NotionRelatedContent } from './ArticleNotions';

const classes = new BEMHelper({
  name: 'article',
  prefix: 'c-',
});

type ArticleWrapperProps = {
  id: string;
  modifier: string;
  children: ReactNode;
};

export const ArticleWrapper = React.forwardRef<HTMLElement, ArticleWrapperProps>(({ children, modifier, id }, ref) => (
  <article id={id} {...classes(undefined, modifier)} ref={ref}>
    {children}
  </article>
));

type ArticleTitleProps = {
  icon: boolean;
  label: string;
  children: ReactNode;
};

export const ArticleTitle = ({ children, icon, label }: ArticleTitleProps) => {
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
      <h1 tabIndex={0}>{children}</h1>
    </div>
  );
};

type ArticleIntroductionProps = {
  children: ReactNode;
  renderMarkdown: (text: string) => string;
};

export const ArticleIntroduction = ({
  children,
  renderMarkdown = text => {
    return text;
  },
}: ArticleIntroductionProps) => {
  if (isString(children)) {
    return <p className="article_introduction">{parse(renderMarkdown(children))}</p>;
  }
  if (children) {
    return <p className="article_introduction">{children}</p>;
  }
  return null;
};

type Messages = {
  label: string;
};

type Props = {
  additional: string;
  article: ArticleType;
  children: ReactNode;
  competenceGoals: Function | string[];
  competenceGoalTypes: string[];
  copyPageUrlLink: string;
  icon: boolean;
  id: string;
  licenseBox: ReactNode;
  locale: Locale;
  messages: Messages;
  modifier: string;
  notions: { list: NotionItem[], related: NotionRelatedContent[] };
  onReferenceClick: React.MouseEventHandler;
  printUrl: string;
  renderMarkdown: (text: string) => string;
};

const getArticleContent = (content: any, locale: Locale) => {
  switch (typeof content) {
    case 'string':
      return <ArticleContent content={content} locale={locale} />;
    case 'function':
      return content();
    default:
      return content;
  }
};

export const Article = ({
  additional,
  article,
  children,
  competenceGoals,
  competenceGoalTypes,
  copyPageUrlLink,
  icon,
  id,
  licenseBox,
  locale,
  messages,
  modifier,
  notions,
  onReferenceClick,
  printUrl,
  renderMarkdown,
}: Props & tType) => {
  const [articleRef, { entry }] = useIntersectionObserver({
    root: null,
    rootMargin: '100%',
    threshold: 0.15,
  });

  const showExplainNotions = entry && entry.isIntersecting;

  const {
    title,
    introduction,
    published,
    content,
    footNotes,
    copyright: { license: licenseObj, creators, rightsholders, processors },
  } = article;

  const license = getLicenseByAbbreviation(licenseObj.license, locale).abbreviation;

  let authors = creators;
  if (Array.isArray(authors) && authors.length === 0) {
    authors = processors;
  }
  const suppliers = rightsholders.length ? rightsholders : undefined;

  return (
    <ArticleWrapper modifier={modifier} id={id} ref={articleRef}>
      <LayoutItem layout="center">
        <ArticleHeaderWrapper
          competenceGoals={competenceGoals}
          competenceGoalTypes={competenceGoalTypes}>
          <ArticleTitle icon={icon} label={messages.label}>
            {title}
          </ArticleTitle>
          <ArticleIntroduction renderMarkdown={renderMarkdown}>{introduction}</ArticleIntroduction>
        </ArticleHeaderWrapper>
      </LayoutItem>
      <LayoutItem layout="center">
        {showExplainNotions && (
          <>
            <ArticleNotions
              locale={locale}
              notions={notions.list}
              onReferenceClick={onReferenceClick}
              relatedContent={notions.related}
              renderMarkdown={renderMarkdown}
            />
          </>
        )}
        {getArticleContent(content, locale)}
      </LayoutItem>
      <LayoutItem layout="center">
        {footNotes && footNotes.length > 0 && <ArticleFootNotes footNotes={footNotes} />}
        <ArticleByline
          copyPageUrlLink={copyPageUrlLink}
          {...{
            authors,
            suppliers,
            published,
            license,
            additional,
            licenseBox,
            printUrl,
          }}
        />
      </LayoutItem>
      <LayoutItem layout="extend">{children}</LayoutItem>
    </ArticleWrapper>
  );
};

export default injectT(Article);
