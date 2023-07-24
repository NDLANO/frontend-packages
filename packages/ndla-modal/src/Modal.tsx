/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { ReactNode, useMemo } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { breakpoints, colors, mq, spacing } from '@ndla/core';
import { m, AnimatePresence, LazyMotion, domAnimation, Variants } from 'framer-motion';
import { Content, DialogProps, Overlay, Portal, Root, Trigger } from '@radix-ui/react-dialog';
import { ModalContentProps } from './types';
import { positionStyles, sizeStyles } from './modalStyles';

const StyledOverlay = styled(m.div)`
  position: fixed;
  inset: 0;
  background: rgba(1, 1, 1, 0.3);
  z-index: 100;
`;

const DialogWrapper = styled.div`
  position: fixed;
  inset: 0;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const panelStyle = css`
  --margin: 0px;
  display: flex;
  flex-direction: column;
  position: fixed;
  max-height: 85%;
  max-width: 95%;
  overflow-y: auto;
  background-color: ${colors.white};
  ${mq.range({ from: breakpoints.tablet })} {
    &[data-margin='small'] {
      --margin: ${spacing.normal};
    }
  }
  padding-bottom: env(safe-area-inset-bottom);
  padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  ${positionStyles};
  ${sizeStyles};
  &[data-expands='true'] {
    width: unset;
    height: unset;
    max-width: 100%;
    max-height: 100%;
  }
  ${mq.range({ until: breakpoints.tablet })} {
    min-width: 100%;
    min-height: 100%;
  }
`;

const StyledDialog = styled(Root)`
  position: fixed;
  inset: 0;
  width: 100vw;
  z-index: 100;
`;

const animations = (durationMs: number): Variants => {
  const duration = durationMs / 1000;
  const transition = { ease: 'easeInOut', duration };
  return {
    fadeStart: { opacity: 0, transition },
    fadeEnd: { opacity: 1, transition },
    zoomStart: { translateY: '40px', transition },
    zoomEnd: { translateY: '0px', transition },
    subleStart: { translateY: '13px', transition },
    subtleEnd: { translateY: '0px', transition },
    slideInLeftStart: { translateX: '-100%', transition },
    slideInLeftEnd: { translateX: '0%', transition },
    slideInRightStart: { translateX: '100%', transition },
    slideInRightEnd: { translateX: '0%', transition },
    slideInTopStart: { translateY: '-100%', transition },
    slideInTopEnd: { translateY: '0%', transition },
    slideInBottomStart: { translateY: '100%', transition },
    slideInBottomEnd: { translateY: '0%', transition },
  };
};

export const Modal = ({ children, ...rest }: DialogProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        <StyledDialog {...rest}>{children}</StyledDialog>
      </AnimatePresence>
    </LazyMotion>
  );
};

interface ModalTriggerProps {
  children: ReactNode;
  wrapper?: (children: ReactNode) => JSX.Element;
}

export const ModalTrigger = ({ children, wrapper }: ModalTriggerProps) => {
  if (wrapper) {
    return wrapper(<Trigger asChild>{children}</Trigger>);
  }
  return <Trigger asChild>{children}</Trigger>;
};

export const ModalContent = ({
  children,
  modalMargin = 'small',
  position = 'center',
  size: sizeProp = 'normal',
  animationDuration = 400,
  animation = 'zoom',
  expands,
  ...rest
}: ModalContentProps) => {
  const { size, height, width }: Record<string, string> = useMemo(() => {
    return typeof sizeProp === 'string' ? { size: sizeProp } : sizeProp;
  }, [sizeProp]);
  const variants = useMemo(() => animations(animationDuration), [animationDuration]);
  const [animationStart, animationEnd] = useMemo(() => {
    if (animation === 'fade') {
      return [undefined, undefined];
    }
    const anim =
      animation === 'slideIn' ? `${animation}${position.replace(position[0], position[0].toUpperCase())}` : animation;
    return [`${anim}Start`, `${anim}End`];
  }, [animation, position]);

  return (
    <Portal>
      <Overlay asChild>
        <StyledOverlay
          aria-hidden
          key="modal-backdrop"
          variants={variants}
          initial="fadeStart"
          animate="fadeEnd"
          exit="fadeStart"
        />
      </Overlay>
      <DialogWrapper>
        <Content asChild>
          <m.div
            css={panelStyle}
            initial={animationStart ? [animationStart, 'fadeStart'] : ['fadeStart']}
            animate={animationEnd ? [animationEnd, 'fadeEnd'] : ['fadeEnd']}
            exit={animationStart ? [animationStart, 'fadeStart'] : ['fadeStart']}
            variants={variants}
            data-position={position}
            data-height={height}
            data-width={width}
            data-size={size}
            data-expands={expands}
            data-margin={modalMargin}
            {...rest}
          >
            {children}
          </m.div>
        </Content>
      </DialogWrapper>
    </Portal>
  );
};
