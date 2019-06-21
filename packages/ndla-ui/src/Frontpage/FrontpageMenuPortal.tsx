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
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { createUniversalPortal } from '@ndla/util';
import { spacing, colors, animations, mq, breakpoints, misc } from '@ndla/core';
// @ts-ignore
import { Backdrop } from '@ndla/modal';

const fullSizedCircle = 1.1;

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
    animation-duration: ${props =>
      props.animationDirection === 'out'
        ? animations.durations.fast
        : animations.durations.normal};
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
      99% {
        border-radius: 10%;
        transform: translate(calc(-50vw), 0)
          scale(${fullSizedCircle});
      }
      100% {
        border-radius: 0;
        transform: translate(-50vw, 0);
      }
    }
    @keyframes ${props => props.animationNameOut} {
      0% {
        border-radius: 0;
        transform: translate(calc(-50vw), 30vh)
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
  max-width: 980px;
  max-width: 100%;
  }
`;

const ScrollableContent = styled.div`
  padding: ${spacing.normal} ${spacing.large} ${spacing.large};
  ${mq.range({ until: breakpoints.tablet })} {
    padding: ${spacing.normal} ${spacing.normal} ${spacing.large};
  }
  width: 100%;
  max-width: 980px;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  > div {
    width: 100%;
    animation-delay: ${animations.durations.fast};
    animation-fill-mode: forwards;
    opacity: 0;
    ${animations.fadeInBottom(animations.durations.normal, spacing.normal)}
    animation-timing-function: ease;
  }
`;

const StyledButton = styled.button<StyledContainerProps>`
  border: 0;
  background: none;
  > svg {
    color: ${colors.brand.primary};
    width: ${spacing.medium};
    height: ${spacing.medium};
    ${mq.range({ from: breakpoints.desktop })} {
      width: ${spacing.large};
      height: ${spacing.large};
    }
  }
`;

interface Props {
  children: React.ReactNode;
  onClosed: () => void;
  onClose: (direction: string) => void;
  animationDirection: 'in' | 'out';
  elementRect: any;
  menuOpenedCounter: number;
  t: any;
}

const FrontpageMenuPortal: React.FunctionComponent<Props> = ({
  children,
  onClose,
  onClosed,
  animationDirection,
  elementRect,
  menuOpenedCounter,
  t,
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
                <ScrollableContent>
                  <StyledButton
                    animationDirection={animationDirection}
                    type="button"
                    aria-label={t('masthead.menu.close')}
                    onClick={() => onClose('out')}>
                    <Cross />
                  </StyledButton>
                  <div>{children}</div>
                </ScrollableContent>
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

export default injectT(FrontpageMenuPortal);
