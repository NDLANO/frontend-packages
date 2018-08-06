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
import { isMobile, isIE } from 'react-device-detect';

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
      tooltipWidth: 0,
      disabled: props.delay === 0 || props.disabled,
    };
    this.handleShowTooltip = this.handleShowTooltip.bind(this);
    this.handleHideTooltip = this.handleHideTooltip.bind(this);
    this.delayTimer = null;
    this.contentRef = React.createRef();
    this.tooltipRef = React.createRef();
    this.widthRef = 0;
    this.heightRef = 0;
    this.leftRef = 0;
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
      this.widthRef = this.contentRef.current.offsetWidth;
      this.heightRef = this.contentRef.current.offsetHeight;
      const elementRect = this.contentRef.current.getBoundingClientRect();
      this.leftRef = elementRect.left;
      this.setState({ showtooltip: true }, () => {
        this.currentStyles = {};
        if (isIE) {
          // IE is bad with transform % + px..
          this.currentStyles.left = `-${(this.tooltipRef.current.offsetWidth -
            this.widthRef) /
            2}px`;
          this.currentStyles.top = `-${this.tooltipRef.current.offsetHeight +
            10}px`;
        } else if (
          this.props.align === 'top' ||
          this.props.align === 'bottom' ||
          (this.props.align === 'left' &&
            this.leftRef - this.state.tooltipWidth < 20) ||
          (this.props.align === 'right' &&
            this.leftRef + this.widthRef + this.state.tooltipWidth >
              window.innerWidth - 40)
        ) {
          const centeredLeft = this.leftRef + this.widthRef / 2;
          let moveHorizontal = Math.max(
            centeredLeft + this.state.tooltipWidth / 2 + 20 - window.innerWidth,
            0,
          );
          if (moveHorizontal === 0) {
            moveHorizontal = Math.min(
              -(this.state.tooltipWidth - centeredLeft + 20),
              0,
            );
          }
          if (this.props.align === 'bottom') {
            this.currentStyles.transform = `translate3d(calc(-50% + ${this
              .widthRef /
              2 -
              moveHorizontal}px), calc(${this.heightRef}px + 0.25rem), 0)`;
          } else {
            this.currentStyles.transform = `translate3d(calc(-50% + ${this
              .widthRef /
              2 -
              moveHorizontal}px), calc(-100% - 0.25rem), 0)`;
          }
        } else if (this.props.align === 'left') {
          this.currentStyles.transform = `translate3d(calc(-100% - 0.25rem), calc(-50% + ${this
            .heightRef / 2}px), 0)`;
        } else {
          this.currentStyles.transform = `translate3d(calc(${
            this.widthRef
          }px + 0.25rem), calc(-50% + ${this.heightRef / 2}px), 0)`;
        }
        this.setState({
          tooltipWidth: this.tooltipRef.current.offsetWidth,
        });
      });
    }
  }

  handleHideTooltip() {
    this.setState({ showtooltip: false });
  }

  render() {
    // If phone ignore all tooltips //
    if (isMobile) {
      return (
        <div
          className={`${classes('').className} ${
            this.props.tooltipContainerClass
          }`}>
          <span className={`c-tooltip__content ${this.props.className}`}>
            {this.props.children}
          </span>
        </div>
      );
    }

    return (
      <div
        className={`${classes('').className} ${
          this.props.tooltipContainerClass
        }`}>
        <Fade in={this.state.showtooltip}>
          <span
            role="tooltip"
            {...classes('tooltip')}
            style={this.currentStyles}
            ref={this.tooltipRef}>
            {this.props.tooltip}
          </span>
        </Fade>
        <span
          role="button"
          tabIndex={0}
          aria-label={this.props.tooltip}
          ref={this.contentRef}
          onMouseMove={this.handleShowTooltip}
          onMouseEnter={this.handleShowTooltip}
          onMouseOut={this.handleHideTooltip}
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
