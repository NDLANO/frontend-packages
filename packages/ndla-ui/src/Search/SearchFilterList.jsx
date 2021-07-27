import React, { Fragment } from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';

import { FilterList, ToggleItem } from '../Filter';

const searchFilterClasses = BEMHelper({
  prefix: 'c-',
  name: 'search-filter',
  outputIsString: true,
});

const valueShape = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const SearchFilterList = ({
  label,
  options,
  values,
  narrowScreenOnly,
  onChange,
  onSubfilterChange,
  preid,
  noFilterSelectedLabel,
  subjectValues,
  children,
}) => {
  return (
    <div className={searchFilterClasses('')}>
      <div>
        {options.map((option, index) => {
          const itemModifiers = [];
          const checked = values.some(value => value === option.value);

          if (!checked && index + 1 > this.state.visibleCount) {
            itemModifiers.push('hidden');
          }

          const disabled = option.noResults || option.hits === 0;

          if (disabled) {
            itemModifiers.push('no-results');
          }

          return (
            <Fragment key={option.value}>
              <ToggleItem
                modifiers={itemModifiers}
                id={preid + option.value}
                value={option.value}
                disabled={disabled}
                tabIndex={disabled ? -1 : 0}
                checked={checked}
                icon={option.icon}
                label={option.title}
                component="div"
                onChange={event => {
                  let newValues = null;
                  if (event.currentTarget.checked) {
                    newValues = [...values, option.value];
                  } else {
                    newValues = values.filter(value => value !== option.value);
                  }
                  if (onChange) {
                    onChange(newValues, option.value);
                  }
                }}
              />
              <div className={searchFilterClasses()}>
                <FilterList
                  options={option.subjectFilters}
                  label={label}
                  labelNotVisible
                  values={subjectValues[option.value]}
                  onChange={(subjectFilters, subjectFilter) =>
                    onSubfilterChange(option.value, subjectFilters, subjectFilter)
                  }
                  alignedGroup
                  noFilterSelectedLabel={noFilterSelectedLabel}
                />
              </div>
            </Fragment>
          );
        })}
      </div>
      {children}
    </div>
  );
};

SearchFilterList.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: valueShape.isRequired,
      title: PropTypes.string.isRequired,
      noResults: PropTypes.bool,
    }),
  ).isRequired,
  values: PropTypes.arrayOf(valueShape),
  onChange: PropTypes.func,
  onSubfilterChange: PropTypes.func,
  noFilterSelectedLabel: PropTypes.string,
  children: PropTypes.node,
};

SearchFilterList.defaultProps = {
  values: [],
};

export default SearchFilterList;
