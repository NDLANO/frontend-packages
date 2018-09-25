/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { Component, createElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronDown, ChevronUp } from 'ndla-icons/common';

const filterClasses = new BEMHelper({
  name: 'filter',
  prefix: 'c-',
});

class FilterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleCount: props.defaultVisibleCount,
    };
  }

  render() {
    const {
      modifiers,
      label,
      labelNotVisible,
      options,
      values,
      onChange,
      defaultVisibleCount,
      showLabel,
      hideLabel,
      alignedGroup,
      collapseMobile,
    } = this.props;

    const showAll =
      defaultVisibleCount === null || options.length <= defaultVisibleCount;
    const labelModifiers = [];

    if (labelNotVisible) {
      labelModifiers.push('hidden');
    }

    return (
      <section {...filterClasses('list', modifiers)}>
        <h1 {...filterClasses('label', labelModifiers)}>{label}</h1>
        {this.props.noFilterSelectedLabel &&
          options.length === 0 && (
            <span {...filterClasses('no-filter-selected')}>
              {this.props.noFilterSelectedLabel}
            </span>
          )}
        <ul
          {...filterClasses('item-wrapper', {
            'aligned-grouping': alignedGroup,
            'collapse-mobile': collapseMobile,
          })}>
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
              <li {...filterClasses('item', itemModifiers)} key={option.value}>
                <input
                  {...filterClasses('input')}
                  type="checkbox"
                  id={option.value}
                  value={option.value}
                  disabled={disabled}
                  tabIndex={disabled ? -1 : 0}
                  checked={checked}
                  onChange={event => {
                    let newValues = null;
                    if (event.currentTarget.checked) {
                      newValues = [...values, option.value];
                    } else {
                      newValues = values.filter(
                        value => value !== option.value,
                      );
                    }
                    if (onChange) {
                      onChange(newValues, option.value);
                    }
                  }}
                />
                <label htmlFor={option.value}>
                  <span {...filterClasses('item-checkbox')} />
                  <span {...filterClasses('text')}>
                    {option.title}
                    {option.hits !== undefined && ` (${option.hits})`}
                  </span>
                  {option.icon
                    ? createElement(option.icon, {
                        className: `c-icon--22 ${
                          filterClasses('icon').className
                        }`,
                      })
                    : null}
                </label>
              </li>
            );
          })}
        </ul>
        {!showAll && (
          <button
            {...filterClasses('expand')}
            type="button"
            onClick={() => {
              this.setState(prevState => {
                if (prevState.visibleCount === defaultVisibleCount) {
                  return {
                    visibleCount: options.length,
                  };
                }

                return {
                  visibleCount: defaultVisibleCount,
                };
              });
            }}>
            {this.state.visibleCount === defaultVisibleCount ? (
              <Fragment>
                <span>{showLabel}</span> <ChevronDown />
              </Fragment>
            ) : (
              <Fragment>
                <span>{hideLabel}</span> <ChevronUp />
              </Fragment>
            )}
          </button>
        )}
      </section>
    );
  }
}

const valueShape = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

FilterList.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  labelNotVisible: PropTypes.bool,
  modifiers: PropTypes.string,
  onChange: PropTypes.func, // isRequired
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: valueShape.isRequired,
      hits: PropTypes.number,
      icon: PropTypes.func,
      noResults: PropTypes.bool,
    }),
  ).isRequired,
  values: PropTypes.arrayOf(valueShape),
  defaultVisibleCount: PropTypes.number,
  showLabel: PropTypes.string,
  noFilterSelectedLabel: PropTypes.string,
  hideLabel: PropTypes.string,
  alignedGroup: PropTypes.bool,
  collapseMobile: PropTypes.bool,
};

FilterList.defaultProps = {
  label: 'FILTER:',
  modifiers: '',
  values: [],
  defaultVisibleCount: null,
};

export default FilterList;
