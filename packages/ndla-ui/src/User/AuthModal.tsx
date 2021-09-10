/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import Modal, { ModalCloseButton } from '@ndla/modal';
// @ts-ignore
import Button from '@ndla/button';
import { ChevronDown, Feide, FeideText, LogIn, LogOut, HumanMaleBoard } from '@ndla/icons/common';
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

type FeideWrapperProps = {
  inverted: boolean;
};

const StyledButton = styled(Button)<FeideWrapperProps>`
  .feide-icon svg {
    color: ${(props) => (props.inverted ? `#ffffff` : `#000000`)};
    width: 22px;
    height: 22px;
  }
  &:hover {
    .feide-icon svg {
      color: #000000;
    }
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
  color: #000000;
  margin-left: ${spacing.xsmall};
`;

const StyledLogInIconWrapper = styled.span`
  margin-left: ${spacing.xsmall};
`;

const StyledButtonWrapper = styled.div`
  margin-top: ${spacing.normal};
`;

type Props = {
  isAuthenticated?: boolean;
  inverted?: boolean;
  showGeneralMessage?: boolean;
  authorizedRole?: string;
  authorizedCollectedInfo?: string[];
  onAuthenticateClick: () => void;
  children: ReactNode;
};

const AuthModal = ({
  isAuthenticated,
  inverted = false,
  showGeneralMessage = true,
  authorizedRole,
  authorizedCollectedInfo,
  onAuthenticateClick,
  children,
}: Props) => {
  const { t } = useTranslation();
  return (
    <Modal
      backgroundColor="white"
      activateButton={
        <StyledButton inverted={inverted} ghostPill={!inverted} ghostPillInverted={inverted}>
          <span className="feide-icon">
            <Feide />
          </span>
          <ChevronDown />
        </StyledButton>
      }
      position="top">
      {(onClose: void) => (
        <StyledModalBody>
          <StyledModalHeader>
            <StyledHeading aria-label="Feide">
              <FeideText aria-hidden />
            </StyledHeading>
            <ModalCloseButton onClick={onClose} title="Lukk" />
          </StyledModalHeader>
          <StyledModalContent>
            {authorizedRole && <p>{t('user.modal.role', { role: authorizedRole })}</p>}
            {authorizedCollectedInfo && authorizedCollectedInfo.length > 0 && (
              <div>
                {t('user.modal.collectedInfo')}:
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
                {isAuthenticated ? t('user.modal.buttonLogOut') : t('user.modal.buttonLogIn')}
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
