import React from 'react';
import styled from '@emotion/styled';
import SearchTypeHeader from './components/SearchTypeHeader';
import Items from './components/items';
import { SearchItemType } from './components/SearchItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px 0 40px;
`;

// export
type SearchResultType = {
  // items: Array<SearchItemType>;
  loading: boolean;
  totalCount: number;
  page: number;
  onFilterUpdate: () => void;
};

type ContextType = {
  type: string;
  typeicon: React.ReactNode;
  typelabel: string;
  currentTopic: string | null;
};

type Props = {
  context: ContextType;
  searchResult: SearchResultType;
  items: Array<SearchItemType>;
  filterOptions: any;
  onFilterUpdate: any;
  typeFilter: any;
  currentTopic: string | null;
  setTopic: any;
};

const SearchTypeResult = ({
  context,
  searchResult,
  items,
  filterOptions,
  onFilterUpdate,
  typeFilter,
  setTopic,
  currentTopic,
}: Props) => {
  const { loading, totalCount } = searchResult;
  return (
    <Wrapper>
      <SearchTypeHeader
        onFilterUpdate={onFilterUpdate}
        typeFilter={typeFilter}
        context={context}
        filterOptions={filterOptions}
        loading={loading}
        totalCount={totalCount}
        setTopic={setTopic}
        currentTopic={currentTopic}
      />
      <Items items={items} loading={loading} />
    </Wrapper>
  );
};

export default React.memo(SearchTypeResult);
