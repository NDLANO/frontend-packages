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
import { injectT } from 'ndla-i18n';

import SafeLink from '../common/SafeLink';

import ActiveFilters from './ActiveFilters';
import ContentTypeResult from './ContentTypeResult';

import { ContentTypeResultShape } from '../shapes';

const classes = new BEMHelper('c-search-field');

const messagesShape = PropTypes.shape({
  // required if search result
  searchResultHeading: PropTypes.string,
  contentTypeResultShowMoreLabel: PropTypes.string,
  contentTypeResultShowLessLabel: PropTypes.string,
  contentTypeResultNoHit: PropTypes.string,
});

const SearchResult = ({ result, allResultUrl, resourceToLinkProps, t }) => (
  <section {...classes('search-result')}>
    <h1 {...classes('search-result-heading')}>
      {t('searchPage.searchField.searchResultHeading')}
    </h1>
    <div {...classes('search-result-content')}>
      {result.map(contentTypeResult => (
        <ContentTypeResult
          contentTypeResult={contentTypeResult}
          resourceToLinkProps={resourceToLinkProps}
          key={contentTypeResult.title}
          messages={{
            allResultLabel: t(
              'searchPage.searchField.contentTypeResultShowMoreLabel',
            ),
            showLessResultLabel: t(
              'searchPage.searchField.contentTypeResultShowLessLabel',
            ),
            noHit: t('searchPage.searchField.contentTypeResultNoHit'),
          }}
        />
      ))}
    </div>
    <div {...classes('go-to-search')}>
      <SafeLink to={allResultUrl}>
        {t('searchPage.searchField.allResultButtonText')}
      </SafeLink>
    </div>
  </section>
);

SearchResult.propTypes = {
  result: PropTypes.arrayOf(ContentTypeResultShape),
  resourceToLinkProps: PropTypes.func.isRequired,
  allResultUrl: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputHasFocus: false,
    };
    this.inputRef = null;
    this.handleOnFilterRemove = this.handleOnFilterRemove.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
  }

  onInputBlur() {
    this.setState({
      inputHasFocus: false,
    });
  }

  onInputFocus() {
    this.setState({
      inputHasFocus: true,
    });
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
      small,
      t,
    } = this.props;

    const modifiers = [];

    const hasSearchResult = searchResult && searchResult.length > 0;

    let searchResultView = null;

    if (hasSearchResult) {
      modifiers.push('has-search-result');

      searchResultView = (
        <SearchResult
          result={searchResult}
          searchString={value}
          allResultUrl={allResultUrl}
          resourceToLinkProps={resourceToLinkProps}
          t={t}
        />
      );
    }

    if (filters && filters.length > 0) {
      modifiers.push('has-filter');
    }

    if (this.state.inputHasFocus) {
      modifiers.push('input-has-focus');
    }
    return (
      <form action="/search/" {...classes('', modifiers)} onSubmit={onSearch}>
        <div {...classes('input-wrapper')}>
          <input
            ref={ref => {
              this.inputRef = ref;
            }}
            title={messages.searchFieldTitle}
            type="search"
            {...classes('input', { small })}
            aria-autocomplete="list"
            autoComplete="off"
            id="search"
            name="search"
            placeholder={placeholder}
            aria-label={placeholder}
            value={value}
            onChange={onChange}
            onBlur={this.onInputBlur}
            onFocus={this.onInputFocus}
          />
          {filters &&
            filters.length > 0 && (
              <div {...classes('filters')}>
                <ActiveFilters
                  filters={filters}
                  onFilterRemove={this.handleOnFilterRemove}
                />
            </div>
          )}
          <button
            tabIndex="-1"
            {...classes('button')}
            type="submit"
            value="Search">
            <SearchIcon />
          </button>
        </div>
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
  small: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

export default injectT(SearchField);
