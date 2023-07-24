/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

import { useTranslation } from 'react-i18next';
import { Cross } from '@ndla/icons/action';
import { colors } from '@ndla/core';
import { Close } from '@radix-ui/react-dialog';

interface Props {
  children?: ReactNode;
  title?: string;
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  color: ${colors.brand.primary};
  cursor: pointer;
  &:hover {
    color: ${colors.brand.grey};
  }
`;

const StyledCross = styled(Cross)`
  height: 24px;
  width: 24px;
`;

const ModalClose = ({ children, title }: Props) => {
  const { t } = useTranslation();
  if (children) return <Close asChild>{children}</Close>;
  return (
    <Close asChild>
      <StyledButton data-cy="close-modal-button" aria-label={title ?? t('close')}>
        <StyledCross />
      </StyledButton>
    </Close>
  );
};

export default ModalClose;
