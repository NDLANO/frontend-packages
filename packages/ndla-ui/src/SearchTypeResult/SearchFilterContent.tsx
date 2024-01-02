/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { spacing } from "@ndla/core";

import SearchViewType, { SearchViewTypeProps } from "./SearchViewType";
import { FilterButtons } from "../Filter";
import { FilterButtonsProps } from "../Filter/FilterButtons";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  max-width: 100%;
`;

const FilterButtonsWrapper = styled.div`
  padding-top: 2px;
  margin-right: ${spacing.small};
  overflow-x: hidden;
  margin-left: -13px;
`;

type Props = {
  items: FilterButtonsProps["items"];
  onFilterToggle: FilterButtonsProps["onFilterToggle"];
  onRemoveAllFilters: FilterButtonsProps["onRemoveAllFilters"];
};
const SearchFilterContent = ({
  viewType,
  onChangeViewType,
  items,
  onFilterToggle,
  onRemoveAllFilters,
}: SearchViewTypeProps & Props) => {
  const { t } = useTranslation();
  return (
    <Container>
      <FilterButtonsWrapper>
        <FilterButtons
          items={items}
          onFilterToggle={onFilterToggle}
          onRemoveAllFilters={onRemoveAllFilters}
          labels={{
            openFilter: t("searchPage.searchFilterMessages.resourceTypeFilter.button"),
          }}
        />
      </FilterButtonsWrapper>
      <SearchViewType viewType={viewType} onChangeViewType={onChangeViewType} />
    </Container>
  );
};

export default SearchFilterContent;
