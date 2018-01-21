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

import SafeLink from '../common/SafeLink';

import ActiveFilters from './ActiveFilters';

const classes = new BEMHelper('c-search-field');

const messagesShape = PropTypes.shape({
  allResultLabel: PropTypes.string.isRequired,
  allContentTypeResultLabel: PropTypes.string.isRequired,
});

const searchResultShape = PropTypes.arrayOf(
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

const SearchResult = ({ result, messages, searchString, allResultUrl }) => (
  <div {...classes('search-result')}>
    <div {...classes('search-result-content')}>
      {result.map(contentTypeResult => (
        <div {...classes('content-type-result')} key={contentTypeResult.title}>
          <div {...classes('icon-wrapper')}>{contentTypeResult.icon}</div>
          <div>
            <h2>
              {contentTypeResult.title}{' '}
              <span {...classes('total-count')}>
                ({contentTypeResult.totalCount})
              </span>
            </h2>
            <ul>
              {contentTypeResult.items.map(item => (
                <li key={item.url}>
                  <SafeLink to={item.url}>{item.display}</SafeLink>
                </li>
              ))}
              {contentTypeResult.showAllLinkUrl && (
                <li key="showAll" {...classes('show-all')}>
                  <SafeLink to={contentTypeResult.showAllLinkUrl}>
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

SearchResult.propTypes = {
  result: searchResultShape,
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
  searchResult,
  messages,
  allResultUrl,
}) => {
  const modifiers = [];
  let filtersView = null;

  const hasSearchResult = searchResult && searchResult.length > 0;

  let searchResultView = null;

  if (hasSearchResult) {
    modifiers.push('has-search-result');

    searchResultView = (
      <SearchResult
        result={searchResult}
        messages={messages}
        searchString={value}
        allResultUrl={allResultUrl}
      />
    );
  }

  if (filters && filters.length > 0) {
    modifiers.push('has-filter');
  }

  return (
    <div {...classes('', modifiers)}>
      <div {...classes('filters')}>
        <ActiveFilters filters={filters} onFilterRemove={onFilterRemove} />
      </div>
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
      {searchResultView}
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
  messages: messagesShape,
  searchResult: searchResultShape,
  allResultUrl: PropTypes.string,
};

export default SearchField;
