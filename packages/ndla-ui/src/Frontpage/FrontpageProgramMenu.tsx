import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import Button from '@ndla/button';
import { fonts } from '@ndla/core';
import { breakpoints, mq } from '@ndla/core';
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

const CursorPlaceholder = styled.div`
  position: relative;
  display: inline-block;
`;

const CursorWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light+Two&display=swap');
  position: absolute;
  top: -55px;
  left: 38px;
  display: none;
  ${mq.range({ from: breakpoints.tabletWide })} {
    display: flex;
  }
`;

const CursorTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CursorText = styled.span`
  display: inline-block;
  padding-bottom: 10px;
  font-family: 'Shadows Into Light Two', cursive;
  width: 286px;
  text-align: center;
`;

type CursorProps = { hide?: boolean };

const Cursor = styled.div<CursorProps>`
  color: #757575;
  ${(props) =>
    props.hide &&
    `
      visibility: hidden;
    `}
`;

const LeftCursor = styled(Cursor)`
  width: 37px;
  height: 39px;
  margin-top: 26px;
  background-image: url("data:image/svg+xml,%3Csvg width='37' height='39' viewBox='0 0 37 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M35.468 12.6697L35.836 12.3311L36.5131 13.0669L36.1452 13.4055L35.468 12.6697ZM1.00002 25.2236L6.37298 23.1107L5.51639 28.8203L1.00002 25.2236ZM35.8066 13.0376C36.1452 13.4055 36.1451 13.4056 36.145 13.4057C36.1449 13.4058 36.1448 13.4059 36.1446 13.4061C36.1442 13.4065 36.1437 13.4069 36.143 13.4076C36.1416 13.4088 36.1397 13.4106 36.1371 13.413C36.132 13.4177 36.1244 13.4245 36.1146 13.4336C36.0948 13.4516 36.0655 13.4782 36.0272 13.5128C35.9506 13.582 35.8376 13.6834 35.691 13.8131C35.3979 14.0724 34.9705 14.4449 34.4315 14.8994C33.3537 15.8082 31.828 17.046 30.0356 18.3628C26.4632 20.9874 21.784 23.9617 17.4626 25.2388L17.1791 24.2798C21.3265 23.0541 25.8902 20.1675 29.4435 17.5569C31.214 16.2562 32.7218 15.0329 33.7869 14.1349C34.3192 13.686 34.7406 13.3187 35.0284 13.0641C35.1723 12.9368 35.2827 12.8377 35.3569 12.7707C35.3941 12.7372 35.4221 12.7117 35.4407 12.6947C35.4501 12.6862 35.457 12.6798 35.4616 12.6756C35.4639 12.6735 35.4656 12.672 35.4666 12.671C35.4672 12.6705 35.4676 12.6701 35.4678 12.6699C35.4679 12.6698 35.468 12.6698 35.468 12.6697C35.4681 12.6697 35.468 12.6697 35.8066 13.0376ZM17.4626 25.2388C12.8958 26.5885 8.51384 26.6382 5.41026 26.3897L5.49009 25.3929C8.51637 25.6352 12.7668 25.5839 17.1791 24.2798L17.4626 25.2388Z' fill='%23757575'/%3E%3C/svg%3E%0A");
`;

const BottomCursor = styled(Cursor)`
  width: 48px;
  height: 44px;
  margin-right: 90px;
  background-image: url("data:image/svg+xml,%3Csvg width='48' height='44' viewBox='0 0 48 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.4851 0.879004L16.3641 0.393865L15.3939 0.635857L15.5149 1.121L16.4851 0.879004ZM33.5 42L32.1883 36.3775L27.9749 40.3247L33.5 42ZM16 1C15.5149 1.121 15.5149 1.12107 15.5149 1.12121C15.5149 1.12133 15.515 1.12152 15.5151 1.12175C15.5152 1.12223 15.5153 1.12292 15.5156 1.12384C15.516 1.12567 15.5167 1.12839 15.5176 1.13197C15.5194 1.13915 15.5221 1.14981 15.5256 1.1639C15.5327 1.19207 15.5432 1.23393 15.5571 1.28894C15.5849 1.39894 15.6262 1.56153 15.6802 1.7723C15.7883 2.19384 15.9474 2.80818 16.1518 3.58026C16.5604 5.12435 17.1501 7.29976 17.8743 9.82602C19.3221 14.8761 21.3106 21.3381 23.4684 26.963L24.4021 26.6049C22.2595 21.0198 20.2803 14.5899 18.8356 9.55043C18.1136 7.03195 17.5258 4.86325 17.1185 3.32441C16.9149 2.55503 16.7564 1.9432 16.6489 1.52394C16.5952 1.31431 16.5542 1.15283 16.5266 1.04388C16.5129 0.989408 16.5025 0.948065 16.4955 0.920403C16.492 0.906572 16.4894 0.896161 16.4877 0.889238C16.4868 0.885777 16.4862 0.883187 16.4858 0.881479C16.4855 0.880625 16.4854 0.879991 16.4853 0.879578C16.4852 0.879371 16.4852 0.879228 16.4852 0.879125C16.4851 0.879037 16.4851 0.879004 16 1ZM23.4684 26.963C25.6729 32.7094 28.1331 36.5898 30.0294 39.0236L30.8182 38.409C28.9819 36.0522 26.5707 32.2579 24.4021 26.6049L23.4684 26.963Z' fill='%23757575'/%3E%3C/svg%3E%0A");
`;

type Props = {
  programItems: ItemProps[];
  subjectCategories: subjectsProps['categories'];
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
        <Button onClick={() => toggleSubjects(false)} lighter={showSubjects} size="medium" borderShape="rounded">
          <StyledMenuItem>{t('frontpageMenu.program')}</StyledMenuItem>
        </Button>
        <Button onClick={() => toggleSubjects(true)} lighter={!showSubjects} size="medium" borderShape="rounded">
          <StyledMenuItem>{t('frontpageMenu.allsubjects')}</StyledMenuItem>
        </Button>
        <CursorPlaceholder>
          <CursorWrapper>
            <LeftCursor hide={showSubjects} />
            <CursorTextWrapper>
              <CursorText>{t('frontpageMenu.cursorText')}</CursorText>
              <BottomCursor hide={!showSubjects} />
            </CursorTextWrapper>
          </CursorWrapper>
        </CursorPlaceholder>
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
