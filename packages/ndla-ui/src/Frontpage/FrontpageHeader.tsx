import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing, mq, breakpoints, fonts } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { LanguageSelector } from '../LanguageSelector';

// @ts-ignore
import SvgLogo from '../Logo/SvgLogo';

const StyledLinkWrapper = styled.nav`
  display: none;
  justify-content: flex-end;
  align-items: center;
  ${mq.range({ from: breakpoints.tablet })} {
    display: flex;
  }
`;

const StyledLanguageSelectorWrapper = styled.div`
  ${mq.range({ from: breakpoints.desktop })} {
    margin-left: ${spacing.large};
  }
  ${fonts.sizes('14px', '18px')};
`;

const StyledHeader = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  max-width: 1024px;
  ${mq.range({ until: breakpoints.tablet })} {
    align-items: flex-end;
    padding: ${spacing.normal} ${spacing.normal} ${spacing.spacingUnit * 3}px;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.normal} ${spacing.normal} ${spacing.spacingUnit * 3}px
      ${spacing.large};
  }
  ${mq.range({ from: breakpoints.desktop, until: breakpoints.wide })} {
    padding: ${spacing.normal} ${spacing.normal} ${spacing.spacingUnit * 5}px
      ${spacing.spacingUnit * 3}px;
  }
  ${mq.range({ from: breakpoints.wide })} {
    padding: ${spacing.normal} ${spacing.normal} ${spacing.spacingUnit * 5}px;
  }
`;

const StyledHeaderWrapper = styled.header`
  background: ${colors.brand.lighter};
  margin-bottom: ${spacing.spacingUnit * 3}px;
  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: ${spacing.spacingUnit * 4}px;
  }
`;

const StyledLogo = styled(SafeLink)`
  width: 140px;
  box-shadow: none;

  ${mq.range({ from: breakpoints.tablet })} {
    width: 180px;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    width: 287px;
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
      <StyledLinkWrapper>
        <StyledLanguageSelectorWrapper>
          <LanguageSelector
            alwaysVisible
            currentLanguage={locale}
            options={languageOptions}
          />
        </StyledLanguageSelectorWrapper>
      </StyledLinkWrapper>
      <StyledLogo to="/">
        <SvgLogo />
      </StyledLogo>
      {children}
    </StyledHeader>
  </StyledHeaderWrapper>
);

export default FrontpageHeader;
