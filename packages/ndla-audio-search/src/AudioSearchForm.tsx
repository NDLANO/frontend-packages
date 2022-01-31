/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ChangeEvent, KeyboardEvent, MouseEvent, Component } from 'react';
//@ts-ignore
import Button from '@ndla/button';
import BEMHelper from 'react-bem-helper';
import { QueryObject } from './AudioSearch';

const classes = new BEMHelper({
  name: 'audio-search',
  prefix: 'c-',
});

interface Props {
  queryObject: QueryObject;
  translations: {
    searchPlaceholder: string;
    searchButtonTitle: string;
  };
  searching: boolean;
  onSearchQuerySubmit: (query: QueryObject) => void;
}

interface State {
  queryObject: QueryObject;
}

class AudioSearchForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      queryObject: props.queryObject,
    };
    this.onKeyPress = this.onKeyPress.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onKeyPress(evt: KeyboardEvent<HTMLInputElement>) {
    if (evt.key === 'Enter') {
      this.handleSubmit(evt);
    }
  }

  handleQueryChange({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    this.setState((prevState) => ({
      queryObject: {
        ...prevState.queryObject,
        query: value,
      },
    }));
  }

  handleSubmit(evt: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) {
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
          value={this.state.queryObject?.query}
          placeholder={translations.searchPlaceholder}
        />
        <Button {...classes('form-button')} onClick={this.handleSubmit} loading={searching}>
          {translations.searchButtonTitle}
        </Button>
      </div>
    );
  }
}

export default AudioSearchForm;
