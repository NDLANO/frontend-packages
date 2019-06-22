/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { LinkProps } from 'react-router-dom';
import { spacing, colors, fonts, breakpoints, mq, misc } from '@ndla/core';
// @ts-ignore
import { Launch as LaunchIcon } from '@ndla/icons/common';
// @ts-ignore
import SafeLink from '../common/SafeLink';

interface StyledBlogProps {
  backgroundImage: string;
}

const UntilTabletSize = styled.div`
  ${mq.range({ from: breakpoints.tablet })} {
    display: none;
  }
`;

const FromTabletSize = styled.div`
  ${mq.range({ until: breakpoints.tablet })} {
    display: none;
  }
`;

const StyledBlog = styled.div<StyledBlogProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
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
  ${mq.range({ from: breakpoints.tablet })} {
    min-height: 250px;
    padding: ${spacing.medium} ${spacing.normal};
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
    > * {
      position: relative;
      z-index: 1;
    }
  }
  ${mq.range({ until: breakpoints.tablet })} {
    padding: 0;
    &:before {
      position: static;
      height: 30vw;
      width: 100%;
      border-radius: ${misc.borderRadius};
    }
  }
`;

const StyledHeading = styled.h1`
  color: ${colors.brand.primary};
  ${fonts.sizes(16, 1.2)};
  margin: ${spacing.small} 0 ${spacing.xsmall} ;
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes(26, 1.1)};
    font-weight: ${fonts.weight.bold};
    color: #fff;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    margin: 0 ${spacing.large} ${spacing.normal} 0;
  }
`;

const StyledSafeLink = styled(SafeLink)<LinkProps>`
  ${mq.range({ from: breakpoints.tablet })} {
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
  }
  ${mq.range({ until: breakpoints.tablet })} {
    box-shadow: none;
    span {
      box-shadow: none;
      color: ${colors.brand.grey};
      ${fonts.sizes(14, 1.2)};
      text-transform: upperCase;
    }
    &:hover, &:focus {
      ${StyledHeading} {
        text-decoration: underline;
      }
    }
  }
`;

interface Props {
  text: string;
  externalLink: string;
  linkText: string;
  linkTextShort: string;
  image: {
    url: string;
    alt: string;
  }
}

export const BlogPost: React.FunctionComponent<Props> = ({
  text,
  externalLink,
  linkText,
  linkTextShort,
  image,
}) => (
  <>
    <FromTabletSize>
      <StyledBlog backgroundImage={image.url} aria-label={image.alt}>
        <StyledHeading>{text}</StyledHeading>
        <StyledSafeLink
          to={externalLink}
          aria-label={text}
          target="_blank"
        >
          <span>
            {linkText}
            <LaunchIcon />
          </span>
        </StyledSafeLink>
      </StyledBlog>
    </FromTabletSize>
    <UntilTabletSize>
      <StyledSafeLink
        to={externalLink}
        target="_blank"
        aria-label={text}
      >
        <StyledBlog backgroundImage={image.url} aria-label={image.alt} />
        <StyledHeading>{text}</StyledHeading>
        <span>
          {linkTextShort}
          <LaunchIcon />
        </span>
      </StyledSafeLink>
    </UntilTabletSize>
  </>
);

export default BlogPost;