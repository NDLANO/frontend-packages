/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { keyframes } from '@emotion/react';
import { HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

export type ModalSize = 'xsmall' | 'small' | 'normal' | 'large' | 'full';
export type ModalSizeType = ModalSize | { width: ModalSize; height: ModalSize };
export type ModalPosition = 'top' | 'center' | 'bottom' | 'left' | 'right';
export type ModalMargin = 'none' | 'small';

export type DrawerPosition = 'top' | 'bottom' | 'left' | 'right';

export interface ModalContentProps extends Omit<HTMLMotionProps<'div'>, 'size' | 'children'> {
  animation?: ModalAnimation;
  animationDuration?: number;
  children: ReactNode;
  /**
   * Can be either a string or an object with height and width properties.
   * Allow string values are `xsmall | small | normal | large | full`. This applies both
   * for the string variant and the object variant
   */
  size?: ModalSizeType;
  position?: ModalPosition;
  modalMargin?: ModalMargin;
  expands?: boolean;
}

export interface Animation {
  in: ReturnType<typeof keyframes>;
  out: ReturnType<typeof keyframes>;
}

export interface DirectionalAnimation extends Partial<Record<ModalPosition, Animation>> {
  default: Animation;
  type: 'directional';
}

export type ModalAnimation = 'fade' | 'zoom' | 'subtle' | 'slideIn';
