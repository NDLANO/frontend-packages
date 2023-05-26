/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { keyframes } from '@emotion/react';
import { HTMLMotionProps } from 'framer-motion';
import { ReactElement, ReactNode } from 'react';

export type ModalSize = 'xsmall' | 'small' | 'normal' | 'large' | 'full';
export type ModalSizeType = ModalSize | { width: ModalSize; height: ModalSize };
export type ModalPosition = 'top' | 'center' | 'bottom' | 'left' | 'right';
export type ModalMargin = 'none' | 'small';

export type DrawerPosition = 'top' | 'bottom' | 'left' | 'right';

interface DialogProps extends Omit<HTMLMotionProps<'div'>, 'size'> {
  controlled?: boolean;
  animation?: ModalAnimation;
  animationDuration?: number;
  children: (close: () => void) => ReactNode;
}

export interface ControlledProps extends DialogProps {
  controlled: true;
  isOpen: boolean;
  onClose: () => void;
}

export interface UncontrolledProps extends DialogProps {
  controlled?: false;
  activateButton: ReactElement;
  wrapperFunctionForButton?: (button: ReactElement) => ReactNode;
}

export type BaseProps = ControlledProps | UncontrolledProps;

export interface Animation {
  in: ReturnType<typeof keyframes>;
  out: ReturnType<typeof keyframes>;
}

export interface DirectionalAnimation extends Partial<Record<ModalPosition, Animation>> {
  default: Animation;
  type: 'directional';
}

export type ModalAnimation = 'fade' | 'zoom' | 'subtle' | 'slideIn';
