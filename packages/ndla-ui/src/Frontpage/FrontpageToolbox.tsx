import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { StyledButton } from '@ndla/button';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { spacing, breakpoints, mq } from '@ndla/core';
// @ts-ignore
import SectionHeading from '../SectionHeading';
import ComponentCursor from '../ComponentCursor';
import { ToolboxIllustration as Illustration } from './illustrations/FrontpageIllustrations';

const AnchorButton = StyledButton.withComponent('a');

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

type Props = {
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
  url: string;
};

const FrontpageToolbox: React.FunctionComponent<Props> = ({ url, t }) => (
  <StyledSection>
    <ComponentCursor variant="left" text={t('frontPageToolbox.cursorText')} />
    <SectionHeading large>{t('frontPageToolbox.heading')}</SectionHeading>
    <ToolboxWrapper>
      <StyledText>{t('frontPageToolbox.text')}</StyledText>
    </ToolboxWrapper>
    <AnchorButton
      href={url}
      target="_blank"
      size="medium"
      borderShape="rounded"
      rel="noopener noreferrer">
      {t('frontPageToolbox.linkText')}
    </AnchorButton>
    <Illustration />
  </StyledSection>
);

export default injectT(FrontpageToolbox);
