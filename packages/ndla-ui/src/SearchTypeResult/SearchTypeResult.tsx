import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import constants from '../model';
import SearchTypeHeader, {
  FilterOptionsType,
  TypeFilterType,
} from './SearchTypeHeader';
import SearchItems from './SearchItems';
import { SearchItemType } from './SearchItem';
import { SearchSubjectTypeItemType } from './SearchSubjectTypeItem';
import ResultNavigation, { PaginationType } from './ResultNavigation';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px 0 40px;
`;

export type ContentType =
  | constants.contentTypes.SUBJECT
  | constants.contentTypes.SUBJECT_MATERIAL
  | constants.contentTypes.TASKS_AND_ACTIVITIES
  | constants.contentTypes.ASSESSMENT_RESOURCES
  | constants.contentTypes.EXTERNAL_LEARNING_RESOURCES
  | constants.contentTypes.SOURCE_MATERIAL
  | constants.contentTypes.LEARNING_PATH
  | constants.contentTypes.TOPIC;

type Props = {
  items: Array<SearchItemType | SearchSubjectTypeItemType>;
  filterOptions: Array<FilterOptionsType>;
  onFilterUpdate: (type: string, filter: any) => void;
  typeFilter: TypeFilterType;
  loading?: boolean;
  totalCount?: number;
  pagination: PaginationType;
  setSubjectType: (type: string) => void;
  currentSubjectType: string | null;
  type?: ContentType;
};

const SearchTypeResult = ({
  items,
  filterOptions,
  onFilterUpdate,
  typeFilter,
  loading = false,
  totalCount = 0,
  pagination,
  setSubjectType,
  currentSubjectType,
  type,
}: Props) => {
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
        filterOptions={filterOptions}
        loading={loading}
        totalCount={totalCount}
        type={type}
      />
      <SearchItems items={items} type={type} loading={loading} />
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
