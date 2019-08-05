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
import { Search as SearchIcon } from '@ndla/icons/common';
import { injectT } from '@ndla/i18n';

import ActiveFilters from './ActiveFilters';

import { ContentTypeResultShape } from '../shapes';

const classes = new BEMHelper('c-search-field');

const messagesShape = PropTypes.shape({
  // required if search result
  searchResultHeading: PropTypes.string,
  contentTypeResultShowMoreLabel: PropTypes.string,
  contentTypeResultShowLessLabel: PropTypes.string,
  contentTypeResultNoHit: PropTypes.string,
});

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.handleOnFilterRemove = this.handleOnFilterRemove.bind(this);
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
      messages,
      small,
      onClick,
      t,
      onFocus,
      onBlur,
    } = this.props;

    return (
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
          onBlur={onBlur}
          onFocus={onFocus}
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
    );
  }
}

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
  hideSleeveHeader: PropTypes.bool,
  singleColumn: PropTypes.bool,
  infoText: PropTypes.node,
  ignoreContentTypeBadge: PropTypes.bool,
  onClick: PropTypes.func,
};

export default injectT(SearchField);
