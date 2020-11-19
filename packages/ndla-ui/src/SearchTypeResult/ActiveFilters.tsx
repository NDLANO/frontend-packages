/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import css from '@emotion/css';
import { spacing, mq, breakpoints } from '@ndla/core';
// @ts-ignore
import Tooltip from '@ndla/tooltip';
import { injectT, tType } from '@ndla/i18n';
import ActiveFilterContent, {
  FilterProps,
  StyledActiveFilterTitle,
} from './ActiveFilterContent';

type StyledActiveFiltersProps = {
  showOnSmallScreen?: boolean;
  filterLength?: number;
};
const StyledActiveFilters = styled.ul<StyledActiveFiltersProps>`
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

const StyledActiveFilterWrapper = styled.li`
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

type Props = {
  filters: FilterProps[];
  onFilterRemove: (value: string, name: string) => void;
  showOnSmallScreen?: boolean;
};

const ActiveFilters = ({
  filters,
  onFilterRemove,
  showOnSmallScreen,
  t,
}: Props & tType) => {
  if (filters && filters.length > 0) {
    const filterLength = filters.length;

    const filterItems = filters.map(filter => {
      const filterKey = filter.name
        ? `${filter.name}${filter.value}`
        : filter.value;

      return (
        <StyledActiveFilterWrapper key={filterKey}>
          {filterLength > 1 ? (
            <Tooltip
              align="bottom"
              tooltip={t('searchPage.searchFilterMessages.removeFilter', {
                filterName: filter.title,
              })}>
              <ActiveFilterContent
                filter={filter}
                onFilterRemove={onFilterRemove}
              />
            </Tooltip>
          ) : (
            <ActiveFilterContent
              filter={filter}
              onFilterRemove={onFilterRemove}
            />
          )}
        </StyledActiveFilterWrapper>
      );
    });

    return (
      <StyledActiveFilters
        showOnSmallScreen={showOnSmallScreen}
        filterLength={filterLength}>
        {filterItems}
      </StyledActiveFilters>
    );
  }

  return null;
};

export default injectT(ActiveFilters);
