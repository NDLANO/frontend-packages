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
import ProgramCard from '../ProgramCard/ProgramCard';
import { Program } from '../ProgramCard/ProgramCard';
import { HeadingLevel } from '../types';

const StyledProgramsHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledProgramsPreamble = styled.p`
  color: ${colors.text.primary};
  ${fonts.sizes('24px', '35px')};
  font-weight: 400;
  margin: 0 0 ${spacing.mediumlarge};
`;

const StyledProgramsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mq.range({ from: breakpoints.tablet })} {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`;

interface Programs {
  programsTitle: {
    title: string;
    language: string;
  };
  programsHeadingLevel?: HeadingLevel;
  preamble: {
    text: string;
    language: string;
  };
  programs: Program[];
}

const EducationalPrograms = ({
  programsTitle,
  programs,
  programsHeadingLevel: StyledProgramsTitle = 'h1',
  preamble,
}: Programs) => {
  return (
    <div>
      <StyledProgramsHeaderContainer>
        <StyledProgramsTitle>{programsTitle.title}</StyledProgramsTitle>
        <StyledProgramsPreamble>{preamble.text}</StyledProgramsPreamble>
      </StyledProgramsHeaderContainer>
      <StyledProgramsCardsContainer>
        {programs.map((program) => (
          <ProgramCard
            id={program.id}
            key={program.id}
            programTitle={program.programTitle}
            programIMGDesk={program.programIMGDesk}
            programIMGMob={program.programIMGMob}
            url={program.url}
          />
        ))}
      </StyledProgramsCardsContainer>
    </div>
  );
};

export default EducationalPrograms;
