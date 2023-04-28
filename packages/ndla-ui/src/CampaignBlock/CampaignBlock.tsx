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
import { breakpoints, colors, fonts, spacing, mq } from '@ndla/core';

interface Image {
  url: string;
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
  url: {
    url: string;
    text: string;
  };
  imageBefore: undefined | Image;
  imageAfter: Image | undefined;
}

const Container = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  border: 1px #deebf6 solid;
  border-radius: 4px;
  padding: ${spacing.large} ${spacing.nsmall};
  ${mq.range({ from: breakpoints.tabletWide })} {
    width: 1100px;
    flex-direction: row;
    padding: ${spacing.medium};
  }
`;

const TextWrapper = styled.div``;

const StyledHeader = styled.h2`
  margin: 0;
`;

const StyledDescription = styled.p`
  font-family: ${fonts.serif};
  margin: ${spacing.normal} 0 ${spacing.medium};
  ${mq.range({ from: breakpoints.tabletWide })} {
  }
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
`;

const CampaignBlock = ({ title, imageBefore, description, imageAfter, url }: Props) => {
  return (
    <Container>
      {imageBefore.url && <ImageBefore src={imageBefore.url} />}
      <TextWrapper>
        <StyledHeader>{title.title}</StyledHeader>
        <StyledDescription>{description.text}</StyledDescription>
        <StyledLink to={url.url}>
          {url.text}
          <Forward />
        </StyledLink>
      </TextWrapper>
      {imageAfter.url && <ImageAfter src={imageAfter.url} />}
    </Container>
  );
};

export default CampaignBlock;
