import React from 'react';
import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';
import { spacing, breakpoints, mq } from '@ndla/core';
import { SafeLinkButton } from '@ndla/safelink';
// @ts-ignore
import SectionHeading from '../SectionHeading';
import ComponentCursor from '../ComponentCursor';
import { ToolboxIllustration as Illustration } from './illustrations/FrontpageIllustrations';

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
};

const FrontpageToolbox: React.FunctionComponent<Props & tType> = ({
  urlStudents,
  urlTeachers,
  t,
}) => (
  <StyledSection>
    <ComponentCursor variant="left" text={t('frontPageToolbox.cursorText')} />
    <SectionHeading large>{t('frontPageToolbox.heading')}</SectionHeading>
    <ToolboxWrapper>
      <StyledText>{t('frontPageToolbox.text')}</StyledText>
    </ToolboxWrapper>
    <StyledStudentsButton to={urlStudents} buttonSize="medium" borderShape="rounded">
      {t('frontPageToolbox.linkTextStudents')}
    </StyledStudentsButton>
    <SafeLinkButton to={urlTeachers} buttonSize="medium" borderShape="rounded">
      {t('frontPageToolbox.linkTextTeachers')}
    </SafeLinkButton>
    <Illustration />
  </StyledSection>
);

export default injectT(FrontpageToolbox);
