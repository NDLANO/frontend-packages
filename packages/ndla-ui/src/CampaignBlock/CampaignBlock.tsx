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
import { HeadingLevel } from '@ndla/typography';
import { getPossiblyRelativeUrl } from '../utils/relativeUrl';

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
  image?: Image;
  imageSide?: 'left' | 'right';
  className?: string;
  path?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.normal};
  border: 1px ${colors.brand.lighter} solid;
  border-radius: ${misc.borderRadius};
  padding: ${spacing.normal};
  background-color: ${colors.white};
  &[data-image-side='right'] {
    flex-direction: column-reverse;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    max-width: 1100px;
    flex-direction: row;
    &[data-image-side='right'] {
      flex-direction: row-reverse;
    }
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
  align-self: center;
  object-fit: contain;
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
  image,
  imageSide = 'left',
  description,
  headingLevel: Heading = 'h2',
  url,
  path,
  className,
}: Props) => {
  const href = getPossiblyRelativeUrl(url.url, path);
  return (
    <Container className={className} data-type="campaign-block" data-image-side={imageSide}>
      {image && <StyledImg src={image.src} height={200} width={240} alt={image.alt} />}
      <TextWrapper>
        <Heading css={headingStyle} lang={title.language}>
          {title.title}
        </Heading>
        <StyledDescription lang={description.language}>{description.text}</StyledDescription>
        <StyledLink to={href}>
          {url.text}
          <Forward />
        </StyledLink>
      </TextWrapper>
    </Container>
  );
};

export default CampaignBlock;
