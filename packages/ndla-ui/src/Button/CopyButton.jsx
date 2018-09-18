/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

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
    const { children, onClick, copyNode, showCopyTimer, ...rest } = this.props;

    return (
      <Button onClick={this.handleCopy} ref={this.buttonRef} {...rest}>
        {this.state.showCopyState ? copyNode : children}
      </Button>
    );
  }
}

CopyButton.propTypes = {
  children: PropTypes.node.isRequired,
  copyNode: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onClick: PropTypes.func,
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
    console.log('Clicked CopyButton'); //eslint-disable-line
  },
};

export default CopyButton;
