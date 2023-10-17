/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useEffect, useRef, useState, forwardRef } from 'react';
import BEMHelper from 'react-bem-helper';
import styled from '@emotion/styled';

import { useIntersectionObserver } from '@ndla/hooks';
import { resizeObserver } from '@ndla/util';
import { spacing, spacingUnit, mq, breakpoints } from '@ndla/core';
import { Heading, Text } from '@ndla/typography';
import { Article as ArticleType } from '../types';
import ArticleByline from './ArticleByline';
import LayoutItem from '../Layout';
import ArticleHeaderWrapper from './ArticleHeaderWrapper';
import ArticleNotions from './ArticleNotions';
import ArticleAccessMessage from './ArticleAccessMessage';
import MessageBox from '../Messages/MessageBox';

const classes = new BEMHelper({
  name: 'article',
  prefix: 'c-',
});

type ArticleWrapperProps = {
  modifier?: string;
  children: ReactNode;
};

export const ArticleWrapper = forwardRef<HTMLElement, ArticleWrapperProps>(({ children, modifier }, ref) => (
  <article {...classes(undefined, modifier)} ref={ref}>
    {children}
  </article>
));

type ArticleTitleProps = {
  icon?: ReactNode;
  label?: string;
  children: ReactNode;
  id: string;
  lang?: string;
};

export const ArticleTitle = ({ children, icon, label, id, lang }: ArticleTitleProps) => {
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
      <Heading element="h1" headingStyle="h1-resource" id={id} tabIndex={-1} lang={lang}>
        {children}
      </Heading>
    </div>
  );
};

type ArticleIntroductionProps = {
  children: ReactNode;
  lang?: string;
};

export const ArticleIntroduction = ({ children, lang }: ArticleIntroductionProps) => {
  if (children) {
    return (
      <Text textStyle="ingress" element="div" lang={lang}>
        {children}
      </Text>
    );
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

const ArticleFavoritesButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  transform: translate(${spacing.xsmall}, -${spacing.normal});
  ${mq.range({ from: breakpoints.tablet })} {
    transform: translate(${spacing.normal}, -${spacing.medium});
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    transform: translate(${spacing.large}, -${spacing.medium});
  }
  ${mq.range({ from: breakpoints.desktop })} {
    transform: translate(${spacingUnit * 5.5}px, -${spacing.medium});
  }
`;

type Props = {
  heartButton?: ReactNode;
  article: ArticleType;
  icon?: ReactNode;
  licenseBox?: ReactNode;
  modifier?: string;
  children?: ReactNode;
  messages: Messages;
  contentTransformed?: boolean;
  messageBoxLinks?: [];
  competenceGoals?: ReactNode;
  id: string;
  notions?: ReactNode;
  accessMessage?: string;
  lang?: string;
};

const getArticleContent = (content: any, contentTransformed?: boolean) => {
  if (contentTransformed) {
    return content;
  }
  switch (typeof content) {
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
  id,
  notions,
  accessMessage,
  heartButton,
  contentTransformed,
  lang,
}: Props) => {
  const articleRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { entry } = useIntersectionObserver({
    rootMargin: '400px',
    target: articleRef.current,
    threshold: 0.1,
  });
  const [articlePositionRight, setArticlePositionRight] = useState(0);

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

  const { title, introduction, published, content, footNotes, copyright } = article;

  const authors =
    copyright?.creators.length || copyright?.rightsholders.length ? copyright.creators : copyright?.processors;

  return (
    <div ref={wrapperRef}>
      <ArticleWrapper modifier={modifier} ref={articleRef}>
        <LayoutItem layout="center">
          {accessMessage && <ArticleAccessMessage message={accessMessage} />}

          {messages.messageBox && (
            <MSGboxWrapper>
              <MessageBox links={messageBoxLinks}>{messages.messageBox}</MessageBox>
            </MSGboxWrapper>
          )}
          <ArticleHeaderWrapper competenceGoals={competenceGoals}>
            {heartButton ? <ArticleFavoritesButtonWrapper>{heartButton}</ArticleFavoritesButtonWrapper> : null}
            <ArticleTitle id={id} icon={icon} label={messages.label} lang={lang}>
              {title}
            </ArticleTitle>
            <ArticleIntroduction lang={lang}>{introduction}</ArticleIntroduction>
          </ArticleHeaderWrapper>
        </LayoutItem>
        <LayoutItem layout="center">
          {notions && showExplainNotions && (
            <ArticleNotions buttonOffsetRight={articlePositionRight}>{notions}</ArticleNotions>
          )}
          {getArticleContent(content, contentTransformed)}
        </LayoutItem>

        <LayoutItem layout="center">
          <ArticleByline
            footnotes={footNotes}
            authors={authors}
            suppliers={copyright?.rightsholders}
            published={published}
            license={copyright?.license?.license ?? ''}
            licenseBox={licenseBox}
          />
        </LayoutItem>
        <LayoutItem layout="extend">{children}</LayoutItem>
      </ArticleWrapper>
    </div>
  );
};

export default Article;
