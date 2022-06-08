/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import { uuid } from '@ndla/util';
import styled from '@emotion/styled';
import Button, { IconButtonDualStates } from '@ndla/button';
import { Heart, HeartOutline } from '@ndla/icons/action';
import Modal, { ModalBody, ModalCloseButton, ModalHeader } from '@ndla/modal';
import { SnackBar, SnackBarItemProp } from '@ndla/ui';
import { spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import TagSelectorExample from './TagSelectorExample';
import { TreeStructureExampleComponent, STRUCTURE_EXAMPLE } from './TreeStructureExample';

const SNACKBAR_ID_ADD_TO_FAVORITES = 'SNACKBAR_ID_ADD_TO_FAVORITES';

const MyNdlaFolder = styled.div`
  height: 100px;
`;

const MyNdlaResource = styled.div`
  height: 100px;
`;

const DialogFooter = styled.div`
  display: flex;
  gap: ${spacing.xsmall};
  justify-content: flex-end;
`;

type DialogExampleProps = {
  title: string;
  closeCallback?: () => void;
  toggleIsFavorite: () => void;
  isFavorite: boolean;
  isOpen: boolean;
  setSnackBarMessage: (params: SnackBarItemProp) => void;
};

const DialogExample = ({
  isOpen,
  title,
  toggleIsFavorite,
  isFavorite,
  closeCallback,
  setSnackBarMessage,
}: DialogExampleProps) => {
  const { t } = useTranslation();
  const folderIdMarkedByDefault = uuid();
  return (
    <Modal backgroundColor="white" controllable isOpen={isOpen} animation="subtle" onClose={closeCallback}>
      {(onCloseModal: () => void) => (
        <>
          <ModalHeader modifier="no-bottom-padding">
            {t('modal.closeModal')} <ModalCloseButton title="Lukk" onClick={onCloseModal} />
          </ModalHeader>
          <ModalBody>
            <h1>{title}</h1>
            <MyNdlaResource />
            <TreeStructureExampleComponent
              folderIdMarkedByDefault={folderIdMarkedByDefault}
              label="Mine mapper"
              editable
              framed
              structure={STRUCTURE_EXAMPLE(folderIdMarkedByDefault)}
            />
            <TagSelectorExample />
            <MyNdlaFolder />
            <DialogFooter>
              <Button outline onClick={onCloseModal}>
                Avbryt
              </Button>
              <Button
                aria-controls={SNACKBAR_ID_ADD_TO_FAVORITES}
                onClick={() => {
                  setSnackBarMessage({
                    snackbarItemId: Math.random().toString(),
                    type: 'info',
                    children: <>{isFavorite ? 'Fjernet fra favoritter' : 'Lagt til i favoritter!'}</>,
                  });
                  toggleIsFavorite();
                  onCloseModal();
                }}>
                Lagre
              </Button>
            </DialogFooter>
          </ModalBody>
        </>
      )}
    </Modal>
  );
};

const MyNdlaAddToFavoritesExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState<SnackBarItemProp>({});
  return (
    <div>
      <IconButtonDualStates
        ariaLabelActive="Legg til i mine favoritter"
        ariaLabelInActive="Allerede lagt til i mine favoritter"
        activeIcon={<Heart />}
        inactiveIcon={<HeartOutline />}
        active={isFavorite}
        size="small"
        ghostPill
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <DialogExample
          isFavorite={isFavorite}
          toggleIsFavorite={() => setIsFavorite(!isFavorite)}
          title="Legg ressurs i Min NDLA"
          isOpen={isOpen}
          closeCallback={() => setIsOpen(!isOpen)}
          setSnackBarMessage={setSnackBarMessage}
        />
      )}
      <SnackBar
        id={SNACKBAR_ID_ADD_TO_FAVORITES}
        key={snackBarMessage.snackbarItemId}
        type={snackBarMessage.type}
        snackbarItemId={snackBarMessage?.snackbarItemId}
        closeAriaLabel="Lukk"
        onKill={(id: string | undefined) => {
          // eslint-disable-next-line
          console.log(`snack with id ${id || 'unknown'} removed`);
          setSnackBarMessage({});
        }}>
        {snackBarMessage.children}
      </SnackBar>
    </div>
  );
};

export default MyNdlaAddToFavoritesExample;
