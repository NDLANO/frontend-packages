/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts, breakpoints, mq, colors, spacing } from '@ndla/core';
import ProgrammeCard, { Programme } from './ProgrammeCard';
import { HeadingLevel } from '../types';

const StyledProgrammesHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledProgrammesPreamble = styled.p`
  color: ${colors.text.primary};
  ${fonts.sizes('24px', '35px')};
  ${fonts.weight.normal}
  margin: 0 0 ${spacing.mediumlarge};
`;

const StyledProgrammesCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mq.range({ from: breakpoints.tablet })} {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

interface Programmes {
  programmesTitle: {
    title: string;
    language: string;
  };
  programmesHeadingLevel?: HeadingLevel;
  preamble: {
    text: string;
    language: string;
  };
  programmes: Programme[];
}

const EducationalProgrammes = ({
  programmesTitle,
  programmes,
  programmesHeadingLevel: StyledProgramsTitle = 'h1',
  preamble,
}: Programmes) => {
  return (
    <div>
      <StyledProgrammesHeaderContainer>
        <StyledProgramsTitle>{programmesTitle.title}</StyledProgramsTitle>
        <StyledProgrammesPreamble>{preamble.text}</StyledProgrammesPreamble>
      </StyledProgrammesHeaderContainer>
      <StyledProgrammesCardsContainer>
        {programmes.map((programme) => (
          <ProgrammeCard
            id={programme.id}
            key={programme.id}
            programmeTitle={programme.programmeTitle}
            programmeIMGDesk={programme.programmeIMGDesk}
            programmeIMGMob={programme.programmeIMGMob}
            url={programme.url}
          />
        ))}
      </StyledProgrammesCardsContainer>
    </div>
  );
};

export default EducationalProgrammes;
