import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ButtonV2 } from '@ndla/button';
import { fonts, breakpoints, mq } from '@ndla/core';
import { useTranslation } from 'react-i18next';
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
  programItems: ItemProps[];
  subjectCategories: subjectsProps['categories'];
  showBetaCursor?: boolean;
};

const FrontpageProgramMenu = ({ programItems, subjectCategories }: Props) => {
  const { t } = useTranslation();
  const [showSubjects, setShowSubjects] = useState(false);
  const isWindowContext = typeof window !== 'undefined';

  useEffect(() => {
    if (isWindowContext) {
      const rememberSubjects = window.localStorage.getItem('frontpageShowSubjects') || '';
      setShowSubjects(rememberSubjects.localeCompare('true') === 0);
    }
  }, [isWindowContext]);

  const toggleSubjects = (toggle: boolean) => {
    setShowSubjects(toggle);
    if (isWindowContext) {
      window.localStorage.setItem('frontpageShowSubjects', `${toggle}`);
    }
  };

  return (
    <StyledWrapper>
      <StyledMenu>
        <ButtonV2
          onClick={() => toggleSubjects(false)}
          colorTheme={showSubjects ? 'lighter' : undefined}
          size="medium"
          shape="pill"
        >
          <StyledMenuItem>{t('frontpageMenu.program')}</StyledMenuItem>
        </ButtonV2>
        <ButtonV2
          onClick={() => toggleSubjects(true)}
          colorTheme={!showSubjects ? 'lighter' : undefined}
          size="medium"
          shape="pill"
        >
          <StyledMenuItem>{t('frontpageMenu.allsubjects')}</StyledMenuItem>
        </ButtonV2>
      </StyledMenu>
      {showSubjects ? (
        <FrontpageAllSubjects categories={subjectCategories} />
      ) : (
        <NavigationBox colorMode="greyLightest" items={programItems} listDirection="vertical" />
      )}
    </StyledWrapper>
  );
};

export default FrontpageProgramMenu;
