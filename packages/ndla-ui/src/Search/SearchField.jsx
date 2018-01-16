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
import { Search as SearchIcon } from 'ndla-icons/common';
import { Cross } from 'ndla-icons/action';

import SafeLink from '../common/SafeLink';

const classes = new BEMHelper('c-search-field');

const messagesShape = PropTypes.shape({
  allResultLabel: PropTypes.string.isRequired,
  allContentTypeResultLabel: PropTypes.string.isRequired,
});

const autocompleteResultShape = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    totalCount: PropTypes.number.isRequired,
    showAllLinkUrl: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        display: PropTypes.string.isRequired,
      }),
    ),
  }),
);

const Autocomplete = ({
  autocompleteResult,
  messages,
  searchString,
  allResultUrl,
}) => (
  <div {...classes('autocomplete')}>
    <div {...classes('autocomplete-content')}>
      {autocompleteResult.map(result => (
        <div {...classes('content-type-result')} key={result.title}>
          <div {...classes('icon-wrapper')}>{result.icon}</div>
          <div>
            <h2>
              {result.title}{' '}
              <span {...classes('total-count')}>({result.totalCount})</span>
            </h2>
            <ul>
              {result.items.map(item => (
                <li key={item.url}>
                  <SafeLink to={item.url}>{item.display}</SafeLink>
                </li>
              ))}
              {result.showAllLinkUrl && (
                <li key="showAll" {...classes('show-all')}>
                  <SafeLink to={result.showAllLinkUrl}>
                    {messages.allContentTypeResultLabel}
                  </SafeLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
    <div {...classes('go-to-search')}>
      <span>{messages.allResultLabel}</span>{' '}
      <SafeLink to={allResultUrl}>{searchString}</SafeLink>
    </div>
  </div>
);

Autocomplete.propTypes = {
  autocompleteResult: autocompleteResultShape,
  messages: messagesShape.isRequired,
  searchString: PropTypes.string.isRequired,
  allResultUrl: PropTypes.string.isRequired,
};

const SearchField = ({
  placeholder,
  value,
  onChange,
  filters,
  onFilterRemove,
  autocompleteResult,
  messages,
  allResultUrl,
}) => {
  const modifiers = [];
  let filtersView = null;

  const hasAutocomplete = autocompleteResult && autocompleteResult.length > 0;

  let autocompleteView = null;

  if (hasAutocomplete) {
    modifiers.push('has-autocomplete');

    autocompleteView = (
      <Autocomplete
        autocompleteResult={autocompleteResult}
        messages={messages}
        searchString={value}
        allResultUrl={allResultUrl}
      />
    );
  }

  if (filters && filters.length > 0) {
    modifiers.push('has-filter');

    const filterItems = filters.map(filter => (
      <li key={filter.value}>
        <button
          onClick={() => {
            onFilterRemove(filter.value);
          }}>
          <span>{filter.display}</span>
          <Cross />
        </button>
      </li>
    ));

    filtersView = <ul {...classes('filter')}>{filterItems}</ul>;
  }

  return (
    <div {...classes('', modifiers)}>
      {filtersView}
      <input
        type="search"
        {...classes('input')}
        aria-autocomplete="list"
        autoComplete="on"
        id="search"
        name="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button tabIndex="-1" {...classes('button')} type="submit" value="Search">
        <SearchIcon />
      </button>
      {autocompleteView}
    </div>
  );
};

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterRemove: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
    }),
  ),
  messages: messagesShape.isRequired,
  autocompleteResult: autocompleteResultShape,
  allResultUrl: PropTypes.string.isRequired,
};

export default SearchField;
