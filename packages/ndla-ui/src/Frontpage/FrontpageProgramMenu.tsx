import React, { useState } from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import Button from '@ndla/button';
import { fonts } from '@ndla/core';
import { breakpoints, mq } from '@ndla/core';
import NavigationBox, { ItemProps } from '../Navigation/NavigationBox';
import FrontpageAllSubjects, { subjectsProps } from './FrontpageAllSubjects';

const StyledWrapper = styled.div`
  margin: 0 0 60px;
  padding-top: 4px;
  ${mq.range({ from: breakpoints.desktop })} {
    padding-top: 16px;
    margin: 0 0 134px;
  }
`;

const StyledMenu = styled.div`
  margin-bottom: 28px;
  > *:first-of-type {
    margin-right: 10px;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: 40px;
  }
`;
const StyledMenuItem = styled.span`
  text-transform: uppercase;
  font-weight: ${fonts.weight.bold};
`;

type Props = {
  programItems: [ItemProps];
  subjectCategories: subjectsProps['categories'];
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

const FrontpageProgramMenu = ({
  programItems,
  subjectCategories,
  t,
}: Props) => {
  const [showSubjects, setShowSubjects] = useState(false);

  return (
    <StyledWrapper>
      <StyledMenu>
        <Button
          onClick={() => setShowSubjects(false)}
          lighter={showSubjects}
          size="medium"
          borderShape="rounded">
          <StyledMenuItem>{t('frontpageMenu.program')}</StyledMenuItem>
        </Button>
        <Button
          onClick={() => setShowSubjects(true)}
          lighter={!showSubjects}
          size="medium"
          borderShape="rounded">
          <StyledMenuItem>{t('frontpageMenu.allsubjects')}</StyledMenuItem>
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

export default injectT(FrontpageProgramMenu);
