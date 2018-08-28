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
      showTooltip: false,
    };
    this.handleShowTooltip = this.handleShowTooltip.bind(this);
    this.handleHideTooltip = this.handleHideTooltip.bind(this);
    this.contentRef = React.createRef();
    this.tooltipRef = React.createRef();
    this.widthRef = 0;
    this.heightRef = 0;
    this.leftRef = 0;
    this.tooltipRefWidth = props.tooltip ? props.tooltip.length * 5 : 0; // Estimate incase user only uses keyboard navigation.
    this.currentStyles = {};
  }

  getPosition() {
    if (this.state.showTooltip) {
      this.currentStyles = {};
      this.widthRef = this.contentRef.current.offsetWidth;
      this.heightRef = this.contentRef.current.offsetHeight;
      const elementRect = this.contentRef.current.getBoundingClientRect();
      this.leftRef = elementRect.left;
      const tooltipWidth = this.tooltipRef.current
        ? this.tooltipRef.current.offsetWidth
        : this.tooltipRefWidth;

      this.tooltipRefWidth = tooltipWidth;

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
        (this.props.align === 'left' && this.leftRef - tooltipWidth < 20) ||
        (this.props.align === 'right' &&
          this.leftRef + this.widthRef + tooltipWidth > window.innerWidth - 40)
      ) {
        const centeredLeft = this.leftRef + this.widthRef / 2;
        let moveHorizontal = Math.max(
          centeredLeft + tooltipWidth / 2 + 20 - window.innerWidth,
          0,
        );
        if (moveHorizontal === 0) {
          moveHorizontal = Math.min(-(tooltipWidth / 2 - centeredLeft + 20), 0);
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
    }
    return this.currentStyles;
  }

  handleShowTooltip() {
    this.setState({ showTooltip: !this.props.disabled });
  }

  handleHideTooltip() {
    this.setState({ showTooltip: false });
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
        <Fade in={this.state.showTooltip} delay={this.props.delay}>
          <span
            role="tooltip"
            {...classes('tooltip')}
            style={this.getPosition()}
            ref={this.tooltipRef}>
            {this.props.tooltip}
          </span>
        </Fade>
        <span
          role="button"
          tabIndex={0}
          aria-label={this.props.tooltip}
          ref={this.contentRef}
          onMouseEnter={this.handleShowTooltip}
          onMouseOut={this.handleHideTooltip}
          onMouseMove={this.handleShowTooltip}
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
