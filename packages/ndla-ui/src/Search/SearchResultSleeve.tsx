import React from 'react';
import styled from '@emotion/styled';
import BEMHelper from 'react-bem-helper';
import { css } from '@emotion/core';
import { spacing, colors } from '@ndla/core';
// @ts-ignore
import { Spinner } from '@ndla/editor';
// @ts-ignore
import { StyledButton } from '@ndla/button';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import { Wrench, Esc, KeyboardReturn, ChevronLeft, ChevronRight } from '@ndla/icons/common';
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
`;

const StyledScrollableContent = styled.div`
  max-height: 500px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  padding: ${spacing.large};
`;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledInstructions = styled.div`
  background: ${colors.brand.greyLight};
  flex: 1;
  padding: ${spacing.xsmall} ${spacing.normal};
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
}) => (
  <StyledSearchResultsWrapper>
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
        <Esc />
        <KeyboardReturn />
        <ChevronLeft />
        <ChevronRight />
      </StyledInstructions>
    </StyledFooter>
  </StyledSearchResultsWrapper>
);

  export default injectT(SearchResultSleeve);
