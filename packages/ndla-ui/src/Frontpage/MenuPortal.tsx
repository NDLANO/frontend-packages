/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import FocusTrapReact from 'focus-trap-react';
// @ts-ignore
import { Cross } from '@ndla/icons/action';

import { createUniversalPortal } from '@ndla/util';
import { spacing, colors, animations, mq, breakpoints, misc } from '@ndla/core';
// @ts-ignore
import { Backdrop } from '@ndla/modal';

const fullSizedCircle = 1.2;

type elementRectProps = {
  fromX: number;
  fromY: number;
  fromScale: number;
}

type ModalWrapperProps = {
  elementRect: elementRectProps;
  animationDirection: 'in' | 'out';
  animationNameIn: string;
  animationNameOut: string;
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
    content: '';
    display: block;
    position: absolute;
    width: 100vw;
    height: 100vh;
    min-width: 100vh;
    min-height: 100vw;
    background: ${colors.brand.lighter};
    border-radius: 100%;
    animation-timing-function: ${misc.transition.cubicBezier};
    animation-name: ${props => props.animationDirection === 'in' ? props.animationNameIn : props.animationNameOut};
    animation-duration: ${animations.durations.fast};
    ${mq.range({ from: breakpoints.tablet })} {
      animation-duration: ${props =>
        props.animationDirection === 'in'
          ? animations.durations.normal
          : animations.durations.fast};
    }
    animation-fill-mode: forwards;
    @keyframes ${props => props.animationNameIn} {
      0% {
        opacity: 0;
        background: ${colors.brand.light};
        ${props => css`
          transform: translate(
              calc(-100vw + ${props.elementRect.fromX}px),
              calc(-50vh + ${props.elementRect.fromY}px)
            )
            scale(${props.elementRect.fromScale});
        `}
      }
      10% {
        opacity: 1;
      }
      20% {
        border-radius: 100%;
      }
      100% {
        border-radius: 0;
        transform: translate(calc(-50vw), calc(${(fullSizedCircle - 1) * 75}vw))
          scale(${fullSizedCircle});
      }
    }
    @keyframes ${props => props.animationNameOut} {
      0% {
        border-radius: 0;
        transform: translate(calc(-50vw), calc(${(fullSizedCircle - 1) * 75}vw))
          scale(${fullSizedCircle});
      }
      50% {
        border-radius: 100%;
      }
      90% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        ${props => css`
          transform: translate(
              calc(-100vw + ${props.elementRect.fromX}px),
              calc(-50vh + ${props.elementRect.fromY}px)
            )
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
  display: ${props => props.animationDirection === 'in' ? 'flex' : 'none'};
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
  width: 980px;
  min-height: 70vh;
  max-width: 100vw;
  padding: ${spacing.large} 0;
  > div {
    width: 100%;
    animation-delay: ${animations.durations.fast};
    animation-fill-mode: forwards;
    opacity: 0;
    ${animations.fadeInBottom(animations.durations.fast, spacing.normal)}
    animation-timing-function: ${misc.transition.cubicBezier};
  }
`;

const StyledButton = styled.button<StyledContainerProps>`
  border: 0;
  background: none;
  width: ${spacing.medium};
  height: ${spacing.medium};
  display: ${props => props.animationDirection === 'in' ? 'flex' : 'none'};
`;

interface Props {
  children: React.ReactNode;
  onClosed: () => void;
  onClose: (direction: string) => void;
  animationDirection: 'in' | 'out';
  elementRect: any;
  menuOpenedCounter: number;
}

const MenuPortal: React.FunctionComponent<Props> = ({
  children,
  onClose,
  onClosed,
  animationDirection,
  elementRect,
  menuOpenedCounter,
}) => {
  const animationNameIn = `menuPortalCircleAnimation_${menuOpenedCounter}`;
  const animationNameOut = `menuPortalCircleAnimationOut_${menuOpenedCounter}`;
  const content = (
    <>
        <StyledModalWrapper
          animationNameIn={animationNameIn}
          animationNameOut={animationNameOut}
          elementRect={elementRect}
          animationDirection={animationDirection}
          onAnimationEnd={() => {
            if (animationDirection === 'out') {
              onClosed();
            }
          }}>
          <FocusTrapReact>
            <StyledContainer animationDirection={animationDirection}>
              <StyledButton
                animationDirection={animationDirection}
                type="button"
                onClick={() => onClose('out')}>
                <Cross />
              </StyledButton>
              <div>{children}</div>
            </StyledContainer>
          </FocusTrapReact>
        </StyledModalWrapper>
      <Backdrop
        onClick={() => onClose('out')}
        animationDuration={animations.durations.fast}
        animateIn={animationDirection === 'in'}
      />
    </>
  );
  return createUniversalPortal(content, 'body');
};

export default MenuPortal;
