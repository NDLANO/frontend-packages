import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { fonts, breakpoints, mq } from '@ndla/core';

const StyledCardContainer = styled.div`
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #deebf6;
  border-radius: 4px;
`;

const StyledCardIMG = styled.img`
  width: auto;
  border-radius: 4px 4px 0px 0px;
`;

const StyledCardTitle = styled.p`
  color: #444444;
  margin: 23px 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 16px;
`;

type Props = {
  programTitel: string;
  programIMG: string;
};

const FrontpageProgramCard = ({ programTitel, programIMG }: Props) => {
  return (
    <StyledCardContainer>
      <StyledCardIMG src={programIMG} />
      <StyledCardTitle>{programTitel}</StyledCardTitle>
    </StyledCardContainer>
  );
};

export default FrontpageProgramCard;
