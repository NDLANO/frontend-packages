/**
 * Copyright (c) 2017-present, NDLA.
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
  name: 'audio-search',
  prefix: 'c-',
});

class AudioSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryObject: props.queryObject,
    };
    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  onKeyPress(evt) {
    if (evt.key === 'Enter') {
      this.handleSubmit(evt);
    }
  }

  handleLanguageChange(evt) {
    const newQueryObject = {
      query: this.state.queryObject.query,
      page: this.state.queryObject.page,
      pageSize: this.state.queryObject.pageSize,
      locale: evt.target.value,
    };

    this.props.onSearchQuerySubmit(newQueryObject);
    this.setState({ queryObject: newQueryObject });
  }

  handleQueryChange(evt) {
    this.setState({
      queryObject: {
        query: evt.target.value,
        page: this.state.queryObject.page,
        pageSize: this.state.queryObject.pageSize,
        locale: this.state.queryObject.locale,
      },
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSearchQuerySubmit(this.state.queryObject);
  }

  render() {
    const { searching, searchPlaceholder, searchButtonTitle } = this.props;

    return (
      <div {...classes('form')}>
        <select onChange={this.handleLanguageChange}>
          <option value="nb"> Norsk - Bokmål </option>
          <option value="nn"> Norsk - Nynorsk </option>
          <option value="en"> Engelsk </option>
          <option value="unknown"> *Ukjent* </option>
        </select>
        <div>
          <input
            {...classes('form-query')}
            type="text"
            onChange={this.handleQueryChange}
            onKeyPress={this.onKeyPress}
            value={this.state.queryObject.query}
            placeholder={searchPlaceholder}
          />
          <Button
            {...classes('form-button')}
            onClick={this.handleSubmit}
            loading={searching}>
            {searchButtonTitle}
          </Button>
        </div>
      </div>
    );
  }
}

AudioSearchForm.propTypes = {
  queryObject: PropTypes.shape({
    query: PropTypes.string,
    page: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    locale: PropTypes.string.isRequired,
  }),
  searching: PropTypes.bool.isRequired,
  onSearchQuerySubmit: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  searchButtonTitle: PropTypes.string.isRequired,
};

export default AudioSearchForm;
