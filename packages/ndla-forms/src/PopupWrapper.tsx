/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import FocusTrapReact from 'focus-trap-react';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { ChevronDown } from '@ndla/icons/common';

import { spacing, misc, animations } from '@ndla/core';

type StyledIconProps = {
  rotate: number;
}

const StyledIcon = styled(ChevronDown)<StyledIconProps>`
  transform: rotate(${props => props.rotate}deg)
`;

type StyledOptionWrapperAnimationProps = {
  verticalPosition?: 'top' | 'bottom' | 'center';
  position?: 'left' | 'right' | 'center';
  offsetY?: number | string;
  offsetX?: number | string;
  background?: string;
};

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledOptionWrapperAnimation = styled.div<StyledOptionWrapperAnimationProps>`
  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.4));
  position: absolute;
  ${props => {
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
  ${props => {
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
  animation-delay: 100ms;
  animation-fill-mode: forwards;
  ${animations.fadeIn()}
`;

const StyledOptionWrapper = styled.div<StyledOptionWrapperAnimationProps>`
  background: ${props => props.background};
  border-radius: ${misc.borderRadius};
  display: flex;
  flex-direction: column;
  animation-duration: 400ms;
  animation-name: wrapperAnimation;
  animation-timing-function: cubic-bezier(0.46, 0.01, 0.19, 1);
  animation-fill-mode: forwards;
  @keyframes wrapperAnimation {
    0% {
      padding-top: ${spacing.spacingUnit + 3}px;
      padding-right: ${spacing.spacingUnit + 3}px;
      clip-path: inset(99% 99% 0 0 round 1%);
    }
    50% {
      padding-top: ${spacing.spacingUnit + 3}px;
      padding-right: ${spacing.spacingUnit + 3}px;
      clip-path: inset(0 0 0 0 round 1%);
    }
    100% {
      padding-top: ${spacing.normal};
      padding-right: ${spacing.normal};
      clip-path: inset(0 0 0 0 round 0%);
    }
  }
`;

interface Props extends StyledOptionWrapperAnimationProps {
  children: React.ReactNode | React.ReactNodeArray;
  label: string;
};

const PopupWrapper: React.FC<Props> = ({
  children,
  label,
  position,
  verticalPosition,
  offsetX,
  offsetY,
  background,
}) => {
  const [isOpen, toggleIsOpen] = useState(false);
  console.log(offsetY);
  console.log('verticalPosition', typeof offsetY === 'string' ? offsetY : `${offsetY}px`);
  return (
    <StyledWrapper>
      <FocusTrapReact
        active={isOpen}
        focusTrapOptions={{
          onDeactivate: () => toggleIsOpen(false),
          clickOutsideDeactivates: true,
          escapeDeactivates: true,
        }}
      >
        <div>
          <Button onClick={() => toggleIsOpen(!isOpen)}>
            {label} <StyledIcon rotate={isOpen ? 0 : 180} />
          </Button>
          {isOpen && (
            <StyledOptionWrapperAnimation
              offsetX={typeof offsetX === 'string' ? offsetX : `${offsetX}px`}
              offsetY={typeof offsetY === 'string' ? offsetY : `${offsetY}px`}
              position={position}
              verticalPosition={verticalPosition}
            >
              <StyledOptionWrapper background={background}>
                <StyledOptionContent>
                  {children}
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
};

export default PopupWrapper;
