/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import SafeLink from '@ndla/safelink';
import { spacing, colors, misc, breakpoints, mq } from '@ndla/core';

interface Image {
  src: string;
  alt: string;
}
export interface Programme {
  id: string;
  programmeTitle: {
    title: string;
    language: string;
  };
  programmeImgDesk: Image;
  programmeImgMob: Image;
  url: string;
}

const StyledCardContainer = styled(SafeLink)`
  ${mq.range({ from: breakpoints.tablet })} {
    height: 350px;
    width: 250px;
  }
  max-width: 350px;
  height: 195px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background.default};
  border-radius: ${misc.borderRadius};
  align-self: center;
  box-shadow: none;
  &:hover,
  &:focus-visible {
    text-decoration: underline ${colors.text.primary};
    text-underline-offset: 3px;
  }
`;

const StyledCardImg = styled.img`
  display: none;
  ${mq.range({ from: breakpoints.tablet })} {
    width: auto;
    border-radius: ${misc.borderRadius} ${misc.borderRadius} 0 0;
    display: block;
  }
`;

const StyledCardImgMob = styled.img`
  display: none;
  ${mq.range({ until: breakpoints.tablet })} {
    width: 350px;
    border-radius: ${misc.borderRadius} ${misc.borderRadius} 0 0;
    display: block;
  }
`;

const StyledCardTitle = styled.span`
  color: ${colors.text.primary};
  padding: ${spacing.normal} 0 ${spacing.normal} ${spacing.nsmall};
  border: 1px solid ${colors.brand.lighter};
  border-radius: 0 0 ${misc.borderRadius} ${misc.borderRadius};
`;

const ProgrammeCard = ({ programmeTitle, programmeImgDesk, programmeImgMob, url }: Programme) => {
  return (
    <StyledCardContainer to={url}>
      <StyledCardImg src={programmeImgDesk.src} alt={programmeImgDesk.alt} />
      <StyledCardImgMob src={programmeImgMob.src} alt={programmeImgMob.alt} />
      <StyledCardTitle>{programmeTitle.title}</StyledCardTitle>
    </StyledCardContainer>
  );
};

export default ProgrammeCard;
