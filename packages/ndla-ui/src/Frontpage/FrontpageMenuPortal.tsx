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
import { isIE, browserVersion } from 'react-device-detect';
// @ts-ignore
import { Cross } from '@ndla/icons/action';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { createUniversalPortal } from '@ndla/util';
import { spacing, colors, animations, mq, breakpoints, misc } from '@ndla/core';
// @ts-ignore
import { Backdrop } from '@ndla/modal';
import { elementRectType } from '../types';

const fullSizedCircle = 1.1;

type ModalWrapperProps = {
  elementRect: elementRectType;
  animationDirection: 'in' | 'out';
  animationNameIn: string;
  animationNameOut: string;
  isIE11: boolean;
};

const StyledModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  z-index: 9001;
  ${props =>
    props.isIE11
      ? css`
          left: 0px;
          right: 0px;
          top: 0px;
          bottom: 0px;
          background: ${colors.brand.lighter};
        `
      : css`
          display: flex;
          align-items: center;
          justify-content: center;
          left: 50%;
          top: 0;
          width: 100vw;
          height: 100vh;
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
            animation-name: ${props.animationDirection === 'in'
              ? props.animationNameIn
              : props.animationNameOut};
            animation-duration: ${animations.durations.normal};
            animation-fill-mode: forwards;
            @keyframes ${props.animationNameIn} {
              0% {
                opacity: 0;
                background: ${colors.brand.light};
                transform: translate(
                    calc(-100vw + ${props.elementRect.fromX}px),
                    calc(-50vh + ${props.elementRect.fromY}px)
                  )
                  scale(${props.elementRect.fromScale});
              }
              10% {
                opacity: 1;
              }
              20% {
                border-radius: 100%;
              }
              99% {
                border-radius: 10%;
                transform: translate(calc(-50vw), 0) scale(${fullSizedCircle});
              }
              100% {
                border-radius: 0;
                transform: translate(-50vw, 0);
              }
            }
            @keyframes ${props.animationNameOut} {
              0% {
                border-radius: 0;
                transform: translate(calc(-50vw), 30vh)
                  scale(${fullSizedCircle});
              }
              50% {
                border-radius: 100%;
              }
              70% {
                opacity: 1;
              }
              100% {
                opacity: 0;
                transform: translate(
                    calc(-100vw + ${props.elementRect.fromX}px),
                    calc(-50vh + ${props.elementRect.fromY}px)
                  )
                  scale(${props.elementRect.fromScale});
              }
            }
          }
        `}
`;

interface StyledContainerProps {
  animationDirection: 'in' | 'out';
  isIE11: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>`
  display: ${props => (props.animationDirection === 'in' ? 'flex' : 'none')};
  flex-direction: column;
  max-width: 980px;
  max-width: 100%;
  ${props =>
    props.isIE11
      ? css`
          align-items: center;
        `
      : css`
          transform: translate(-50vw, 0);
          align-items: flex-end;
        `}
`;

type ie11Props = {
  isIE11: boolean;
};

const ScrollableContent = styled.div<ie11Props>`
  padding: ${spacing.normal} ${spacing.large} ${spacing.large};
  ${mq.range({ until: breakpoints.tablet })} {
    padding: ${spacing.large} ${spacing.normal} ${spacing.large};
  }
  width: 100%;
  max-width: 980px;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  ${props =>
    props.isIE11 &&
    css`
      margin: 0 auto;
    `}
  align-items: flex-end;
  animation-delay: ${animations.durations.fast};
  animation-fill-mode: forwards;
  opacity: 0;
  ${animations.fadeInBottom(animations.durations.normal, spacing.normal)}
  animation-timing-function: ease;
  > div {
    width: 100%;
    ${mq.range({ from: breakpoints.tabletWide })} {
      padding-top: ${spacing.large};
    }
  }
`;

const StyledButton = styled.button<ie11Props>`
  border: 0;
  background: none;
  position: absolute;
  ${mq.range({ until: breakpoints.tablet })} {
    transform: translateY(-${spacing.normal})
      translateX(
        ${props => (props.isIE11 ? `-${spacing.normal}` : spacing.small)}
      );
  }
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
  onClose: () => void;
  animationDirection: 'in' | 'out';
  elementRect: elementRectType;
  menuOpenedCounter: number;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
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
  const isIE11 = isIE && parseInt(browserVersion) < 12;
  const content = (
    <>
      <StyledModalWrapper
        isIE11={isIE11}
        animationNameIn={animationNameIn}
        animationNameOut={animationNameOut}
        elementRect={elementRect}
        animationDirection={animationDirection}
        onAnimationEnd={() => {
          if (animationDirection === 'out') {
            onClosed();
          }
        }}>
        <FocusTrapReact
          focusTrapOptions={{
            onDeactivate: onClose,
            escapeDeactivates: true,
          }}>
          <StyledContainer
            animationDirection={animationDirection}
            isIE11={isIE11}>
            <ScrollableContent isIE11={isIE11}>
              <StyledButton
                isIE11={isIE11}
                type="button"
                aria-label={t('masthead.menu.close')}
                onClick={onClose}>
                <Cross />
              </StyledButton>
              <div>{children}</div>
            </ScrollableContent>
          </StyledContainer>
        </FocusTrapReact>
      </StyledModalWrapper>
      <Backdrop
        onClick={onClose}
        animationDuration={
          animationDirection === 'in'
            ? animations.durations.fast
            : animations.durations.normal
        }
        animateIn={animationDirection === 'in'}
      />
    </>
  );
  return createUniversalPortal(content, 'body');
};

export default injectT(FrontpageMenuPortal);
