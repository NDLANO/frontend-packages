/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import Modal, { ModalBody, ModalCloseButton, ModalHeader } from '@ndla/modal';
import { useTranslation } from 'react-i18next';

type Props = {
  title: string;
  children?: ReactNode;
  closeCallback?: () => void;
  isOpen: boolean;
};

const MyNdlaFavoritesDialog = ({ isOpen, title, closeCallback, children }: Props) => {
  const { t } = useTranslation();
  return (
    <Modal backgroundColor="white" controllable isOpen={isOpen} animation="subtle" onClose={closeCallback}>
      {(onCloseModal: () => void) => (
        <>
          <ModalHeader modifier="no-bottom-padding">
            {t('modal.closeModal')} <ModalCloseButton title="Lukk" onClick={onCloseModal} />
          </ModalHeader>
          <ModalBody>
            <h1>{title}</h1>
            {children}
          </ModalBody>
        </>
      )}
    </Modal>
  );
};

export default MyNdlaFavoritesDialog;
