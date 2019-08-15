import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import BEMHelper from 'react-bem-helper';
import { css } from '@emotion/core';
import { spacing, colors, misc, fonts } from '@ndla/core';
// @ts-ignore
import { Spinner } from '@ndla/editor';
// @ts-ignore
import { StyledButton } from '@ndla/button';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import { Wrench, Esc, KeyboardReturn, ChevronUp, ChevronDown } from '@ndla/icons/common';
import SafeLink from '../common/SafeLink';
// @ts-ignore
import ContentTypeResult from './ContentTypeResult';
import { ContentTypeResultType, Resource } from '../types';

const AnchorButton = StyledButton.withComponent(SafeLink);
const classes = new BEMHelper('c-search-field');

const StyledSearchResultsWrapper = styled.section`
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 58px;
  border-bottom-left-radius: ${misc.borderRadius};
  border-bottom-right-radius: ${misc.borderRadius};
`;

const StyledScrollableContent = styled.div`
  max-height: calc(100vh - 240px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  padding: ${spacing.large};
`;

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background: ${colors.brand.greyLightest};
  border-top: 1px solid ${colors.brand.greyLight};
  border-bottom-left-radius: ${misc.borderRadius};
  border-bottom-right-radius: ${misc.borderRadius};
  padding: ${spacing.small} ${spacing.large};
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
  loading: boolean;
  t: (v: string) => {};
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
  if (current !== '') {
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
                  currentBlock = 0;
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
                  currentBlock = result.length - 1;
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
  } else {
    highlightPath = resultsContainingPaths.find(path => path !== '') || '';
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
  loading,
  t,
}) => {
  const contentRef = React.createRef<HTMLDivElement>();
  const [keyboardPathNavigation, setKeyNavigation] = useState('');
  useEffect(() => {
    const onKeyDownEvent = (e: KeyboardEvent) => {
      if (e.code === 'ArrowDown') {
        setKeyNavigation(keyboardPathNavigation => {
          return findPathForKeyboardNavigation(result, keyboardPathNavigation, contentRef.current, 1);
        });
        e.stopPropagation();
        e.preventDefault();
      } else if (e.code === 'ArrowUp') {
        setKeyNavigation(keyboardPathNavigation => {
          return findPathForKeyboardNavigation(result, keyboardPathNavigation, contentRef.current, -1);
        });
        e.stopPropagation();
        e.preventDefault();
      } else if (e.code === 'Enter') {
        const focusedElementType = document.activeElement ? document.activeElement.tagName : '';
        if (keyboardPathNavigation && focusedElementType !== 'BUTTON' && focusedElementType !== 'A') {
          e.stopPropagation();
          e.preventDefault();
          location.href = keyboardPathNavigation;
        }
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
    const highlightedElement = contentRef.current && contentRef.current.querySelector('[data-highlighted="true"]');
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
          <h1 {...classes('search-result-heading')}>
            {t('searchPage.searchField.searchResultHeading')}
          </h1>
        )}
        {infoText && (
          <aside {...classes('search-result-infotext')}>
            <Wrench className="c-icon--22" />
            <span>{infoText}</span>
          </aside>
        )}
        {loading && <Spinner size="normal" />}
        <div>
          {result.map((contentTypeResult: ContentTypeResultType) => (
            <ContentTypeResult
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
          {result.length === 0 &&
            t('searchPage.searchField.contentTypeResultNoHit')}
        </div>
      </StyledScrollableContent>
      <StyledFooter>
        <AnchorButton
          to={allResultUrl}
          css={css`
            box-shadow: none;
          `}>
          {t('searchPage.searchField.allResultButtonText')}
        </AnchorButton>
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
