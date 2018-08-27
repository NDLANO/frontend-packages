/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Search as SearchIcon } from 'ndla-icons/common';

import SafeLink from '../common/SafeLink';

import ActiveFilters from './ActiveFilters';
import ContentTypeResult from './ContentTypeResult';

import { ContentTypeResultShape } from '../shapes';

const classes = new BEMHelper('c-search-field');

const messagesShape = PropTypes.shape({
  searchFieldTitle: PropTypes.string.isRequired,

  // required if search result
  searchResultHeading: PropTypes.string,
  allResultButtonText: PropTypes.string,
  contentTypeResultShowMoreLabel: PropTypes.string,
  contentTypeResultShowLessLabel: PropTypes.string,
  contentTypeResultNoHit: PropTypes.string,
});

const SearchResult = ({
  result,
  messages,
  allResultUrl,
  resourceToLinkProps,
}) => (
  <section {...classes('search-result')}>
    <h1 {...classes('search-result-heading')}>
      {messages.searchResultHeading}
    </h1>
    <div {...classes('search-result-content')}>
      {result.map(contentTypeResult => (
        <ContentTypeResult
          contentTypeResult={contentTypeResult}
          resourceToLinkProps={resourceToLinkProps}
          key={contentTypeResult.title}
          messages={{
            allResultLabel: messages.contentTypeResultShowMoreLabel,
            showLessResultLabel: messages.contentTypeResultShowLessLabel,
            noHit: messages.contentTypeResultNoHit,
          }}
        />
      ))}
    </div>
    <div {...classes('go-to-search')}>
      <SafeLink to={allResultUrl}>{messages.allResultButtonText}</SafeLink>
    </div>
  </section>
);

SearchResult.propTypes = {
  result: PropTypes.arrayOf(ContentTypeResultShape),
  resourceToLinkProps: PropTypes.func.isRequired,
  messages: messagesShape.isRequired,
  allResultUrl: PropTypes.string.isRequired,
};

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.inputRef = null;
    this.handleOnFilterRemove = this.handleOnFilterRemove.bind(this);
  }

  handleOnFilterRemove(value, filterName) {
    this.props.onFilterRemove(value, filterName);
    this.inputRef.focus();
  }

  render() {
    const {
      placeholder,
      value,
      onChange,
      filters,
      searchResult,
      messages,
      allResultUrl,
      onSearch,
      resourceToLinkProps,
    } = this.props;

    const modifiers = [];

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
          resourceToLinkProps={resourceToLinkProps}
        />
      );
    }

    if (filters && filters.length > 0) {
      modifiers.push('has-filter');
    }

    return (
      <form {...classes('', modifiers)} onSubmit={onSearch}>
        <input
          ref={ref => {
            this.inputRef = ref;
          }}
          title={messages.searchFieldTitle}
          type="search"
          {...classes('input')}
          aria-autocomplete="list"
          autoComplete="off"
          id="search"
          name="search"
          placeholder={placeholder}
          aria-label={placeholder}
          value={value}
          onChange={onChange}
        />
        <div {...classes('filters')}>
          {filters &&
            filters.length > 0 && (
              <ActiveFilters
                filters={filters}
                onFilterRemove={this.handleOnFilterRemove}
              />
            )}
        </div>
        <button
          tabIndex="-1"
          {...classes('button')}
          type="submit"
          value="Search">
          <SearchIcon />
        </button>
        {searchResultView}
      </form>
    );
  }
}

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  messages: messagesShape,
  searchResult: PropTypes.arrayOf(ContentTypeResultShape),
  allResultUrl: PropTypes.string,
  resourceToLinkProps: PropTypes.func,
  onFilterRemove: PropTypes.func,
};

export default SearchField;
