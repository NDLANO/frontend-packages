/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@ndla/button';
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
  }

  onKeyPress(evt) {
    if (evt.key === 'Enter') {
      this.handleSubmit(evt);
    }
  }

  handleQueryChange({ target: { value } }) {
    this.setState(prevState => ({
      queryObject: {
        ...prevState.queryObject,
        query: value,
      },
    }));
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSearchQuerySubmit(this.state.queryObject);
  }

  render() {
    const { searching, translations } = this.props;

    return (
      <div {...classes('form')}>
        <input
          {...classes('form-query')}
          type="text"
          onChange={this.handleQueryChange}
          onKeyPress={this.onKeyPress}
          value={this.state.queryObject.query}
          placeholder={translations.searchPlaceholder}
        />
        <Button
          {...classes('form-button')}
          onClick={this.handleSubmit}
          loading={searching}>
          {translations.searchButtonTitle}
        </Button>
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
    audioType: PropTypes.string.isRequired,
  }),
  translations: PropTypes.shape({
    searchPlaceholder: PropTypes.string.isRequired,
    searchButtonTitle: PropTypes.string.isRequired,
  }),
  searching: PropTypes.bool.isRequired,
  onSearchQuerySubmit: PropTypes.func.isRequired,
};

export default AudioSearchForm;
