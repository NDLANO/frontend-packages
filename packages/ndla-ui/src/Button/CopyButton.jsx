/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'button',
  prefix: 'c-',
});

class CopyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCopyState: false,
    };
    this.timer = null;
    this.handleCopy = this.handleCopy.bind(this);
    this.exitCopyState = this.exitCopyState.bind(this);
    this.buttonRef = React.createRef();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  exitCopyState() {
    this.setState({
      showCopyState: false,
    });
    if (this.buttonRef.current === document.activeElement) {
      this.buttonRef.current.blur();
    }
  }

  handleCopy(e) {
    this.props.onClick(e);
    if (!this.state.showCopyState) {
      this.setState(
        {
          showCopyState: true,
        },
        () => {
          this.timer = setTimeout(this.exitCopyState, this.props.showCopyTimer);
        },
      );
    }
  }

  render() {
    const {
      outline,
      square,
      stripped,
      link,
      lighter,
      submit,
      loading,
      className,
      children,
      disabled,
      onClick,
      copyNode,
      showCopyTimer,
      ...rest
    } = this.props;
    const modifiers = {
      link,
      outline,
      square,
      lighter,
      stripped,
    };
    /* eslint-disable react/button-has-type */
    const type = submit ? 'submit' : rest.type || 'button';
    // Unless the disabled state is explicitly set, the button is disabled when loading.
    const isDisabled = (disabled !== undefined ? disabled : loading) || false;

    return (
      <button
        {...classes('', modifiers, className)}
        type={type}
        disabled={isDisabled}
        onClick={this.handleCopy}
        ref={this.buttonRef}
        {...rest}>
        {this.state.showCopyState ? copyNode : children}
      </button>
    );
  }
}

CopyButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  link: PropTypes.bool,
  square: PropTypes.bool,
  stripped: PropTypes.bool,
  lighter: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  /**
   * Applies the submit attribute to the button for use in forms. This overrides the type
   */
  submit: PropTypes.bool,
  /**
   * Defines HTML button type Attribute
   * @type {("button"|"reset"|"submit")}
   * @defaultValue 'button'
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  copyNode: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  showCopyTimer: (props, propName, componentName) => {
    if (typeof props[propName] !== 'number' || props[propName] < 100) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Must be a number above 100. (ms to be in copied state after clicked)`,
      );
    }
    return null;
  },
};

CopyButton.defaultProps = {
  showCopyTimer: 4000,
  onClick: () => {
    console.log('Clicked CopyButton');
  },
};

export default CopyButton;
