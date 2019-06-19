/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, colors } from '@ndla/core';
import { SafeLink } from '@ndla/ui';

interface StyledBlogProps {
  backgroundImage: string;
}

const StyledBlog = styled.div<StyledBlogProps>`
  background: green;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  padding: ${spacing.normal};
`;

interface Props {
  text: string;
  externalLink: string;
  linkText: string;
  image: {
    url: string;
    alt: string;
  }
}

export const BlogPost: React.FunctionComponent<Props> = ({
  text,
  externalLink,
  linkText,
  image,
}) => (
  <StyledBlog backgroundImage={image.url} aria-label={image.alt}>
    {text}
    <SafeLink to={externalLink} target="_blank">
      {linkText}
    </SafeLink>
  </StyledBlog>
);

export default BlogPost;
