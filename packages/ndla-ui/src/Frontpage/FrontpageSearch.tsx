import { FormEvent, useEffect, useRef } from 'react';
import { isIE, browserVersion, isMobileSafari } from 'react-device-detect';
import styled from '@emotion/styled';
import { colors, spacing, mq, breakpoints, animations } from '@ndla/core';
import { noScroll } from '@ndla/util';
import { useTranslation } from 'react-i18next';
import { SearchField } from '../Search';
import { SearchFieldForm } from '../Search/SearchFieldForm';
import SearchResultSleeve from '../Search/SearchResultSleeve';
import { ContentTypeResultType, Resource } from '../types';
import { getMastheadHeight } from '../Masthead';

const StyledWrapper = styled.section`
  border-radius: 2px;
  width: 100%;
  padding: ${spacing.normal} 0;
  ${mq.range({ from: breakpoints.mobileWide })} {
    width: 450px;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    width: 550px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    width: 750px;
  }
  input {
    border-color: ${colors.brand.tertiary};
  }
`;

const StyledSearchBackdrop = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(1, 1, 1, 0.3);
  ${animations.fadeIn(animations.durations.fast)};
`;

type Props = {
  inputHasFocus: boolean;
  searchFieldValue: string;
  onSearchFieldChange: (searchValue: string) => void;
  searchFieldPlaceholder: string;
  onInputBlur: VoidFunction;
  onSearchInputFocus: VoidFunction;
  resourceToLinkProps: (resource: Resource) => {
    to: string;
  };
  onSearch: (event: FormEvent) => void;
  allResultUrl: string;
  searchResult?: Array<ContentTypeResultType>;
  loading: boolean;
  suggestion?: string;
  suggestionUrl?: string;
};

const FrontpageSearch = ({
  resourceToLinkProps,
  inputHasFocus,
  searchFieldValue,
  onSearchFieldChange,
  searchFieldPlaceholder,
  onInputBlur,
  onSearchInputFocus,
  onSearch,
  allResultUrl,
  searchResult,
  loading,
  suggestion,
  suggestionUrl,
}: Props) => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const searchFieldRef = useRef<HTMLDivElement>(null);
  const inputHasFocusRef = useRef(inputHasFocus);
  inputHasFocusRef.current = inputHasFocus;

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
  }, [onInputBlur]);

  useEffect(() => {
    let yCoordinate = 0;
    const mastheadHeight = getMastheadHeight() || 84;
    const resetScroll = () => {
      window.scrollTo({ top: yCoordinate });
    };
    if (inputHasFocus && searchFieldRef && searchFieldRef.current) {
      yCoordinate = searchFieldRef.current.getBoundingClientRect().top + window.pageYOffset - mastheadHeight;
      const isIE11 = isIE && parseInt(browserVersion) < 12;
      if (isIE11) {
        // insta move on IE
        window.scrollTo(0, yCoordinate);
      } else if (isMobileSafari) {
        // Because safari on iOS set position:fixed to static when keyboard is open, we need to scroll to top.
        yCoordinate = 0;
        // Strange scrolling is happening when keyboard opens in iOS, making scrollpos not to top.
        // Use a small timeout so the scrolling starts after
        setTimeout(
          () =>
            window.scrollTo({
              top: yCoordinate,
              behavior: 'smooth',
            }),
          100,
        );
      } else {
        window.scrollTo({
          top: yCoordinate,
          behavior: 'smooth',
        });
      }
      noScroll(true, 'preventPageScroll');
      // Because change in content(click on show more elements button) triggers some strange scroll in browser,
      // we must ensure that the scrollPos is the same all the time
      // setTimeout is used so the 'smooth' scroll effect can finish
      setTimeout(() => {
        // If user has closed modal search before timeout. Don't add event-listener
        if (inputHasFocusRef.current) {
          window.addEventListener('scroll', resetScroll);
        }
      }, 1000);
    } else {
      noScroll(false, 'preventPageScroll');
      window.removeEventListener('scroll', resetScroll);
    }
    return () => {
      noScroll(false, 'preventPageScroll');
      window.removeEventListener('scroll', resetScroll);
      inputHasFocusRef.current = false;
    };
  }, [inputHasFocus]);

  const onBlur = () => {
    // This is needed when user tabs out of field
    if (!searchFieldValue) {
      onInputBlur();
    }
  };

  return (
    <div ref={searchFieldRef}>
      <StyledWrapper>
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
            frontPageSearch={true}
            inputRef={inputRef}
            onFocus={onSearchInputFocus}
            value={searchFieldValue}
            onChange={onSearchFieldChange}
            placeholder={searchFieldPlaceholder}
            loading={loading}
            onBlur={onBlur}
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
              suggestion={suggestion}
              suggestionUrl={suggestionUrl}
            />
          )}
        </SearchFieldForm>
      </StyledWrapper>
    </div>
  );
};

export default FrontpageSearch;
