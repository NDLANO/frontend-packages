/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { ButtonV2 } from '@ndla/button';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';

import SubjectFilters, { SubjectFilterProps } from './components/SubjectFilters';
import SearchFieldHeader from './SearchFieldHeader';
import CompetenceGoalItem from '../CompetenceGoalTab/CompetenceGoalItem';
import CoreElementItem from '../CompetenceGoalTab/CoreElementItem';
import { CompetenceGoalsItemType, CoreElementsItemType } from '../types';

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

const GrepCodesWrapper = styled.div`
  font-size: 16px;
  width: 100%;
  margin-top: ${spacing.normal};
`;

const GrepCodesList = styled.ul`
  padding: 0;
  li {
    border: 0;
    padding: 0;
  }
`;

const PhraseText = styled.div`
  margin-right: ${spacing.large};
`;
const PhraseSuggestionText = styled.div``;

const GrepCodesLabel = styled.div`
  ${fonts.sizes('16px', '32px')};
  text-transform: uppercase;
`;

type Props = {
  searchPhrase?: string;
  searchPhraseSuggestion?: string;
  searchPhraseSuggestionOnClick?: () => void;
  searchValue?: string;
  filters: SubjectFilterProps['filters'];
  activeFilters?: SubjectFilterProps['activeFilters'];
  competenceGoals?: CompetenceGoalsItemType[];
  coreElements?: CoreElementsItemType[];
  onSearchValueChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  noResults?: boolean;
  loading: boolean;
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
  competenceGoals,
  coreElements,
  noResults,
  loading,
}: Props) => {
  const { t } = useTranslation();
  const [isNarrowScreen, setIsNarrowScreen] = useState<boolean | undefined>();

  useEffect(() => {
    const isNarrowScreenMatch = window.matchMedia(`(max-width: ${breakpoints.desktop})`);
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsNarrowScreen(e.matches);
    };
    isNarrowScreenMatch.addEventListener('change', handleChange);
    handleChange(isNarrowScreenMatch);
    return () => {
      isNarrowScreenMatch.removeEventListener('change', handleChange);
    };
  }, []);

  const phraseText = noResults ? (
    t('searchPage.noHitsShort', { query: searchPhrase })
  ) : (
    <>
      {t('searchPage.resultType.showingSearchPhrase')} <b>&ldquo;{searchPhrase}&rdquo;</b>
    </>
  );
  const removeFilterSuggestion =
    noResults && activeFilters?.filters.length ? t('searchPage.removeFilterSuggestion') : undefined;
  return (
    <Wrapper>
      <SearchInputWrapper>
        <SearchFieldHeader
          value={searchValue}
          onChange={onSearchValueChange}
          onSubmit={onSubmit}
          activeFilters={activeFilters}
          filters={filters}
          isNarrowScreen={isNarrowScreen}
        />
      </SearchInputWrapper>
      <PhraseWrapper>
        <div aria-live="assertive">
          {!loading && searchPhrase && (
            <>
              <PhraseText>{phraseText}</PhraseText>
              <PhraseText>{removeFilterSuggestion}</PhraseText>
            </>
          )}
          {loading && <div aria-label={t('loading')} />}
        </div>
        {searchPhraseSuggestion && (
          <PhraseSuggestionText>
            {t('searchPage.resultType.searchPhraseSuggestion')}{' '}
            <ButtonV2 variant="link" onClick={searchPhraseSuggestionOnClick}>
              [{searchPhraseSuggestion}]
            </ButtonV2>
          </PhraseSuggestionText>
        )}
        {!!competenceGoals?.length && (
          <GrepCodesWrapper>
            {competenceGoals?.length && (
              <>
                <GrepCodesLabel>{t('competenceGoals.competenceGoalItem.title')}</GrepCodesLabel>
                <GrepCodesList>
                  {competenceGoals.map((e) => (
                    <CompetenceGoalItem key={e.id} id={e.id} title={e.title} goals={e.goals} />
                  ))}
                </GrepCodesList>
              </>
            )}
          </GrepCodesWrapper>
        )}
        {!!coreElements?.length && (
          <GrepCodesWrapper>
            <>
              <GrepCodesLabel>{t('competenceGoals.competenceTabCorelabel')}</GrepCodesLabel>
              <GrepCodesList>
                {coreElements.map((e) => (
                  <CoreElementItem key={e.id} id={e.id} title={e.title} text={e.text} url={e.url} />
                ))}
              </GrepCodesList>
            </>
          </GrepCodesWrapper>
        )}
      </PhraseWrapper>
      {isNarrowScreen && (
        <SubjectFilters filters={filters} activeFilters={activeFilters} isNarrowScreen={isNarrowScreen} />
      )}
    </Wrapper>
  );
};

export default SearchHeader;
