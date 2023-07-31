import React from 'react';
import styled from '@emotion/styled';
import { spacing, mq, breakpoints } from '@ndla/core';
import Tooltip from '@ndla/tooltip';
import { useTranslation } from 'react-i18next';
import ActiveFilterContent from './ActiveFilterContent';

const StyledActiveFilters = styled('ul')`
  margin: 0;
  padding: 0;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: wrap;
  display: none;

  &[data-show-on-small='true'] {
    ${mq.range({ until: breakpoints.desktop })} {
      display: flex;
    }
  }

  ${mq.range({ from: breakpoints.tabletWide })} {
    display: flex;
    flex-direction: row;
    align-items: center;

    [data-filter-title] {
      &[data-filter-gte-2='true'] {
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right: ${spacing.small};
        display: block;
        max-width: 70px;
      }
      &[data-filter-length='2'] {
        max-width: 90px;
      }
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
      <StyledActiveFilters
        data-show-on-small={showOnSmallScreen}
        data-filter-length={filterLength}
        data-filter-gte-2={filterLength >= 2}
      >
        {filterItems}
      </StyledActiveFilters>
    );
  }

  return null;
};

export default ActiveFilters;
