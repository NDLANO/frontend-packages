/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CSSProperties, ReactNode, useMemo } from 'react';
import { spacing, spacingUnit } from '@ndla/core';
import styled from '@emotion/styled';
import { Heading, Text } from '@ndla/typography';
import { Article } from '../types';
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

  div[data-type='grid'] + div[data-type='grid'] {
    margin-top: ${spacingUnit * 4}px;
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

export const FrontpageArticle = ({ article, id, isWide, licenseBox }: Props) => {
  const { height = 0 } = useMastheadHeight();
  const cssVars = useMemo(() => ({ '--masthead-height': `${height}px` } as unknown as CSSProperties), [height]);
  const { title, introduction, content } = article;

  if (isWide) {
    return (
      <StyledArticle data-wide={isWide} style={cssVars} id={id}>
        {content}
      </StyledArticle>
    );
  }

  return (
    <StyledArticle style={cssVars}>
      <Heading id={id} headingStyle="h1-resource" element="h1" margin="normal" tabIndex={-1}>
        {title}
      </Heading>
      <Text textStyle="ingress">{introduction}</Text>
      {content}
      <ArticleByline accordionHeaderVariant={'white'} licenseBox={licenseBox} displayByline={false} />
    </StyledArticle>
  );
};

export default FrontpageArticle;
