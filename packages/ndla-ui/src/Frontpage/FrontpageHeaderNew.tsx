import React from 'react';
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
import { Launch as LaunchIcon } from '@ndla/icons/common';
import PropTypes from 'prop-types';
import SafeLink from '../common/SafeLink';
import { default as LanguageSelector } from '../Masthead/MastheadLanguageSelector';
import { SearchField } from '../Search';
import SvgLogo from '../Logo/SvgLogo';

const StyledLinkWrapper = styled('nav')`
  position: absolute;
  display: none;
  right: ${spacing.normal};
  top: ${spacing.normal};

  ${mq.range({ from: breakpoints.tablet })} {
    display: flex;
  }

  .c-masthead__change-language-wrapper {
    padding-right: 0;
    ${fonts.sizes('14px', '18px')};
    color: ${colors.brand.dark};
  }
`;

const StyledLinkElement = styled('span')``;

const StyledSafeLink = styled(SafeLink)`
  display: flex;
  ${fonts.sizes('14px', '18px')};
  color: ${colors.brand.dark};
  margin-left: ${spacing.normal};
  box-shadow: none;

  &:first-of-type {
    margin-left: 0;
  }

  ${StyledLinkElement} {
    transition: box-shadow ${animations.durations.superFast} linear;
    box-shadow: 0px 1px 0px ${colors.brand.dark};
    margin-right: 6px;
  }

  &:hover ${StyledLinkElement} {
    box-shadow: none;
  }
`;

const StyledLanguageSelectorWrapper = styled('div')`
  margin-left: ${spacing.large};
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

const StyledSearchFieldWrapper = styled('section')`
  padding: 18px 15px;
  background: ${colors.brand.accent};
  border-radius: 2px;
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 0;
  transform: translateY(85%);

  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.large} ${spacing.normal};
    transform: translateY(50%);
    left: ${spacing.normal};
    right: ${spacing.normal};
  }
  .c-search-field__input-wrapper {
    padding: 0;
  }

  .c-search-field__input {
    border-color: ${colors.brand.tertiary};
  }
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

const FrontpageHeader = ({
  searchFieldValue,
  links,
  onSearchFieldChange,
  searchFieldPlaceholder,
  onSearch,
}) => (
  <StyledHeaderWrapper>
    <StyledHeader>
      <StyledLinkWrapper>
        {links.map((link: { text: string; to: string }) => (
          <StyledSafeLink key={link.text} to={link.to}>
            <StyledLinkElement>{link.text}</StyledLinkElement>
            <LaunchIcon color={colors.brand.dark} />
          </StyledSafeLink>
        ))}
        <StyledLanguageSelectorWrapper>
          <LanguageSelector
            currentLanguage="nb"
            options={{
              nb: {
                name: 'Bokmål',
                url: '#',
              },
              nn: {
                name: 'Nynorsk',
                url: '#',
              },
              en: {
                name: 'English',
                url: '#',
              },
            }}
          />
        </StyledLanguageSelectorWrapper>
      </StyledLinkWrapper>
      <StyledLogo to="/">
        <SvgLogo />
      </StyledLogo>
      <StyledSearchFieldWrapper>
        <SearchField
          placeholder="Søk i fagstoff, oppgaver og aktiviteter eller læringsstier"
          value={searchFieldValue}
          onChange={onSearchFieldChange}
          messages={{
            searchFieldTitle: 'Søk',
          }}
          onSearch={onSearch}
          searchFieldPlaceholder={searchFieldPlaceholder}
          resourceToLinkProps={() => {}}
        />
        {/* && (
            <SearchField
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
          ) */}
      </StyledSearchFieldWrapper>
    </StyledHeader>
  </StyledHeaderWrapper>
);

FrontpageHeader.propTypes = {
  searchFieldValue: PropTypes.string.isRequired,
  onSearchInputFocus: PropTypes.func.isRequired,
  infoText: PropTypes.node,
  onSearchFieldChange: PropTypes.func.isRequired,
  searchFieldPlaceholder: PropTypes.func.isRequired,
};

export default FrontpageHeader;
