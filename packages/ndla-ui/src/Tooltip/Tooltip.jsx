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
    this.contentRef = null;
    this.widthRef = 0;
    this.heightRef = 0;
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
      this.widthRef = this.contentRef.offsetWidth;
      this.heightRef = this.contentRef.offsetHeight;
      this.setState({ showtooltip: true });
    }
  }

  handleHideTooltip() {
    this.setState({ showtooltip: false });
  }

  render() {
    let transform;
    switch (this.props.align) {
      case 'top':
        transform = `translate3d(calc(-50% + ${this.widthRef /
          2}px), calc(-100% - 0.25rem), 0)`;
        break;
      case 'left':
        transform = `translate3d(calc(-100% - 0.25rem), calc(-50% + ${this
          .heightRef / 2}px), 0)`;
        break;
      case 'right':
        transform = `translate3d(calc(${
          this.widthRef
        }px + 0.25rem), calc(-50% + ${this.heightRef / 2}px), 0)`;
        break;
      case 'bottom':
        transform = `translate3d(calc(-50% + ${this.widthRef / 2}px), calc(${
          this.heightRef
        }px + 0.25rem), 0)`;
        break;
      default:
        break;
    }

    return (
      <div
        className={`${classes('').className} ${
          this.props.tooltipContainerClass
        }`}>
        <Fade in={this.state.showtooltip}>
          <span
            role="tooltip"
            id={this.props.id}
            {...classes('tooltip')}
            style={{ transform }}>
            {this.props.tooltip}
          </span>
        </Fade>
        <span
          role="button"
          tabIndex={0}
          aria-describedby={this.props.id}
          ref={r => {
            this.contentRef = r;
          }}
          onMouseMove={this.handleShowTooltip}
          onMouseEnter={this.handleShowTooltip}
          onMouseLeave={this.handleHideTooltip}
          onFocus={this.handleShowTooltip}
          onBlur={this.handleHideTooltip}
          className={`c-tooltip__content ${this.props.className}`}>
          {this.props.children}
        </span>
      </div>
    );
  }
}

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.string.isRequired,
  delay: PropTypes.number,
  disabled: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  className: PropTypes.string,
  tooltipContainerClass: PropTypes.string,
};

Tooltip.defaultProps = {
  align: 'top',
  disabled: false,
  delay: 0,
  className: '',
  tooltipContainerClass: '',
};

export default Tooltip;
