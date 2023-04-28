/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
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
}

const Container = styled.div`
  max-width: 390px;
  display: flex;
  flex-direction: column;
  border: 1px ${colors.brand.lighter} solid;
  border-radius: ${misc.borderRadius};
  padding: ${spacing.large} ${spacing.nsmall};
  ${mq.range({ from: breakpoints.tabletWide })} {
    max-width: 1100px;
    flex-direction: row;
    padding: ${spacing.medium};
  }
`;

const StyledHeader = styled.h2`
  margin: 0;
`;

const StyledDescription = styled.p`
  font-family: ${fonts.serif};
  margin: ${spacing.normal} 0 ${spacing.medium};
`;

const ImageBefore = styled.img`
  max-width: 160px;
  max-height: 145px;
  padding-bottom: ${spacing.nsmall};
  ${mq.range({ from: breakpoints.tabletWide })} {
    align-self: center;
    padding-right: ${spacing.nsmall};
  }
`;

const ImageAfter = styled.img`
  max-width: 200px;
  max-height: 155px;
  padding-top: ${spacing.nsmall};
  ${mq.range({ from: breakpoints.tabletWide })} {
    align-self: center;
    padding-left: ${spacing.nsmall};
  }
`;

const StyledLink = styled(SafeLink)`
  box-shadow: none;
  text-decoration: underline;
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
  headingLevel: StyledHeader = 'h2',
  imageAfter,
  url,
}: Props) => {
  return (
    <Container>
      {imageBefore && <ImageBefore src={imageBefore.src} />}
      <div>
        <StyledHeader>{title.title}</StyledHeader>
        <StyledDescription>{description.text}</StyledDescription>
        <StyledLink to={url.url}>
          {url.text}
          <Forward />
        </StyledLink>
      </div>
      {imageAfter && <ImageAfter src={imageAfter.src} />}
    </Container>
  );
};

export default CampaignBlock;
