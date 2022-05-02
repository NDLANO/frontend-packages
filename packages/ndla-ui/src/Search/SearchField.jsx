/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Search as SearchIcon } from '@ndla/icons/common';
import { css } from '@emotion/core';
import { colors, spacing, mq, breakpoints, misc, fonts } from '@ndla/core';
import { useTranslation } from 'react-i18next';

import ActiveFilters from './ActiveFilters';
import LoadingWrapper from './LoadingWrapper';

import { ContentTypeResultShape } from '../shapes';

const classes = new BEMHelper('c-search-field');

const inputStyle = (frontPageSearch) => css`
  width: 100%;
  height: 48px;
  line-height: 28px;
  border: 1px solid ${colors.brand.greyLight};
  border-radius: ${frontPageSearch ? '100px' : misc.borderRadius};
  padding-right: ${spacing.large};
  padding-left: ${spacing.normal};
  flex-grow: 1;
  outline: 0;
  &:focus,
  &:hover {
    border-color: ${colors.brand.primary};
  }

  ${mq.range({ from: breakpoints.tablet })} {
    height: 58px;
    line-height: 58px;
    ${fonts.sizes('18px', '24px')};
  }
`;

const filterStyle = css`
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
`;

const SearchField = ({
  placeholder,
  value,
  onChange,
  filters,
  small,
  onClick,
  onFocus = () => {},
  onBlur = () => {},
  loading,
  onFilterRemove,
  inputRef,
  frontPageSearch = false,
}) => {
  const { t } = useTranslation();
  const handleOnFilterRemove = (value, filterName) => {
    onFilterRemove(value, filterName);
    if (inputRef) {
      inputRef.current.focus();
    }
    onFocus();
  };
  const hasFilters = filters && filters.length > 0;
  return (
    <div {...classes('input-wrapper')}>
      {loading && <LoadingWrapper value={value} />}
      <input
        ref={inputRef}
        type="search"
        css={css`
          ${inputStyle(frontPageSearch)};
          ${hasFilters && filterStyle};
        `}
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
      {hasFilters && (
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
            onFocus();
            if (inputRef) {
              inputRef.current.focus();
            }
          }}
          onBlur={onBlur}>
          {t('welcomePage.resetSearch')}
        </button>
      )}
      <button tabIndex="-1" {...classes('button', 'searchIcon')} type="submit" value="Search">
        <SearchIcon />
      </button>
    </div>
  );
};

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  searchResult: PropTypes.arrayOf(ContentTypeResultShape),
  allResultUrl: PropTypes.string,
  onFilterRemove: PropTypes.func,
  small: PropTypes.bool,
  onNavigate: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

export default SearchField;
