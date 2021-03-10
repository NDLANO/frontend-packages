/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';
import { breakpoints, mq, spacing } from '@ndla/core';

// @ts-ignore
import Button from '@ndla/button';
import { FilterProps } from './ActiveFilterContent';
import ActiveFilters from './ActiveFilters';
import SearchFieldHeader from './SearchFieldHeader';
import PopupFilter, { PopupFilterProps } from './PopupFilter';

const Wrapper = styled.div`
  margin-top: ${spacing.normal};
  margin-bottom: ${spacing.normal};
  ${mq.range({ from: breakpoints.tablet })} {
    margin-top: ${spacing.large};
  }
`;

const SearchInputWrapper = styled.div`
  margin-bottom: ${spacing.normal};
`;

const PhraseWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  margin: ${spacing.normal} 0 ${spacing.medium};
`;

const PhraseText = styled.div`
  margin-right: ${spacing.large};
`;
const PhraseSuggestionText = styled.div``;

const HideOnDesktopWrapper = styled.div`
  display: none;
  ${mq.range({ until: breakpoints.desktop })} {
    display: block;
  }
`;

type Props = {
  searchPhrase?: string;
  searchPhraseSuggestion?: string;
  searchPhraseSuggestionOnClick?: () => void;
  searchValue: string;
  filters?: PopupFilterProps;
  activeFilters?: {
    filters: FilterProps[];
    onFilterRemove: (value: string, name: string) => void;
  };
  onSearchValueChange: (value: string) => void;
  onSubmit: () => void;
};

const SearchHeader = ({
  searchPhrase,
  searchPhraseSuggestion,
  searchPhraseSuggestionOnClick,
  searchValue,
  onSearchValueChange,
  onSubmit,
  activeFilters,
  filters,
  t,
}: Props & tType) => (
  <Wrapper>
    <SearchInputWrapper>
      <SearchFieldHeader
        value={searchValue}
        onChange={onSearchValueChange}
        onSubmit={onSubmit}
        activeFilters={activeFilters}
        filters={filters}
      />
    </SearchInputWrapper>
    <PhraseWrapper>
      {searchPhrase && (
        <PhraseText>
          {t('searchPage.resultType.showingSearchPhrase')} {searchPhrase}
        </PhraseText>
      )}
      {searchPhraseSuggestion && (
        <PhraseSuggestionText>
          {t('searchPage.resultType.searchPhraseSuggestion')}{' '}
          <Button link onClick={searchPhraseSuggestionOnClick}>
            {searchPhraseSuggestion}
          </Button>
        </PhraseSuggestionText>
      )}
    </PhraseWrapper>
    {activeFilters && (
      <HideOnDesktopWrapper>
        <ActiveFilters
          {...activeFilters}
          showOnSmallScreen
          customElements={filters ? [<PopupFilter {...filters} />] : []}
        />
      </HideOnDesktopWrapper>
    )}
  </Wrapper>
);

export default injectT(SearchHeader);
