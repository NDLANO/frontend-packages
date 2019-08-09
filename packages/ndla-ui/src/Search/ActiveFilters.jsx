import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Cross } from '@ndla/icons/action';

const classes = BEMHelper('c-active-filters');

const ActiveFilters = ({ filters, onFilterRemove }) => {
  if (filters && filters.length > 0) {
    const filterLength = filters.filter(
      filter => filter.filterName === 'filter_subjects' && filter.title,
    );

    let concatClass;
    if (filterLength.length === 2) concatClass = 'concat2';
    if (filterLength.length > 2) concatClass = 'concat3';

    const filterItems = filters.map(filter => {
      const filterKey = filter.filterName
        ? `${filter.filterName}${filter.value}`
        : filter.value;

      return (
        <li key={filterKey}>
          <button
            title={`Fjern filter ${filter.title}`}
            aria-label={`Fjern filter ${filter.filterName}`}
            type="button"
            onClick={() => onFilterRemove(filter.value, filter.filterName)}>
            <span>{filter.title}</span>
            <Cross />
          </button>
        </li>
      );
    });

    return <ul {...classes('', concatClass)}>{filterItems}</ul>;
  }

  return null;
};

ActiveFilters.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      filterName: PropTypes.string,
    }),
  ),
  onFilterRemove: PropTypes.func.isRequired,
};

export default ActiveFilters;
