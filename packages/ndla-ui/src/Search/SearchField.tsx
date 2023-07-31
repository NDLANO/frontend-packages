/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { FocusEvent, MouseEvent, RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import BEMHelper from 'react-bem-helper';
import styled from '@emotion/styled';
import { Search as SearchIcon } from '@ndla/icons/common';
import { colors, spacing, mq, breakpoints, misc, fonts } from '@ndla/core';

import ActiveFilters from './ActiveFilters';
import LoadingWrapper from './LoadingWrapper';

const classes = new BEMHelper('c-search-field');

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  line-height: 28px;
  border: 1px solid ${colors.brand.greyLight};
  border-radius: ${misc.borderRadius};
  padding-right: ${spacing.large};
  padding-left: ${spacing.normal};
  flex-grow: 1;
  outline: 0;
  &:focus,
  &:hover {
    border-color: ${colors.brand.primary};
  }

  &[data-frontpage='true'] {
    border-radius: 100px;
  }

  ${mq.range({ from: breakpoints.tablet })} {
    height: 58px;
    line-height: 58px;
    ${fonts.sizes('18px', '24px')};
  }

  &[data-has-filters='true'] {
    ${mq.range({ from: breakpoints.desktop })} {
      padding-left: ${spacing.normal};
    }
    padding-left: 0;
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &:focus {
      border: 1px solid ${colors.brand.primary};
      border-left: 0;

      & + .c-search-field__filters {
        border: 1px solid ${colors.brand.primary};
        border-right: 0;
      }
    }
  }
`;

interface Props {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  filters?: { value: string; title: string }[];
  onFilterRemove?: (value: string, filterName?: string) => void;
  onFocus?: (event?: FocusEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  loading?: boolean;
  inputRef?: RefObject<HTMLInputElement>;
  frontPageSearch?: boolean;
}

const SearchField = ({
  placeholder,
  value,
  onChange,
  filters,
  onClick,
  onFocus,
  onBlur,
  loading,
  onFilterRemove,
  inputRef,
  frontPageSearch = false,
}: Props) => {
  const { t } = useTranslation();
  const handleOnFilterRemove = (value: string, filterName?: string) => {
    onFilterRemove?.(value, filterName);
    inputRef?.current?.focus();
    onFocus?.();
  };
  return (
    <div {...classes('input-wrapper')}>
      {loading && <LoadingWrapper value={value} />}
      <StyledInput
        data-frontpage={frontPageSearch}
        data-has-filters={!!filters?.length}
        ref={inputRef}
        type="search"
        aria-autocomplete="list"
        autoComplete="off"
        id="search"
        name="search"
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onFocus={onFocus}
        onClick={onClick}
      />
      {filters && filters.length > 0 && (
        <div {...classes('filters')}>
          <ActiveFilters filters={filters} onFilterRemove={handleOnFilterRemove} />
        </div>
      )}
      {value !== '' && (
        <button
          {...classes('button', 'close')}
          type="button"
          onClick={() => {
            onChange('');
            onFocus?.();
            inputRef?.current?.focus();
          }}
        >
          {t('welcomePage.resetSearch')}
        </button>
      )}
      <button
        tabIndex={-1}
        {...classes('button', 'searchIcon')}
        type="submit"
        value="Search"
        aria-label={t('siteNav.search')}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchField;
