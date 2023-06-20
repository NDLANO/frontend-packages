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
  title: {
    title: string;
    language: string;
  };
  desktopImage: Image;
  mobileImage: Image;
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

const StyledImg = styled.img`
  display: none;
  border-radius: ${misc.borderRadius} ${misc.borderRadius} 0 0;
  &[data-is-mobile='true'] {
    ${mq.range({ until: breakpoints.tablet })} {
      display: block;
      width: auto;
    }
  }
  &[data-is-mobile='false'] {
    ${mq.range({ from: breakpoints.tablet })} {
      display: block;
      width: 350px;
    }
  }
`;

const StyledTitle = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.text.primary};
  height: 70px;
  padding-left: ${spacing.nsmall};
  border: 1px solid ${colors.brand.lighter};
  border-radius: 0 0 ${misc.borderRadius} ${misc.borderRadius};
`;

const ProgrammeCard = ({ id, title, desktopImage, mobileImage, url }: Programme) => {
  return (
    <StyledCardContainer key={id} to={url}>
      <StyledImg data-is-mobile="false" src={desktopImage.src} alt={desktopImage.alt} />
      <StyledImg data-is-mobile="true" src={mobileImage.src} alt={mobileImage.alt} />
      <StyledTitle>{title.title}</StyledTitle>
    </StyledCardContainer>
  );
};

export default ProgrammeCard;
