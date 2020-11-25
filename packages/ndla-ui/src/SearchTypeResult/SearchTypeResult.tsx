/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import constants from '../model';
import SearchTypeHeader, { FilterOptionsType } from './SearchTypeHeader';
import SearchItems from './SearchItems';
import { SearchItemType } from './SearchItem';
import ResultNavigation, { PaginationType } from './ResultNavigation';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 40px 0;
`;

export type ContentType =
  | constants.contentTypes.SUBJECT_MATERIAL
  | constants.contentTypes.TASKS_AND_ACTIVITIES
  | constants.contentTypes.ASSESSMENT_RESOURCES
  | constants.contentTypes.EXTERNAL_LEARNING_RESOURCES
  | constants.contentTypes.SOURCE_MATERIAL
  | constants.contentTypes.LEARNING_PATH
  | constants.contentTypes.TOPIC;

type Props = {
  items: SearchItemType[];
  filters: FilterOptionsType[];
  onFilterClick: (id: string) => void;
  loading?: boolean;
  totalCount?: number;
  pagination?: PaginationType;
  type?: ContentType;
  children?: React.ReactNode;
};

const SearchTypeResult = ({
  items,
  filters,
  onFilterClick,
  loading = false,
  totalCount = 0,
  pagination,
  type,
  children,
}: Props) => (
  <Wrapper>
    <SearchTypeHeader
      onFilterClick={onFilterClick}
      filters={filters}
      loading={loading}
      totalCount={totalCount}
      type={type}
    />
    <SearchItems items={items} type={type} loading={loading} />
    {pagination && <ResultNavigation {...pagination} />}
    {children && children}
  </Wrapper>
);

export default React.memo(SearchTypeResult);
