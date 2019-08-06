import React from 'react';
import styled from '@emotion/styled';
import {
  colors,
  spacing,
  mq,
  breakpoints,
  fonts,
  animations,
} from '@ndla/core';

// @ts-ignore
import { Launch as LaunchIcon } from '@ndla/icons/common';
import { FrontPageHeaderProps, Link } from '../types';
import SafeLink from '../common/SafeLink';
// @ts-ignore
import { default as LanguageSelector } from '../Masthead/MastheadLanguageSelector';

// @ts-ignore
import SvgLogo from '../Logo/SvgLogo';

const StyledLinkWrapper = styled.nav`
  display: none;
  justify-content: flex-end;
  margin-bottom: ${spacing.large};
  ${mq.range({ from: breakpoints.tablet })} {
    display: flex;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    margin-bottom: ${spacing.large};
  }
`;

const StyledLinkElement = styled.span`
  transition: box-shadow ${animations.durations.superFast} linear;
  box-shadow: 0px 1px 0px ${colors.brand.dark};
  margin-right: ${spacing.xsmall};
`;

const StyledSafeLink = styled(SafeLink)`
  display: flex;
  ${fonts.sizes('14px', '18px')};
  color: ${colors.brand.dark};
  margin-left: ${spacing.normal};
  box-shadow: none;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover ${StyledLinkElement} {
    box-shadow: none;
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
  max-width: 1150px;
  ${mq.range({ until: breakpoints.tablet })} {
    align-items: flex-end;
    padding: ${spacing.normal} ${spacing.normal} ${spacing.spacingUnit * 3}px;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.normal} ${spacing.large} ${spacing.spacingUnit * 4}px;
  }
  ${mq.range({ from: breakpoints.desktop, until: breakpoints.wide })} {
    padding: ${spacing.normal} ${spacing.spacingUnit * 3}px
      ${spacing.spacingUnit * 5}px;
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

const FrontpageHeader: React.FunctionComponent<FrontPageHeaderProps> = ({
  links,
  languageOptions,
  children,
}) => (
  <StyledHeaderWrapper>
    <StyledHeader>
      <StyledLinkWrapper>
        {links.map((link: Link) => (
          <StyledSafeLink key={link.text} to={link.to}>
            <StyledLinkElement>{link.text}</StyledLinkElement>
            <LaunchIcon color={colors.brand.dark} />
          </StyledSafeLink>
        ))}
        <StyledLanguageSelectorWrapper>
          <LanguageSelector currentLanguage="nb" options={languageOptions} />
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
