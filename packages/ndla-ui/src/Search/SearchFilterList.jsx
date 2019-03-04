import React from 'react';
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
  defaultVisibleCount,
  showLabel,
  hideLabel,
  narrowScreenOnly,
  labelNotVisible,
  contextFilter,
  onChange,
  onSubfilterChange,
  preid,
  noFilterSelectedLabel,
  subjectValues,
  children,
}) => {
  const modifiers = [];

  if (narrowScreenOnly) {
    modifiers.push('narrow-screen-only');
  }

  if (contextFilter) {
    modifiers.push('context-filter');
  }

  const showAll =
    defaultVisibleCount === null || options.length <= defaultVisibleCount;
  const labelModifiers = [];

  if (labelNotVisible) {
    labelModifiers.push('hidden');
  }
  
  return (
    <div className={searchFilterClasses('', modifiers)}>
      <div>
        {options.map((option, index) => {
          const itemModifiers = [];
          const checked = values.some(value => value === option.value);

          if (!showAll && !checked && index + 1 > this.state.visibleCount) {
            itemModifiers.push('hidden');
          }

          const disabled = option.noResults || option.hits === 0;

          if (disabled) {
            itemModifiers.push('no-results');
          }

          return (
            <>
              <ToggleItem
                modifiers={itemModifiers}
                id={preid + option.value}
                key={option.value}
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
              <div className={searchFilterClasses('', modifiers)}>
                <FilterList
                  options={option.subjectFilters}
                  label={label}
                  labelNotVisible={true}
                  values={subjectValues[option.value]}
                  defaultVisibleCount={defaultVisibleCount}
                  modifiers={!contextFilter ? 'search' : null}
                  showLabel={showLabel}
                  hideLabel={hideLabel}
                  onChange={(subjectFilters, subjectFilter) => 
                    onSubfilterChange(option.value, subjectFilters, subjectFilter)
                  }
                  alignedGroup
                  noFilterSelectedLabel={noFilterSelectedLabel}
                />
              </div>
            </>
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
  defaultVisibleCount: PropTypes.number,
  onChange: PropTypes.func,
  onSubfilterChange: PropTypes.func,
  showLabel: PropTypes.string,
  hideLabel: PropTypes.string,
  narrowScreenOnly: PropTypes.bool,
  noFilterSelectedLabel: PropTypes.string,
  contextFilter: PropTypes.bool,
  children: PropTypes.node,
  showAll: PropTypes.bool,
};

SearchFilterList.defaultProps = {
  values: [],
};

export default SearchFilterList;
