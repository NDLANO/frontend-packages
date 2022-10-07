/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button, { FavoriteButton, IconButton } from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import { FeideText } from '@ndla/icons/common';
import Modal, { ModalBody, ModalHeader } from '@ndla/modal';
import { useSnack, Image, ListResource } from '@ndla/ui';

import { fonts, spacing, breakpoints, mq, colors } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import TagSelectorExample from './TagSelectorExample';

import { TreeStructureExampleComponent, MY_FOLDERS_ID, FOLDER_TREE_STRUCTURE } from './TreeStructureExample';

const SNACKBAR_ID_ADD_TO_FAVORITES = 'SNACKBAR_ID_ADD_TO_FAVORITES';

const DialogFooter = styled.div`
  display: flex;
  gap: ${spacing.xsmall};
  justify-content: flex-end;
  margin-top: ${spacing.small};
`;

const FavouriteWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const StyledNotLoggedInH1 = styled.h1`
  font-weight: 700;
  ${fonts.sizes('20')};
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacing.large};
  align-items: center;
  max-width: 550px;
  margin: 0 auto;
  margin-top: ${spacing.normal};
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
    gap: 0;
    text-align: center;
  }
`;
const RoundedImage = styled(Image)`
  border-radius: 50%;
  height: 160px;
  max-width: 160px;
`;

const StyledH1 = styled.h1`
  ${fonts.sizes(24)};
  ${fonts.weight.bold}
`;

const Feide = styled.div`
  margin-top: ${spacing.normal};
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  svg {
    height: 21px;
    width: 60px;
  }
`;
const FeideP = styled.p`
  margin: 0;
  ${fonts.sizes(18)};
  ${colors.brand.grey};
`;
type DialogExampleProps = {
  title: string;
  closeCallback?: () => void;
  toggleIsFavorite: () => void;
  isFavorite: boolean;
  isOpen: boolean;
  resource?: boolean;
};

const DialogExample = ({ isOpen, title, toggleIsFavorite, isFavorite, closeCallback }: DialogExampleProps) => {
  const { t } = useTranslation();
  const { addSnack } = useSnack();
  return (
    <Modal backgroundColor="white" controllable isOpen={isOpen} animation="subtle" onClose={closeCallback}>
      {(onCloseModal: () => void) => (
        <FavouriteWrapper>
          <ModalHeader modifier="no-bottom-padding">
            <IconButton size="xsmall" aria-label={t('modal.closeModal')} greyLighter onClick={onCloseModal}>
              <Cross />
            </IconButton>
          </ModalHeader>
          <ModalBody>
            <StyledH1>{title}</StyledH1>
            <ListResource
              id={'346ddc8e-e52c-43dc-9631-3fe3720b9996'}
              key={'minimalResource'}
              title="Minimal ressurs"
              resourceTypes={[
                { id: 'urn:resourcetype:tasksAndActivities', name: 'Oppgaver og aktiviteter' },
                { id: 'urn:resourcetype:task', name: 'Oppgave' },
              ]}
              resourceImage={{
                src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                alt: 'alt',
              }}
              link={''}
            />
            <TreeStructureExampleComponent
              label="Velg plassering"
              type="picker"
              structure={FOLDER_TREE_STRUCTURE}
              defaultOpenFolders={[MY_FOLDERS_ID]}
              openOnFolderClick={false}
              onNewFolder
              onSelectFolder={() => {}}
            />
            <TagSelectorExample />
            <DialogFooter>
              <Button outline onClick={onCloseModal}>
                Avbryt
              </Button>

              <Button
                aria-controls={SNACKBAR_ID_ADD_TO_FAVORITES}
                onClick={() => {
                  addSnack({
                    id: isFavorite ? 'removedFromFavorites' : 'addedToFavorites',
                    content: isFavorite ? 'Fjernet fra favoritter' : 'Lagt til i favoritter!',
                  });
                  toggleIsFavorite();
                  onCloseModal();
                }}>
                Lagre
              </Button>
            </DialogFooter>
          </ModalBody>
        </FavouriteWrapper>
      )}
    </Modal>
  );
};

const DialogNotLoggedInExample = ({ isOpen, title, closeCallback, resource }: DialogExampleProps) => {
  const { t } = useTranslation();
  const { addSnack } = useSnack();
  return (
    <Modal backgroundColor="white" controllable isOpen={isOpen} animation="subtle" onClose={closeCallback}>
      {(onCloseModal: () => void) => (
        <FavouriteWrapper>
          <ModalHeader modifier="no-bottom-padding">
            <IconButton size="xsmall" aria-label={t('modal.closeModal')} greyLighter onClick={onCloseModal}>
              <Cross />
            </IconButton>
          </ModalHeader>
          <Header>
            <StyledNotLoggedInH1>
              Velkommen til Min NDLA! Her kan du organisere fagstoffet på din måte!
            </StyledNotLoggedInH1>
            <RoundedImage src="https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg" alt="" />
          </Header>
          <ModalBody>
            {resource && (
              <>
                <StyledH1>{title}</StyledH1>
                <ListResource
                  id={'97260470-3d14-4eb4-b0ca-901aec102078'}
                  key={'minimalResource'}
                  title="Minimal ressurs"
                  resourceTypes={[
                    { id: 'urn:resourcetype:subjectMaterial', name: 'Fagstoff' },
                    { id: 'urn:resourcetype:academicArticle', name: 'Fagartikkel' },
                  ]}
                  resourceImage={{
                    src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                    alt: 'alt',
                  }}
                  link={''}
                />
              </>
            )}

            <Feide>
              <FeideText />
              <FeideP>
                Logg på med Feide for å få tilgang. Ved å logge på godkjenner du våre <a href="www">vilkår for bruk</a>
              </FeideP>
            </Feide>
            <DialogFooter>
              <Button outline onClick={onCloseModal}>
                Avbryt
              </Button>

              <Button
                onClick={() => {
                  addSnack({ id: 'mustLogIn', content: 'Logg på med Feide' });
                  onCloseModal();
                }}>
                Logg på med Feide
              </Button>
            </DialogFooter>
          </ModalBody>
        </FavouriteWrapper>
      )}
    </Modal>
  );
};

interface FavouriteExampleProps {
  isLoggedIn?: boolean;
  resource?: boolean;
}

const MyNdlaAddToFavoritesExample = ({ isLoggedIn = true, resource = true }: FavouriteExampleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  if (isLoggedIn) {
    return (
      <div>
        <FavoriteButton isFavorite={isFavorite} onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <DialogExample
            isFavorite={isFavorite}
            toggleIsFavorite={() => setIsFavorite(!isFavorite)}
            title="Legg ressurs i Min NDLA"
            isOpen={isOpen}
            closeCallback={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
    );
  } else
    return (
      <div>
        <FavoriteButton onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <DialogNotLoggedInExample
            resource={resource}
            isFavorite={isFavorite}
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
