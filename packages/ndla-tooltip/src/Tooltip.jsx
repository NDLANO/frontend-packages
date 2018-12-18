/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isMobile, isIE } from 'react-device-detect';
import styled, { css, cx } from 'react-emotion';
import { spacing, colors, fonts } from '@ndla/core';

const TooltipWrapper = styled.div`
  position: relative;
`;

const TooltipElement = css`
  display: block;
  color: #fff;
  position: absolute;
  z-index: 9999;
  background: ${colors.brand.primary};
  border-radius: 2px;
  padding: ${spacing.small};
  font-family: ${fonts.sans};
  ${fonts.sizes(14, 1.2)} font-weight: ${fonts.weight.normal};
  color: $white;
  text-align: center;
  white-space: nowrap;
  max-width: calc(100vw - #{${spacing.normal}});
  pointer-events: none;
`;

const contentCSS = css`
  display: inline-block;
`;

const Fade = styled.div`
  opacity: 0;
  @keyframes fadeInTooltip {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOutTooltip {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  animation-fill-mode: forwards;
  animation-delay: ${props => props.delay}ms;
  animation-name: ${props => (props.in ? 'fadeInTooltip' : '')};
  animation-duration: 300ms;
`;

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
    };
    this.handleShowTooltip = this.handleShowTooltip.bind(this);
    this.handleHideTooltip = this.handleHideTooltip.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.contentRef = React.createRef();
    this.tooltipRef = React.createRef();
  }

  getPosition() {
    const currentStyles = {};
    if (this.state.showTooltip) {
      const widthRef = this.contentRef.current.offsetWidth;
      const heightRef = this.contentRef.current.offsetHeight;
      const elementRect = this.contentRef.current.getBoundingClientRect();
      const leftRef = elementRect.left;
      const tooltipWidth = this.tooltipRef.current.offsetWidth;

      if (isIE) {
        // IE is bad with transform % + px..
        currentStyles.left = `-${(this.tooltipRef.current.offsetWidth -
          widthRef) /
          2}px`;
        currentStyles.top = `-${this.tooltipRef.current.offsetHeight + 10}px`;
      } else if (
        this.props.align === 'top' ||
        this.props.align === 'bottom' ||
        (this.props.align === 'left' && leftRef - tooltipWidth < 20) ||
        (this.props.align === 'right' &&
          leftRef + widthRef + tooltipWidth > window.innerWidth - 40)
      ) {
        const centeredLeft = leftRef + widthRef / 2;
        let moveHorizontal = Math.max(
          centeredLeft + tooltipWidth / 2 + 20 - window.innerWidth,
          0,
        );
        if (moveHorizontal === 0) {
          moveHorizontal = Math.min(-(tooltipWidth / 2 - centeredLeft + 20), 0);
        }
        if (this.props.align === 'bottom') {
          currentStyles.transform = `translate(calc(-50% + ${widthRef / 2 -
            moveHorizontal}px), calc(${heightRef}px + ${spacing.xsmall}))`;
        } else {
          currentStyles.transform = `translate(calc(-50% + ${widthRef / 2 -
            moveHorizontal}px), calc(-100% - ${spacing.xsmall}))`;
        }
      } else if (this.props.align === 'left') {
        currentStyles.transform = `translate(calc(-100% - ${
          spacing.xsmall
        }), calc(-50% + ${heightRef / 2}px))`;
      } else {
        currentStyles.transform = `translate(calc(${widthRef}px + 0.25rem), calc(-50% + ${heightRef /
          2}px))`;
      }
    }

    return currentStyles;
  }

  handleShowTooltip() {
    this.setState({ showTooltip: !this.props.disabled });
  }

  handleHideTooltip() {
    this.setState({ showTooltip: false });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      try {
        this.contentRef.current
          .querySelectorAll('[type="button"], a')[0]
          .click();
      } catch (err) {
        console.log('error', err); // eslint-disable-line no-console
      }
    }
  }

  render() {
    // If phone ignore all tooltips //
    if (isMobile) {
      return (
        <div className={this.props.tooltipContainerClass}>
          <span className={this.props.className}>{this.props.children}</span>
        </div>
      );
    }

    return (
      <TooltipWrapper className={this.props.tooltipContainerClass}>
        <Fade in={this.state.showTooltip} delay={this.props.delay}>
          <span
            role="tooltip"
            className={TooltipElement}
            style={this.getPosition()}
            ref={this.tooltipRef}>
            {this.props.tooltip}
          </span>
        </Fade>
        <div
          role="button"
          tabIndex={0}
          aria-label={this.props.tooltip}
          ref={this.contentRef}
          onMouseEnter={this.handleShowTooltip}
          onMouseOut={this.handleHideTooltip}
          onMouseMove={this.handleShowTooltip}
          onFocus={this.handleShowTooltip}
          onKeyPress={this.handleKeyPress}
          onBlur={this.handleHideTooltip}
          className={cx(contentCSS, this.props.className)}>
          {this.props.children}
        </div>
      </TooltipWrapper>
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
