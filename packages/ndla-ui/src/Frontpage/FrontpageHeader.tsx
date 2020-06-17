import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing, mq, breakpoints } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import FrontpageHeaderIllustration from './illustrations/FrontpageHeaderIllustration';
// @ts-ignore
import SvgLogo from '../Logo/SvgLogo';

const StyledHeader = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1024px;
  padding: ${spacing.normal} 0 ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.large} 0 0;
  }
`;

const StyledHeaderWrapper = styled.header`
  background: ${colors.brand.lighter};
  margin-bottom: ${spacing.spacingUnit * 3}px;
`;

const StyledLogo = styled(SafeLink)`
  width: 135px;
  box-shadow: none;
  ${mq.range({ from: breakpoints.tablet })} {
    width: 200px;
  }
`;

const HeaderIllustrationWrapper = styled.div`
  margin: ${spacing.small};
  width: 100%;
  padding: 0 ${spacing.normal};
  text-align: center;
  svg {
    max-width: 100%;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    width: 480px;
    margin: ${spacing.normal} 0 ${spacing.small};
    padding: 0;
  }
`;

export type FrontPageHeaderProps = {
  languageOptions: string;
  locale: string;
};

const FrontpageHeader: React.FunctionComponent<FrontPageHeaderProps> = ({
  languageOptions,
  locale,
  children,
}) => (
  <StyledHeaderWrapper>
    <StyledHeader>
      <StyledLogo to="/">
        <SvgLogo />
      </StyledLogo>
      <HeaderIllustrationWrapper>
        <FrontpageHeaderIllustration />
      </HeaderIllustrationWrapper>
      {children}
    </StyledHeader>
  </StyledHeaderWrapper>
);

export default FrontpageHeader;
