/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { HumanMaleBoard, LogIn } from '@ndla/icons/common';
import { ButtonV2 } from '@ndla/button';

import ErrorMessage from './ErrorMessage';

const StyledLogInIconWrapper = styled.span`
  margin-left: ${spacing.xsmall};
`;

type Props = {
  onAuthenticateClick: () => void;
};
const ErrorResourceAccessDenied = ({ onAuthenticateClick }: Props) => {
  const { t } = useTranslation();
  return (
    <ErrorMessage
      messages={{
        title: t('user.resource.accessDenied'),
        back: t('errorMessage.back'),
        goToFrontPage: t('errorMessage.goToFrontPage'),
      }}
      illustrationElement={<HumanMaleBoard className="c-icon--large" />}
      customElement={
        <ButtonV2 size="medium" onClick={onAuthenticateClick}>
          {t('user.buttonLogIn')}
          <StyledLogInIconWrapper aria-hidden>
            <LogIn className="c-icon--medium" />
          </StyledLogInIconWrapper>
        </ButtonV2>
      }
    />
  );
};

export default ErrorResourceAccessDenied;
