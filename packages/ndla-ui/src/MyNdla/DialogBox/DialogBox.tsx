/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import Modal, { ModalBody, ModalCloseButton, ModalHeader } from '@ndla/modal';

type Props = {
  title: string;
  children?: ReactNode;
  closeCallback?: () => void;
  isOpen: boolean;
}

const DialogBox = ({ isOpen, title, closeCallback, children }: Props) => (
  <Modal backgroundColor="white" controllable isOpen={isOpen} animation="subtle" onClose={closeCallback}>
    {(onCloseModal: () => void) => (
      <>
        <ModalHeader>
          {title} <ModalCloseButton title="Lukk" onClick={onCloseModal} />
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </>
    )}
  </Modal>
);

export default DialogBox;
