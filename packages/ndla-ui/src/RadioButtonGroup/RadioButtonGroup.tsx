/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Fragment, Component, ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { uuid } from '@ndla/util';
import { spacing, fonts, colors } from '@ndla/core';

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

const RadioButtonGroupWrapper = styled.div`
  padding: ${spacing.small} 0;
  font-family: ${fonts.sans};
  display: flex;
  align-items: center;
`;

const RadioButtonGroupLabelHeading = styled.h1`
  ${fonts.sizes('16px', '20px')};
  margin: 0 ${spacing.normal} 0 0;
  font-weight: 600;
`;

const RadioButtonGroupLabel = styled.label`
  ${fonts.sizes('16px', '28px')};
  color: ${colors.brand.primary};
  align-items: center;
  display: inline-flex;
  &:before {
    content: '';
    margin-right: ${spacing.small};
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 2px solid ${colors.brand.tertiary};
    transition: 200ms border-color ease;
  }
  &:after {
    content: '';
    background: transparent;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    position: absolute;
    transform: translateX(5px) scale(0, 0);
    transition: 200ms all ease;
  }
  &:not(:last-child) {
    margin-right: ${spacing.medium};
  }
`;

const RadioButtonGroupInput = styled.input`
  opacity: 0;
  position: absolute;
  width: auto;
  &:hover + ${RadioButtonGroupLabel} {
    outline: 1px dotted #212121;
    outline: -webkit-focus-ring-color auto 5px;
    &:after {
      transform: translateX(5px) scale(1, 1);
      background: ${colors.brand.tertiary};
    }
  }
  // emotion does not seem to support several selectors combined with targeting another emotion component
  // so we duplicate the css for :hover and :focus.
  &:focus + ${RadioButtonGroupLabel} {
    outline: 1px dotted #212121;
    outline: -webkit-focus-ring-color auto 5px;
    &:after {
      transform: translateX(5px) scale(1, 1);
      background: ${colors.brand.tertiary};
    }
  }
  &:checked + ${RadioButtonGroupLabel} {
    &:before {
      border-color: ${colors.brand.primary};
    }
    &:after {
      transform: translateX(5px) scale(1, 1);
      background: ${colors.brand.primary};
    }
  }
`;

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

  handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      selected: e.target.value,
    });
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <section>
        <RadioButtonGroupWrapper role="radiogroup">
          {this.props.label && <RadioButtonGroupLabelHeading>{this.props.label}</RadioButtonGroupLabelHeading>}
          {this.props.options.map((option) => {
            const id = this.uuid ? `${this.uuid}_${option.value}` : option.value;
            return (
              <Fragment key={option.value}>
                <RadioButtonGroupInput
                  disabled={option.disabled}
                  aria-checked={this.state.selected === option.value}
                  checked={this.state.selected === option.value}
                  type="radio"
                  value={option.value}
                  id={id}
                  name={id}
                  onChange={this.handleOnChange}
                />
                <RadioButtonGroupLabel htmlFor={id}>{option.title}</RadioButtonGroupLabel>
              </Fragment>
            );
          })}
        </RadioButtonGroupWrapper>
      </section>
    );
  }
}

export default RadioButtonGroup;
