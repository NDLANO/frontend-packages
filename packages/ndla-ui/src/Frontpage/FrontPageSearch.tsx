import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import BEMHelper from 'react-bem-helper';
import { colors, spacing, mq, breakpoints, animations } from '@ndla/core';
// @ts-ignore
import { Cross } from '@ndla/icons/action';

// @ts-ignore
import { SearchField } from '../Search';

// @ts-ignore
import SearchResultSleeve from '../Search/SearchResultSleeve';
import { ContentTypeResultType } from '../types';
const classes = new BEMHelper('c-search-field');

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

const StyledCloseButton = styled.button`
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
  inputHasFocus: boolean;
  searchFieldValue: string;
  onSearchFieldChange: (searchValue: string) => {};
  searchFieldPlaceholder: string;
  onSearchDeactiveFocusTrap: () => {};
  onSearchInputFocus: () => {};
  onSearch: (event: {}) => {};
  messages: { closeSearchLabel: string };
  allResultUrl: string;
  searchResult: Array<ContentTypeResultType>;
  infoText: string;
  loading: Boolean;
}

export const FrontpageSearch: React.FC<Props> = ({
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
  loading,
}) => {
  const SearchFieldRef = React.createRef<HTMLDivElement>();
  useEffect(() => {
    if (inputHasFocus && SearchFieldRef.current) {
      const inputField = SearchFieldRef.current.getElementsByTagName(
        'input',
      )[0];
      inputField.focus();
      SearchFieldRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [inputHasFocus]);
  const modifiers = inputHasFocus
    ? ['no-left-margin', 'absolute-position-sleeve', 'input-has-focus']
    : ['absolute-position-sleeve'];
  return (
    <div ref={SearchFieldRef}>
      <StyledSearchFieldWrapper inputHasFocus={inputHasFocus}>
        {!inputHasFocus && (
          <SearchField
            value={searchFieldValue}
            onChange={onSearchFieldChange}
            onFocus={onSearchInputFocus}
            placeholder={searchFieldPlaceholder}
            messages={messages}
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
              <form
                action="/search/"
                {...classes('', modifiers)}
                onSubmit={onSearch}>
                <SearchField
                  modifiers={modifiers}
                  value={searchFieldValue}
                  onChange={onSearchFieldChange}
                  placeholder={searchFieldPlaceholder}
                  messages={messages}
                  singleColumn
                />
                {!loading && searchResult && (
                  <SearchResultSleeve
                    ignoreContentTypeBadge
                    result={searchResult}
                    searchString={searchFieldValue}
                    allResultUrl={allResultUrl}
                    resourceToLinkProps={() => {}}
                    hideSleeveHeader
                    singleColumn
                    infoText={infoText}
                  />
                )}
              </form>
              <StyledCloseButton
                type="button"
                onClick={onSearchDeactiveFocusTrap}
                onBlur={onSearchDeactiveFocusTrap}
                aria-label={messages.closeSearchLabel}>
                <Cross />
              </StyledCloseButton>
            </StyledSearchField>
          </>
        )}
      </StyledSearchFieldWrapper>
    </div>
  );
};
