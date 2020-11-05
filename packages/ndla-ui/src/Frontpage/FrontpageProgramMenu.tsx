import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';
// @ts-ignore
import Button from '@ndla/button';
import { fonts } from '@ndla/core';
import { breakpoints, mq } from '@ndla/core';
import NavigationBox, { ItemProps } from '../Navigation/NavigationBox';
import ComponentCursor from '../ComponentCursor';
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
  position: relative;
  margin-bottom: 28px;
  > *:first-of-type {
    margin-right: 10px;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: 40px;
  }
`;
const StyledMenuItem = styled.span`
  font-weight: ${fonts.weight.semibold};
`;

type Props = {
  programItems: [ItemProps];
  subjectCategories: subjectsProps['categories'];
};

const FrontpageProgramMenu = ({
  programItems,
  subjectCategories,
  t,
}: Props & tType) => {
  const [showSubjects, setShowSubjects] = useState(false);
  const isWindowContext = typeof window !== 'undefined';

  useEffect(() => {
    if (isWindowContext) {
      const rememberSubjects =
        window.localStorage.getItem('frontpageShowSubjects') || '';
      setShowSubjects(rememberSubjects.localeCompare('true') === 0);
    }
  }, []);

  const toggleSubjects = (toggle: boolean) => {
    setShowSubjects(toggle);
    if (isWindowContext) {
      window.localStorage.setItem('frontpageShowSubjects', `${toggle}`);
    }
  };

  return (
    <StyledWrapper>
      <StyledMenu>
        <ComponentCursor variant="right" text={t('frontpageMenu.cursorText')} />
        <Button
          onClick={() => toggleSubjects(false)}
          lighter={showSubjects}
          size="medium"
          borderShape="rounded">
          <StyledMenuItem>{t('frontpageMenu.program')}</StyledMenuItem>
        </Button>
        <Button
          onClick={() => toggleSubjects(true)}
          lighter={!showSubjects}
          size="medium"
          borderShape="rounded">
          <StyledMenuItem>{t('frontpageMenu.allsubjects')}</StyledMenuItem>
        </Button>
      </StyledMenu>
      {showSubjects ? (
        <FrontpageAllSubjects categories={subjectCategories} />
      ) : (
        <NavigationBox
          colorMode="lighterGrey"
          items={programItems}
          listDirection="horizontal"
        />
      )}
    </StyledWrapper>
  );
};

export default injectT(FrontpageProgramMenu);
