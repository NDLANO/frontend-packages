/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { spacing, colors, fonts, breakpoints, mq, misc, spacingUnit } from '@ndla/core';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import { LicenseByline } from '@ndla/notion';
import { Launch as LaunchIcon } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';

type StyledBlogProps = {
  backgroundImage: string;
  oneColumn?: boolean;
};

interface StyledLicenseProps {
  light?: boolean;
}
const StyledLicense = styled.span<StyledLicenseProps>`
  color: ${(p) => (p.light ? colors.white : colors.text.primary)};
  position: absolute !important;
  background: rgba(0, 0, 0, 0.2);
  bottom: ${spacing.xsmall};
  display: flex;
  align-items: center;
  padding: ${spacing.xsmall};
  border-radius: ${spacing.normal};
  li {
    padding-bottom: 0 !important;
    &:last-child {
      padding-right: ${spacing.xsmall};
    }
  }
  ${fonts.sizes(12, 1)};
  ${mq.range({ from: breakpoints.tablet })} {
    right: ${spacing.xsmall};
  }
  ${mq.range({ until: breakpoints.tablet })} {
    left: ${spacingUnit * 0.75}px;
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
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  padding: ${spacing.medium} ${spacing.normal};
  height: 100%;
  &:after {
    background: #000;
    content: '';
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
  ${mq.range({ from: breakpoints.tabletWide })} {
    ${(props) =>
      props.oneColumn &&
      `
    min-height: 400px;`}
  }
`;

const StyledTag = styled.div`
  ${mq.range({ from: breakpoints.tablet })} {
    background: ${colors.brand.greyLightest};
    padding: 0 ${spacingUnit / 6}px;
    color: ${colors.text.primary};
    border-radius: ${misc.borderRadius};
    ${fonts.sizes(12, '20px')};
    font-weight: ${fonts.weight.semibold};
    transition: all 200ms ease;
  }
  ${mq.range({ until: breakpoints.tablet })} {
    color: #fff;
    ${fonts.sizes(12, 1.2)};
    text-transform: upperCase;
  }
`;

const StyledSafeLink = styled(SafeLink)`
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
  &:hover,
  &:focus {
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
  };
  oneColumn?: boolean;
  lightLicense?: boolean;
};

export const BlogPost = ({
  text,
  externalLink,
  linkText,
  image,
  license,
  licenseAuthor,
  locale,
  oneColumn,
  lightLicense = true,
}: Props) => {
  const { rights } = getLicenseByAbbreviation(license || '', 'nb');
  return (
    <>
      <div>
        <StyledBlog oneColumn={oneColumn} backgroundImage={image.url}>
          <StyledTag>{linkText}</StyledTag>
          <StyledSafeLink to={externalLink} target="_blank" aria-label={text}>
            <span>
              {text}
              <LaunchIcon />
            </span>
          </StyledSafeLink>
          <StyledLicense light={lightLicense}>
            <LicenseByline locale={locale} color="#fff" licenseRights={rights} light={lightLicense} />
            {licenseAuthor}
          </StyledLicense>
        </StyledBlog>
      </div>
    </>
  );
};

export default BlogPost;
