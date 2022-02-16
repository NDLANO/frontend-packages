/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, spacing, spacingUnit, fonts, misc } from '@ndla/core';

const Wrapper = styled.div`
  margin-top: ${spacing.xsmall};
  &:first-of-type {
    margin-top: 0;
  }
`;

const inputWrapperCSS = css`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  background: ${colors.brand.greyLightest};
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${colors.brand.greyLighter};
  transition: border-color 100ms ease;
  border-radius: ${misc.borderRadius};
  min-height: ${spacing.large};
  padding-right: ${spacing.small};
  input,
  textarea {
    width: inherit;
    font-weight: ${fonts.weight.normal};
    color: ${colors.text.primary};
    ${fonts.sizes(18, 1.3)};
    background: none;
    border: 0;
    display: flex;
    flex-grow: 1;
    &:focus {
      appearance: none;
      outline: none;
    }
  }
  input {
    padding: ${spacing.xsmall} ${spacing.small};
  }
  textarea {
    padding: 0 ${spacing.small};
    height: 20px;
    margin: 14px 0;
    resize: none;
  }
  .c-icon {
    width: 24px;
    height: 24px;
  }
`;

const hasFocusCSS = css`
  border-color: ${colors.brand.primary};
`;

const whiteCSS = css`
  background: #fff;
`;

const ComponentWrapper = styled.div`
  display: flex;
  label {
    width: ${spacingUnit * 4}px;
    max-width: ${spacingUnit * 4}px;
    padding: 20px ${spacing.small} ${spacing.small} 0;
    text-transform: uppercase;
    font-weight: ${fonts.weight.semibold};
    ${fonts.sizes(14, 1.1)};
  }
`;

const FormWarningText = styled.span`
  font-family: ${fonts.sans};
  color: ${colors.support.red};
  ${fonts.sizes(14, 1.1)};
  ${(props) =>
    props.withLabel &&
    css`
      padding-left: ${spacingUnit * 4}px;
    `}
`;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
    };
    this.wrapperRef = createRef();
    this.inputRef = createRef();
  }

  componentDidMount() {
    if (this.props.focusOnMount) {
      setTimeout(() => this.inputRef.current.focus(), 0);
    }
  }

  componentDidUpdate() {
    this.onCheckHeight();
  }

  onCheckHeight() {
    if (this.props.autoExpand) {
      this.inputRef.current.style.height = `0px`;
      const { scrollHeight } = this.inputRef.current;
      this.inputRef.current.style.height = `${scrollHeight}px`;
    }
  }

  handleBlur() {
    this.setState({
      hasFocus: false,
    });
  }

  handleFocus() {
    this.setState({
      hasFocus: true,
    });
  }

  render() {
    const {
      tags,
      iconRight,
      iconLeft,
      container: Component,
      onChange,
      onFocus,
      onBlur,
      warningText,
      focusOnMount,
      white,
      autoExpand,
      value,
      label,
      customCSS,
      ...rest
    } = this.props;

    const InputComponent = autoExpand ? 'textarea' : 'input';

    return (
      <Wrapper>
        <ComponentWrapper>
          {label && <label>{label}</label>}
          <Component
            css={[inputWrapperCSS, this.state.hasFocus && hasFocusCSS, white && whiteCSS, customCSS && customCSS]}
            ref={this.wrapperRef}>
            {tags && tags}
            {iconLeft && !tags && iconLeft}
            <InputComponent
              ref={this.inputRef}
              onChange={(e) => {
                this.onCheckHeight();
                if (onChange) {
                  onChange(e);
                }
              }}
              onFocus={(e) => {
                this.handleFocus();
                if (onFocus) {
                  onFocus(e);
                }
              }}
              onBlur={(e) => {
                this.handleBlur();
                if (onBlur) {
                  onBlur(e);
                }
              }}
              value={value}
              {...rest}
            />
            {iconRight && iconRight}
          </Component>
        </ComponentWrapper>
        {warningText && <FormWarningText withLabel={label}>{warningText}</FormWarningText>}
      </Wrapper>
    );
  }
}

Input.propTypes = {
  iconRight: PropTypes.node,
  iconLeft: PropTypes.node,
  tags: PropTypes.node,
  container: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  white: PropTypes.bool,
  warningText: PropTypes.string,
  focusOnMount: PropTypes.bool,
  autoExpand: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  customCSS: PropTypes.object,
};

Input.defaultProps = {
  container: 'form',
  autoExpand: false,
  value: '',
};

export default Input;
