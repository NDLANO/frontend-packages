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
  imageBefore: Image;
  imageAfter: Image;
}

interface ImageProps {
  isTwoImages: boolean;
}

interface IsTwoImagesProps {
  isTwoImages: boolean;
}

const Container = styled.div<IsTwoImagesProps>`
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

const StyledHeader = styled.h2<IsTwoImagesProps>`
  margin: 0;
`;

const StyledDescription = styled.p`
  font-family: ${fonts.serif};
  margin: ${spacing.normal} 0 ${spacing.medium};
  ${mq.range({ from: breakpoints.tabletWide })} {
  }
`;

const ImageBefore = styled.img<ImageProps>`
  max-width: 160px;
  padding-bottom: ${spacing.nsmall};
`;

const ImageAfter = styled.img<ImageProps>`
  max-width: 200px;
  padding-top: ${spacing.nsmall};

  ${mq.range({ from: breakpoints.tabletWide })} {
  }
`;

const StyledLink = styled(SafeLink)<IsTwoImagesProps>`
  box-shadow: none;
  text-decoration: underline;
  color: ${colors.brand.primary};
`;

const CampaignBlock = ({ title, imageBefore, description, imageAfter, url }: Props) => {
  const isTwoImages = !!imageBefore.url && !!imageAfter.url;
  return (
    <Container isTwoImages={isTwoImages}>
      {imageBefore.url && <ImageBefore isTwoImages={isTwoImages} src={imageBefore.url} />}
      <TextWrapper>
        <StyledHeader isTwoImages={isTwoImages}>{title.title}</StyledHeader>
        <StyledDescription>{description.text}</StyledDescription>
        <StyledLink isTwoImages={isTwoImages} to={url.url}>
          {url.text}
          <Forward />
        </StyledLink>
      </TextWrapper>
      {imageAfter.url && <ImageAfter isTwoImages={isTwoImages} src={imageAfter.url} />}
    </Container>
  );
};

export default CampaignBlock;
