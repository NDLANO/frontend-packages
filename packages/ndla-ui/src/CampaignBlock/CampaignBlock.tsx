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
import { breakpoints, colors, fonts, misc, spacing, mq } from '@ndla/core';
import { Quote } from '@ndla/icons/editor';
import { HeadingLevel } from '../types';

const leftDemoImage = 'https://api.test.ndla.no/image-api/raw/LkmDGtip.png';
const rightDemoImage = 'https://api.test.ndla.no/image-api/raw/LkmDGtip.png';

interface Props {
  title: string;
  description: string;
  url: string;
  urlText: string;
  topLeftImage: string;
  bottomRightImage: string;
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
  grid-template-rows: auto auto auto auto;
  border: red solid 2px;
  padding: 48px 0px;
  ${mq.range({ from: breakpoints.tabletWide })} {
    width: 1100px;
    grid-template-columns: 180px 715px 205px;
    grid-template-rows: auto auto auto;
    padding: 32px 0px;
    ${(Props) =>
      !Props.isTwoImages &&
      css`
        grid-template-columns: 32px 730px 338px;
      `}
  }
`;

const StyledHeader = styled.h2`
  grid-column: 2/3;
  grid-row: 1/2;
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledDescription = styled.p`
  grid-column: 2/3;
  grid-row: 3/4;
  ${mq.range({ from: breakpoints.tabletWide })} {
    grid-row: 2/3;
  }
`;

const LeftImage = styled.img<ImageProps>`
  max-width: 160px;
  min-width: 160px;
  grid-column: 1/2;
  grid-row: 2/3;
  ${(Props) =>
    !Props.isTwoImages &&
    css`
      min-width: 288px;
      grid-column: 2/3;
      grid-row: 4/5;
      justify-self: center;
    `}
  ${mq.range({ from: breakpoints.tabletWide })} {
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

const RightImage = styled.img<ImageProps>`
  max-width: 200px;
  min-width: 200px;
  grid-column: 3/4;
  grid-row: 4/5;
  justify-self: flex-end;
  ${(Props) =>
    !Props.isTwoImages &&
    css`
      min-width: 288px;
      grid-column: 2/3;
      justify-self: center;
    `}
  ${mq.range({ from: breakpoints.tabletWide })} {
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

const StyledLink = styled.a<IsTwoImagesProps>`
  grid-column: 2/3;
  grid-row: 4/5;
  box-shadow: none;
  ${(Props) =>
    !Props.isTwoImages &&
    css`
      grid-row: 5/6;
      ${mq.range({ from: breakpoints.tabletWide })} {
        grid-row: 3/4;
      }
    `}
`;

const CampaignBlock = ({ topLeftImage = leftDemoImage, bottomRightImage = rightDemoImage }: Props) => {
  const isTwoImages = !!topLeftImage && !!bottomRightImage;
  return (
    <Container isTwoImages={isTwoImages}>
      <StyledHeader>NDLA film</StyledHeader>
      <LeftImage isTwoImages={isTwoImages} src={topLeftImage} />
      <StyledDescription>
        NDLA film er en tjeneste i samarbeid med Norgesfilm. Denne tjenesten lar deg se en rekke spillefilmer,
        kortfilmer, dokumentarer og serier. Du kan også se undervisningsfilm og filmklipp. Velkommen inn i filmens
        verden!
      </StyledDescription>
      <StyledLink isTwoImages={isTwoImages} href="">
        Gå til NDLA film
      </StyledLink>
      <RightImage isTwoImages={isTwoImages} src={bottomRightImage} />
    </Container>
  );
};

export default CampaignBlock;
