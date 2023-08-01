/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ModalContent } from './Modal';
import { ModalSizeType, DrawerPosition, ModalSize, ModalContentProps } from './types';

interface Props extends Omit<ModalContentProps, 'size' | 'position' | 'animation'> {
  size?: ModalSize;
  position?: DrawerPosition;
}

const Drawer = ({ size = 'normal', position = 'left', ...rest }: Props) => {
  const modalSize: ModalSizeType =
    position === 'bottom' || position === 'top' ? { width: 'full', height: size } : { height: 'full', width: size };
  return <ModalContent animation="slideIn" position={position} size={modalSize} modalMargin="none" {...rest} />;
};

export default Drawer;
