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
import { HeadingLevel } from '../types';

interface Image {
  src: string;
  alt: string;
}
export interface Program {
  id: string;
  programTitle: {
    title: string;
    language: string;
  };
  headingLevel?: HeadingLevel;
  programIMGDesk: Image;
  programIMGMob: Image;
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
  margin-bottom: ${spacing.nsmall};
  align-self: center;
  box-shadow: none;
  &:hover {
    text-decoration: underline ${colors.text.primary};
    text-underline-offset: 3px;
    cursor: pointer;
  }
`;

const StyledCardIMG = styled.img`
  display: none;
  ${mq.range({ from: breakpoints.tablet })} {
    width: auto;
    border-radius: ${misc.borderRadius} ${misc.borderRadius} 0 0;
    display: block;
  }
`;

const StyledCardIMGMob = styled.img`
  display: none;
  ${mq.range({ until: breakpoints.tablet })} {
    width: 350px;
    border-radius: ${misc.borderRadius} ${misc.borderRadius} 0 0;
    display: block;
  }
`;

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.text.primary};
  padding: ${spacing.nsmall};
  border: 1px solid ${colors.brand.lighter};
  border-radius: 0 0 ${misc.borderRadius} ${misc.borderRadius};
  * {
    margin: 0;
  }
`;

const ProgramCard = ({
  programTitle,
  programIMGDesk,
  programIMGMob,
  headingLevel: StyledCardTitle = 'h4',
  url,
}: Program) => {
  return (
    <StyledCardContainer to={url}>
      <StyledCardIMG src={programIMGDesk.src} />
      <StyledCardIMGMob src={programIMGMob.src} />
      <StyledTitleContainer>
        <StyledCardTitle>{programTitle.title}</StyledCardTitle>
      </StyledTitleContainer>
    </StyledCardContainer>
  );
};

export default ProgramCard;
