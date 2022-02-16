/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { MouseEvent } from 'react';
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

type Props = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const CloseButton = ({ onClick }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledButton onClick={onClick} aria-label={t('close')}>
      <StyledCross />
    </StyledButton>
  );
};

export default CloseButton;
