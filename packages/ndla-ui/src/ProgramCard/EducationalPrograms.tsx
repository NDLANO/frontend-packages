/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts, breakpoints, mq } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import ProgramCard from '../ProgramCard/ProgramCard';
import { Program } from '../ProgramCard/ProgramCard';

const StyledProgramsContainer = styled.div`
  background-color: #f7fafd;
`;

const StyledProgramsHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledProgramsHeader = styled.h1`
  color: #444444;
  font-family: Source Serif Pro;
  font-weight: 700;
  font-size: 48px;
`;

const StyledProgramsIngress = styled.p`
  color: #444444;
  font-family: Source Sans Pro;
  font-weight: 400;
  font-size: 24px;
`;

const StyledProgramsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mq.range({ from: breakpoints.tablet })} {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin-right: 22px;
  }
`;

interface Programs {
  programs: Program[];
}

const EducationalPrograms = ({ programs }: Programs) => {
  return (
    <StyledProgramsContainer>
      <StyledProgramsHeaderContainer>
        <StyledProgramsHeader>Se våre utdanningsprogram</StyledProgramsHeader>
        <StyledProgramsIngress>
          Vi ønsker å tilby dei beste læringsressursene innen tradisjonelle og nye medier.
        </StyledProgramsIngress>
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
    </StyledProgramsContainer>
  );
};

export default EducationalPrograms;
