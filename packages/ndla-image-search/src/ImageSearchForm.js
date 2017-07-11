/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ndla-ui';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'image-search',
  prefix: 'c-',
});

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: props.query,
    };
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(evt) {
    if (evt.key === 'Enter') {
      this.handleSubmit(evt);
    }
  }

  handleQueryChange(evt) {
    this.setState({ query: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSearchQuerySubmit(this.state.query);
  }

  render() {
    const { searching, searchPlaceholder, searchButtonTitle } = this.props;
    return (
      <div {...classes('form')}>
        <input
          {...classes('form-query')}
          type="text"
          onChange={this.handleQueryChange}
          onKeyPress={this.onKeyPress}
          value={this.state.query}
          placeholder={searchPlaceholder}
        />
        <Button
          {...classes('form-button')}
          onClick={this.handleSubmit}
          loading={searching}
        >
          {searchButtonTitle}
        </Button>
      </div>
    );
  }
}

SearchForm.propTypes = {
  query: PropTypes.string,
  searching: PropTypes.bool.isRequired,
  onSearchQuerySubmit: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  searchButtonTitle: PropTypes.string.isRequired,
};

SearchForm.defaultProps = {
  query: '',
};

export default SearchForm;
