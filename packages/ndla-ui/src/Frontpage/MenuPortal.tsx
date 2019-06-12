/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import FocusTrapReact from 'focus-trap-react';
import { Cross } from '@ndla/icons/action';

import {
  createUniversalPortal,
} from '@ndla/util';
import { spacing, colors, animations, mq, breakpoints } from '@ndla/core';
// @ts-ignore
import { Backdrop } from '@ndla/modal';

const fullSizedCircle = 1.4;

interface elementRectProps {
  fromX: number;
  fromY: number;
  fromScale: number;
};

interface ModalWrapperProps {
  elementRect: elementRectProps;
  animationDirection: 'in' | 'out';
}

const StyledModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100vw;
    height: 100vh;
    min-width: 100vh;
    min-height: 100vw;
    background: ${colors.brand.light};
    border-radius: 100%;
    animation-timing-function: ${props => props.animationDirection === 'in' ? 'ease-out' : 'ease-in'};
    animation-name: ${props => props.animationDirection === 'in' ? 'menuPortalCircleAnimation' : 'menuPortalCircleAnimationOut'};
    animation-duration: ${animations.durations.fast};
    ${mq.range({ from: breakpoints.tablet })} {
      animation-duration: ${animations.durations.normal};
    }
    animation-fill-mode: forwards;
    @keyframes menuPortalCircleAnimation {
      0% {
        ${props => css`
          transform:
            translate(calc(-100vw + ${props.elementRect.fromX}px), calc(-50vh + ${props.elementRect.fromY}px))
            scale(${props.elementRect.fromScale});
        `}
      }
      100% {
        transform: translate(calc(-50vw), calc(${(fullSizedCircle - 1) * 75}vw)) scale(${fullSizedCircle});
      }
    }
    @keyframes menuPortalCircleAnimationOut {
      0% {
        transform: translate(calc(-50vw), calc(${(fullSizedCircle - 1) * 75}vw)) scale(${fullSizedCircle});
      }
      100% {
        ${props => css`
          transform:
            translate(calc(-100vw + ${props.elementRect.fromX}px), calc(-50vh + ${props.elementRect.fromY}px))
            scale(${props.elementRect.fromScale});
        `}
      }
    }
  }
`;

interface StyledContainerProps {
  animationDirection: 'in' | 'out';
}

const StyledContainer = styled.div<StyledContainerProps>`
  transform: translate(-50vw, 0);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
  width: 740px;
  min-height: 70vh;
  max-width: 100vw;
  padding: ${spacing.large};
  > div {
    width: 100%;
  }
  ${props => props.animationDirection === 'in' ? 
    `
      > button {
        border: 0;
        background: none;
        width: ${spacing.medium};
        height: ${spacing.medium};
      }
      > button, > div {
        animation-delay: ${animations.durations.fast};
        animation-fill-mode: forwards;
        opacity: 0;
        ${animations.fadeInBottom()}
      }
    ` : `
      > button, > div {
        display: none;
      }
    `
  }
`;

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onChangeAnimationDirection: (direction: string) => void;
  fromInitalElement: HTMLElement;
  animationDirection: 'in' | 'out';
}

const MenuPortal: React.FunctionComponent<Props> = ({
    children,
    onClose,
    onChangeAnimationDirection,
    isOpen,
    animationDirection,
    fromInitalElement,
  }) => {
    if (!isOpen || !fromInitalElement) {
      return null;
    }

    const fromInitalElementRect:any = fromInitalElement.getBoundingClientRect();
    const { innerWidth } = window;
    const elementRect = {
      fromX: fromInitalElementRect.x + fromInitalElementRect.width / 2,
      fromY: fromInitalElementRect.y + fromInitalElementRect.height / 2,
      fromScale: fromInitalElementRect.width / (innerWidth * fullSizedCircle),
    };

    const content = (
      <>
        <FocusTrapReact>
          <StyledModalWrapper
            elementRect={elementRect}
            animationDirection={animationDirection}
            onAnimationEnd={() => {
              if (animationDirection === 'out') {
                onClose();
              }
            }}
          >
            <StyledContainer animationDirection={animationDirection}>
              <button
                type="button"
                onClick={() => onChangeAnimationDirection('out')}>
                  <Cross />
              </button>
              <div>
                {children}
              </div>
            </StyledContainer>
          </StyledModalWrapper>
        </FocusTrapReact>
        <Backdrop
          onClick={() => onChangeAnimationDirection('out')}
          animationDuration={animations.durations.normal}
          animateIn={animationDirection === 'in'}
        />
      </>
    );
  return createUniversalPortal(content, 'body');
};

export default MenuPortal;