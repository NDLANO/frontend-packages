/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Modal, { ModalBody, ModalHeader } from '@ndla/modal';
import { FeideText } from '@ndla/icons/common';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import Button, { IconButton } from '@ndla/button';
import { Cross } from '@ndla/icons/action';
import { Image } from '@ndla/ui';
import { FeideUserApiType } from './apiTypes';
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
  padding-bottom: ${spacing.normal};
  gap: ${spacing.normal};
  max-width: 560px;
  min-width: 560px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  div {
    padding: 0;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    padding: ${spacing.small};
    min-width: auto;
  }
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
    text-align: center;
  }
`;
const RoundedImage = styled(Image)`
  border-radius: 50%;
  height: 160px;
  max-width: 160px;
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

export type AuthModalProps = {
  isAuthenticated?: boolean;
  user?: FeideUserApiType;
  showGeneralMessage?: boolean;
  onAuthenticateClick: () => void;
  position?: 'top' | 'bottom';
  activateButton?: ReactElement;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};

const AuthModal = ({
  isAuthenticated,
  user,
  showGeneralMessage = true,
  onAuthenticateClick,
  position = 'top',
  activateButton,
  children,
  isOpen,
  onClose,
}: AuthModalProps) => {
  const { t } = useTranslation();
  return (
    <Modal
      activateButton={activateButton}
      controllable={!activateButton}
      backgroundColor="white"
      isOpen={isOpen}
      animation="subtle"
      onClose={() => {}}>
      {(onCloseModal: () => void) => (
        <>
          <ModalHeader modifier="no-bottom-padding">
            <IconButton size="xsmall" aria-label={t('modal.closeModal')} greyLighter onClick={onCloseModal}>
              <Cross />
            </IconButton>
          </ModalHeader>
          <FavouriteWrapper>
            <Header>
              <StyledNotLoggedInH1>{t('myNdla.myPage.loginWelcome')}</StyledNotLoggedInH1>
              <RoundedImage src="https://cdn.pixabay.com/photo/2022/06/12/22/35/village-7258991_1280.jpg" alt="" />
            </Header>
            <ModalBody>
              <Feide>
                <FeideP>{t('myNdla.loginMessage')}</FeideP>
              </Feide>{' '}
            </ModalBody>
            <DialogFooter>
              <FeideIcon />
              <FooterButtons>
                <Button outline onClick={onCloseModal}>
                  {t('cancel')}
                </Button>

                <Button
                  onClick={() => {
                    onCloseModal();
                  }}>
                  {t('myNdla.login')}
                </Button>
              </FooterButtons>
            </DialogFooter>
          </FavouriteWrapper>
        </>
      )}
    </Modal>
  );
};

export default AuthModal;
