import React, { useEffect, useRef } from 'react';
import { isIE, browserVersion } from 'react-device-detect';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import BEMHelper from 'react-bem-helper';
// @ts-ignore
import Tooltip from '@ndla/tooltip';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { colors, spacing, mq, breakpoints, animations } from '@ndla/core';
// @ts-ignore
import { Cross } from '@ndla/icons/action';
import { noScroll } from '@ndla/util';
// @ts-ignore
import { SearchField, SearchFieldForm } from '../Search';
// @ts-ignore
import SearchResultSleeve from '../Search/SearchResultSleeve';
import { ContentTypeResultType, Resource } from '../types';

type StyledSearchFieldProps = {
  inputHasFocus: boolean;
};

const StyledWrapper = styled.section<StyledSearchFieldProps>`
  background: ${(props: StyledSearchFieldProps) =>
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
  ${mq.range({ until: breakpoints.tablet })} {
    .c-search-field__input-wrapper {
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

const StyledSearchBackdrop = styled.div`
  position: fixed;
  z-index: 0;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(1, 1, 1, 0.3);
  ${animations.fadeIn(animations.durations.fast)};
`;

type Props = {
  inputHasFocus: boolean;
  searchFieldValue: string;
  onSearchFieldChange: (searchValue: string) => {};
  searchFieldPlaceholder: string;
  onInputBlur: VoidFunction;
  onSearchInputFocus: VoidFunction;
  resourceToLinkProps: (
    resource: Resource,
  ) => {
    to: string;
  };
  onSearch: (event: {}) => void;
  messages: { closeSearchLabel: string };
  allResultUrl: string;
  searchResult: Array<ContentTypeResultType>;
  infoText: string;
  loading: Boolean;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

const FrontpageSearch: React.FunctionComponent<Props> = ({
  resourceToLinkProps,
  inputHasFocus,
  searchFieldValue,
  onSearchFieldChange,
  searchFieldPlaceholder,
  onInputBlur,
  onSearchInputFocus,
  onSearch,
  messages,
  allResultUrl,
  searchResult,
  loading,
  t,
}) => {
  const inputRef = useRef(null);
  const SearchFieldRef = React.createRef<HTMLDivElement>();
  useEffect(() => {
    const onKeyEsc = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onInputBlur();
        if (inputRef) {
          inputRef.current.blur();
        }
      }
    };
    window.addEventListener('keydown', onKeyEsc);
    return () => {
      window.removeEventListener('keydown', onKeyEsc);
    };
  }, []);
  useEffect(() => {
    if (inputHasFocus && SearchFieldRef.current) {
      const yCoordinate =
        SearchFieldRef.current.getBoundingClientRect().top + window.pageYOffset;
      const isIE11 = isIE && parseInt(browserVersion) < 12;
      if (isIE11) {
        // insta move on IE
        window.scrollTo(0, yCoordinate);
      } else {
        window.scrollTo({
          top: yCoordinate,
          behavior: 'smooth',
        });
      }
      noScroll(true, 'preventPageScroll');
    } else {
      noScroll(false, 'preventPageScroll');
    }
    return () => noScroll(false, 'preventPageScroll');
  }, [inputHasFocus]);
  return (
    <div ref={SearchFieldRef}>
      <StyledWrapper inputHasFocus={inputHasFocus}>
        {inputHasFocus && (
          <StyledSearchBackdrop
            role="button"
            onClick={() => {
              onInputBlur();
              if (inputRef) {
                inputRef.current.blur();
              }
            }}
          />
        )}
        <SearchFieldForm inputHasFocus={inputHasFocus} onSubmit={onSearch}>
          <SearchField
            inputRef={inputRef}
            onFocus={onSearchInputFocus}
            value={searchFieldValue}
            onChange={onSearchFieldChange}
            placeholder={searchFieldPlaceholder}
            messages={messages}
            loading={loading}
          />
          {searchFieldValue !== '' && inputHasFocus && (
            <SearchResultSleeve
              frontpage
              loading={loading}
              ignoreContentTypeBadge
              result={searchResult || []}
              searchString={searchFieldValue}
              allResultUrl={allResultUrl}
              resourceToLinkProps={resourceToLinkProps}
              infoText={t('welcomePage.searchDisclaimer')}
            />
          )}
        </SearchFieldForm>
      </StyledWrapper>
    </div>
  );
};

export default injectT(FrontpageSearch);
