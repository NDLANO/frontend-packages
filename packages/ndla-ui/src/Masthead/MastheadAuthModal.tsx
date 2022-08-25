/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import Button from '@ndla/button';
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
  .feide-icon svg {
    margin-left: ${spacing.xsmall};
    fill: ${colors.brand.primary};
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
          border="pill"
          size="medium"
          colorTheme={inverted ? 'light' : 'ghost'}
          aria-label="Feide">
          {t('myNdla.myNDLA')}
          <span className="feide-icon">
            <Feide />
          </span>
        </StyledButton>
      }
    />
  );
};

export default MastheadAuthModal;
