import React from 'react';
import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';
import { breakpoints, mq } from '@ndla/core';
// @ts-ignore
import Button from '@ndla/button';

const Wrapper = styled.div`
  margin-top: 24px;
  ${mq.range({ from: breakpoints.tablet })} {
    margin-top: 48px;
  }
`;

const PhraseWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
`;

const PhraseText = styled.div`
  margin-right: 60px;
`;
const PhraseSuggestionText = styled.div``;
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
};
const SearchHeader = ({
  count,
  searchPhrase,
  searchPhraseSuggestion,
  searchPhraseSuggestionOnClick,
  t,
}: Props & tType) => (
  <Wrapper>
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
    <CountHeading>
      {count} {t('searchPage.resultType.hits')}
    </CountHeading>
  </Wrapper>
);

export default injectT(SearchHeader);
