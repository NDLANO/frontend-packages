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
import { getLicenseByAbbreviation, LicenseByline } from '@ndla/licenses';
// @ts-ignore
import { Launch as LaunchIcon } from '@ndla/icons/common';
// @ts-ignore
import SafeLink from '../common/SafeLink';

type StyledBlogProps = {
  backgroundImage: string;
}

const StyledLicense = styled.span`
  color: #fff;
  position: absolute !important;
  background: rgba(0, 0, 0, 0.2);
  bottom: ${spacing.xsmall};
  display: flex;
  align-items: center;
  padding: ${spacing.xsmall};
  border-radius: ${spacing.normal};
  li {
    padding-bottom: 0 !important;
    svg {
      width: 18px;
      height: 18px;
      min-width: 18px;
    }
    &:last-child {
      padding-right: ${spacing.xsmall};
    }
  }
  ${fonts.sizes(12, 1)};
  ${mq.range({ from: breakpoints.tablet })} {
    right: ${spacing.xsmall};
  }
  ${mq.range({ until: breakpoints.tablet })} {
    left: ${spacing.spacingUnit * 0.75}px;
    bottom: ${spacing.small};
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
  min-height: 250px;
  padding: ${spacing.medium} ${spacing.normal};
  height: 100%;
  &:after {
    background: #000;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
  }
  > * {
    position: relative;
    z-index: 1;
  }
  min-height: 200px;
  ${mq.range({ from: breakpoints.tablet })} {
    min-height: 250px;
  }
`;

const StyledTag = styled.div`
  ${mq.range({ from: breakpoints.tablet })} {
    background: #fff;
    padding: ${spacing.spacingUnit / 6}px ${spacing.xsmall};
    color: ${colors.text.primary};
    border-radius: ${misc.borderRadius};
    ${fonts.sizes(14, 1.2)};
    font-weight: ${fonts.weight.semibold};
    transition: all 200ms ease;
  }
  ${mq.range({ until: breakpoints.tablet })} {
    color: #fff;
    ${fonts.sizes(12, 1.2)};
    text-transform: upperCase;
  }
`;

const StyledSafeLink = styled(SafeLink)<LinkProps>`
  padding: ${spacing.xsmall} 0 ${spacing.small};
  ${fonts.sizes(22, 1.1)};
  font-weight: ${fonts.weight.bold};
  color: #fff;
  margin: 0 ${spacing.large} ${spacing.small} 0;
  box-shadow: none;
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes(26, 1.1)};
    padding: ${spacing.small} 0;
    margin: 0 ${spacing.large} ${spacing.small} 0;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    min-height: 82px;
    margin: 0 ${spacing.large} 0 0;
  }
  svg {
    margin-left: ${spacing.xsmall};
  }
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  span {
    text-decoration: none;
  }
  &:hover, &:focus {
    text-shadow: none;
    span {
      text-decoration: underline;
    }
  }
`;

type Props = {
  text: string;
  externalLink: string;
  linkText: string;
  license?: string;
  licenseAuthor?: string;
  locale: string;
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
  license,
  licenseAuthor,
  locale,
}) => {
  const { rights } = getLicenseByAbbreviation(license, 'nb');
  return (
    <>
      <div>
        <StyledBlog backgroundImage={image.url} aria-label={image.alt}>
          <StyledTag>{linkText}</StyledTag>
          <StyledSafeLink
            to={externalLink}
            target="_blank"
            aria-label={text}
          >
            <span>
              {text}
              <LaunchIcon />
            </span>
          </StyledSafeLink>
          <StyledLicense>
            <LicenseByline
              locale={locale}
              color="#fff"
              licenseRights={rights}
            />
            {licenseAuthor}
          </StyledLicense>
        </StyledBlog>
      </div>
    </>
  )
};

export default BlogPost;