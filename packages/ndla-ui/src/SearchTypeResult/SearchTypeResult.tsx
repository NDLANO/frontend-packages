/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { memo, ReactNode } from "react";
import styled from "@emotion/styled";
import { spacing } from "@ndla/core";
import { Spinner } from "@ndla/icons";
import ResultNavigation, { PaginationType } from "./ResultNavigation";
import { SearchItemProps } from "./SearchItem";
import SearchItems from "./SearchItems";
import SearchTypeHeader, { FilterOptionsType } from "./SearchTypeHeader";
import constants from "../model";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: ${spacing.medium} 0;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: -1%;
  right: 0;
  bottom: 0;
  width: 102%;
  background-color: rgb(204, 204, 204, 0.1);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  padding: ${spacing.small};
`;

export type ContentType =
  | typeof constants.contentTypes.SUBJECT_MATERIAL
  | typeof constants.contentTypes.TASKS_AND_ACTIVITIES
  | typeof constants.contentTypes.ASSESSMENT_RESOURCES
  | typeof constants.contentTypes.EXTERNAL_LEARNING_RESOURCES
  | typeof constants.contentTypes.SOURCE_MATERIAL
  | typeof constants.contentTypes.LEARNING_PATH
  | typeof constants.contentTypes.TOPIC
  | typeof constants.contentTypes.MULTIDISCIPLINARY_TOPIC;

type Props = {
  items: SearchItemProps[];
  filters?: FilterOptionsType[];
  onFilterClick?: (id: string) => void;
  totalCount?: number;
  pagination?: PaginationType;
  type?: ContentType;
  loading?: boolean;
  children?: ReactNode;
  viewType?: "grid" | "list";
};

const SearchTypeResult = ({
  items,
  filters,
  onFilterClick,
  totalCount = 0,
  pagination,
  type,
  loading,
  viewType,
  children,
}: Props) => (
  <Wrapper>
    {loading && (
      <Overlay>
        <Spinner />
      </Overlay>
    )}
    <SearchTypeHeader onFilterClick={onFilterClick} filters={filters} totalCount={totalCount} type={type} />
    <SearchItems items={items} type={type} viewType={viewType} />
    {pagination && <ResultNavigation {...pagination} type={type} />}
    {children}
  </Wrapper>
);

export default memo(SearchTypeResult);
