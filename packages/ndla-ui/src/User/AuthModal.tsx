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
import Modal, { ModalCloseButton } from '@ndla/modal';
import Button from '@ndla/button';
import { FeideText, LogIn, LogOut, HumanMaleBoard } from '@ndla/icons/common';
import { fonts, spacing } from '@ndla/core';

const StyledModalBody = styled.div`
  padding: ${spacing.normal} ${spacing.medium} ${spacing.medium};
`;

const StyledModalContent = styled.div`
  margin-top: ${spacing.normal};
  ${fonts.sizes('16px', '26px')};
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const StyledHeading = styled.h2`
  margin: ${spacing.small} 0 0;
  svg {
    width: 82px;
    height: 28px;
    color: #000000;
  }
`;

const StyledAuthorizedInfoList = styled.ul`
  margin: 0;
  padding: 0 0 0 ${spacing.normal};
  list-style-image: unset;

  li {
    margin: 0;
    font-weight: ${fonts.weight.semibold};
  }
`;

const StyledHumanMaleBoardIconWrapper = styled.span`
  margin-left: ${spacing.xsmall};
`;

const StyledLogInIconWrapper = styled.span`
  margin-left: ${spacing.xsmall};
`;

const StyledButtonWrapper = styled.div`
  margin-top: ${spacing.normal};
`;

export type AuthModalProps = {
  isAuthenticated?: boolean;
  showGeneralMessage?: boolean;
  authorizedRole?: string;
  authorizedCollectedInfo?: string[];
  onAuthenticateClick: () => void;
  position?: 'top' | 'bottom';
  activateButton?: ReactElement;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};

const AuthModal = ({
  isAuthenticated,
  showGeneralMessage = true,
  authorizedRole,
  authorizedCollectedInfo,
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
      backgroundColor="white"
      activateButton={activateButton}
      position={position}
      isOpen={isOpen}
      onClose={onClose}
      controllable={!activateButton}>
      {(onClose: () => void) => (
        <StyledModalBody>
          <StyledModalHeader>
            <StyledHeading aria-label="Feide">
              <FeideText aria-hidden />
            </StyledHeading>
            <ModalCloseButton onClick={onClose} title="Lukk" />
          </StyledModalHeader>
          <StyledModalContent>
            {authorizedRole && <p>{t('user.loggedInAs', { role: authorizedRole })}</p>}
            {authorizedCollectedInfo && authorizedCollectedInfo.length > 0 && (
              <div>
                {t('user.modal.collectedInfo')}
                <StyledAuthorizedInfoList>
                  {authorizedCollectedInfo.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </StyledAuthorizedInfoList>
              </div>
            )}
            {children}
            {showGeneralMessage && (
              <p>
                {t('user.modal.general')}
                <StyledHumanMaleBoardIconWrapper>
                  <HumanMaleBoard />
                </StyledHumanMaleBoardIconWrapper>
              </p>
            )}
            <StyledButtonWrapper>
              <Button size="medium" onClick={onAuthenticateClick}>
                {isAuthenticated ? t('user.buttonLogOut') : t('user.buttonLogIn')}
                <StyledLogInIconWrapper aria-hidden>
                  {isAuthenticated ? <LogOut className="c-icon--medium" /> : <LogIn className="c-icon--medium" />}
                </StyledLogInIconWrapper>
              </Button>
            </StyledButtonWrapper>
          </StyledModalContent>
        </StyledModalBody>
      )}
    </Modal>
  );
};

export default AuthModal;
