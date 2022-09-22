/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { useTranslation } from 'react-i18next';
import { Cross } from '@ndla/icons/action';
import { colors } from '@ndla/core';

interface Props extends HTMLAttributes<HTMLButtonElement> {
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

const ModalClose = ({ title, ...rest }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledButton data-cy="close-modal-button" aria-label={t('close')} {...rest}>
      <StyledCross title={title} />
    </StyledButton>
  );
};

export default ModalClose;
