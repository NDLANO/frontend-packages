/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ChangeEvent, KeyboardEvent, MouseEvent, Component } from 'react';
import styled from '@emotion/styled';
import { ButtonV2 } from '@ndla/button';
import { QueryObject } from './AudioSearch';

const AudioSearchFormWrapper = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eaeaea;
`;

const FormInput = styled.input`
  width: 88%;
  height: 3rem;
  margin-top: 0;
  margin-bottom: 0;
  box-shadow: none;
  border-width: 2px;
  float: left;
  border-radius: 5px 0 0 5px;
`;

const FormButton = styled(ButtonV2)`
  width: 12%;
  height: 3rem;
  display: inline-block;
  margin-left: -2px;
  border-radius: 0 5px 5px 0;
  padding: 0.4em;

  &:hover {
    transform: none;
  }
`;

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
      <AudioSearchFormWrapper>
        <FormInput
          type="text"
          onChange={this.handleQueryChange}
          onKeyPress={this.onKeyPress}
          value={this.state.queryObject?.query}
          placeholder={translations.searchPlaceholder}
        />
        <FormButton onClick={this.handleSubmit} disabled={searching}>
          {translations.searchButtonTitle}
        </FormButton>
      </AudioSearchFormWrapper>
    );
  }
}

export default AudioSearchForm;
