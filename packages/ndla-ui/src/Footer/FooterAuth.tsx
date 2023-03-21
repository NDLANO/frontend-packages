/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { ButtonV2 } from '@ndla/button';
import { animations, colors, fonts, spacing } from '@ndla/core';
import { ChevronDown, FeideText, LogIn, LogOut } from '@ndla/icons/common';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthModal, { AuthModalProps } from '../User/AuthModal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222222;
  color: #ffffff;
  padding: ${spacing.medium} ${spacing.normal} ${spacing.large};
`;

const Heading = styled.h2`
  margin: 0;
  svg {
    width: 82px;
    height: 28px;
  }
`;

const InfoText = styled.p`
  margin: 0 0 ${spacing.medium};
  font-weight: 300;
  ${fonts.sizes('18px', '32px')};
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${spacing.normal};
`;

const LoginButton = styled(ButtonV2)`
  background: #222222;
  border-color: ${colors.text.light};
`;

const StyledLogInIconWrapper = styled.span`
  margin-left: ${spacing.xsmall};
`;

const AuthedButton = styled(ButtonV2)`
  color: #ffffff;
  transition: all ${animations.durations.fast} ease-in-out;
  &:hover,
  &:focus,
  &:active {
    color: #222222;
    background: #ffffff;
  }
`;

const FooterAuth = ({ isAuthenticated, user, onAuthenticateClick, ...rest }: AuthModalProps) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Heading aria-label="Feide">
        <FeideText aria-hidden />
      </Heading>
      <StyledButtonWrapper>
        {isAuthenticated ? (
          <AuthModal
            {...rest}
            isAuthenticated={isAuthenticated}
            user={user}
            onAuthenticateClick={onAuthenticateClick}
            activateButton={
              <AuthedButton variant="ghost" shape="pill" size="medium">
                {t('user.loggedInAsButton', { role: user?.eduPersonPrimaryAffiliation })}
                <ChevronDown />
              </AuthedButton>
            }
          />
        ) : (
          <>
            <InfoText>{t('user.generalFooter')}</InfoText>
            <LoginButton size="medium" onClick={onAuthenticateClick}>
              {isAuthenticated ? t('user.buttonLogOut') : t('user.buttonLogIn')}
              <StyledLogInIconWrapper aria-hidden>
                {isAuthenticated ? <LogOut className="c-icon--medium" /> : <LogIn className="c-icon--medium" />}
              </StyledLogInIconWrapper>
            </LoginButton>
          </>
        )}
      </StyledButtonWrapper>
    </Wrapper>
  );
};

export default FooterAuth;
