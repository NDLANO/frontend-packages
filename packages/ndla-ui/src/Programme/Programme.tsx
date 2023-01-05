import React from 'react';
import styled from '@emotion/styled';
import { breakpoints, mq, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import LayoutItem, { OneColumn } from '../Layout';
import ProgrammeSubjects, { GradesProps } from './ProgrammeSubjects';
import MessageBox from '../Messages/MessageBox';
import { NavigationHeading } from '..';
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type StyledBackgroundProps = {
  image?: string;
};
const StyledBackground = styled.div<StyledBackgroundProps>`
  height: 160px;
  max-width: 1105px;
  width: 100%;
  margin: 0 auto;
  ${(props: StyledBackgroundProps) =>
    props.image &&
    `
    background-image: url(${props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
    
    ${mq.range({ until: breakpoints.tablet })} {
      height: 160px;
      margin: ${spacing.normal} ${spacing.normal} 0;
      width: calc(100% - ${spacing.large});
    }
    ${mq.range({ until: breakpoints.mobileWide })} {
      height: 128px;
      margin: 20px 20px 0;
      width: calc(100% - 40px);
    }
  `}
`;

const StyledLayoutWrapper = styled.div`
  background: #fff;
  margin-top: -170px;
  ${mq.range({ until: breakpoints.tablet })} {
    margin-top: 0;
  }
`;

const StyledContentWrapper = styled.div`
  padding-top: 1px;
`;

const SubjectsWrapper = styled.div`
  margin-top: 28px;
  ${mq.range({ from: breakpoints.tablet })} {
    margin-top: 40px;
  }
`;

type Props = GradesProps & {
  heading?: string;
  image?: string;
  messageBoxText?: string;
  headingId?: string;
};

export const Programme = ({ heading, image, grades, selectedGrade, messageBoxText, headingId }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <StyledBackground image={image} />
      <OneColumn>
        <StyledLayoutWrapper>
          <LayoutItem layout="extend">
            <StyledContentWrapper>
              <NavigationHeading headingId={headingId}>{heading}</NavigationHeading>
              {messageBoxText && <MessageBox>{t(messageBoxText)}</MessageBox>}
              <SubjectsWrapper>
                <ProgrammeSubjects grades={grades} selectedGrade={selectedGrade} />
              </SubjectsWrapper>
            </StyledContentWrapper>
          </LayoutItem>
        </StyledLayoutWrapper>
      </OneColumn>
    </StyledWrapper>
  );
};

export default Programme;
