import React from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';

import { FilterList } from '../Filter';

const searchFilterClasses = BEMHelper({
  prefix: 'c-',
  name: 'search-filter',
  outputIsString: true,
});

const valueShape = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const SearchFilter = ({
  label,
  options,
  values,
  defaultVisibleCount,
  showLabel,
  hideLabel,
  narrowScreenOnly,
  contextFilter,
  onChange,
  noFilterSelectedLabel,
  children,
}) => {
  const modifiers = [];

  if (narrowScreenOnly) {
    modifiers.push('narrow-screen-only');
  }

  if (contextFilter) {
    modifiers.push('context-filter');
  }

  return (
    <div className={searchFilterClasses('', modifiers)}>
      <FilterList
        options={options}
        label={label}
        labelNotVisible={contextFilter}
        values={values}
        defaultVisibleCount={defaultVisibleCount}
        modifiers={!contextFilter ? 'search' : null}
        showLabel={showLabel}
        hideLabel={hideLabel}
        onChange={onChange}
        noFilterSelectedLabel={noFilterSelectedLabel}
      />
      {children}
    </div>
  );
};

SearchFilter.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: valueShape.isRequired,
      title: PropTypes.string.isRequired,
      noResults: PropTypes.bool,
    }),
  ).isRequired,
  values: PropTypes.arrayOf(valueShape),
  defaultVisibleCount: PropTypes.number,
  onChange: PropTypes.func,
  showLabel: PropTypes.string,
  hideLabel: PropTypes.string,
  narrowScreenOnly: PropTypes.bool,
  noFilterSelectedLabel: PropTypes.string,
  contextFilter: PropTypes.bool,
  children: PropTypes.node,
};

SearchFilter.defaultProps = {
  values: [],
};

export default SearchFilter;
