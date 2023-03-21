/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { ButtonV2 as Button } from '@ndla/button';
import { Feide } from '@ndla/icons/common';
import { colors, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';

import AuthModal, { AuthModalProps } from '../User/AuthModal';

type FeideWrapperProps = {
  inverted?: boolean;
};

const StyledButton = styled(Button)<FeideWrapperProps>`
  svg {
    margin-left: ${spacing.xsmall};
    color: ${(props) => (props.inverted ? colors.white : colors.brand.primary)};
    width: 22px;
    height: 22px;
  }
  &:hover svg,
  &:focus svg {
    color: ${colors.brand.primary};
  }
`;

interface Props extends AuthModalProps {
  inverted?: boolean;
}

const MastheadAuthModal = ({ inverted, ...rest }: Props) => {
  const { t } = useTranslation();

  return (
    <AuthModal
      {...rest}
      activateButton={
        <StyledButton
          inverted={inverted}
          shape="pill"
          size="medium"
          colorTheme="lighter"
          variant="ghost"
          aria-label={t('user.buttonLogIn')}
        >
          {t('myNdla.myNDLA')}
          <Feide />
        </StyledButton>
      }
    />
  );
};

export default MastheadAuthModal;
