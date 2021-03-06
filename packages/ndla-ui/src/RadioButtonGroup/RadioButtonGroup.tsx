/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment, Component } from 'react';
import BEMHelper from 'react-bem-helper';
import { uuid } from '@ndla/util';

const classes = BEMHelper('c-radio-button-group');

interface Props {
  selected?: string;
  options: {
    title: string;
    value: string;
    disabled?: boolean;
  }[];
  label?: string;
  uniqeIds?: boolean;
  onChange: (value: string) => void;
}

interface State {
  selected: string;
}

class RadioButtonGroup extends Component<Props, State> {
  private readonly uuid?: string;
  constructor(props: Props) {
    super(props);
    this.state = {
      selected: props.selected || props.options[0].value,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.uuid = this.props.uniqeIds ? uuid() : undefined;
  }

  handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      selected: e.target.value,
    });
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <section>
        <div role="radiogroup" {...classes('wrapper')}>
          {this.props.label && <h1 {...classes('label-heading')}>{this.props.label}</h1>}
          {this.props.options.map((option) => {
            const id = this.uuid ? `${this.uuid}_${option.value}` : option.value;
            return (
              <Fragment key={option.value}>
                <input
                  {...classes('input')}
                  disabled={option.disabled}
                  aria-checked={this.state.selected === option.value}
                  checked={this.state.selected === option.value}
                  type="radio"
                  value={option.value}
                  id={id}
                  name={id}
                  onChange={this.handleOnChange}
                />
                <label htmlFor={id} {...classes('label')}>
                  {option.title}
                </label>
              </Fragment>
            );
          })}
        </div>
      </section>
    );
  }
}

export default RadioButtonGroup;
