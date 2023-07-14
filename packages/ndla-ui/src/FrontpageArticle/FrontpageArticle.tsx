/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
import styled from '@emotion/styled';
import { Article } from '../types';
import LayoutItem from '../Layout';
import { Heading } from '../Typography';
import { ArticleByline } from '../Article';

interface Props {
  article: Article;
  children?: ReactNode;
  id: string;
  isWide?: boolean;
  licenseBox?: ReactNode;
}

const StyledArticle = styled.article`
  max-width: 773px;
  &[data-wide='true'] {
    max-width: 1100px;
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

export const FrontpageArticle = ({ article, id, isWide, licenseBox }: Props) => {
  const { title, introduction, content } = article;

  if (isWide) {
    return (
      <StyledArticle data-wide={isWide}>
        <LayoutItem>{content}</LayoutItem>
      </StyledArticle>
    );
  }

  const authors =
    article.copyright.creators.length || article.copyright.rightsholders.length
      ? article.copyright.creators
      : article.copyright.processors;
  return (
    <StyledArticle>
      <LayoutItem>
        <Heading id={id} headingStyle="h1" element="h1" margin="normal" tabIndex={-1}>
          {title}
        </Heading>
        <StyledIntroduction>{introduction}</StyledIntroduction>
      </LayoutItem>
      <LayoutItem>{content}</LayoutItem>
      <ArticleByline
        authors={authors}
        suppliers={article.copyright.rightsholders}
        license={article.copyright.license?.license!}
        published={article.published}
        footnotes={article.footNotes}
        isFrontpageArticle={true}
        licenseBox={licenseBox}
      />
    </StyledArticle>
  );
};

export default FrontpageArticle;
