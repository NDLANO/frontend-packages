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
import { Cross } from 'ndla-icons/action';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ActiveFilters,
} from 'ndla-ui';
import debounce from 'lodash/debounce';

const filterClasses = new BEMHelper({
  name: 'filter',
  prefix: 'c-',
});

const topicMenuClasses = new BEMHelper({
  name: 'topic-menu',
  prefix: 'c-',
});

class FilterListPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNarrowScreen: false,
      visibleCount: props.defaultVisibleCount,
    };
    this.setScreenSizeDebounced = debounce(() => this.setScreenSize(false), 50);
  }

  componentDidMount() {
    this.setScreenSize(true);
    window.addEventListener('resize', this.setScreenSizeDebounced);
  }

  componentWillUnmount() {
    this.setScreenSizeDebounced.cancel();
    window.removeEventListener('resize', this.setScreenSizeDebounced);
  }

  setScreenSize(initial = false) {
    const isNarrowScreen =
      (window.innerWidth || document.documentElement.clientWidth) < 769;

    /* eslint react/no-did-mount-set-state: 0 */
    if ((initial && isNarrowScreen) || !initial) {
      this.setState({
        isNarrowScreen,
      });
    }
    /* eslint react/no-did-mount-set-state: 1 */
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
      messages,
      alignedGroup,
    } = this.props;

    const showAll =
      defaultVisibleCount === null || options.length <= defaultVisibleCount;
    const labelModifiers = [];

    if (labelNotVisible) {
      labelModifiers.push('hidden');
    }

    if (this.state.isNarrowScreen) {
      const currentlyActiveFilters = options.filter(option =>
        values.some(value => value === option.value),
      );
      return (
        <div {...topicMenuClasses('filter-phone-wrapper')}>
          {currentlyActiveFilters.length > 0 && (
            <ActiveFilters
              filters={currentlyActiveFilters}
              onFilterRemove={value => {
                onChange(values.filter(option => option !== value), value);
              }}
            />
          )}
          <Modal
            size="fullscreen"
            animation="slide-up"
            backgroundColor="grey"
            activateButton={<Button outline>{messages.openFilter}</Button>}>
            {onClose => (
              <Fragment>
                <ModalHeader modifier={['grey-dark', 'left-align']}>
                  <ModalCloseButton
                    title={
                      <Fragment>
                        <Cross /> {messages.closeFilter}
                      </Fragment>
                    }
                    onClick={onClose}
                  />
                </ModalHeader>
                <ModalBody modifier="no-side-padding-mobile">
                  <h1 {...filterClasses('label')}>{label}</h1>
                  <ul
                    {...filterClasses('item-wrapper', {
                      'aligned-grouping': alignedGroup,
                    })}>
                    {options.map(option => (
                      <li {...filterClasses('item')} key={option.value}>
                        <input
                          {...filterClasses('input')}
                          type="checkbox"
                          id={option.value}
                          value={option.value}
                          checked={values.some(value => value === option.value)}
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
                          <span {...filterClasses('text')}>{option.title}</span>
                          {option.icon
                            ? createElement(option.icon, {
                                className: `c-icon--22 u-margin-left-small ${
                                  filterClasses('icon').className
                                }`,
                              })
                            : null}
                        </label>
                      </li>
                    ))}
                  </ul>
                  <div {...filterClasses('usefilter-wrapper')}>
                    <Button outline onClick={onClose}>
                      {messages.useFilter}
                    </Button>
                  </div>
                </ModalBody>
              </Fragment>
            )}
          </Modal>
        </div>
      );
    }

    return (
      <section {...filterClasses('list', modifiers)}>
        <h1 {...filterClasses('label', labelModifiers)}>{label}</h1>
        <ul {...filterClasses('item-wrapper')}>
          {options.map((option, index) => {
            const itemModifiers = [];

            const checked = values.some(value => value === option.value);

            if (!showAll && !checked && index + 1 > this.state.visibleCount) {
              itemModifiers.push('hidden');
            }

            if (option.noResults) {
              itemModifiers.push('no-results');
            }

            return (
              <li {...filterClasses('item', itemModifiers)} key={option.value}>
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
                  <span {...filterClasses('text')}>{option.title}</span>
                  {option.icon
                    ? createElement(option.icon, {
                        className: `c-icon--22 u-margin-left-small ${
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

FilterListPhone.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  labelNotVisible: PropTypes.bool,
  modifiers: PropTypes.string,
  onChange: PropTypes.func, // isRequired
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: valueShape.isRequired,
      icon: PropTypes.func,
      noResults: PropTypes.bool,
    }),
  ).isRequired,
  values: PropTypes.arrayOf(valueShape),
  defaultVisibleCount: PropTypes.number,
  showLabel: PropTypes.string,
  hideLabel: PropTypes.string,
  onToggle: PropTypes.func,
  alignedGroup: PropTypes.bool,
  messages: PropTypes.shape({
    useFilter: PropTypes.string.isRequired,
    openFilter: PropTypes.string.isRequired,
    closeFilter: PropTypes.string.isRequired,
  }).isRequired,
};

FilterListPhone.defaultProps = {
  modifiers: '',
  values: [],
  defaultVisibleCount: null,
  onToggle: null,
  alignedGroup: false,
};

export default FilterListPhone;
