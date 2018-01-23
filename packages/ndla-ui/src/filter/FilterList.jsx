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
    } = this.props;

    const showAll = defaultVisibleCount === null;
    const labelModifiers = [];

    if (labelNotVisible) {
      labelModifiers.push('hidden');
    }

    return (
      <div {...filterClasses('list', modifiers)}>
        <span {...filterClasses('label', labelModifiers)}>{label}</span>
        {options.map((option, index) => {
          const itemModifiers = [];

          const checked = values.some(value => value === option.value);

          if (!showAll && !checked && index + 1 > this.state.visibleCount) {
            itemModifiers.push('hidden');
          }

          return (
            <div {...filterClasses('item', itemModifiers)} key={option.value}>
              <input
                {...filterClasses('input')}
                type="checkbox"
                id={option.value}
                value={option.value}
                checked={checked}
                onChange={event => {
                  let newValues = null;
                  if (event.currentTarget.checked) {
                    newValues = [...values, option.value];
                  } else {
                    newValues = values.filter(value => value !== option.value);
                  }
                  onChange(newValues);
                }}
              />
              <label htmlFor={option.value}>
                <span {...filterClasses('item-checkbox')} />
                {option.title}
                {option.icon
                  ? createElement(option.icon, {
                      className: 'c-icon--20 u-margin-left-small',
                    })
                  : null}
              </label>
            </div>
          );
        })}
        {!showAll && (
          <button
            {...filterClasses('expand')}
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
      </div>
    );
  }
}

const valueShape = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

FilterList.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  labelNotVisible: PropTypes.bool,
  modifiers: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: valueShape.isRequired,
      icon: PropTypes.func,
    }),
  ).isRequired,
  values: PropTypes.arrayOf(valueShape),
  defaultVisibleCount: PropTypes.number,
  showLabel: PropTypes.string,
  hideLabel: PropTypes.string,
};

FilterList.defaultProps = {
  label: 'FILTER:',
  modifiers: '',
  values: [],
  defaultVisibleCount: null,
};

export default FilterList;
