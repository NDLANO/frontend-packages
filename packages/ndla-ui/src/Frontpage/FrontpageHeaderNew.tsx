import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import css from '@emotion/css';
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

const StyledLinkElement = styled('span')`
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
    padding: ${spacing.normal} ${spacing.spacingUnit * 3}px ${spacing.spacingUnit * 5}px;
  }
  ${mq.range({ from: breakpoints.wide })} {
    padding: ${spacing.normal} ${spacing.normal} ${spacing.spacingUnit * 5}px;
  }
`;

const StyledHeaderWrapper = styled('header')`
  background: ${colors.brand.lighter};
  margin-bottom: ${spacing.spacingUnit * 3}px;
  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: ${spacing.spacingUnit * 4}px;
  }
`;

type StyledSearchFieldWrapperProps = {
  inputHasFocus: boolean;
}

const StyledSearchFieldWrapper = styled.section<StyledSearchFieldWrapperProps>`
  background: ${(props:StyledSearchFieldWrapperProps) => props.inputHasFocus ? 'transparent' : colors.brand.accent};
  border-radius: 2px;
  position: absolute;
  bottom: -${spacing.large};
  z-index: 9001;
  padding: ${spacing.small};
  right: ${spacing.small};
  left: ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    background: ${colors.brand.accent};
  }
  ${mq.range({ from: breakpoints.mobileWide })} {
    padding: ${spacing.normal};
    right: ${spacing.normal};
    left: ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding: ${spacing.large};
    bottom: -81px;
  }
  .c-search-field__input-wrapper {
    padding: 0;
  }

  .c-search-field__input {
    border-color: ${colors.brand.tertiary};
    ${mq.range({ until: breakpoints.tablet })} {
      padding-left: ${spacing.small};
    }
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
    ${mq.range({ from: breakpoints.tablet })} {
      width: calc(100% - ${spacing.large});
    }
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
  ${mq.range({ until: breakpoints.tablet })} {
    > button {
      color: ${colors.brand.primary};
    }
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: ${spacing.normal};
    z-index: 9001;
    background: ${colors.brand.accent};
    .c-search-field__search-result {
      margin-left: ${spacing.normal};
      width: 100vw;
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
  background: rgba(1, 1, 1, 0.3);
  ${animations.fadeIn(animations.durations.fast)};
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
  const SearchFieldRef = React.createRef();
  useEffect(() => {
    if (inputHasFocus) {
      const inputField = SearchFieldRef.current.getElementsByTagName('input')[0];
      inputField.focus();
    }
  }, [inputHasFocus]);
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
      <StyledLogo to="/" onFocus={onSearchDeactiveFocusTrap}>
        <SvgLogo />
      </StyledLogo>
      <div ref={SearchFieldRef}>
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
            <StyledSearchBackdrop role="button" onClick={onSearchDeactiveFocusTrap} />
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
                  onBlur={onSearchDeactiveFocusTrap}
                  aria-label={messages.closeSearchLabel}>
                  <Cross />
                </button>
              </StyledSearchField>
          </>
        )}
      </StyledSearchFieldWrapper>
      </div>
    </StyledHeader>
  </StyledHeaderWrapper>
)};

export default FrontpageHeaderNew;
