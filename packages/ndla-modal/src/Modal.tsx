/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ReactNode, cloneElement, useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Dialog } from '@headlessui/react';
import { breakpoints, colors, mq } from '@ndla/core';
import { m, AnimatePresence, LazyMotion, domAnimation, Variants, MotionStyle } from 'framer-motion';
import {
  BaseProps,
  ControlledProps,
  ModalAnimation,
  ModalMargin,
  ModalPosition,
  ModalSizeType,
  UncontrolledProps,
} from './types';
import { margins, positionStyles, sizeStyles } from './modalStyles';

interface DialogProps {
  size?: ModalSizeType;
  position?: ModalPosition;
  animation?: ModalAnimation;
  modalMargin?: ModalMargin;
  expands?: boolean;
}

const StyledOverlay = styled(m.div)`
  position: fixed;
  inset: 0;
  background: rgba(1, 1, 1, 0.3);
`;

const DialogWrapper = styled.div`
  position: fixed;
  inset: 0;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const panelStyle = css`
  display: flex;
  flex-direction: column;
  position: fixed;
  max-height: 85%;
  max-width: 95%;
  overflow-y: auto;
  background-color: ${colors.white};
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
    inset: unset !important;
  }
`;

const StyledDialog = styled(Dialog)`
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

export type ModalProps = BaseProps & DialogProps;

const Modal = (props: ModalProps) => {
  if (props.controlled) {
    return <InternalModal {...props} />;
  } else {
    return <UncontrolledModal {...props} />;
  }
};

const UncontrolledModal = ({ activateButton, wrapperFunctionForButton, ...rest }: UncontrolledProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  const modalButton = useMemo(() => {
    const clonedComponent = cloneElement(activateButton, { onClick: onOpen });
    return wrapperFunctionForButton?.(clonedComponent) ?? clonedComponent;
  }, [activateButton, onOpen, wrapperFunctionForButton]);

  return <InternalModal isOpen={isOpen} onClose={onClose} modalButton={modalButton} {...rest} />;
};

interface InternalModalProps extends Omit<ControlledProps, 'controlled'>, DialogProps {
  modalButton?: ReactNode;
}

const InternalModal = ({
  children,
  isOpen,
  onClose,
  modalButton,
  modalMargin = 'small',
  position = 'center',
  size: sizeProp = 'normal',
  animationDuration = 400,
  animation = 'zoom',
  expands,
  ...rest
}: InternalModalProps) => {
  const { size, height, width }: Record<string, string> = useMemo(() => {
    return typeof sizeProp === 'string' ? { size: sizeProp } : sizeProp;
  }, [sizeProp]);
  const variants = useMemo(() => animations(animationDuration), [animationDuration]);
  const animationName = useMemo(
    () =>
      animation === 'slideIn' ? `${animation}${position.replace(position[0], position[0].toUpperCase())}` : animation,
    [animation, position],
  );
  return (
    <LazyMotion features={domAnimation}>
      {modalButton}
      <AnimatePresence>
        {isOpen && (
          <StyledDialog open={isOpen} onClose={onClose} static>
            <StyledOverlay
              aria-hidden
              key="modal-backdrop"
              variants={variants}
              initial={'fadeStart'}
              animate={'fadeEnd'}
              exit={'fadeStart'}
            />
            <DialogWrapper>
              <Dialog.Panel<typeof m.div>
                as={m.div}
                css={panelStyle}
                initial={[`${animationName}Start`, 'fadeStart']}
                animate={[`${animationName}End`, 'fadeEnd']}
                exit={[`${animationName}Start`, 'fadeStart']}
                variants={variants}
                data-position={position}
                data-height={height}
                data-width={width}
                data-size={size}
                data-expands={expands}
                style={
                  {
                    '--margin': margins[modalMargin],
                  } as MotionStyle
                }
                {...rest}
              >
                {children(onClose)}
              </Dialog.Panel>
            </DialogWrapper>
          </StyledDialog>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default Modal;
