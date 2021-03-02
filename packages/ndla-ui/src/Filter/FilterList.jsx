/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';

import { classes } from './filterClasses';
import ToggleItem from './ToggleItem';

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
      preid,
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
      <section {...classes('list', modifiers)}>
        {label && <h1 {...classes('label', labelModifiers)}>{label}</h1>}
        {this.props.noFilterSelectedLabel && options.length === 0 && (
          <span {...classes('no-filter-selected')}>
            {this.props.noFilterSelectedLabel}
          </span>
        )}
        <ul
          {...classes('item-wrapper', {
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
            );
          })}
        </ul>
        {!showAll && (
          <button
            {...classes('expand')}
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
  preid: PropTypes.string,
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
  preid: '',
  modifiers: '',
  values: [],
  defaultVisibleCount: null,
};

export default FilterList;
