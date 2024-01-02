/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonV2 } from "@ndla/button";
import { spacing, mq, breakpoints } from "@ndla/core";
import Tooltip from "@ndla/tooltip";
import ActiveFilterContent, { FilterProps, StyledActiveFilterTitle } from "./ActiveFilterContent";

type StyledActiveFiltersProps = {
  showOnSmallScreen?: boolean;
  filterLength?: number;
};

const StyledActiveFilters = styled.ul<StyledActiveFiltersProps>`
  margin: 0;
  padding: 0;
  display: none;
  ${(props: StyledActiveFiltersProps) =>
    props.showOnSmallScreen &&
    css`
      ${StyledActiveFilterTitle} {
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right: ${spacing.small};
        display: block;
        /* max-width: 200px; */
      }
      ${mq.range({ until: breakpoints.desktop })} {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      ${mq.range({ until: breakpoints.tablet })} {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        flex-wrap: wrap;
      }
    `}

  ${mq.range({ from: breakpoints.desktop })} {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${spacing.xsmall};

    ${StyledActiveFilterTitle} {
      ${({ filterLength }) =>
        filterLength &&
        filterLength >= 2 &&
        css`
          text-overflow: ellipsis;
          overflow: hidden;
          padding-right: ${spacing.small};
          display: block;
        `}

      ${({ filterLength }) =>
        filterLength &&
        filterLength === 2 &&
        css`
          max-width: 90px;
        `}

    ${({ filterLength }) =>
        filterLength &&
        filterLength > 2 &&
        css`
          max-width: 70px;
        `}
    }
  }
`;

const StyledActiveFilterWrapper = styled.li`
  list-style: none;
  display: flex;
  margin: 0;
  margin-right: ${spacing.xsmall};
  ${mq.range({ until: breakpoints.desktop })} {
    margin-bottom: ${spacing.xsmall};
  }
`;

type Props = {
  filters: FilterProps[];
  onFilterRemove: (value: string, name: string) => void;
  showOnSmallScreen?: boolean;
  customElements?: ReactElement[];
  onClickShowHiddenSubjects: () => void;
};

const ActiveFilters = ({
  filters,
  onFilterRemove,
  showOnSmallScreen,
  customElements,
  onClickShowHiddenSubjects,
}: Props) => {
  const { t } = useTranslation();
  if (!filters) return null;
  const showFilterCount = 3;
  const filterLength = filters.length;

  const visibleFilters = filterLength > showFilterCount ? filters.slice(0, showFilterCount - 1) : filters;

  const filterItems = visibleFilters.map((filter) => {
    const filterKey = filter.name ? `${filter.name}${filter.value}` : filter.value;

    return (
      <StyledActiveFilterWrapper key={filterKey}>
        {filterLength > 1 ? (
          <Tooltip
            tooltip={t("searchPage.searchFilterMessages.removeFilter", {
              filterName: filter.title,
            })}
          >
            <ActiveFilterContent filter={filter} onFilterRemove={onFilterRemove} />
          </Tooltip>
        ) : (
          <ActiveFilterContent filter={filter} onFilterRemove={onFilterRemove} />
        )}
      </StyledActiveFilterWrapper>
    );
  });

  return (
    <StyledActiveFilters showOnSmallScreen={showOnSmallScreen} filterLength={filterLength}>
      {filterItems}
      {filterLength > showFilterCount && (
        <StyledActiveFilterWrapper>
          <Tooltip tooltip={t("searchPage.searchFilterMessages.noValuesButtonText")}>
            <ButtonV2
              aria-label={t("searchPage.searchFilterMessages.additionalSubjectFilters", {
                count: filterLength - showFilterCount + 1,
              })}
              size="normal"
              shape="pill"
              onClick={onClickShowHiddenSubjects}
            >
              <StyledActiveFilterTitle>
                {t("searchPage.searchFilterMessages.additionalSubjectFilters", {
                  count: filterLength - showFilterCount + 1,
                })}
              </StyledActiveFilterTitle>
            </ButtonV2>
          </Tooltip>
        </StyledActiveFilterWrapper>
      )}
      {customElements?.map((item, index) => <StyledActiveFilterWrapper key={index}>{item}</StyledActiveFilterWrapper>)}
    </StyledActiveFilters>
  );
};

export default ActiveFilters;
