import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Cross } from '@ndla/icons/action';
import Tooltip from '@ndla/tooltip';
import { injectT } from '@ndla/i18n';

const classes = BEMHelper('c-active-filters');

const FilterContent = ({ filter, onFilterRemove, t }) => (
  <button
    aria-label={t('searchPage.searchFilterMessages.removeFilter', {
      filterName: filter.title,
    })}
    type="button"
    onClick={() => onFilterRemove(filter.value, filter.filterName)}>
    <span>{filter.title}</span>
    <Cross />
  </button>
);

const ActiveFilters = ({ filters, onFilterRemove, t }) => {
  if (filters && filters.length > 0) {
    const filterLength = filters.filter(
      filter => filter.filterName === 'filter_subjects' && filter.title,
    ).length;

    let concatClass;
    if (filterLength === 2) concatClass = 'concat2';
    if (filterLength > 2) concatClass = 'concat3';

    const filterItems = filters.map(filter => {
      const filterKey = filter.filterName
        ? `${filter.filterName}${filter.value}`
        : filter.value;

      return (
        <li key={filterKey}>
          {filterLength > 1 ? (
            <Tooltip
              align="top"
              tooltip={t('searchPage.searchFilterMessages.removeFilter', {
                filterName: filter.title,
              })}>
              <FilterContent
                filter={filter}
                onFilterRemove={onFilterRemove}
                t={t}
              />
            </Tooltip>
          ) : (
            <FilterContent
              filter={filter}
              onFilterRemove={onFilterRemove}
              t={t}
            />
          )}
        </li>
      );
    });

    return <ul {...classes('', concatClass)}>{filterItems}</ul>;
  }

  return null;
};

ActiveFilters.propTypes = {
  t: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      filterName: PropTypes.string,
    }),
  ),
  onFilterRemove: PropTypes.func.isRequired,
};

export default injectT(ActiveFilters);
