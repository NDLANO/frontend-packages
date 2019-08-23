/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import em from 'polished/lib/helpers/em';
import { noScroll, uuid } from '@ndla/util';

import { spacing, colors, mq, breakpoints, fonts } from '@ndla/core';
import { DialogContent } from '@reach/dialog';
import css from '@emotion/css';
import { StyledDialogOverlay } from './StyledDialogOverlay';

const uuidList = [];

class Modal extends React.Component {
  constructor(props) {
    super(props);
    const autoOpen = props.controllable && props.isOpen;
    this.state = {
      isOpen: !!autoOpen,
      animateIn: !!props.controllable,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    this.containerRef = React.createRef();
    this.scrollPosition = null;
    this.el = null;
    this.uuid = uuid();
  }

  componentDidMount() {
    this.manuallyUpdateUuid();
  }

  componentDidUpdate() {
    if (this.scrollPosition && this.el) {
      this.el.scrollTop = this.scrollPosition;
    } else if (
      this.props.controllable &&
      !this.props.isOpen &&
      uuidList.indexOf(this.uuid) !== -1
    ) {
      this.removeScroll();
    }
  }

  componentWillUnmount() {
    if (this.state.isOpen) {
      this.removedModal();
    }
  }

  onAnimationEnd() {
    this.manuallyUpdateUuid();
    if (!this.state.animateIn && this.state.isOpen) {
      this.setState(
        {
          isOpen: false,
        },
        this.removedModal,
      );
    } else if (this.state.animateIn && this.state.isOpen) {
      this.el = document.body.querySelector(`[data-modal='${this.uuid}']`);
      if (this.props.onOpen) {
        this.props.onOpen();
      }
    }
  }

  manuallyUpdateUuid() {
    if (
      uuidList.indexOf(this.uuid) === -1 &&
      this.props.controllable &&
      this.props.isOpen
    ) {
      noScroll(true, this.uuid);
      uuidList.push(this.uuid);
    }
  }

  removeScroll() {
    noScroll(false, this.uuid);
    uuidList.splice(uuidList.indexOf(this.uuid), 1);
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  closeModal() {
    if (this.state.isOpen) {
      this.setState({
        animateIn: false,
      });
    } else if (this.props.controllable && this.props.isOpen) {
      this.props.onClose && this.props.onClose();
    }
  }

  openModal() {
    if (!this.state.isOpen) {
      if (uuidList.indexOf(this.uuid) === -1) {
        noScroll(true, this.uuid);
        uuidList.push(this.uuid);
      }
      this.setState({
        isOpen: true,
        animateIn: true,
      });
    }
  }

  removedModal() {
    this.scrollPosition = 0;
    if (uuidList.indexOf(this.uuid) !== -1) {
      this.removeScroll();
    }
  }

  render() {
    const {
      activateButton,
      wrapperFunctionForButton,
      onClose,
      onOpen,
      containerComponent: Component,
      onClick: onClickEvent,
      animationDuration,
      animation,
      size,
      minHeight,
      backgroundColor,
      children,
      narrow,
      controllable,
      isOpen: propsIsOpen,
      ...rest
    } = this.props;

    const { isOpen, animateIn } = this.state;

    let clonedComponent;
    if (!controllable) {
      clonedComponent = React.cloneElement(activateButton, {
        onClick: () => {
          this.openModal();
          if (onClickEvent) {
            onClickEvent();
          }
        },
      });
    }

    const modalButton =
      !controllable &&
      (wrapperFunctionForButton
        ? wrapperFunctionForButton(clonedComponent)
        : clonedComponent);

    return (
      <Component {...rest}>
        {modalButton}
        <StyledDialogOverlay
          isOpen={isOpen || !!propsIsOpen}
          animateIn={animateIn}
          onDismiss={this.closeModal}>
          <DialogContent
            css={css`
              animation-duration: ${animationDuration}ms;
              minheight: ${minHeight};
              ${dialogStyles} ${narrow && narrowStyle};
            `}
            onAnimationEnd={this.onAnimationEnd}
            className={`animation-container ${animation} ${animateIn &&
              'animateIn'} ${size} ${backgroundColor}`}>
            {children(this.closeModal)}
          </DialogContent>
        </StyledDialogOverlay>
      </Component>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.func.isRequired,
  containerComponent: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  animation: PropTypes.oneOf(['slide-up', 'slide-down', 'zoom-in', 'subtle']),
  size: PropTypes.oneOf([
    'regular',
    'medium',
    'large',
    'fullscreen',
    'full-width',
    'custom',
  ]),
  backgroundColor: PropTypes.oneOf(['white', 'grey', 'grey-dark', 'blue']),
  animationDuration: PropTypes.number,
  activateButton: (props, propName, componentName) => {
    if (
      !props.controllable &&
      (typeof props[propName] !== 'string' &&
        !React.isValidElement(props[propName]))
    ) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to` +
          ` \`${componentName}\`. Validation failed.`,
      );
    }
    return null;
  },
  wrapperFunctionForButton: PropTypes.func,
  className: PropTypes.string,
  onOpen: PropTypes.func,
  narrow: PropTypes.bool,
  controllable: PropTypes.bool,
  minHeight: PropTypes.string,
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  containerComponent: 'div',
  animation: 'zoom-in',
  size: 'regular',
  backgroundColor: 'blue',
  animationDuration: 300,
  className: '',
  narrow: false,
};

const modalAnimations = `
  @keyframes modal-zoomIn {
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      display: flex;
      transform: translate3d(0, 40px, 0);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes modal-zoomIn-exit {
    0% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    99% {
      transform: translate3d(0, 40px, 0);
      opacity: 0;
    }
    100% {
      display: none;
      opacity: 0;
    }
  }

  @keyframes modal-slideup {
    0% {
      transform: translate3d(0, 100vh, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes modal-slideup-exit {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 100vh, 0);
    }
  }

  @keyframes modal-slidedown {
    0% {
      opacity: 0;
      transform: translate3d(0, -52px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes modal-slidedown-exit {
    0% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(0, -52px, 0);
    }
  }

  @keyframes modal-subtleIn {
    0% {
      opacity: 0;
      transform: translate3d(0, -13px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes modal-subtleOut {
    0% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(0, -13px, 0);
    }
  }
`;

const animationContainer = css`
  z-index: 9001;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 100vh;
  // 1. Animations
  &.zoom-in {
    animation-name: modal-zoomIn-exit;
    &.animateIn {
      animation-name: modal-zoomIn;
    }
  }
  &.slide-up {
    animation-name: modal-slideup-exit;
    &.animateIn {
      animation-name: modal-slideup;
    }
  }
  &.slide-down {
    animation-name: modal-slidedown-exit;
    &.animateIn {
      animation-name: modal-slidedown;
    }
  }
  &.subtle {
    animation-name: modal-subtleOut;
    &.animateIn {
      animation-name: modal-subtleIn;
    }
  }
  // 2. Modal size modifiers
  &.fullscreen {
    width: 100vw;
    height: 100vh;
  }
  &.full-width {
    width: 100vw;
    height: auto;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
  &.large {
    max-width: ${em('970px')};
    width: ${em('970px')};
    max-height: 85vh;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    ${mq.range({ until: em('970px') })} {
      box-shadow: none;
      width: 100vw;
      height: 100vw;
      max-height: 100vh;
      min-height: 100vh;
    }
  }
  &.medium {
    max-width: ${em('790px')};
    width: ${em('790px')};
    max-height: 85vh;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    ${mq.range({ until: em('790px') })} {
      box-shadow: none;
      height: 100vh;
      width: 100vw;
      min-height: 100vh;
    }
  }
  &.regular {
    ${mq.range({ until: breakpoints.tablet })} {
      height: 100vh;
      width: 100vw;
    }
    ${mq.range({ from: breakpoints.tablet })} {
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
      width: 90%;
      max-height: 85vh;
      max-width: ${em('613px')};
      min-width: ${em('613px')};
    }
  }
  &.medium,
  &.large {
    .modal-body,
    .modal-header {
      ${mq.range({ until: '790px' })} {
        padding-left: ${spacing.large};
        padding-right: ${spacing.large};
      }
    }
  }
  // 3. background modifiers
  &.white {
    background: #fff;
  }
  &.grey {
    background: ${colors.brand.greyLightest};
  }
  &.grey-dark {
    background: ${colors.brand.greyLighter};
  }
  &.blue {
    background: ${colors.brand.lighter};
  }
`;

const narrowStyle = css`
  .modal-header {
    padding-bottom: 0;
    + .modal-body {
      padding-top: 0;
    }
  }
  .modal-body {
    padding-bottom: ${spacing.medium};
    h1 {
      ${fonts.sizes('22px', 1.2)};
      margin: 0 0 ${spacing.small};
      color: ${colors.brand.primary};
    }
  }
`;

const dialogStyles = css`
  ${modalAnimations}
  ${animationContainer}
`;

export default Modal;
