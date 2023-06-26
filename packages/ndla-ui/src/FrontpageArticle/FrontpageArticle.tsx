/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import { breakpoints, fonts, mq, spacing, utils } from '@ndla/core';
import styled from '@emotion/styled';
import { Article } from '../types';
import LayoutItem from '../Layout';
import { Heading } from '../Typography';

interface Props {
  article: Article;
  children?: ReactNode;
  id: string;
  isWide?: boolean;
}

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

const StyledHeading = styled(Heading)`
  &[data-wide='true'] {
    ${utils.visuallyHidden};
  }
`;

const StyledIntroduction = styled.div`
  font-weight: ${fonts.weight.light};
  font-family: ${fonts.sans};
  margin-top: ${spacing.small};
  ${fonts.sizes('22px', '30px')};

  ${mq.range({ from: breakpoints.tablet })} {
    margin-top: ${spacing.mediumlarge};
    ${fonts.sizes('26px', '36px')};
  }
`;

export const FrontpageArticle = ({ article, id, isWide }: Props) => {
  const { title, introduction, content } = article;

  return (
    <>
      {isWide ? (
        <StyledArticle data-wide={isWide}>
          <StyledLayoutItem>
            <StyledHeading id={id} headingStyle="h1" element="h1" data-wide={isWide} tabIndex={-1}>
              {title}
            </StyledHeading>
            <StyledIntroduction>{introduction}</StyledIntroduction>
          </StyledLayoutItem>
          <StyledLayoutItem>{content}</StyledLayoutItem>
        </StyledArticle>
      ) : (
        <StyledArticle>
          <StyledLayoutItem>
            <StyledHeading id={id} headingStyle="h1" element="h1" margin="normal" tabIndex={-1}>
              {title}
            </StyledHeading>
            <StyledIntroduction>{introduction}</StyledIntroduction>
          </StyledLayoutItem>
          <StyledLayoutItem>{content}</StyledLayoutItem>
        </StyledArticle>
      )}
    </>
  );
};

export default FrontpageArticle;
