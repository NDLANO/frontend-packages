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
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { spacing, colors, fonts } from '@ndla/core';

const TooltipWrapper = styled.div`
  position: relative;
`;

const tooltipCss = css`
  display: block;
  color: #fff;
  background: ${colors.brand.primary};
  border-radius: 2px;
  padding: ${spacing.xsmall} ${spacing.small};
  font-family: ${fonts.sans};
  ${fonts.sizes(14, 1.2)} font-weight: ${fonts.weight.normal};
  color: $white;
  text-align: center;
  white-space: nowrap;
  max-width: calc(100vw - #{${spacing.normal}});
`;

const Fade = styled.div`
  opacity: 0;
  position: absolute;
  z-index: 9999;
  pointer-events: none;
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
  animation-name: ${props => (props.animateIn ? 'fadeInTooltip' : '')};
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
    this.contentRef = React.createRef();
    this.tooltipRef = React.createRef();
  }

  getElementPosition() {
    if (this.focusableChild) {
      return {
        widthRef: this.focusableChild.offsetWidth,
        heightRef: this.focusableChild.offsetHeight,
        elementRect: this.focusableChild.getBoundingClientRect(),
      };
    }
    return {
      widthRef: this.contentRef.current.offsetWidth,
      heightRef: this.contentRef.current.offsetHeight,
      elementRect: this.contentRef.current.getBoundingClientRect(),
    };
  }

  getPosition() {
    const currentStyles = {};
    const { align } = this.props;
    if (this.state.showTooltip) {
      const { widthRef, heightRef, elementRect } = this.getElementPosition();
      const leftRef = elementRect.left;
      const tooltipWidth = this.tooltipRef.current.offsetWidth;

      if (isIE) {
        // IE is bad with transform % + px..
        currentStyles.left = `-${(this.tooltipRef.current.offsetWidth - widthRef) / 2}px`;
        currentStyles.top = `-${this.tooltipRef.current.offsetHeight + 10}px`;
      } else if (
        align === 'top' ||
        align === 'bottom' ||
        (align === 'left' && leftRef - tooltipWidth < 20) ||
        (align === 'right' && leftRef + widthRef + tooltipWidth > window.innerWidth - 40)
      ) {
        const centeredLeft = leftRef + widthRef / 2;
        let moveHorizontal = Math.max(centeredLeft + tooltipWidth / 2 + 20 - window.innerWidth, 0);
        if (moveHorizontal === 0) {
          moveHorizontal = Math.min(-(tooltipWidth / 2 - centeredLeft + 20), 0);
        }
        if (align === 'bottom') {
          currentStyles.transform = `translate(calc(-50% + ${widthRef / 2 - moveHorizontal}px), calc(${heightRef}px + ${
            spacing.xsmall
          }))`;
        } else {
          currentStyles.transform = `translate(calc(-50% + ${widthRef / 2 - moveHorizontal}px), calc(-100% - ${
            spacing.xsmall
          }))`;
        }
      } else if (align === 'left') {
        currentStyles.transform = `translate(calc(-100% - ${spacing.xsmall}), calc(-50% + ${heightRef / 2}px))`;
      } else {
        currentStyles.transform = `translate(calc(${widthRef}px + 0.25rem), calc(-50% + ${heightRef / 2}px))`;
      }
    }
    return currentStyles;
  }

  componentDidMount() {
    this.focusableChild = this.contentRef.current.querySelector('a, button, [role="button"]');
    if (this.focusableChild) {
      this.focusableChild.addEventListener('focusin', this.handleShowTooltip);
      this.focusableChild.addEventListener('focusout', this.handleHideTooltip);
    }
  }

  componentWillUnmount() {
    if (this.focusableChild) {
      this.focusableChild.removeEventListener('focusin', this.handleShowTooltip);
      this.focusableChild.removeEventListener('focusout', this.handleHideTooltip);
    }
  }

  handleShowTooltip() {
    this.setState({ showTooltip: !this.props.disabled });
  }

  handleHideTooltip() {
    this.setState({ showTooltip: false });
  }

  render() {
    const { tooltipContainerClass, className, delay, tooltip, children, rest } = this.props;
    // If phone ignore all tooltips //
    if (isMobile) {
      return (
        <div className={tooltipContainerClass} ref={this.contentRef} {...rest}>
          <span className={className}>{children}</span>
        </div>
      );
    }

    return (
      <TooltipWrapper className={tooltipContainerClass} {...rest}>
        <Fade animateIn={this.state.showTooltip} delay={delay}>
          <span role="tooltip" css={tooltipCss} style={this.getPosition()} ref={this.tooltipRef}>
            {tooltip}
          </span>
        </Fade>
        <div
          aria-label={tooltip}
          ref={this.contentRef}
          onMouseEnter={this.handleShowTooltip}
          onMouseLeave={this.handleHideTooltip}
          className={className}>
          {children}
        </div>
      </TooltipWrapper>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
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
