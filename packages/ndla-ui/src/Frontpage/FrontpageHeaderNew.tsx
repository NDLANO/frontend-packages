import React from 'react';
import styled from '@emotion/styled';
import css from '@emotion/css';
import FocusTrapReact from 'focus-trap-react';
import {
  colors,
  spacing,
  mq,
  breakpoints,
  fonts,
  animations,
} from '@ndla/core';
// @ts-ignore
import { Cross } from '@ndla/icons/action';
// @ts-ignore
import { Launch as LaunchIcon } from '@ndla/icons/common';
import { FrontPageHeaderProps, Link } from './types';
import SafeLink from '../common/SafeLink';
// @ts-ignore
import { default as LanguageSelector } from '../Masthead/MastheadLanguageSelector';
// @ts-ignore
import { SearchField } from '../Search';
// @ts-ignore
import SvgLogo from '../Logo/SvgLogo';

const StyledLinkWrapper = styled('nav')`
  position: absolute;
  display: none;
  right: ${spacing.normal};
  top: ${spacing.normal};

  ${mq.range({ from: breakpoints.tablet })} {
    display: flex;
  }
`;

const StyledLinkElement = styled('span')`
  transition: box-shadow ${animations.durations.superFast} linear;
  box-shadow: 0px 1px 0px ${colors.brand.dark};
  margin-right: 6px;
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

const StyledLanguageSelectorWrapper = styled('div')`
  ${mq.range({ from: breakpoints.desktop })} {
    margin-left: ${spacing.large};
  }

  .c-masthead__change-language-wrapper {
    padding-right: 0;
    ${fonts.sizes('14px', '18px')};
    color: ${colors.brand.dark};
  }
`;

const StyledHeader = styled('div')`
  margin: 0 auto;
  position: relative;
  min-height: 110px;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  padding: 20px 20px 0 20px;

  ${mq.range({ from: breakpoints.tablet })} {
    justify-content: flex-start;
    align-items: flex-start;
    padding: ${spacing.spacingUnit * 3.5}px ${spacing.normal} 0
      ${spacing.normal};
    min-height: 319px;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    padding-top: ${spacing.large};
    max-width: 1150px;
  }
`;

const StyledHeaderWrapper = styled('header')`
  background: ${colors.brand.lighter};
  &::after {
    content: '';
    display: block;
    background: ${colors.brand.greyLightest};
    padding-bottom: 71px;

    ${mq.range({ from: breakpoints.tablet })} {
      padding-bottom: 84px;
    }
  }
`;

type StyledSearchFieldWrapperProps = {
  inputHasFocus: Boolean;
};

const StyledSearchFieldWrapper = styled.section<StyledSearchFieldWrapperProps>`
  padding: 18px 15px;
  background: ${colors.brand.accent};
  border-radius: 2px;

  position: absolute;
  right: ${(props: StyledSearchFieldWrapperProps) =>
    props.inputHasFocus ? '0px' : '20px'};
  left: ${(props: StyledSearchFieldWrapperProps) =>
    props.inputHasFocus ? '0px' : '20px'};
  bottom: -73px;
  z-index: 9001;

  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.large} ${spacing.normal};
    left: ${spacing.normal};
    right: ${spacing.normal};
    bottom: -81px;
  }
  .c-search-field__input-wrapper {
    padding: 0;
  }

  .c-search-field__input {
    border-color: ${colors.brand.tertiary};
  }

  .c-search-field {
    width: 100%;
    transition: width ${animations.durations.fast} ease-in-out;
  }
`;

const StyledSearchField = styled('div')`
  display: flex;
  align-self: flex-start;

  .c-search-field {
    z-index: 9001;
    width: calc(100% - ${spacing.large});
  }

  > button {
    color: #fff;
    display: flex;
    padding: 13px;
    border: 0;
    background: none;
    cursor: pointer;
    z-index: 9999;
    ${animations.fadeIn(animations.durations.fast)};

    svg {
      height: 24px;
      width: 24px;
    }
  }
`;

const StyledSearchBackdrop = styled.div`
  position: fixed;
  z-index: 9000;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(1, 1, 1, 0.5);
  ${animations.fadeIn(animations.durations.fast)};
`;

const StyledLogo = styled(SafeLink)`
  width: 120px;
  box-shadow: none;

  ${mq.range({ from: breakpoints.tablet })} {
    width: 180px;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    width: 287px;
  }
`;

const FrontpageHeaderNew: React.FunctionComponent<FrontPageHeaderProps> = ({
  searchFieldValue,
  links,
  onSearchFieldChange,
  searchFieldPlaceholder,
  onSearchDeactiveFocusTrap,
  onSearchInputFocus,
  onSearch,
  messages,
  allResultUrl,
  hideSearch,
  inputHasFocus,
  infoText,
  searchResult,
  languageOptions,
  categories,
}) => {
  return (
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
      <StyledSearchFieldWrapper inputHasFocus={inputHasFocus}>
        {!hideSearch && !inputHasFocus && (
          <SearchField
            value={searchFieldValue}
            onChange={onSearchFieldChange}
            onFocus={onSearchInputFocus}
            placeholder={searchFieldPlaceholder}
            messages={messages}
            onSearch={onSearch}
            allResultUrl={allResultUrl}
            resourceToLinkProps={() => {}}
          />
        )}
        {!hideSearch && inputHasFocus && (
          <>
            <StyledSearchBackdrop />
            <FocusTrapReact
              focusTrapOptions={{
                onDeactivate: () => {
                  onSearchDeactiveFocusTrap();
                },
                clickOutsideDeactivates: true,
                escapeDeactivates: true,
              }}>
              <StyledSearchField>
                <SearchField
                  modifiers={
                    inputHasFocus
                      ? ['no-left-margin', 'absolute-position-sleeve']
                      : ['absolute-position-sleeve']
                  }
                  ignoreContentTypeBadge
                  infoText={infoText}
                  value={searchFieldValue}
                  onChange={onSearchFieldChange}
                  placeholder={searchFieldPlaceholder}
                  messages={messages}
                  onSearch={onSearch}
                  searchResult={searchResult}
                  allResultUrl={allResultUrl}
                  resourceToLinkProps={() => {}}
                  singleColumn
                  hideSleeveHeader
                />
                <button
                  type="button"
                  onClick={onSearchDeactiveFocusTrap}
                  aria-label={messages.closeSearchLabel}>
                  <Cross />
                </button>
              </StyledSearchField>
            </FocusTrapReact>
          </>
        )}
      </StyledSearchFieldWrapper>
    </StyledHeader>
  </StyledHeaderWrapper>
)};

export default FrontpageHeaderNew;
