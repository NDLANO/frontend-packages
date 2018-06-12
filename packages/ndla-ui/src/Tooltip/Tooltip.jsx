/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import { Fade } from '../Animation';

const classes = new BEMHelper({
  name: 'tooltip',
  prefix: 'c-',
});

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showtooltip: false,
      disabled: props.delay === 0 || props.disabled,
    };
    this.handleShowTooltip = this.handleShowTooltip.bind(this);
    this.handleHideTooltip = this.handleHideTooltip.bind(this);
    this.delayTimer = null;
  }

  componentDidMount() {
    if (this.props.delay && !this.props.disabled) {
      this.delayTimer = setTimeout(() => {
        this.setState({
          disabled: !this.props.disabled,
        });
      }, this.props.delay);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.delayTimer);
  }

  handleShowTooltip() {
    if (!this.state.showTooltip && this.state.disabled) {
      this.setState({ showtooltip: true });
    }
  }

  handleHideTooltip() {
    this.setState({ showtooltip: false });
  }

  render() {
    return (
      <div>
        <Fade in={this.state.showtooltip}>
          <span {...classes('', this.props.align)}>{this.props.tooltip}</span>
        </Fade>
        <div
          onMouseEnter={this.handleShowTooltip}
          onMouseMove={this.handleShowTooltip}
          onMouseLeave={this.handleHideTooltip}
          onFocus={this.handleShowTooltip}
          onBlur={this.handleHideTooltip}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.string.isRequired,
  delay: PropTypes.number,
  disabled: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right']),
};

Tooltip.defaultProps = {
  align: undefined,
  disabled: false,
  delay: 0,
};

export default Tooltip;
