/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button, { IconButtonDualStates } from '@ndla/button';
import { Heart, HeartOutline } from '@ndla/icons/action';
import Modal, { ModalBody, ModalCloseButton, ModalHeader } from '@ndla/modal';
import { TagSelector, TagProp } from '@ndla/ui';
import { spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';

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

type Props = {
  title: string;
  closeCallback?: () => void;
  toggleIsFavorite: () => void;
  isOpen: boolean;
};

const DialogExample = ({ isOpen, title, toggleIsFavorite, closeCallback }: Props) => {
  const { t } = useTranslation();
  const [tags, setTags] = useState<TagProp[]>([{ name: 'tag1', id: '1' }, { name: 'tag2', id: '2' }, { name: 'tag3', id: '3' }]);
  const [tagsSelected, setTagsSelected] = useState<string[]>([]);
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
            <h3>Mine mapper</h3>
            <MyNdlaFolder />
            <h3>Mine tags</h3>
            <TagSelector
              tags={tags}
              onTagsUpdate={(tagsUpdate: string[]) => setTagsSelected(tagsUpdate)}
              onCreateTag={(newTagname: string) => {
                setTags([...tags, { name: newTagname, id: Math.random().toString() }]);
              }}
              tagsSelected={tagsSelected}
            />
            <DialogFooter>
              <Button outline onClick={onCloseModal}>
                Avbryt
              </Button>
              <Button onClick={() => {
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
          toggleIsFavorite={() => setIsFavorite(!isFavorite)}
          title="Legg ressurs i Min NDLA"
          isOpen={isOpen}
          closeCallback={() => setIsOpen(!isOpen)}
        />
      )}
    </div>
  );
};

export default MyNdlaAddToFavoritesExample;
