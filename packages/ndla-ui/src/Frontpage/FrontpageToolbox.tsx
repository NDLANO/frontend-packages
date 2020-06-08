import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { StyledButton } from '@ndla/button';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { spacing, colors, breakpoints, mq } from '@ndla/core';
// @ts-ignore
import SectionHeading from '../SectionHeading';
import ComponentCurser from '../ComponentCurser';
import { ToolboxIllustration as Illustration } from './illustrations/FrontpageIllustrations';

const AnchorButton = StyledButton.withComponent('a');

const StyledSection = styled.section`
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.large};
  border: 1px solid #E6E6E6;
  border-radius: 8px;
  padding: ${spacing.medium};
  position: relative;
  ${mq.range({ from: breakpoints.desktop })} {
    padding: ${spacing.large};
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
  imageUrl: string;
};

const FrontpageToolbox: React.FunctionComponent<Props> = ({
  url,
  imageUrl,
  t,
}) => (
    <StyledSection>
      <ComponentCurser />
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
