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
import { Cross } from '@ndla/icons/action';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import Button from '@ndla/button';
import debounce from 'lodash/debounce';
import { classes } from './filterClasses';
import ToggleItem from './ToggleItem';
import ActiveFilters from '../Search/ActiveFilters';

class FilterListPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNarrowScreen: false,
      visibleCount: props.defaultVisibleCount,
    };
    this.setScreenSizeDebounced = debounce(() => this.setScreenSize(false), 50);
    this.handleChange = this.handleChange.bind(this);
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
      (window.innerWidth || document.documentElement.clientWidth) < 768;

    /* eslint react/no-did-mount-set-state: 0 */
    if ((initial && isNarrowScreen) || !initial) {
      this.setState({
        isNarrowScreen,
      });
    }
    /* eslint react/no-did-mount-set-state: 1 */
  }

  handleChange(event, option) {
    const { onChange, values } = this.props;
    let newValues = null;
    if (event.currentTarget.checked) {
      newValues = [...values, option.value];
    } else {
      newValues = values.filter(value => value !== option.value);
    }
    if (onChange) {
      onChange(newValues, option.value);
    }
  }

  render() {
    const {
      preid,
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
      collapseMobile,
      activeFiltersNarrow,
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
        <div
          className={
            activeFiltersNarrow && classes('narrow-active-filters').className
          }>
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
            activateButton={
              <Button outline {...classes('modal-button')}>
                {messages.openFilter}
              </Button>
            }>
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
                  <h1 {...classes('label')}>{label}</h1>
                  <ul
                    {...classes('item-wrapper', {
                      'aligned-grouping': alignedGroup,
                      'collapse-mobile': collapseMobile,
                    })}>
                    {options.map(option => (
                      <ToggleItem
                        key={option.value}
                        id={preid + option.value}
                        value={option.value}
                        checked={values.some(value => value === option.value)}
                        onChange={event => {
                          this.handleChange(event, option);
                        }}
                        icon={option.icon}
                        label={option.title}
                      />
                    ))}
                  </ul>
                  <div {...classes('usefilter-wrapper')}>
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
      <section {...classes('list', modifiers)}>
        <h1 {...classes('label', labelModifiers)}>{label}</h1>
        <ul {...classes('item-wrapper')}>
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
              <ToggleItem
                key={option.value}
                id={preid + option.value}
                value={option.value}
                tabIndex={option.noResults ? -1 : 0}
                checked={checked}
                onChange={event => {
                  this.handleChange(event, option);
                }}
                icon={option.icon}
                label={option.title}
                modifiers={itemModifiers}
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

FilterListPhone.propTypes = {
  preid: PropTypes.string.isRequired,
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
  collapseMobile: PropTypes.bool,
  activeFiltersNarrow: PropTypes.bool,
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
  collapseMobile: true,
};

export default FilterListPhone;
