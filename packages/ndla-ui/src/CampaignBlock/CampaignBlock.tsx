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
  topLeftImage: Image;
  bottomRightImage: Image;
}

interface ImageProps {
  isTwoImages: boolean;
}

interface IsTwoImagesProps {
  isTwoImages: boolean;
}

const Container = styled.div<IsTwoImagesProps>`
  width: 390px;
  display: grid;
  grid-template-columns: 20px 350px 20px;
  grid-template-rows: auto auto auto auto auto;
  padding: ${spacing.large} 0;
  border: 1px #deebf6 solid;
  border-radius: 4px;
  ${mq.range({ from: breakpoints.tabletWide })} {
    width: 1100px;
    grid-template-columns: 180px 640px 205px;
    grid-template-rows: auto auto auto;
    padding: ${spacing.medium};
    ${(Props) =>
      !Props.isTwoImages &&
      css`
        grid-template-columns: 32px 655px 338px;
      `}
  }
`;

const StyledHeader = styled.h2<IsTwoImagesProps>`
  grid-column: 2/3;
  grid-row: 1/2;
  margin-top: 0;
  margin-bottom: ${spacing.small};
  ${(Props) =>
    !Props.isTwoImages &&
    css`
      margin-bottom: 0;
    `}
`;

const StyledDescription = styled.p`
  grid-column: 2/3;
  grid-row: 3/4;
  margin: 0;
  font-family: ${fonts.serif};
  padding: ${spacing.small} 0 ${spacing.medium};
  ${mq.range({ from: breakpoints.tabletWide })} {
    grid-row: 2/3;
    padding-right: ${spacing.medium};
  }
`;

const LeftImage = styled.img<ImageProps>`
  max-width: 160px;
  min-width: 160px;
  grid-column: 2/3;
  grid-row: 2/3;
  ${(Props) =>
    !Props.isTwoImages &&
    css`
      min-width: 288px;
      grid-column: 2/3;
      grid-row: 5/6;
      justify-self: center;
    `}
  ${mq.range({ from: breakpoints.tabletWide })} {
    grid-column: 1/2;
    align-self: center;
    ${(Props) =>
      !Props.isTwoImages &&
      css`
        grid-column: 3/4;
        justify-self: center;
        grid-row: 1/4;
      `}
  }
`;

const RightImage = styled.img<ImageProps>`
  max-width: 200px;
  min-width: 200px;
  grid-column: 2/3;
  grid-row: 5/6;
  ${(Props) =>
    !Props.isTwoImages &&
    css`
      min-width: 288px;
      grid-row: 5/6;
      justify-self: center;
    `}
  ${mq.range({ from: breakpoints.tabletWide })} {
    grid-column: 3/4;
    grid-row: 2/3;
    align-self: center;
    ${(Props) =>
      !Props.isTwoImages &&
      css`
        min-width: 288px;
        grid-column: 3/4;
        justify-self: center;
        grid-row: 1/4;
      `}
  }
`;

const StyledLink = styled(SafeLink)<IsTwoImagesProps>`
  grid-column: 2/3;
  grid-row: 4/5;
  box-shadow: none;
  text-decoration: underline;
  color: ${colors.brand.primary};
  ${mq.range({ until: breakpoints.tabletWide })} {
    padding-bottom: ${spacing.small};
  }
  ${(Props) =>
    !Props.isTwoImages &&
    css`
      grid-row: 4/5;
      ${mq.range({ from: breakpoints.tabletWide })} {
        grid-row: 3/4;
      }
    `};
`;

const CampaignBlock = ({ title, topLeftImage, description, bottomRightImage, url }: Props) => {
  const isTwoImages = !!topLeftImage.url && !!bottomRightImage.url;
  return (
    <Container isTwoImages={isTwoImages}>
      <StyledHeader isTwoImages={isTwoImages}>{title.title}</StyledHeader>
      <LeftImage isTwoImages={isTwoImages} src={topLeftImage.url} />
      <StyledDescription>{description.text}</StyledDescription>
      <StyledLink isTwoImages={isTwoImages} to={url.url}>
        {url.text}
        <Forward />
      </StyledLink>
      <RightImage isTwoImages={isTwoImages} src={bottomRightImage.url} />
    </Container>
  );
};

export default CampaignBlock;
