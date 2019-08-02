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
import { SearchField } from '../Search';

// @ts-ignore
import { Cross } from '@ndla/icons/action';

type StyledSearchFieldWrapperProps = {
  inputHasFocus?: boolean;
};

const StyledSearchFieldWrapper = styled.section<StyledSearchFieldWrapperProps>`
  background: ${(props: StyledSearchFieldWrapperProps) =>
    props.inputHasFocus === true ? 'transparent' : colors.brand.accent};
  border-radius: 2px;
  position: absolute;
  bottom: -${spacing.large};
  z-index: 8001;
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
  form {
    width: 100%;
    > div {
      padding: 0;
    }
  }
  input {
    border-color: ${colors.brand.tertiary};
    ${mq.range({ until: breakpoints.tablet })} {
      padding-left: ${spacing.small};
    }
  }
`;

const StyledSearchField = styled.div`
  display: flex;
  align-self: flex-start;

  .c-search-field {
    z-index: 9001;
    ${mq.range({ from: breakpoints.tablet })} {
      width: calc(100% - ${spacing.large});
    }
  }

  > button {
    color: ${colors.brand.primary};
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

interface Props {
  inputHasFocus: any;
  searchFieldValue: any;
  onSearchFieldChange: any;
  searchFieldPlaceholder: any;
  onSearchDeactiveFocusTrap: any;
  onSearchInputFocus: any;
  onSearch: any;
  messages: any;
  allResultUrl: any;
  searchResult: any;
  infoText: any;
}

export const FrontPageSearch: React.FC<Props> = ({
  inputHasFocus,
  searchFieldValue,
  onSearchFieldChange,
  searchFieldPlaceholder,
  onSearchDeactiveFocusTrap,
  onSearchInputFocus,
  onSearch,
  messages,
  allResultUrl,
  searchResult,
  infoText,
}) => (
  <StyledSearchFieldWrapper inputHasFocus={inputHasFocus}>
    {!inputHasFocus && (
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
    {inputHasFocus && (
      <>
        <StyledSearchBackdrop
          role="button"
          onClick={onSearchDeactiveFocusTrap}
        />
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
);
