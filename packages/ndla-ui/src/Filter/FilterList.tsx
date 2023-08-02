/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import { ReactNode, useState } from 'react';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';

import { classes } from './filterClasses';
import ToggleItem from './ToggleItem';

interface Props {
  children?: ReactNode;
  label?: string;
  preid?: string;
  labelNotVisible?: boolean;
  modifiers?: string;
  onChange?: Function;
  options: {
    title: string;
    value: string;
    hits?: number;
    icon?: ReactNode;
    noResults?: boolean;
  }[];
  values: string[];
  defaultVisibleCount?: number;
  showLabel?: string;
  noFilterSelectedLabel?: string;
  hideLabel?: string;
  alignedGroup?: boolean;
  collapseMobile?: boolean;
}

const FilterList = ({
  modifiers = '',
  preid = '',
  label = 'FILTER:',
  labelNotVisible,
  options,
  values = [],
  onChange,
  defaultVisibleCount,
  showLabel,
  hideLabel,
  alignedGroup,
  collapseMobile,
  noFilterSelectedLabel,
}: Props) => {
  const [visibleCount, setVisibleCount] = useState<number | undefined>(defaultVisibleCount);

  const showAll = defaultVisibleCount === undefined || options.length <= defaultVisibleCount;
  const labelModifiers = [];

  if (labelNotVisible) {
    labelModifiers.push('hidden');
  }

  return (
    <section {...classes('list', modifiers)}>
      {label && <h1 {...classes('label', labelModifiers)}>{label}</h1>}
      {noFilterSelectedLabel && options.length === 0 && (
        <span {...classes('no-filter-selected')}>{noFilterSelectedLabel}</span>
      )}
      <ul
        {...classes('item-wrapper', {
          'aligned-grouping': !!alignedGroup,
          'collapse-mobile': !!collapseMobile,
        })}
      >
        {options.map((option, index) => {
          const itemModifiers = [];

          const checked = values.some((value) => value === option.value);

          if (!showAll && !checked && index + 1 > (visibleCount ?? 0)) {
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
              label={option.title}
              onChange={(event) => {
                let newValues = null;
                if (event.currentTarget.checked) {
                  newValues = [...values, option.value];
                } else {
                  newValues = values.filter((value) => value !== option.value);
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
            setVisibleCount((prev) => (prev === defaultVisibleCount ? options.length : defaultVisibleCount));
          }}
        >
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
  );
};

export default FilterList;
