/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import { Article as ArticleType, Locale } from '../types';
import LayoutItem from '../Layout';
import FrontpageArticleAccessMessage from './FrontpageArticleAccessMessage';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';

type Messages = {
  label: string;
  messageBox?: string;
};

type Props = {
  article: ArticleType;
  icon?: ReactNode;
  licenseBox?: ReactNode;
  children?: ReactNode;
  messages: Messages;
  locale: Locale;
  id: string;
  accessMessage?: string;
};

const StyledArticle = styled.article`
  width: 1100px;
  background-color: ${colors.background.grayDark};
`;

export const FrontpageArticle = ({ article, icon, messages, id, accessMessage }: Props) => {
  const { title, introduction, content } = article;

  return (
    <>
      <StyledArticle id={id}>
        <LayoutItem layout="center">
          {accessMessage && <FrontpageArticleAccessMessage message={accessMessage} />}
          <div>
            {icon}
            {messages.label ? <p>{messages.label}</p> : null}
            <h1 tabIndex={-1}>{title}</h1>
            {title}
            <div className="article_introduction">{introduction}</div>
          </div>
        </LayoutItem>
        <LayoutItem layout="center">{content}</LayoutItem>
      </StyledArticle>
    </>
  );
};

export default FrontpageArticle;
