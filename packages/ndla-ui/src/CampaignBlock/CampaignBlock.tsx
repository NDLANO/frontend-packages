/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SafeLink from '@ndla/safelink';
import { Forward } from '@ndla/icons/common';
import { breakpoints, colors, fonts, spacing, mq, misc } from '@ndla/core';
import { HeadingLevel } from '../types';

interface Image {
  src: string;
  alt: string;
}
interface Props {
  title: {
    title: string;
    language: string;
  };
  description: {
    text: string;
    language: string;
  };
  headingLevel?: HeadingLevel;
  url: {
    url: string;
    text: string;
  };
  imageBefore?: Image;
  imageAfter?: Image;
  className?: string;
}

const Container = styled.div`
  max-width: 390px;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
  border: 1px ${colors.brand.lighter} solid;
  border-radius: ${misc.borderRadius};
  padding: ${spacing.normal} ${spacing.small};
  ${mq.range({ from: breakpoints.tabletWide })} {
    max-width: 1100px;
    flex-direction: row;
  }
`;

const headingStyle = css`
  margin: 0;
`;

const StyledDescription = styled.p`
  font-family: ${fonts.serif};
  margin: ${spacing.normal} 0 ${spacing.medium};
`;

const StyledImg = styled.img`
  max-height: 200px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    align-self: center;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    align-self: center;
  }
`;

const StyledLink = styled(SafeLink)`
  display: flex;
  align-items: center;
  gap: ${spacing.xxsmall};
  box-shadow: none;
  text-decoration: underline;
  font-weight: ${fonts.weight.semibold};
  color: ${colors.brand.primary};
  &:hover,
  &:focus-visible {
    text-decoration: none;
  }
`;

const CampaignBlock = ({
  title,
  imageBefore,
  description,
  headingLevel: Heading = 'h2',
  imageAfter,
  url,
  className,
}: Props) => {
  return (
    <Container className={className}>
      {imageBefore && <StyledImg src={imageBefore.src} data-left={true} />}
      <div>
        <Heading css={headingStyle}>{title.title}</Heading>
        <StyledDescription>{description.text}</StyledDescription>
        <StyledLink to={url.url}>
          {url.text}
          <Forward />
        </StyledLink>
      </div>
      {imageAfter && <StyledImg src={imageAfter.src} data-right={true} />}
    </Container>
  );
};

export default CampaignBlock;
