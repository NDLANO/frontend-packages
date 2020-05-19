import React, { useState } from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import Button from '@ndla/button';
import { fonts } from '@ndla/core';
import NavigationBox, { ItemProps } from '../NavigationBox/NavigationBox';
import FrontpageAllSubjects, { subjectsProps } from './FrontpageAllSubjects';

const StyledWrapper = styled.div`
  margin: 0 0 134px;
  padding-top: 16px;
`;

const StyledMenu = styled.div`
  margin-bottom: 40px;
  > *:first-of-type {
    margin-right: 10px;
  }
`;
const StyledMenuItem = styled.span`
  text-transform: uppercase;
  font-weight: ${fonts.weight.bold};
`;

type Props = {
  programItems: [ItemProps];
  subjectCategories: subjectsProps['categories'];
};

const FrontpageProgramMenu = ({ programItems, subjectCategories }: Props) => {
  const [showSubjects, setShowSubjects] = useState(false);

  return (
    <StyledWrapper>
      <StyledMenu>
        <Button
          onClick={() => setShowSubjects(false)}
          lighter={showSubjects}
          size="medium"
          borderShape="rounded">
          <StyledMenuItem>Utdanningsprogram</StyledMenuItem>
        </Button>
        <Button
          onClick={() => setShowSubjects(true)}
          lighter={!showSubjects}
          size="medium"
          borderShape="rounded">
          <StyledMenuItem>Alle fag</StyledMenuItem>
        </Button>
      </StyledMenu>
      {showSubjects ? (
        <FrontpageAllSubjects categories={subjectCategories} />
      ) : (
        <NavigationBox colorMode="light" items={programItems} />
      )}
    </StyledWrapper>
  );
};

export default FrontpageProgramMenu;
