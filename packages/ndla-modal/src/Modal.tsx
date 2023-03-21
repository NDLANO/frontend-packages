/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactElement, ReactNode, useState, MouseEvent, cloneElement } from 'react';
import { spacing, colors, mq, breakpoints, fonts } from '@ndla/core';
import { DialogContent } from '@reach/dialog';
import { css } from '@emotion/react';
import { StyledDialogOverlay } from './StyledDialogOverlay';

interface Props {
  children: (closeModal: () => void) => ReactNode;
  onClick?: () => void;
  onClose?: () => void;
  animation?: 'slide-down' | 'zoom-in' | 'subtle';
  size?: 'regular' | 'medium' | 'large' | 'fullscreen' | 'full-width' | 'custom';
  backgroundColor?: 'white' | 'grey' | 'grey-dark' | 'blue' | 'light-gradient';
  animationDuration?: number;
  activateButton?: ReactElement;
  controllable?: boolean;
  wrapperFunctionForButton?: (button: ReactElement) => ReactNode;
  className?: string;
  narrow?: boolean;
  minHeight?: string;
  isOpen?: boolean;
  position?: 'center' | 'top' | 'bottom';
  label?: string;
  labelledBy?: string;
}

const Modal = ({
  activateButton,
  wrapperFunctionForButton,
  onClose,
  onClick: onClickEvent,
  animationDuration = 300,
  animation = 'zoom-in',
  size = 'regular',
  minHeight,
  backgroundColor = 'blue',
  children,
  narrow = false,
  controllable,
  isOpen: propsIsOpen,
  position = 'center',
  className = '',
  label,
  labelledBy,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(!!controllable);
  const showDialog = controllable ? propsIsOpen : isOpen;
  const onAnimationEnd = () => {
    if (!animateIn && showDialog) {
      setIsOpen(false);
      setAnimateIn(true);
      if (onClose) onClose();
    }
  };

  const closeModal = () => {
    if (showDialog) {
      setAnimateIn(false);
    }
  };

  const openModal = () => {
    if (!isOpen) {
      setAnimateIn(true);
      setIsOpen(true);
    }
  };

  const onActivateClick = (e: MouseEvent<HTMLButtonElement>) => {
    openModal();
    onClickEvent?.();
    e.preventDefault();
  };

  const clonedComponent = activateButton ? cloneElement(activateButton, { onClick: onActivateClick }) : undefined;

  const modalButton = clonedComponent && (wrapperFunctionForButton?.(clonedComponent) ?? clonedComponent);
  return (
    <>
      {modalButton}
      <StyledDialogOverlay isOpen={!!showDialog} animateIn={animateIn} onDismiss={closeModal} className={className}>
        <DialogContent
          aria-label={label}
          aria-labelledby={labelledBy}
          css={css`
            animation-duration: ${animationDuration}ms;
            min-height: ${minHeight};
            ${dialogStyles};
            ${narrow && narrowStyle};
          `}
          onAnimationEnd={onAnimationEnd}
          className={`animation-container ${animation} ${
            animateIn && 'animateIn'
          } ${size} ${backgroundColor} ${position}`}
        >
          {children(closeModal)}
        </DialogContent>
      </StyledDialogOverlay>
    </>
  );
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
  max-height: 100%;
  // 1. Animations
  &.zoom-in {
    animation-name: modal-zoomIn-exit;
    &.animateIn {
      animation-name: modal-zoomIn;
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
    width: 100%;
    height: 100%;
  }
  &.full-width {
    width: 100%;
    height: auto;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
  &.large {
    max-width: 60.625em;
    width: 60.625em;
    max-height: 85%;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    ${mq.range({ until: '60.625em' })} {
      box-shadow: none;
      width: 100%;
      height: 100%;
      max-height: 100%;
      min-height: 100%;
    }
  }
  &.medium {
    max-width: 49.375em;
    width: 49.375em;
    max-height: 85%;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    ${mq.range({ until: '49.375em' })} {
      box-shadow: none;
      height: 100%;
      width: 100%;
      min-height: 100%;
    }
  }
  &.regular {
    ${mq.range({ until: breakpoints.tablet })} {
      height: 100%;
      width: 100%;
    }
    ${mq.range({ from: breakpoints.tablet })} {
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
      width: 90%;
      max-height: 85%;
      max-width: 38.3125em;
      min-width: 38.3125em;
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
  &.light-gradient {
    background: linear-gradient(90deg, #fafbfe 0%, #faf6f0 97.96%);
  }
  &.top {
    align-self: start;
    ${mq.range({ from: breakpoints.tabletWide })} {
      margin-top: ${spacing.small};
    }
  }
  &.bottom {
    align-self: flex-end;
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
  padding-bottom: env(safe-area-inset-bottom);
  padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  ${modalAnimations}
  ${animationContainer}
`;

export default Modal;
