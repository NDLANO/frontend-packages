import React from 'react';
import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';
import { breakpoints, mq } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';
import { FilterProps } from './ActiveFilterContent';
import ActiveFilters from './ActiveFilters';
import SearchFieldHeader from './SearchFieldHeader';
import PopupFilter, { PopupFilterProps } from './PopupFilter';

const Wrapper = styled.div`
  margin-top: 24px;
  ${mq.range({ from: breakpoints.tablet })} {
    margin-top: 48px;
  }
`;

const SearchInputWrapper = styled.div`
  display: none;
  ${mq.range({ until: breakpoints.wide })} {
    display: block;
    margin-bottom: 24px;
  }
`;

const PhraseWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  margin-bottom: 24px;
`;

const PhraseText = styled.div`
  margin-right: 60px;
`;
const PhraseSuggestionText = styled.div``;

const HideOnDesktopWrapper = styled.div`
  display: none;
  ${mq.range({ until: breakpoints.wide })} {
    display: block;
  }
`;

const SearchCountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CountHeading = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: #303030;
  margin-top: 24px;
`;

type Props = {
  count: number;
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
  count,
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
        <ActiveFilters {...activeFilters} showOnSmallScreen />
      </HideOnDesktopWrapper>
    )}
    <SearchCountWrapper>
      <CountHeading>
        {count} {t('searchPage.resultType.hits')}
      </CountHeading>
      {filters && (
        <HideOnDesktopWrapper>
          <PopupFilter {...filters} />
        </HideOnDesktopWrapper>
      )}
    </SearchCountWrapper>
  </Wrapper>
);

export default injectT(SearchHeader);
