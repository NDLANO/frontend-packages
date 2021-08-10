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
import ActiveFilterContent, { FilterProps, StyledActiveFilterTitle } from './ActiveFilterContent';

type StyledActiveFiltersProps = {
  showOnSmallScreen?: boolean;
  filterLength?: number;
};
const StyledActiveFilters = styled.ul<StyledActiveFiltersProps>`
  margin: 0;
  padding: 0;
  display: none;

  ${({ showOnSmallScreen }) =>
    showOnSmallScreen &&
    `
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
  customElements?: React.ReactElement[];
};

const ActiveFilters = ({ filters, onFilterRemove, showOnSmallScreen, customElements, t }: Props & tType) => {
  if (filters && filters.length > 0) {
    const filterLength = filters.length;

    const filterItems = filters.map((filter) => {
      const filterKey = filter.name ? `${filter.name}${filter.value}` : filter.value;

      return (
        <StyledActiveFilterWrapper key={filterKey}>
          {filterLength > 1 ? (
            <Tooltip
              delay={2000}
              align="bottom"
              tooltip={t('searchPage.searchFilterMessages.removeFilter', {
                filterName: filter.title,
              })}>
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
        {customElements &&
          customElements.map((item, index) => (
            <StyledActiveFilterWrapper key={index}>{item}</StyledActiveFilterWrapper>
          ))}
      </StyledActiveFilters>
    );
  }

  return null;
};

export default injectT(ActiveFilters);
