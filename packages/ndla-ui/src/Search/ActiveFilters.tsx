/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from 'react-i18next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { spacing, mq, breakpoints } from '@ndla/core';
import Tooltip from '@ndla/tooltip';
import ActiveFilterContent, { StyledActiveFilterTitle } from './ActiveFilterContent';

interface StyledActiveFiltersProps {
  showOnSmallScreen?: boolean;
  filterLength?: number;
}

const StyledActiveFilters = styled('ul')<StyledActiveFiltersProps>`
  margin: 0;
  padding: 0;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: wrap;
  display: none;

  ${({ showOnSmallScreen }) =>
    showOnSmallScreen &&
    css`
      ${mq.range({ until: breakpoints.desktop })} {
        display: flex;
      }
    `}

  ${mq.range({ from: breakpoints.tabletWide })} {
    display: flex;
    flex-direction: row;
    align-items: center;

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

const StyledActiveFilterWrapper = styled('li')`
  list-style: none;
  display: flex;
  margin-bottom: ${spacing.xsmall};

  ${mq.range({ from: breakpoints.tabletWide })} {
    margin: 0 ${spacing.small} 0 0;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const getFilterLength = (filters: Filter[]) =>
  filters.filter((filter) => filter.filterName === 'filter_subjects' && filter.title).length;

interface Filter {
  title: string;
  value: string;
  filterName?: string;
}

interface Props {
  filters: Filter[];
  onFilterRemove: (value: string, filterName?: string) => void;
  showOnSmallScreen?: boolean;
}

const ActiveFilters = ({ filters, onFilterRemove, showOnSmallScreen }: Props) => {
  const { t } = useTranslation();
  if (filters && filters.length > 0) {
    const filterLength = getFilterLength(filters);

    const filterItems = filters.map((filter) => {
      const filterKey = filter.filterName ? `${filter.filterName}${filter.value}` : filter.value;

      return (
        <StyledActiveFilterWrapper key={filterKey}>
          {filterLength > 1 ? (
            <Tooltip
              tooltip={t('searchPage.searchFilterMessages.removeFilter', {
                filterName: filter.title,
              })}
            >
              <ActiveFilterContent
                filter={filter}
                ariaLabel={t('searchPage.searchFilterMessages.removeFilter', {
                  filterName: filter.title,
                })}
                onFilterRemove={onFilterRemove}
              />
            </Tooltip>
          ) : (
            <ActiveFilterContent
              filter={filter}
              onFilterRemove={onFilterRemove}
              ariaLabel={t('searchPage.searchFilterMessages.removeFilter', {
                filterName: filter.title,
              })}
            />
          )}
        </StyledActiveFilterWrapper>
      );
    });

    return (
      <StyledActiveFilters showOnSmallScreen={showOnSmallScreen} filterLength={filterLength}>
        {filterItems}
      </StyledActiveFilters>
    );
  }

  return null;
};

export default ActiveFilters;
