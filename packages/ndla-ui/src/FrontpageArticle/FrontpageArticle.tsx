/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CSSProperties, ReactNode, useMemo } from 'react';
import styled from '@emotion/styled';
import { spacing, spacingUnit } from '@ndla/core';
import { Heading, Text } from '@ndla/typography';
import { ArticleByline } from '../Article';
import { useMastheadHeight } from '../Masthead';
import { Article } from '../types';

interface Props {
  article: Omit<Article, 'footNotes'>;
  id: string;
  isWide?: boolean;
  licenseBox?: ReactNode;
  lang?: string;
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
    margin-top: ${spacing.xxlarge};
  }

  &[data-wide='true'] {
    max-width: 1100px;
    h2[id] {
      margin-top: ${spacing.xxlarge};
    }
    div[data-type='campaign-block'] {
      margin: ${spacing.xxlarge} 0px;
    }
  }
`;

export const FrontpageArticle = ({ article, id, isWide, licenseBox, lang }: Props) => {
  const { height = 0 } = useMastheadHeight();
  const cssVars = useMemo(() => ({ '--masthead-height': `${height}px` }) as unknown as CSSProperties, [height]);
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
      <Heading id={id} headingStyle="h1-resource" element="h1" margin="normal" tabIndex={-1} lang={lang}>
        {title}
      </Heading>
      <Text textStyle="ingress" element="div" lang={lang}>
        {introduction}
      </Text>
      {content}
      <ArticleByline accordionHeaderVariant={'white'} licenseBox={licenseBox} displayByline={false} />
    </StyledArticle>
  );
};

export default FrontpageArticle;
