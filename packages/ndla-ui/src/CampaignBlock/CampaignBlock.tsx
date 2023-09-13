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
import { Forward } from '@ndla/icons/common';
import { breakpoints, colors, fonts, spacing, mq, misc } from '@ndla/core';
import { HeadingLevel } from '../types';
import { usePossiblyRelativeUrl } from '../utils/relativeUrl';

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
  path?: string;
}

const Container = styled.div`
  max-width: 390px;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
  border: 1px ${colors.brand.lighter} solid;
  border-radius: ${misc.borderRadius};
  padding: ${spacing.normal} ${spacing.small};
  background-color: ${colors.white};
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
  align-self: center;
`;

const StyledLink = styled(SafeLink)`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.xxsmall};
  color: ${colors.brand.primary};
`;

const TextWrapper = styled.div`
  flex-grow: 1;
`;

const CampaignBlock = ({
  title,
  imageBefore,
  description,
  headingLevel: Heading = 'h2',
  imageAfter,
  url,
  path,
  className,
}: Props) => {
  const href = usePossiblyRelativeUrl(url.url, path);
  return (
    <Container className={className} data-type="campaign-block">
      {imageBefore && <StyledImg src={imageBefore.src} height={200} width={240} alt="" />}
      <TextWrapper>
        <Heading css={headingStyle}>{title.title}</Heading>
        <StyledDescription>{description.text}</StyledDescription>
        <StyledLink to={href}>
          {url.text}
          <Forward />
        </StyledLink>
      </TextWrapper>
      {imageAfter && <StyledImg src={imageAfter.src} height={200} width={240} alt="" />}
    </Container>
  );
};

export default CampaignBlock;
