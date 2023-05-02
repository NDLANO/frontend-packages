/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonV2 } from '@ndla/button';

class SimpleSubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ query: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    const { errorMessage, labelText, submitText } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="query">{labelText}</label>
        <input id="query" type="text" onChange={this.handleChange} value={this.state.articleId} />
        <ButtonV2 type="submit"> {submitText}</ButtonV2>
        {errorMessage ? <p>{errorMessage}</p> : null}
      </form>
    );
  }
}

SimpleSubmitForm.propTypes = {
  query: PropTypes.string,
  labelText: PropTypes.string,
  submitText: PropTypes.string,
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

SimpleSubmitForm.defaultProps = {
  query: '',
  labelText: 'Query:',
  submitText: 'Last',
};

export default SimpleSubmitForm;
