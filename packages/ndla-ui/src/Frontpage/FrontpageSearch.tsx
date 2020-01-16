import React, { useEffect, useRef } from 'react';
import { isIE, browserVersion, isMobileSafari } from 'react-device-detect';
import styled from '@emotion/styled';
import { History } from 'history';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { colors, spacing, mq, breakpoints, animations } from '@ndla/core';
// @ts-ignore
import { noScroll } from '@ndla/util';
// @ts-ignore
import { SearchField } from '../Search';
import { SearchFieldForm } from '../Search/SearchFieldForm';
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
  loading: boolean;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
  history: History;
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
  history,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const searchFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyEsc = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onInputBlur();
        if (inputRef && inputRef.current) {
          inputRef.current!.blur();
        }
      }
    };
    window.addEventListener('keydown', onKeyEsc);
    return () => {
      window.removeEventListener('keydown', onKeyEsc);
    };
  }, []);

  useEffect(() => {
    if (inputHasFocus && searchFieldRef && searchFieldRef.current) {
      const yCoordinate =
        searchFieldRef.current.getBoundingClientRect().top + window.pageYOffset;
      const isIE11 = isIE && parseInt(browserVersion) < 12;
      if (isIE11) {
        // insta move on IE
        window.scrollTo(0, yCoordinate);
      } else if (isMobileSafari) {
        // Because safari on iOS set position:fixed to static when keyboard is open, we need to scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
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
    <div ref={searchFieldRef}>
      <StyledWrapper inputHasFocus={inputHasFocus}>
        {inputHasFocus && (
          <StyledSearchBackdrop
            role="button"
            onClick={() => {
              onInputBlur();
              if (inputRef && inputRef.current) {
                inputRef.current!.blur();
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
              history={history}
            />
          )}
        </SearchFieldForm>
      </StyledWrapper>
    </div>
  );
};

export default injectT(FrontpageSearch);
