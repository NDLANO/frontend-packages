import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { fonts, breakpoints, mq } from '@ndla/core';

const StyledCardContainer = styled.div`
  ${mq.range({ from: breakpoints.tablet })} {
    height: 350px;
    width: 250px;
    margin-bottom: 22px;
    margin-left: 22px;
  }
  width: 350px;
  height: 195px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #deebf6;
  border-radius: 4px;
  margin-bottom: 22px;
  align-self: center;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledCardIMG = styled.img`
  display: none;
  ${mq.range({ from: breakpoints.tablet })} {
    width: auto;
    border-radius: 4px 4px 0px 0px;
    display: block;
  }
`;

const StyledCardIMGMob = styled.img`
  display: none;
  ${mq.range({ until: breakpoints.tablet })} {
    width: 350px;
    border-radius: 4px 4px 0px 0px;
    display: block;
  }
`;

const StyledTitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`;

const StyledCardTitle = styled.p`
  color: #444444;
  margin: 0 20px;
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 16px;
`;

type Props = {
  programTitel: string;
  programIMGDesk: string;
  programIMGMob: string;
};

const FrontpageEducationalProgramsCard = ({ programTitel, programIMGDesk, programIMGMob }: Props) => {
  return (
    <StyledCardContainer>
      <StyledCardIMG src={programIMGDesk} />
      <StyledCardIMGMob src={programIMGMob} />
      <StyledTitleContainer>
        <StyledCardTitle>{programTitel}</StyledCardTitle>
      </StyledTitleContainer>
    </StyledCardContainer>
  );
};

export default FrontpageEducationalProgramsCard;
