/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button, { IconButton, IconButtonDualStates } from '@ndla/button';
import { Cross, Heart, HeartOutline } from '@ndla/icons/action';
import { FeideText } from '@ndla/icons/common';
import Modal, { ModalHeader } from '@ndla/modal';
import { useSnack, ListResource } from '@ndla/ui';
import { fonts, spacing, breakpoints, mq, colors } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import TagSelectorExample from './TagSelectorExample';

import { TreeStructureExampleComponent, STRUCTURE_EXAMPLE, MY_FOLDERS_ID } from './TreeStructureExample';

const SNACKBAR_ID_ADD_TO_FAVORITES = 'SNACKBAR_ID_ADD_TO_FAVORITES';

const DialogFooter = styled.div`
  display: flex;
  gap: ${spacing.xsmall};
  justify-content: flex-end;
  margin-top: ${spacing.small};
  justify-content: space-between;
  align-items: center;
`;
const FooterButtons = styled.div`
  display: flex;
  gap: ${spacing.xsmall};
`;
const FavouriteWrapper = styled.div`
  padding-bottom: 26px;
  gap: 10px;
  ${mq.range({ until: breakpoints.tabletWide })} {
    padding: ${spacing.small};
  }
`;

const StyledModalBody = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 0 auto;
  max-width: 560px;
`;
const StyledNotLoggedInH1 = styled.h1`
  font-weight: 700;
  ${fonts.sizes('24')};
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
  }
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
`;
const FeideIcon = styled(FeideText)`
  height: 21px;
  width: 60px;
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
          <StyledModalBody>
            <StyledH1>{title}</StyledH1>
            <ListResource
              key={'minimalResource'}
              title="Minimal ressurs"
              topics={['Topic', 'Topic', 'Topic']}
              resourceImage={{
                src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                alt: 'alt',
              }}
              link={''}
            />
            <TreeStructureExampleComponent
              label="Velg plassering"
              editable
              framed
              structure={STRUCTURE_EXAMPLE(true)}
              defaultOpenFolders={[MY_FOLDERS_ID]}
              openOnFolderClick={false}
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
          </StyledModalBody>
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
            <StyledNotLoggedInH1>Ønsker du å favorittmerke denne siden?</StyledNotLoggedInH1>
          </Header>
          <StyledModalBody>
            {resource && (
              <>
                <ListResource
                  key={'minimalResource'}
                  title="Minimal ressurs"
                  topics={['Topic', 'Topic', 'Topic']}
                  resourceImage={{
                    src: 'https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg',
                    alt: 'alt',
                  }}
                  link={''}
                />
              </>
            )}

            <Feide>
              <FeideP>
                Logg inn med Feide for å få tilgang til Min NDLA. Vi ber om at du ikke skriver noe støtende eller
                personsensitiv informasjon eller annen persondata i tekstfelt. Les vår{' '}
                <a href="www">personvernerklæring her</a>
              </FeideP>
            </Feide>
            <DialogFooter>
              <FeideIcon />
              <FooterButtons>
                <Button outline onClick={onCloseModal}>
                  Avbryt
                </Button>

                <Button
                  onClick={() => {
                    addSnack({ id: 'mustLogIn', content: 'Logg inn' });
                    onCloseModal();
                  }}>
                  Logg inn
                </Button>
              </FooterButtons>
            </DialogFooter>
          </StyledModalBody>
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
        <IconButtonDualStates
          ariaLabelInActive="Legg til i mine favoritter"
          ariaLabelActive="Allerede lagt til i mine favoritter"
          activeIcon={<Heart />}
          inactiveIcon={<HeartOutline />}
          active={isFavorite}
          size="small"
          variant="ghost"
          colorTheme="light"
          onClick={() => setIsOpen(!isOpen)}
        />
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
        <IconButtonDualStates
          ariaLabelInActive="Legg til i mine favoritter"
          ariaLabelActive="Allerede lagt til i mine favoritter"
          activeIcon={<Heart />}
          inactiveIcon={<HeartOutline />}
          active={isFavorite}
          size="small"
          variant="ghost"
          colorTheme="light"
          onClick={() => setIsOpen(!isOpen)}
        />
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
