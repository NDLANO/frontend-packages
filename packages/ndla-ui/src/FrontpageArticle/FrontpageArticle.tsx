/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Article } from '../types';
import LayoutItem from '../Layout';

type Props = {
  article: Article;
  icon?: ReactNode;
  children?: ReactNode;
  id: string;
  isWide?: boolean;
};

const StyledArticle = styled.article`
  max-width: 773px;
  &[data-wide='true'] {
    max-width: 1100px;
  }
`;

const StyledLayoutItem = styled(LayoutItem)`
  > section {
    > figure,
    > iframe {
      width: 100% !important;
      left: 0;
    }
  }
`;
const StyledHeader = styled.h1`
  &[data-wide='true'] {
    position: absolute;
    top: -100000000%;
    right: -10000000000%;
  }
`;

export const FrontpageArticle = ({ article, icon, id, isWide }: Props) => {
  const { title, introduction, content } = article;

  return (
    <>
      <StyledArticle data-wide={isWide} id={id}>
        <StyledLayoutItem>
          <div>
            {icon}
            <StyledHeader data-wide={isWide} tabIndex={-1}>
              {title}
            </StyledHeader>
            <div>{introduction}</div>
          </div>
        </StyledLayoutItem>
        <StyledLayoutItem>{content}</StyledLayoutItem>
      </StyledArticle>
    </>
  );
};

export default FrontpageArticle;
