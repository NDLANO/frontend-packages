/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import BEMHelper from 'react-bem-helper';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import isString from 'lodash/isString';
import parse from 'html-react-parser';

import { useIntersectionObserver } from '@ndla/hooks';
import { resizeObserver } from '@ndla/util';
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
  modifier?: string;
  children: ReactNode;
};

export const ArticleWrapper = React.forwardRef<HTMLElement, ArticleWrapperProps>(
  ({ children, modifier, id }, ref) => (
    <article id={id} {...classes(undefined, modifier)} ref={ref}>
      {children}
    </article>
  ),
);

type ArticleTitleProps = {
  icon?: ReactNode;
  label?: string;
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
  renderMarkdown = (text) => {
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
  article: ArticleType;
  icon?: ReactNode;
  licenseBox?: ReactNode;
  modifier?: string;
  children: ReactNode;
  messages: Messages;
  locale: Locale;
  competenceGoals?: Function | string[];
  competenceGoalTypes?: string[];
  id: string;
  renderMarkdown: (text: string) => string;
  copyPageUrlLink?: string;
  printUrl?: string;
  notions?: { list: NotionItem[]; related: NotionRelatedContent[] };
  onReferenceClick?: React.MouseEventHandler;
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
  article,
  icon,
  licenseBox,
  modifier,
  messages,
  children,
  competenceGoals,
  competenceGoalTypes,
  copyPageUrlLink,
  id,
  locale,
  notions,
  onReferenceClick,
  printUrl,
  renderMarkdown,
}: Props) => {
  const [articleRef, { entry }] = useIntersectionObserver({
    root: null,
    rootMargin: '400px',
    threshold: 0.25,
  });
  const [articlePositionRight, setArticlePositionRight] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const showExplainNotions = entry && entry.isIntersecting;

  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      const handler = () => {
        if (wrapperRef && wrapperRef.current) {
          const offset =
            wrapperRef.current.getBoundingClientRect().left +
            wrapperRef.current.getBoundingClientRect().width;
          setArticlePositionRight(offset);
        }
      };
      handler();

      return resizeObserver(document.body, handler);
    }
  }, [wrapperRef]);

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
    <div ref={wrapperRef}>
      <ArticleWrapper modifier={modifier} id={id} ref={articleRef}>
        <LayoutItem layout="center">
          <ArticleHeaderWrapper
            competenceGoals={competenceGoals}
            competenceGoalTypes={competenceGoalTypes}>
            <ArticleTitle icon={icon} label={messages.label}>
              {title}
            </ArticleTitle>
            <ArticleIntroduction renderMarkdown={renderMarkdown}>
              {introduction}
            </ArticleIntroduction>
          </ArticleHeaderWrapper>
        </LayoutItem>
        <LayoutItem layout="center">
          {notions && showExplainNotions && (
            <>
              <ArticleNotions
                locale={locale}
                notions={notions.list}
                onReferenceClick={onReferenceClick}
                relatedContent={notions.related}
                renderMarkdown={renderMarkdown}
                buttonOffsetRight={articlePositionRight}
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
              licenseBox,
              printUrl,
            }}
          />
        </LayoutItem>
        <LayoutItem layout="extend">{children}</LayoutItem>
      </ArticleWrapper>
    </div>
  );
};

export default Article;
