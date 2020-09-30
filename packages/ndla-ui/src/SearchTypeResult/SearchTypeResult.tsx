import React from 'react';
import styled from '@emotion/styled';
import SearchTypeHeader, {
  FilterOptionsType,
  TypeFilterType,
  ContextType,
} from './components/SearchTypeHeader';
import Items from './components/items';
import { SearchItemType } from './components/SearchItem';
import { SearchSubjectTypeItemType } from './components/SearchSubjectTypeItem';
import ResultNavigation, {
  PaginationType,
} from './components/ResultNavigation';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px 0 40px;
`;

type Props = {
  context: ContextType;
  items: Array<SearchItemType | SearchSubjectTypeItemType>;
  filterOptions: Array<FilterOptionsType>;
  onFilterUpdate: (type: string, filter: any) => void;
  typeFilter: TypeFilterType;
  loading?: boolean;
  totalCount?: number;
  pagination: PaginationType;
  setSubjectType: (type: string) => void;
  currentSubjectType: string | null;
};

const SearchTypeResult = ({
  context,
  items,
  filterOptions,
  onFilterUpdate,
  typeFilter,
  loading = false,
  totalCount = 0,
  pagination,
  setSubjectType,
  currentSubjectType,
}: Props) => {
  const { type } = context;
  const handleNavigate = (page: number) => {
    let filterUpdate = { ...typeFilter };
    filterUpdate.page = page;
    onFilterUpdate(type, filterUpdate);
  };
  return (
    <Wrapper>
      <SearchTypeHeader
        onFilterUpdate={onFilterUpdate}
        typeFilter={typeFilter}
        context={context}
        filterOptions={filterOptions}
        loading={loading}
        totalCount={totalCount}
      />
      <Items items={items} type={type} loading={loading} />
      {!currentSubjectType ? (
        <ResultNavigation
          pagination={pagination}
          onNavigate={handleNavigate}
          onSelectSubjectType={() => setSubjectType(type)}
        />
      ) : null}
    </Wrapper>
  );
};

export default React.memo(SearchTypeResult);
