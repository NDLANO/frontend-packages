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
import { colors, fonts, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';

import AuthModal, { AuthModalProps } from '../User/AuthModal';

type FeideWrapperProps = {
  inverted?: boolean;
};

const StyledButton = styled(Button)<FeideWrapperProps>`
  font-weight: ${fonts.weight.semibold};
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  svg {
    margin-left: ${spacing.xsmall};
    fill: ${colors.brand.primary};
    color: ${(props) => (props.inverted ? `#ffffff` : `#000000`)};
    width: 22px;
    height: 22px;
  }
  ${StyledButton}:hover svg {
    color: #000000;
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
          aria-label={t('user.buttonLogIn')}>
          {t('myNdla.myNDLA')}
          <StyledSpan>
            <Feide />
          </StyledSpan>
        </StyledButton>
      }
    />
  );
};

export default MastheadAuthModal;
