/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CSSProperties, ReactNode, useMemo } from 'react';
import { breakpoints, fonts, mq, spacing, spacingUnit } from '@ndla/core';
import styled from '@emotion/styled';
import { Article } from '../types';
import LayoutItem from '../Layout';
import { Heading } from '../Typography';
import { ArticleByline } from '../Article';
import { useMastheadHeight } from '../Masthead';

interface Props {
  article: Omit<Article, 'footNotes'>;
  id: string;
  isWide?: boolean;
  licenseBox?: ReactNode;
}

export const FRONTPAGE_ARTICLE_MAX_WIDTH = '773px';
export const WIDE_FRONTPAGE_ARTICLE_MAX_WIDTH = '1100px';

const StyledArticle = styled.article`
  width: 100%;
  max-width: 773px;
  h2[id] {
    margin-top: ${spacing.large};
  }
  div[data-type='campaign-block'] {
    margin: ${spacing.large} 0px;
  }
  div[data-type='grid'] {
    h2,
    h3,
    h4 {
      margin-top: 0px;
    }
  }
  &[data-wide='true'] {
    max-width: 1100px;
    h2[id] {
      margin-top: ${spacingUnit * 4}px;
    }
    div[data-type='campaign-block'] {
      margin: ${spacingUnit * 4}px 0px;
    }
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
  const { height = 0 } = useMastheadHeight();
  const cssVars = useMemo(() => ({ '--masthead-height': `${height}px` } as unknown as CSSProperties), [height]);
  const { title, introduction, content } = article;

  if (isWide) {
    return (
      <StyledArticle data-wide={isWide} style={cssVars}>
        <LayoutItem>{content}</LayoutItem>
      </StyledArticle>
    );
  }

  const authors =
    article.copyright.creators.length || article.copyright.rightsholders.length
      ? article.copyright.creators
      : article.copyright.processors;
  return (
    <StyledArticle style={cssVars}>
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
        accordionHeaderVariant={'white'}
        licenseBox={licenseBox}
      />
    </StyledArticle>
  );
};

export default FrontpageArticle;
