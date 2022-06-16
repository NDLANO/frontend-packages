/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ComponentType, ReactNode, useEffect, useRef, useState, forwardRef } from 'react';
import BEMHelper from 'react-bem-helper';
import isString from 'lodash/isString';
import parse from 'html-react-parser';
import styled from '@emotion/styled';

import { useIntersectionObserver } from '@ndla/hooks';
import { resizeObserver } from '@ndla/util';
import { Article as ArticleType, Locale } from '../types';
import ArticleFootNotes from './ArticleFootNotes';
import ArticleContent from './ArticleContent';
import ArticleByline from './ArticleByline';
import LayoutItem from '../Layout';
import ArticleHeaderWrapper from './ArticleHeaderWrapper';
import ArticleNotions, { NotionRelatedContent } from './ArticleNotions';
import ArticleAccessMessage from './ArticleAccessMessage';
import MessageBox from '../MessageBox/MessageBox';
import { ConceptNotionType } from '../Notion/ConceptNotion';

const classes = new BEMHelper({
  name: 'article',
  prefix: 'c-',
});

type ArticleWrapperProps = {
  id: string;
  modifier?: string;
  children: ReactNode;
};

export const ArticleWrapper = forwardRef<HTMLElement, ArticleWrapperProps>(({ children, modifier, id }, ref) => (
  <article id={id} {...classes(undefined, modifier)} ref={ref}>
    {children}
  </article>
));

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
  messageBox?: string;
};
const MSGboxWrapper = styled.div`
  margin-bottom: 50px;
`;

type Props = {
  article: ArticleType;
  icon?: ReactNode;
  licenseBox?: ReactNode;
  modifier?: string;
  children?: ReactNode;
  messages: Messages;
  locale: Locale;
  messageBoxLinks?: [];
  competenceGoals?:
    | ((inp: { Dialog: ComponentType; dialogProps: { isOpen: boolean; onClose: () => void } }) => ReactNode)
    | ReactNode
    | null;
  competenceGoalTypes?: string[];
  id: string;
  renderMarkdown: (text: string) => string;
  copyPageUrlLink?: string;
  printUrl?: string;
  notions?: { list: ConceptNotionType[]; related: NotionRelatedContent[] };
  accessMessage?: string;
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
  messageBoxLinks,
  children,
  competenceGoals,
  competenceGoalTypes,
  copyPageUrlLink,
  id,
  locale,
  notions,
  printUrl,
  renderMarkdown,
  accessMessage,
}: Props) => {
  const [articleRef, { entry }] = useIntersectionObserver({
    root: null,
    rootMargin: '400px',
    threshold: 0.1,
  });
  const [articlePositionRight, setArticlePositionRight] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const showExplainNotions = entry && entry.isIntersecting;

  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      const handler = () => {
        if (wrapperRef && wrapperRef.current) {
          const offset =
            wrapperRef.current.getBoundingClientRect().left + wrapperRef.current.getBoundingClientRect().width;
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

  const authors = creators.length || rightsholders.length ? creators : processors;

  return (
    <div ref={wrapperRef}>
      <ArticleWrapper modifier={modifier} id={id} ref={articleRef}>
        <LayoutItem layout="center">
          {accessMessage && <ArticleAccessMessage message={accessMessage} />}

          {messages.messageBox && (
            <MSGboxWrapper>
              <MessageBox links={messageBoxLinks}>{messages.messageBox}</MessageBox>
            </MSGboxWrapper>
          )}
          <ArticleHeaderWrapper competenceGoals={competenceGoals} competenceGoalTypes={competenceGoalTypes}>
            <ArticleTitle icon={icon} label={messages.label}>
              {title}
            </ArticleTitle>
            <ArticleIntroduction renderMarkdown={renderMarkdown}>{introduction}</ArticleIntroduction>
          </ArticleHeaderWrapper>
        </LayoutItem>
        <LayoutItem layout="center">
          {notions && showExplainNotions && (
            <ArticleNotions
              notions={notions.list}
              relatedContent={notions.related}
              buttonOffsetRight={articlePositionRight}
            />
          )}
          {getArticleContent(content, locale)}
        </LayoutItem>

        <LayoutItem layout="center">
          {footNotes && footNotes.length > 0 && <ArticleFootNotes footNotes={footNotes} />}
          <ArticleByline
            copyPageUrlLink={copyPageUrlLink}
            authors={authors}
            suppliers={rightsholders}
            published={published}
            license={licenseObj.license}
            licenseBox={licenseBox}
            printUrl={printUrl}
          />
        </LayoutItem>
        <LayoutItem layout="extend">{children}</LayoutItem>
      </ArticleWrapper>
    </div>
  );
};

export default Article;
