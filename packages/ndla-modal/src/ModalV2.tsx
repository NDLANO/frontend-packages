/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { cloneElement, MouseEvent, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { breakpoints, mq, spacing } from '@ndla/core';
import { BaseProps, ModalAnimation, ModalMargin, ModalPosition, ModalSizeType } from './types';
import { animations } from './animations';
import { heights, margins, sizeCombos, sizes, widths } from './modalStyles';

interface DialogProps {
  size?: ModalSizeType;
  position?: ModalPosition;
  animation?: ModalAnimation;
  modalMargin?: ModalMargin;
  expands?: boolean;
}

interface StyledDialogOverlayProps {
  animateIn: boolean;
  animationDuration: number;
}

const forwardOverlay = (prop: string) => prop !== 'animateIn' && prop !== 'animationDuration';

const StyledDialogOverlay = styled(DialogOverlay, { shouldForwardProp: forwardOverlay })<StyledDialogOverlayProps>`
  overflow: hidden;
  background: rgba(1, 1, 1, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ${(p) => (p.animateIn ? animations.fade.in : animations.fade.out)};
  animation-duration: ${(p) => p.animationDuration}ms;
`;

interface StyledDialogContentProps {
  position: ModalPosition;
  margin: string;
  size: ModalSizeType;
  dialogSize: SerializedStyles;
  animationDuration: number;
  animationName: string;
  expands?: boolean;
}

const forwardContent = (p: string) =>
  ![
    'position',
    'margin',
    'dialogSize',
    'animationDuration',
    'controlled',
    'activateButton',
    'wrapperFunctionForButton',
    'isOpen',
    'onClose',
    'animationName',
    'expands',
  ].includes(p);

const opposite = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
};

const getSize = (sizeType: ModalSizeType, type: 'width' | 'height') => {
  return typeof sizeType === 'string' ? sizeType : sizeType[type];
};

const StyledDialogContent = styled(DialogContent, { shouldForwardProp: forwardContent })<StyledDialogContentProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  overflow-y: auto;
  background: white;
  max-height: 85%;
  max-width: 95%;
  ${(p) => p.position !== 'center' && `${p.position}: ${p.margin}`};
  ${(p) => p.position !== 'center' && `${opposite[p.position]}: unset`};
  animation-name: ${(p) => p.animationName};
  animation-duration: ${(p) => p.animationDuration}ms;
  padding-bottom: env(safe-area-inset-bottom);
  padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  ${mq.range({ until: breakpoints.tablet })} {
    min-width: 100%;
    min-height: 100%;
  }
  ${(p) => p.dialogSize};
  ${(p) =>
    p.expands &&
    css`
      width: unset;
      height: unset;
      min-width: ${widths[getSize(p.size, 'width')]};
      min-height: ${heights[getSize(p.size, 'height')]};
      max-width: 100%;
      max-height: 100%;
    `};
`;

const ModalV2 = ({
  size = 'normal',
  position = 'center',
  modalMargin = 'small',
  animation: animationName = 'zoom',
  children,
  className,
  label,
  labelledBy,
  expands,
  animationDuration = 400,
  ...rest
}: BaseProps & DialogProps) => {
  const [_isOpen, setIsOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(!!rest.controlled);
  const isOpen = rest.controlled ? rest.isOpen : _isOpen;
  const animation = useMemo(() => {
    const animationObject = animations[animationName];
    if ('type' in animationObject) {
      return animationObject[position] ?? animationObject['default'];
    } else {
      return animationObject;
    }
  }, [animationName, position]);

  const onAnimationEnd = () => {
    if (!animateIn && isOpen) {
      setIsOpen(false);
      setAnimateIn(true);
      if (rest.controlled) {
        rest.onClose();
      }
    }
  };

  const closeModal = () => {
    if (isOpen) {
      setAnimateIn(false);
    }
  };

  const openModal = () => {
    if (!_isOpen) {
      setAnimateIn(true);
      setIsOpen(true);
    }
  };

  const onActivate = (e: MouseEvent<HTMLButtonElement>) => {
    openModal();
    e.stopPropagation();
    e.preventDefault();
  };

  const dialogSize =
    typeof size === 'string'
      ? sizeCombos[size]
      : css`
          ${sizes.height[size.height]};
          ${sizes.width[size.width]}
        `;

  const clonedComponent = !rest.controlled ? cloneElement(rest.activateButton, { onClick: onActivate }) : undefined;
  const modalButton =
    !rest.controlled && clonedComponent && (rest.wrapperFunctionForButton?.(clonedComponent) ?? clonedComponent);

  return (
    <>
      {modalButton}
      <StyledDialogOverlay
        isOpen={!!isOpen}
        onDismiss={closeModal}
        animateIn={animateIn}
        animationDuration={animationDuration}
      >
        <StyledDialogContent
          aria-label={label}
          aria-labelledby={labelledBy}
          animationDuration={animationDuration}
          animationName={animateIn ? animation.in : animation.out}
          position={position}
          onAnimationEnd={onAnimationEnd}
          className={` ${className}`}
          margin={margins[modalMargin]}
          expands={expands}
          dialogSize={dialogSize}
          size={size}
          {...rest}
        >
          {children(closeModal)}
        </StyledDialogContent>
      </StyledDialogOverlay>
    </>
  );
};

export default ModalV2;
