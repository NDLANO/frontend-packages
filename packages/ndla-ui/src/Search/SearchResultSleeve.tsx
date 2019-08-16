/*
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { spacing, colors, misc, fonts, mq, breakpoints } from '@ndla/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import { Search as SearchIcon, Wrench, Esc, KeyboardReturn, ChevronUp, ChevronDown } from '@ndla/icons/common';
import SafeLink from '../common/SafeLink';
// @ts-ignore
import ContentTypeResult, { highlightedCSS } from './ContentTypeResult';
import { ContentTypeResultType, Resource } from '../types';

const GO_TO_SEARCHPAGE = 'GO_TO_SEARCHPAGE';

const StyledNoHits = styled.div`
  ${fonts.sizes(16, 1.1)};
  color: ${colors.text.primary};
`;

const StyledHeader = styled.h1`
  ${fonts.sizes('18px', '24px')};
  margin: 0 0 ${spacing.normal} 0;
`;

const StyledAside = styled.aside`
  ${fonts.sizes('16px', '22px')};
  display: flex;
  align-items: flex-start;
  margin: 0;
  color: ${colors.text.primary};
  padding: ${spacing.normal} ${spacing.large} ${spacing.normal} ${spacing.normal};
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
    margin-left: ${spacing.xsmall};
  }
  &:focus {
    ${highlightedCSS}
    width: 100%;
  }
  &:hover {
    strong {
      box-shadow: ${misc.textLinkBoxShadow};
    }
  }
  small {
    color: ${colors.text.light};
    padding-left: ${spacing.xsmall};
  }
`;

const StyledSearchResultsWrapper = styled.section`
  background: #fff;
  position: absolute;
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
    top: 100px;
  }
`;

const StyledScrollableContent = styled.div`
  max-height: calc(100vh - 260px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  padding: ${spacing.large};
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.tabletWide })} {
    max-height: calc(100vh - 200px);
  }
  ${mq.range({ until: breakpoints.tablet })} {
    padding: 0 ${spacing.normal} ${spacing.large};
    max-height: calc(100vh - 100px);
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
    margin: ${spacing.xsmall} ${spacing.small} ${spacing.xsmall} ${spacing.xsmall};
  }
`;

type Props = {
  result: Array<ContentTypeResultType>;
  allResultUrl: string;
  resourceToLinkProps: (resource: Resource) => string;
  onNavigate: VoidFunction;
  hideSleeveHeader: boolean;
  infoText: string;
  ignoreContentTypeBadge: boolean;
  searchString: string;
  loading: boolean;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

const findPathForKeyboardNavigation = (
  result: Array<ContentTypeResultType>, current: string, contentRef: HTMLDivElement | null, direction: 1 | -1 | null
): string => {
  const resultsContainingPaths = result.map(resultBlock => (resultBlock.resources.length > 0 ? resultBlock.resources[0].path : ''));
  if (!resultsContainingPaths.some(result => result !== '')) {
    return '';
  } else if (direction === null) {
    return current;
  }
  let highlightPath:string = '';
  if (current !== '' && current !== GO_TO_SEARCHPAGE) {
    result.forEach((resultBlock, blockIndex) => {
      resultBlock.resources.forEach((resource, resourceIndex) => {
        if (resource.path === current) {
          if (direction === 1) {
            if (
              (resourceIndex < resultBlock.resources.length - 1) &&
              contentRef && contentRef.querySelectorAll(`[href="${result[blockIndex].resources[resourceIndex + 1].path}"]`)[0]
            ) {
              highlightPath = result[blockIndex].resources[resourceIndex + 1].path;
            } else {
              let currentBlock = blockIndex;
              while (highlightPath === '') {
                if (currentBlock < resultsContainingPaths.length - 1) {
                  currentBlock += 1;
                } else {
                  highlightPath = GO_TO_SEARCHPAGE;
                  break;
                }
                if (resultsContainingPaths[currentBlock] !== '') {
                  highlightPath = resultsContainingPaths[currentBlock];
                }
              }
            }
          } else {
            if (resourceIndex > 0) {
              highlightPath = result[blockIndex].resources[resourceIndex - 1].path;
            } else {
              let currentBlock = blockIndex;
              while (highlightPath === '') {
                if (currentBlock > 0) {
                  currentBlock -= 1;
                } else {
                  highlightPath = GO_TO_SEARCHPAGE;
                  break;
                }
                if (resultsContainingPaths[currentBlock] !== '') {
                  // Get last visible LI with an A tag.
                  const currentAnchor =
                    contentRef && contentRef.querySelector(`[href="${resultsContainingPaths[currentBlock]}"]`);
                  const currentUL = currentAnchor && currentAnchor.closest('ul');
                  const anchorNodes = currentUL && currentUL.querySelectorAll('a');
                  highlightPath = anchorNodes ? result[currentBlock].resources[anchorNodes.length - 1].path : '';
                }
              }
            }
          }
        }
      });
    });
  } else if (direction === 1) {
    if (current === '') {
      highlightPath = GO_TO_SEARCHPAGE;
    } else {
      highlightPath = resultsContainingPaths.find(path => path !== '') || '';
    }
  } else {
    // go to last link..
    highlightPath = resultsContainingPaths.reverse().find(path => path !== '') || '';
  }
  return highlightPath;
};

const SearchResultSleeve: React.FC<Props> = ({
  result,
  allResultUrl,
  resourceToLinkProps,
  onNavigate,
  hideSleeveHeader,
  infoText,
  ignoreContentTypeBadge,
  searchString,
  loading,
  t,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const searchAllRef = useRef<HTMLDivElement>(null);
  const [keyboardPathNavigation, setKeyNavigation] = useState('');
  const usePathFromFocus = (): string | null => {
    // Check if has focus on an element
    const focusedElementType = document.activeElement;
    if (focusedElementType && focusedElementType.getAttribute('data-highlighted')) {
      // Use path form focused element.
      if (focusedElementType instanceof HTMLElement) {
        focusedElementType.blur();
      }
      return focusedElementType.getAttribute('href');
    }
    return null;
  }
  useEffect(() => {
    const onKeyDownEvent = (e: KeyboardEvent) => {
      if (e.code === 'ArrowDown') {
        setKeyNavigation(keyboardPathNavigation => {
          const focusPath = usePathFromFocus();
          return findPathForKeyboardNavigation(result, focusPath ? focusPath : keyboardPathNavigation, contentRef.current, 1);
        });
        e.stopPropagation();
        e.preventDefault();
      } else if (e.code === 'ArrowUp') {
        setKeyNavigation(keyboardPathNavigation => {
          const focusPath = usePathFromFocus();
          return findPathForKeyboardNavigation(result, focusPath ? focusPath : keyboardPathNavigation, contentRef.current, -1);
        });
        e.stopPropagation();
        e.preventDefault();
      } else if (e.code === 'Enter') {
        if (keyboardPathNavigation) {
          e.stopPropagation();
          e.preventDefault();
          location.href = keyboardPathNavigation;
        }
      } else if (e.code === 'Tab') {
        setKeyNavigation('');
      }
    };
    window.addEventListener('keydown', onKeyDownEvent);
    setKeyNavigation(keyboardPathNavigation => {
      return findPathForKeyboardNavigation(result, keyboardPathNavigation, contentRef.current, null);
    });
    return () => {
      window.removeEventListener('keydown', onKeyDownEvent);
    };
  }, [result, contentRef]);
  useEffect(() => {
    const highlightedElement = keyboardPathNavigation === GO_TO_SEARCHPAGE ?
      searchAllRef.current :
      contentRef.current && contentRef.current.querySelector('[data-highlighted="true"]');

    if (highlightedElement) {
      highlightedElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [keyboardPathNavigation]);
  return (
    <StyledSearchResultsWrapper ref={contentRef}>
      <StyledScrollableContent>
        {!hideSleeveHeader && (
          <StyledHeader>
            {t('searchPage.searchField.searchResultHeading')}
          </StyledHeader>
        )}
        {infoText && (
          <StyledAside>
            <Wrench className="c-icon--22" />
            <span>{infoText}</span>
          </StyledAside>
        )}
        <div>
          <StyledSearchAll css={keyboardPathNavigation === GO_TO_SEARCHPAGE && highlightedCSS} to={allResultUrl}>
            <SearchIcon className="c-icon--22" />
            <strong ref={searchAllRef}>
              {searchString}
            </strong>
            <small>
              {t('welcomePage.searchAllInfo')}
            </small>
          </StyledSearchAll>
          {result.map((contentTypeResult: ContentTypeResultType) => (
            <ContentTypeResult
              animated
              ignoreContentTypeBadge={ignoreContentTypeBadge}
              onNavigate={onNavigate}
              contentTypeResult={contentTypeResult}
              resourceToLinkProps={resourceToLinkProps}
              defaultCount={window.innerWidth > 980 ? 7 : 3}
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
          {result.length === 0 && !loading &&
            <StyledNoHits>
              {t('searchPage.searchField.contentTypeResultNoHit')}
            </StyledNoHits>
          }
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
}

export default injectT(SearchResultSleeve);
