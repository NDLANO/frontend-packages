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
import { colors, fonts, misc, spacing } from '@ndla/core';
import { Quote } from '@ndla/icons/editor';
import { HeadingLevel } from '../types';

const leftDemoImage = 'https://api.test.ndla.no/image-api/raw/LkmDGtip.png';
const rightDemoImage = 'https://api.test.ndla.no/image-api/raw/LkmDGtip.png';

interface Props {
  title: string;
  description: string;
  url: string;
  urlText: string;
  topLeftImage?: {
    url: string;
    alt: string;
  };
  bottomRightImage: {
    url: string;
    alt: string;
  };
}

interface ImageProps {
  isTopLeftImage: boolean;
}

const Container = styled.div`
  width: 390px;
  display: grid;
  grid-template-columns: 20px 350px 20px;
  grid-template-rows: auto auto auto auto;
  border: red solid 2px;
`;

const StyledHeader = styled.h2`
  grid-column: 2/3;
  grid-row: 1/2;
`;

const LeftImage = styled.img`
  max-width: 160px;
  min-width: 160px;
  grid-column: 1/2;
  grid-row: 2/3;
`;

const StyledDescription = styled.p`
  grid-column: 2/3;
  grid-row: 3/4;
`;

const StyledLink = styled.a`
  grid-column: 2/3;
  grid-row: 4/5;
`;

const RightImage = styled.img`
  max-width: 200px;
  min-width: 200px;
  grid-column: 3/4;
  grid-row: 4/5;
  justify-self: flex-end;
`;

const CampaignBlock = ({}) => {
  return (
    <Container>
      <StyledHeader>NDLA film</StyledHeader>
      <LeftImage src={leftDemoImage} />
      <StyledDescription>
        NDLA film er en tjeneste i samarbeid med Norgesfilm. Denne tjenesten lar deg se en rekke spillefilmer,
        kortfilmer, dokumentarer og serier. Du kan også se undervisningsfilm og filmklipp. Velkommen inn i filmens
        verden!
      </StyledDescription>
      <StyledLink href="">Gå til NDLA film</StyledLink>
      <RightImage src={rightDemoImage} />
    </Container>
  );
};

export default CampaignBlock;
