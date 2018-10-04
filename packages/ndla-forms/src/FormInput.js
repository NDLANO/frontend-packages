/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, cx } from 'react-emotion';
import { colors, spacing, fonts, misc } from 'ndla-core';

const inputWrapperCSS = css`
  display: flex;
  background: ${colors.brand.greyLightest};
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.brand.greyLighter};
  border-radius: ${misc.borderRadius};
  min-height: ${spacing.large};
  padding-right: ${spacing.small};
  input {
    font-weight: ${fonts.weight.normal};
    color: ${colors.text.primary};
    ${fonts.sizes(18, 1.1)};
    background: none;
    border: 0;
    display: flex;
    flex-grow: 1;
    padding: ${spacing.xsmall} ${spacing.small};
    &:focus {
      appearance: none;
      outline: none;
    }
  }
  > .c-icon {
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

const FormWarningText = styled.span`
  color: ${colors.support.red};
`;

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
    };
    this.wrapperRef = React.createRef();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.focusOnMount) {
      this.inputRef.current.focus();
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
      ...rest
    } = this.props;

    return (
      <div>
        <Component
          className={cx(
            { [inputWrapperCSS]: true },
            { [hasFocusCSS]: this.state.hasFocus },
            { [whiteCSS]: white },
          )}
          ref={this.wrapperRef}>
          {tags && tags}
          {iconLeft && !tags && iconLeft}
          <input
            ref={this.inputRef}
            onChange={onChange}
            onFocus={e => {
              this.handleFocus();
              if (onFocus) {
                onFocus(e);
              }
            }}
            onBlur={e => {
              this.handleBlur();
              if (onBlur) {
                onBlur(e);
              }
            }}
            {...rest}
          />
          {iconRight && iconRight}
        </Component>
        {warningText && <FormWarningText>{warningText}</FormWarningText>}
      </div>
    );
  }
}

FormInput.propTypes = {
  iconRight: PropTypes.node,
  iconLeft: PropTypes.node,
  tags: PropTypes.node,
  container: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  white: PropTypes.bool,
  warningText: PropTypes.string,
  focusOnMount: PropTypes.bool,
};

FormInput.defaultProps = {
  container: 'form',
};

export default FormInput;
