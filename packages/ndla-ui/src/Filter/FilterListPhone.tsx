/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { ChangeEvent, useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { ButtonV2 } from '@ndla/button';
import debounce from 'lodash/debounce';
import { classes } from './filterClasses';
import ToggleItem from './ToggleItem';
import ActiveFilters from '../Search/ActiveFilters';

interface Option {
  title: string;
  value: string;
  noResults?: boolean;
  disabled?: boolean;
}

interface Props {
  preid: string;
  label?: string;
  labelNotVisible?: boolean;
  modifiers?: string;
  onChange: (values: string[], value: string) => void;
  options: Option[] | Option[][];
  values?: string[];
  defaultVisibleCount?: number;
  showLabel?: string;
  hideLabel?: string;
  alignedGroup?: boolean;
  collapseMobile?: boolean;
  activeFiltersNarrow?: boolean;
  messages: {
    useFilter: string;
    openFilter: string;
    closeFilter: string;
  };
  viewMode?: 'inlineDesktop' | 'allModal';
  isGroupedOptions?: boolean;
  showActiveFiltersOnSmallScreen?: boolean;
}

const is2DArray = (options: Option[] | Option[][]): options is Option[][] => {
  return Array.isArray(options[0]);
};

const FilterListPhone = ({
  preid,
  label,
  labelNotVisible,
  modifiers = '',
  onChange,
  options,
  values = [],
  defaultVisibleCount,
  showLabel,
  hideLabel,
  alignedGroup = false,
  collapseMobile = true,
  activeFiltersNarrow,
  messages,
  viewMode = 'inlineDesktop',
  isGroupedOptions,
  showActiveFiltersOnSmallScreen,
}: Props) => {
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(defaultVisibleCount);

  useEffect(() => {
    setScreenSize(true);
    const debounced = debounce(() => setScreenSize(false), 50);
    window.addEventListener('resize', debounced);

    return () => {
      debounced.cancel();
      window.removeEventListener('resize', debounced);
    };
  }, []);

  const setScreenSize = (initial = false) => {
    const newIsNarrowScreen = (window.innerWidth || document.documentElement.clientWidth) < 768;

    /* eslint react/no-did-mount-set-state: 0 */
    if ((initial && newIsNarrowScreen) || !initial) {
      setIsNarrowScreen(newIsNarrowScreen);
    }
    /* eslint react/no-did-mount-set-state: 1 */
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>, option: Option) => {
    let newValues = null;
    if (event.currentTarget.checked) {
      newValues = [...values, option.value];
    } else {
      newValues = values.filter((value) => value !== option.value);
    }
    if (onChange) {
      onChange(newValues, option.value);
    }
  };

  const showAll = defaultVisibleCount === undefined || options.length <= defaultVisibleCount;
  const labelModifiers: string[] = [];

  if (labelNotVisible) {
    labelModifiers.push('hidden');
  }

  const groupedOptions = is2DArray(options) ? options : [options];

  if (isNarrowScreen || viewMode === 'allModal') {
    let currentlyActiveFilters: Option[] = [];
    groupedOptions.forEach((options) => {
      const activeFilters = options.filter((option) => values.some((value) => value === option.value));
      currentlyActiveFilters = [...currentlyActiveFilters, ...activeFilters];
    });

    const wrapperClassName =
      activeFiltersNarrow || viewMode === 'allModal' ? classes('narrow-active-filters').className : '';
    return (
      <div className={wrapperClassName}>
        {currentlyActiveFilters.length > 0 && (
          <ActiveFilters
            filters={currentlyActiveFilters}
            showOnSmallScreen={showActiveFiltersOnSmallScreen}
            onFilterRemove={(value) => {
              onChange(
                values.filter((option) => option !== value),
                value,
              );
            }}
          />
        )}
        <Modal
          size="fullscreen"
          backgroundColor="grey"
          activateButton={
            <ButtonV2 variant="outline" {...classes('modal-button')}>
              {messages.openFilter}
            </ButtonV2>
          }>
          {(onClose) => (
            <>
              <ModalHeader modifier={['left-align']}>
                <div {...classes('modal-header')}>
                  <div {...classes('modal-heading')}>
                    {!isNarrowScreen && label && <h1 {...classes('label')}>{label}</h1>}
                    <ButtonV2 variant="outline" onClick={onClose}>
                      {messages.useFilter}
                    </ButtonV2>
                  </div>
                  <ModalCloseButton title={messages.closeFilter} onClick={onClose} />
                </div>
              </ModalHeader>
              <ModalBody modifier="no-side-padding-mobile">
                {isNarrowScreen && label && <h1 {...classes('label')}>{label}</h1>}
                {groupedOptions.map((options, index) => (
                  <ul
                    key={index}
                    {...classes('item-wrapper', {
                      'aligned-grouping': !!alignedGroup,
                      'collapse-mobile': !!collapseMobile,
                      'grouped-options': !!isGroupedOptions,
                    })}>
                    {options.map((option) => {
                      const itemModifiers = [];

                      const checked = values.some((value) => value === option.value);

                      if (option.noResults) {
                        itemModifiers.push('no-results');
                      }

                      if (option.disabled) {
                        itemModifiers.push('disabled');
                      }
                      return (
                        <ToggleItem
                          key={option.value}
                          id={preid + option.value}
                          value={option.value}
                          checked={checked}
                          onChange={(event) => handleChange(event, option)}
                          label={option.title}
                          disabled={option.disabled}
                          modifiers={itemModifiers}
                        />
                      );
                    })}
                  </ul>
                ))}

                <div {...classes('usefilter-wrapper')}>
                  <ButtonV2 variant="outline" onClick={onClose}>
                    {messages.useFilter}
                  </ButtonV2>
                </div>
              </ModalBody>
            </>
          )}
        </Modal>
      </div>
    );
  }

  return (
    <>
      {isGroupedOptions && label && <h2 {...classes('label', labelModifiers)}>{label}</h2>}
      {groupedOptions.map((options, index) => (
        <section key={index} {...classes('list', modifiers)}>
          {!isGroupedOptions && label && <h1 {...classes('label', labelModifiers)}>{label}</h1>}
          <ul {...classes('item-wrapper')}>
            {options.map((option, index) => {
              const itemModifiers = [];

              const checked = values.some((value) => value === option.value);

              if (!showAll && !checked && !!visibleCount && index + 1 > visibleCount) {
                itemModifiers.push('hidden');
              }

              if (option.noResults) {
                itemModifiers.push('no-results');
              }

              if (option.disabled) {
                itemModifiers.push('disabled');
              }

              return (
                <ToggleItem
                  key={option.value}
                  id={preid + option.value}
                  value={option.value}
                  tabIndex={option.noResults ? -1 : 0}
                  checked={checked}
                  onChange={(event) => handleChange(event, option)}
                  label={option.title}
                  modifiers={itemModifiers}
                  disabled={option.disabled}
                />
              );
            })}
          </ul>
          {!showAll && (
            <button
              {...classes('expand')}
              type="button"
              onClick={() => {
                setVisibleCount((prev) => (prev === defaultVisibleCount ? options.length : defaultVisibleCount));
              }}>
              {visibleCount === defaultVisibleCount ? (
                <>
                  <span>{showLabel}</span> <ChevronDown />
                </>
              ) : (
                <>
                  <span>{hideLabel}</span> <ChevronUp />
                </>
              )}
            </button>
          )}
        </section>
      ))}
    </>
  );
};

export default FilterListPhone;
