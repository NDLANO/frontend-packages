/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Search as SearchIcon } from '@ndla/icons/common';
import { injectT } from '@ndla/i18n';

import ActiveFilters from './ActiveFilters';
import LoadingWrapper from './LoadingWrapper';

import { ContentTypeResultShape } from '../shapes';

const classes = new BEMHelper('c-search-field');

const SearchField = ({
  placeholder,
  value,
  onChange,
  filters,
  small,
  onClick,
  t,
  onFocus,
  onBlur,
  loading,
  onFilterRemove,
  inputRef,
}) => {
  const handleOnFilterRemove = (value, filterName) => {
    onFilterRemove(value, filterName);
    inputRef.current.focus();
    onFocus();
  };

  return (
    <div {...classes('input-wrapper')}>
      {loading && <LoadingWrapper value={value} />}
      <input
        ref={inputRef}
        type="search"
        {...classes('input', { small })}
        aria-autocomplete="list"
        autoComplete="off"
        id="search"
        name="search"
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        onFocus={onFocus}
        onClick={onClick}
      />
      {filters && filters.length > 0 && (
        <div {...classes('filters')}>
          <ActiveFilters
            filters={filters}
            onFilterRemove={handleOnFilterRemove}
          />
        </div>
      )}
      {value !== '' && (
        <button
          {...classes('button', 'close')}
          type="button"
          onClick={() => {
            onChange('');
            inputRef.current.focus();
            onFocus();
          }}>
          {t('welcomePage.resetSearch')}
        </button>
      )}
      <button
        tabIndex="-1"
        {...classes('button', 'searchIcon')}
        type="submit"
        value="Search">
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

export default injectT(SearchField);
