/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SafeLink from '@ndla/safelink';
import { colors, fonts, misc, spacing } from '@ndla/core';
import { Quote } from '@ndla/icons/editor';
import { HeadingLevel } from '../types';

interface Props {
  title: {
    title: string;
    language: string;
  };
  author?: string;
  url: string;
  headingLevel?: HeadingLevel;
  size?: 'normal' | 'large';
  metaImage: {
    url: string;
    alt: string;
  };
}

const Container = styled(SafeLink)`
  display: flex;
  flex-direction: column;
  color: ${colors.text.primary};
  max-width: 350px;
  min-width: 350px;
  max-height: 415px;
  min-height: 415px;
  gap: ${spacing.nsmall};
  box-shadow: none;
  border: 1px solid ${colors.brand.lightest};
  border-radius: ${misc.borderRadius};
  padding: ${spacing.normal} ${spacing.medium};
  &[data-size='large'] {
    min-width: 532px;
    max-width: 532px;
    min-height: 550px;
    max-height: 550px;
  }
  &:hover,
  &:focus-within {
    .blog-title {
      box-shadow: inset 0 -1px;
    }
  }
`;

const headingCss = css`
  display: inline-block;
  width: fit-content;
  margin: 0;
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('26px', '36px')};
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
  svg {
    color: rgba(78, 81, 242, 1);
  }
  text-transform: uppercase;
`;

const StyledImg = styled.img`
  border-radius: ${misc.borderRadius};
  flex: 1;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border: 0;
`;

const BlogPost = ({ title, author, url, metaImage, headingLevel: Heading = 'h3', size = 'normal' }: Props) => {
  return (
    <Container data-size={size} to={url}>
      <Heading className="blog-title" css={headingCss} lang={title.language}>
        {title.title}
      </Heading>
      <StyledImg src={metaImage.url} alt={metaImage.alt} />
      {!!author && (
        <AuthorContainer>
          <Quote />
          {author}
        </AuthorContainer>
      )}
    </Container>
  );
};

export default BlogPost;
