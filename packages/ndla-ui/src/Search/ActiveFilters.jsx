import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Cross } from 'ndla-icons/action';

const classes = BEMHelper('c-active-filters');

const ActiveFilters = ({ filters, onFilterRemove }) => {
  if (filters && filters.length > 0) {
    const filterItems = filters.map(filter => {
      const filterKey = filter.filterName
        ? `${filter.filterName}${filter.value}`
        : filter.value;
      return (
        <li key={filterKey}>
          <button
            onClick={() => {
              onFilterRemove(filter.value, filter.filterName);
            }}>
            <span>{filter.display}</span>
            <Cross />
          </button>
        </li>
      );
    });

    return <ul {...classes()}>{filterItems}</ul>;
  }

  return null;
};

ActiveFilters.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
      filterName: PropTypes.string,
    }),
  ),
  onFilterRemove: PropTypes.func.isRequired,
};

export default ActiveFilters;
