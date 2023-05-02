import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { fonts, breakpoints, mq } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import ProgramCard from '../ProgramCard/ProgramCard';

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
  label: string;
  url: string;
  url2: string;
  id: string;
}
interface Props {
  programs: Programs[];
}

const FrontpageProgramMenuV2 = ({ programs }: Props) => {
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
            key={program.id}
            programTitel={program.label}
            programIMGDesk={program.url}
            programIMGMob={program.url2}
          />
        ))}
      </StyledProgramsCardsContainer>
    </StyledProgramsContainer>
  );
};

export default FrontpageProgramMenuV2;
