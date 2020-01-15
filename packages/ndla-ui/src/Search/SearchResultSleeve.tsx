/*
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useRef, useState } from 'react';
import { History } from 'history';
import styled from '@emotion/styled';
import { breakpoints, colors, fonts, misc, mq, spacing } from '@ndla/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import { ChevronDown, ChevronUp, Esc, KeyboardReturn, Search as SearchIcon, Wrench } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
// @ts-ignore
import ContentTypeResult from './ContentTypeResult';
import { highlightStyle } from './ContentTypeResultStyles';
import { ContentTypeResultType, Resource } from '../types';

const GO_TO_SEARCHPAGE = 'GO_TO_SEARCHPAGE';

const StyledNoHits = styled.div`
  ${fonts.sizes(16, 1.1)};
  color: ${colors.text.primary};
`;

const StyledAside = styled.aside`
  ${fonts.sizes('16px', '22px')};
  display: flex;
  align-items: flex-start;
  margin: 0;
  color: ${colors.text.primary};
  padding: ${spacing.normal} ${spacing.large} ${spacing.normal}
    ${spacing.normal};
  background: ${colors.support.yellowLight};
  border-radius: ${misc.borderRadius};
  span {
    display: block;
    max-width: 700px;
    padding-left: ${spacing.small};
    flex: 1;
  }
  svg {
    transform: translateY(6px);
  }
  ${mq.range({ until: breakpoints.tablet })} {
    display: none;
  }
`;

const StyledSearchAll = styled(SafeLink)`
  box-shadow: none;
  border: 0;
  margin: ${spacing.normal} -${spacing.small};
  background: transparent;
  display: inline-flex;
  flex-grow: 1;
  align-items: center;
  padding: ${spacing.xsmall} ${spacing.small};
  line-height: 1.7rem;
  color: ${colors.brand.primary};
  strong {
    font-weight: ${fonts.weight.semibold};
    margin-left: ${spacing.xsmall};
  }
  &:focus {
    ${highlightStyle}
    width: 100%;
  }
  &:hover {
    strong {
      text-decoration: underline;
    }
  }
  small {
    color: ${colors.text.light};
    padding-left: ${spacing.xsmall};
  }
`;

type WrapperProps = {
  frontpage?: boolean;
};

const StyledSearchResultsWrapper = styled.section<WrapperProps>`
  background: #fff;
  width: 100%;
  position: ${props => (props.frontpage ? 'absolute' : 'static')};
  left: 0;
  right: 0;
  top: 58px;
  border-bottom-left-radius: ${misc.borderRadius};
  border-bottom-right-radius: ${misc.borderRadius};
  ${mq.range({ until: breakpoints.tablet })} {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 74px;
  }
`;

type StyledScrollableContentProps = {
  extendHeight: number;
};

const StyledScrollableContent = styled.div<StyledScrollableContentProps>`
  max-height: calc(100vh - ${props => 260 - props.extendHeight}px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  padding: ${props => (props.extendHeight ? spacing.normal : spacing.large)}
    ${spacing.large} ${spacing.large} ${spacing.large};
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.tabletWide })} {
    max-height: calc(100vh - ${props => 200 - props.extendHeight});
  }
  ${mq.range({ until: breakpoints.tablet })} {
    padding: 0 ${spacing.normal} ${spacing.large};
    max-height: calc(100vh - 74px);
  }
`;

const StyledFooter = styled.div`
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: none;
  }
  flex-direction: row-reverse;
  align-items: center;
  background: ${colors.brand.greyLightest};
  border-top: 1px solid ${colors.brand.greyLight};
  border-bottom-left-radius: ${misc.borderRadius};
  border-bottom-right-radius: ${misc.borderRadius};
  padding: ${spacing.xsmall} 0 ${spacing.xsmall} ${spacing.large};
`;

const StyledInstructions = styled.div`
  flex: 1;
  align-items: center;
  padding-right: ${spacing.large};
  svg {
    width: 24px;
    height: 24px;
    border: 1px solid ${colors.brand.grey};
    background: ${colors.brand.greyLight};
    border-radius: 2px;
    margin-left 2px;
  }
  span {
    display: inline-flex;
    ${fonts.sizes(14, 1.1)};
    margin: ${spacing.xsmall} ${spacing.small} ${spacing.xsmall} ${
  spacing.xsmall
};
  }
`;

const getNextElementInDirection = (
  current: HTMLElement | string,
  arr: Array<HTMLElement | string>,
  direction: 1 | -1 | null,
): HTMLElement | string | null => {
  const currentIdx = arr.indexOf(current);

  if (direction === 1) {
    const idx = currentIdx + 1 > arr.length - 1 ? 0 : currentIdx + 1;
    return arr[idx];
  } else if (direction === -1) {
    const idx = currentIdx - 1 < 0 ? arr.length - 1 : currentIdx - 1;
    return arr[idx];
  } else {
    return arr[currentIdx];
  }
};

const getDefaultCount = () => {
  return window.innerWidth > 980 ? 7 : 3;
};

const findPathForKeyboardNavigation = (
  contentRef: HTMLDivElement | null,
  current: HTMLElement | string | null,
  direction: 1 | -1 | null,
): HTMLElement | string | null => {
  const selectables = contentRef
    ? Array.from(contentRef.querySelectorAll('li'))
    : [];
  const resultsContainingPaths: Array<string | HTMLElement> = ([
    GO_TO_SEARCHPAGE,
  ] as Array<HTMLElement | string>).concat(...selectables);

  // Nothing selected, goto either first or last depending on direction
  if (current === null) {
    switch (direction) {
      case 1:
        return resultsContainingPaths[0];
      case -1:
        return resultsContainingPaths[resultsContainingPaths.length - 1];
      default:
        return current;
    }
  } else {
    return getNextElementInDirection(
      current,
      resultsContainingPaths,
      direction,
    );
  }
};

type Props = {
  result: Array<ContentTypeResultType>;
  allResultUrl: string;
  resourceToLinkProps: (resource: Resource) => string;
  onNavigate: VoidFunction;
  infoText: string;
  ignoreContentTypeBadge: boolean;
  searchString: string;
  loading: boolean;
  frontpage?: boolean;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
  history: History;
};

const SearchResultSleeve: React.FC<Props> = ({
  result,
  allResultUrl,
  resourceToLinkProps,
  onNavigate,
  infoText,
  ignoreContentTypeBadge,
  searchString,
  loading,
  frontpage,
  t,
  history,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const searchAllRef = useRef<HTMLDivElement>(null);
  const [keyboardPathNavigation, setKeyNavigation] = useState<
    HTMLElement | string | null
  >('');

  useEffect(() => {
    const onKeyDownEvent = (e: KeyboardEvent) => {
      if (e.code === 'ArrowDown') {
        e.stopPropagation();
        e.preventDefault();

        setKeyNavigation(prevKeyPath => {
          return findPathForKeyboardNavigation(
            contentRef.current,
            prevKeyPath,
            1,
          );
        });
      } else if (e.code === 'ArrowUp') {
        e.stopPropagation();
        e.preventDefault();

        setKeyNavigation(prevKeyPath => {
          return findPathForKeyboardNavigation(
            contentRef.current,
            prevKeyPath,
            -1,
          );
        });
      } else if (e.code === 'Enter') {
        e.stopPropagation();
        e.preventDefault();
        if (keyboardPathNavigation === GO_TO_SEARCHPAGE) {
          const anchorTag =
            searchAllRef &&
            searchAllRef.current &&
            searchAllRef.current.closest('a');
          if (anchorTag) {
            const path = anchorTag.getAttribute('href') || '';
            history.push({ pathname: path });
          }
        } else {
          if (keyboardPathNavigation instanceof HTMLElement) {
            const toClick =
              keyboardPathNavigation &&
              keyboardPathNavigation.querySelector &&
              (keyboardPathNavigation.querySelector('a') ||
                keyboardPathNavigation.querySelector('button'));

            toClick && toClick.click();
          }
        }
      } else if (e.code === 'Tab') {
        setKeyNavigation('');
      }
    };

    window.addEventListener('keydown', onKeyDownEvent);
    setKeyNavigation(prevKeyNav => {
      return findPathForKeyboardNavigation(
        contentRef.current,
        prevKeyNav,
        null,
      );
    });
    return () => {
      window.removeEventListener('keydown', onKeyDownEvent);
    };
  }, [result, contentRef, searchAllRef, keyboardPathNavigation]);

  useEffect(() => {
    const highlightedElement =
      keyboardPathNavigation === GO_TO_SEARCHPAGE
        ? searchAllRef.current
        : contentRef.current &&
          contentRef.current.querySelector('[data-highlighted="true"]');

    if (highlightedElement) {
      highlightedElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [keyboardPathNavigation]);

  return (
    <StyledSearchResultsWrapper frontpage={frontpage} ref={contentRef}>
      <StyledScrollableContent extendHeight={frontpage ? 0 : 52}>
        {infoText && (
          <StyledAside>
            <Wrench className="c-icon--22" />
            <span>{infoText}</span>
          </StyledAside>
        )}
        <div>
          <StyledSearchAll
            css={keyboardPathNavigation === GO_TO_SEARCHPAGE && highlightStyle}
            to={allResultUrl}>
            <SearchIcon className="c-icon--22" />
            <strong ref={searchAllRef}>{searchString}</strong>
            <small>{t('welcomePage.searchAllInfo')}</small>
          </StyledSearchAll>
          {result.map((contentTypeResult: ContentTypeResultType) => (
            <ContentTypeResult
              ignoreContentTypeBadge={ignoreContentTypeBadge}
              onNavigate={onNavigate}
              contentTypeResult={contentTypeResult}
              resourceToLinkProps={resourceToLinkProps}
              defaultCount={getDefaultCount()}
              key={contentTypeResult.title}
              keyboardPathNavigation={keyboardPathNavigation}
              showAdditionalResources
              messages={{
                allResultLabel: t(
                  'searchPage.searchField.contentTypeResultShowMoreLabel',
                ),
                showLessResultLabel: t(
                  'searchPage.searchField.contentTypeResultShowLessLabel',
                ),
                noHit: t('searchPage.searchField.contentTypeResultNoHit'),
              }}
            />
          ))}
          {result.length === 0 && !loading && (
            <StyledNoHits>
              {t('searchPage.searchField.contentTypeResultNoHit')}
            </StyledNoHits>
          )}
        </div>
      </StyledScrollableContent>
      <StyledFooter>
        <StyledInstructions>
          <ChevronUp />
          <ChevronDown />
          <span>Naviger med piltastene</span>
          <KeyboardReturn />
          <span>Velg</span>
          <Esc />
          <span>Lukk søk</span>
        </StyledInstructions>
      </StyledFooter>
    </StyledSearchResultsWrapper>
  );
};

export default injectT(SearchResultSleeve);
