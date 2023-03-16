/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, ReactChild, ReactChildren } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import FocusTrapReact from 'focus-trap-react';
import { ChevronDown } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';

import { spacing, misc, animations, colors } from '@ndla/core';

type StyledIconProps = {
  rotate: number;
};

const StyledIcon = styled(ChevronDown)<StyledIconProps>`
  transition: transform 200ms ease;
  transform: rotate(${(props) => props.rotate}deg);
`;

type StyledOptionProps = {
  verticalPosition?: 'top' | 'bottom' | 'center';
  position?: 'left' | 'right' | 'center';
  offsetY?: number | string;
  offsetX?: number | string;
  background?: string;
  withCloseButton?: boolean;
};

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledOptionWrapperAnimation = styled.div<StyledOptionProps>`
  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.4));
  position: absolute;
  ${(props) => {
    if (props.position === 'left') {
      return css`
        left: ${props.offsetX};
      `;
    } else if (props.position === 'right') {
      return css`
        right: ${props.offsetX};
      `;
    }
  }}
  ${(props) => {
    if (props.verticalPosition === 'top') {
      return css`
        top: ${props.offsetY};
      `;
    } else if (props.verticalPosition === 'bottom') {
      return css`
        bottom: ${props.offsetY};
      `;
    }
  }}
  z-index: 1;
  ${animations.fadeIn(animations.durations.fast)}
`;

const StyledOptionContent = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  animation-delay: 100ms;
  animation-fill-mode: forwards;
  ${animations.fadeIn(animations.durations.fast)}
`;

const StyledOptionWrapper = styled.div<StyledOptionProps>`
  background: ${(props) => props.background};
  border-radius: ${misc.borderRadius};
  display: flex;
  flex-direction: column;
  animation-duration: 200ms;
  animation-name: wrapperAnimation;
  animation-timing-function: cubic-bezier(0.46, 0.01, 0.19, 1);
  animation-fill-mode: forwards;
  @keyframes wrapperAnimation {
    0% {
      clip-path: inset(99% 99% 0 0 round 1%);
    }
    100% {
      clip-path: inset(0 0 0 0 round 0%);
    }
  }
`;

const StyledCloseButton = styled.button`
  width: ${spacing.medium};
  height: ${spacing.medium};
  padding: ${spacing.xsmall};
  margin: ${spacing.small} ${spacing.small} 0 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: ${spacing.medium};
    height: ${spacing.medium};
    border-radius: 100%;
    background: ${colors.brand.light};
    transform: scale(0);
    opacity: 0;
    transition: all 200ms ease;
  }
  &:hover,
  &:focus {
    &:before {
      transform: scale(1);
      opacity: 1;
    }
  }
  svg {
    fill: ${colors.brand.primary};
    cursor: pointer;
    position: absolute;
    z-index: 1;
  }
`;

interface Props extends StyledOptionProps {
  children: (arg: (newValue?: boolean) => void) => ReactChild | ReactChildren;
  label: string;
  buttonStyle: SerializedStyles;
  onOpen?: () => void;
  onClose?: () => void;
}

const PopupWrapper = ({
  children,
  label,
  position,
  verticalPosition,
  offsetX,
  offsetY,
  background,
  withCloseButton,
  onOpen,
  onClose,
  buttonStyle,
}: Props) => {
  const [isOpen, toggleIsOpen] = useState(false);
  const { t } = useTranslation();
  const setPopupState = (newState?: boolean) => {
    toggleIsOpen(!!newState);
    if (newState && onOpen) {
      onOpen();
    } else if (!newState && onClose) {
      onClose();
    }
  };
  return (
    <StyledWrapper>
      <FocusTrapReact
        active={isOpen}
        focusTrapOptions={{
          onDeactivate: () => setPopupState(false),
          clickOutsideDeactivates: true,
          escapeDeactivates: true,
        }}
      >
        <div>
          <button type="button" css={buttonStyle} onClick={() => setPopupState(!isOpen)} aria-label={label}>
            {label} <StyledIcon rotate={isOpen ? 180 : 0} aria-hidden="true" />
          </button>
          {isOpen && (
            <StyledOptionWrapperAnimation
              offsetX={typeof offsetX === 'string' ? offsetX : `${offsetX}px`}
              offsetY={typeof offsetY === 'string' ? offsetY : `${offsetY}px`}
              position={position}
              verticalPosition={verticalPosition}
            >
              <StyledOptionWrapper background={background}>
                <StyledOptionContent>
                  {withCloseButton && (
                    <StyledCloseButton type="button" onClick={() => setPopupState(false)} aria-label={t('close')}>
                      <Cross aria-hidden="true" />
                    </StyledCloseButton>
                  )}
                  {children(setPopupState)}
                </StyledOptionContent>
              </StyledOptionWrapper>
            </StyledOptionWrapperAnimation>
          )}
        </div>
      </FocusTrapReact>
    </StyledWrapper>
  );
};

PopupWrapper.defaultProps = {
  position: 'left',
  verticalPosition: 'top',
  offsetX: 0,
  offsetY: 0,
  background: '#fff',
  withCloseButton: false,
};

export default PopupWrapper;
