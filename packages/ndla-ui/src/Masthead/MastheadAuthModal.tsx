/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import Button from '@ndla/button';
import { Feide } from '@ndla/icons/common';

import AuthModal from '../User';
import { AuthModalProps } from '../User/AuthModal';

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

type Props = {
  inverted?: boolean;
};

const MastheadAuthModal = ({ inverted, ...rest }: Props & AuthModalProps) => {
  return (
    <AuthModal
      {...rest}
      activateButton={
        <StyledButton inverted={inverted} ghostPill={!inverted} ghostPillInverted={inverted}>
          <span className="feide-icon">
            <Feide />
          </span>
        </StyledButton>
      }
    />
  );
};

export default MastheadAuthModal;
