/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useMemo } from 'react';
import Modal from './Modal';
import { ModalSizeType, ModalAnimation, DrawerPosition, BaseProps, ModalSize } from './types';

interface Props {
  size?: ModalSize;
  position?: DrawerPosition;
  animation?: ModalAnimation;
  expands?: boolean;
}

const Drawer = ({ size = 'normal', position = 'left', ...rest }: Props & BaseProps) => {
  const modalSize: ModalSizeType = useMemo(
    () =>
      position === 'bottom' || position === 'top' ? { width: 'full', height: size } : { height: 'full', width: size },
    [position, size],
  );

  return <Modal animation="slideIn" position={position} size={modalSize} modalMargin="none" {...rest} />;
};

export default Drawer;
