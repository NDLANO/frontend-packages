/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { Cross } from '@ndla/icons/action';
import { useTranslation } from 'react-i18next';
import { colors } from '@ndla/core';

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  cursor: pointer;
`;

const StyledCross = styled(Cross)`
  height: 24px;
  width: 24px;
  color: ${colors.text.primary};
`;

export const CloseButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { t } = useTranslation();
  return (
    <StyledButton aria-label={t('close')} {...props}>
      <StyledCross />
    </StyledButton>
  );
};

export default CloseButton;
