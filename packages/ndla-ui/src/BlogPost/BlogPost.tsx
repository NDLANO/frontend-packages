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
import { usePossiblyRelativeUrl } from '../utils/relativeUrl';

export interface Props {
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
  path?: string;
}

const Container = styled(SafeLink)`
  display: flex;
  flex-direction: column;
  color: ${colors.text.primary};
  background-color: ${colors.white};
  max-width: 350px;
  max-height: fit-content;
  gap: ${spacing.nsmall};
  box-shadow: none;
  border: 1px solid ${colors.brand.lighter};
  border-radius: ${misc.borderRadius};
  padding: ${spacing.normal} ${spacing.medium};
  height: 100%;
  &[data-size='large'] {
    max-width: 532px;
  }
  &:hover,
  &:focus-within {
    .blog-title {
      text-decoration: underline;
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

const BlogPost = ({ title, author, url, metaImage, headingLevel: Heading = 'h3', size = 'normal', path }: Props) => {
  const href = usePossiblyRelativeUrl(url, path);
  return (
    <Container data-size={size} to={href}>
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
