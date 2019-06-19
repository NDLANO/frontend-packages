/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, colors, fonts } from '@ndla/core';
// @ts-ignore
import { SafeLink } from '@ndla/ui';
// @ts-ignore
import { Launch as LaunchIcon } from '@ndla/icons/common';

interface StyledBlogProps {
  backgroundImage: string;
}

const StyledBlog = styled.div<StyledBlogProps>`
  padding: ${spacing.medium} ${spacing.normal};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  min-height: 250px;
  > div {
    position: relative;
    z-index: 1;
  }
  &:before {
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:after {
    background: #000;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.3;
  }
`;

const StyledHeading = styled.h1`
  ${fonts.sizes(26, 1.1)};
  font-weight: ${fonts.weight.bold};
  color: #fff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0 ${spacing.large} ${spacing.normal} 0;
`;

const StyledSafeLink = styled(SafeLink)`
  background: #fff;
  padding: ${spacing.xsmall} ${spacing.small};
  color: ${colors.brand.primary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  ${fonts.sizes(14, 1.2)};
  transition: all 200ms ease;
  svg {
    margin-left: 2px;
  }
  &:hover, &:focus {
    box-shadow: none;
    background: ${colors.brand.primary};
    color: #fff;
  }
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
    <div>
      <StyledHeading>{text}</StyledHeading>
      <StyledSafeLink
        to={externalLink}
        target="_blank"
      >
        <span>{linkText} <LaunchIcon /></span>
      </StyledSafeLink>
    </div>
  </StyledBlog>
);

export default BlogPost;
