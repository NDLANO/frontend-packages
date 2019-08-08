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
import { Search as SearchIcon, Wrench } from '@ndla/icons/common';
import { injectT } from '@ndla/i18n';
import { StyledButton } from '@ndla/button';
import { css } from '@emotion/core';

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

const AnchorButton = StyledButton.withComponent(SafeLink);

const SearchResult = ({
  result,
  allResultUrl,
  resourceToLinkProps,
  onNavigate,
  hideSleeveHeader,
  singleColumn,
  infoText,
  ignoreContentTypeBadge,
  t,
}) => (
  <section {...classes('search-result')}>
    {!hideSleeveHeader && (
      <h1 {...classes('search-result-heading')}>
        {t('searchPage.searchField.searchResultHeading')}
      </h1>
    )}
    {infoText && (
      <aside {...classes('search-result-infotext')}>
        <Wrench className="c-icon--22" />
        <span>{infoText}</span>
      </aside>
    )}
    <div
      {...classes(
        'search-result-content',
        singleColumn ? '' : 'multiple-columned',
      )}>
      {result.map(contentTypeResult => (
        <ContentTypeResult
          ignoreContentTypeBadge={ignoreContentTypeBadge}
          onNavigate={onNavigate}
          contentTypeResult={contentTypeResult}
          resourceToLinkProps={resourceToLinkProps}
          defaultCount={window.innerWidth > 980 ? 7 : 3}
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
      <AnchorButton
        to={allResultUrl}
        css={css`
          box-shadow: none;
        `}>
        {t('searchPage.searchField.allResultButtonText')}
      </AnchorButton>
    </div>
  </section>
);

SearchResult.propTypes = {
  result: PropTypes.arrayOf(ContentTypeResultShape),
  resourceToLinkProps: PropTypes.func.isRequired,
  allResultUrl: PropTypes.string.isRequired,
  onNavigate: PropTypes.func,
  hideSleeveHeader: PropTypes.bool,
  singleColumn: PropTypes.bool,
  infoText: PropTypes.node,
  ignoreContentTypeBadge: PropTypes.bool,
  t: PropTypes.func.isRequired,
};

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputHasFocus: false,
    };
    this.inputRef = React.createRef();
    this.handleOnFilterRemove = this.handleOnFilterRemove.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
  }

  onInputBlur() {
    this.setState({
      inputHasFocus: false,
    });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  onInputFocus() {
    this.setState({
      inputHasFocus: true,
    });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  handleOnFilterRemove(value, filterName) {
    this.props.onFilterRemove(value, filterName);
    this.inputRef.current.focus();
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
      autofocus,
      onNavigate,
      modifiers: modifiersProp,
      hideSleeveHeader,
      singleColumn,
      infoText,
      ignoreContentTypeBadge,
      onClick,
      t,
    } = this.props;

    const hasSearchResult = searchResult && searchResult.length > 0;

    let searchResultView = null;

    const modifiers = [...modifiersProp];

    if (hasSearchResult) {
      modifiers.push('has-search-result');

      searchResultView = (
        <SearchResult
          ignoreContentTypeBadge={ignoreContentTypeBadge}
          result={searchResult}
          searchString={value}
          allResultUrl={allResultUrl}
          resourceToLinkProps={resourceToLinkProps}
          autofocus={autofocus}
          hideSleeveHeader={hideSleeveHeader}
          onNavigate={onNavigate}
          singleColumn={singleColumn}
          infoText={infoText}
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
            ref={this.inputRef}
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
            onChange={e => onChange(e.target.value)}
            onBlur={this.onInputBlur}
            onFocus={this.onInputFocus}
            onClick={onClick}
          />
          {filters && filters.length > 0 && (
            <div {...classes('filters')}>
              <ActiveFilters
                filters={filters}
                onFilterRemove={this.handleOnFilterRemove}
              />
            </div>
          )}
          {value !== '' && (
            <button
              {...classes('button', 'close')}
              type="button"
              onClick={() => {
                onChange('');
                this.inputRef.current.focus();
              }}>
              {t('welcomePage.resetSearch')}
            </button>
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
  autofocus: PropTypes.bool,
  onNavigate: PropTypes.func,
  t: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  hideSleeveHeader: PropTypes.bool,
  singleColumn: PropTypes.bool,
  infoText: PropTypes.node,
  ignoreContentTypeBadge: PropTypes.bool,
  onClick: PropTypes.func,
};

SearchField.defaultProps = {
  modifiers: [],
};

export default injectT(SearchField);
