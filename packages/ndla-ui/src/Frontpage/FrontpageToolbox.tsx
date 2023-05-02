import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { spacing, breakpoints, mq } from '@ndla/core';
import { SafeLinkButton } from '@ndla/safelink';
import SectionHeading from '../SectionHeading';
import { ToolboxIllustration as Illustration } from './illustrations/FrontpageIllustrations';
import { HeadingLevel } from '../types';

const StyledSection = styled.section`
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.large};
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: ${spacing.medium};
  position: relative;
  ${mq.range({ from: breakpoints.desktop })} {
    padding: ${spacing.large};
    margin: 124px 0;
  }
`;

const ToolboxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${spacing.small} 0 ${spacing.medium};
`;

const StyledText = styled.span`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  ${mq.range({ from: breakpoints.desktop })} {
    font-size: 20px;
    line-height: 32px;
  }
`;

const StyledStudentsButton = styled(SafeLinkButton)`
  margin: 0 ${spacing.small} ${spacing.small} 0;
`;

type Props = {
  urlStudents: string;
  urlTeachers: string;
  headingLevel: HeadingLevel;
};

const FrontpageToolbox = ({ urlStudents, urlTeachers, headingLevel }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledSection>
      <SectionHeading headingLevel={headingLevel} large>
        {t('frontPageToolbox.heading')}
      </SectionHeading>
      <ToolboxWrapper>
        <StyledText>{t('frontPageToolbox.text')}</StyledText>
      </ToolboxWrapper>
      <StyledStudentsButton to={urlStudents} size="medium" shape="pill">
        {t('frontPageToolbox.linkTextStudents')}
      </StyledStudentsButton>
      <SafeLinkButton to={urlTeachers} size="medium" shape="pill">
        {t('frontPageToolbox.linkTextTeachers')}
      </SafeLinkButton>
      <Illustration />
    </StyledSection>
  );
};

export default FrontpageToolbox;
