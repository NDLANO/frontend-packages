/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import styled from '@emotion/styled';
import { Cross } from '@ndla/icons/action';
import { useTranslation } from 'react-i18next';
const CloseButtonWrapper = styled.div`
  position: relative;
  top: 1px;
  right: 1px;
`;

const CloseBut = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
`;

type Props = {
  onClick: () => void;
  color: string;
};

export const CloseButton = ({ onClick, color }: Props) => {
  const { t } = useTranslation();
  return (
    <CloseButtonWrapper aria-label={t('lukk')}>
      <CloseBut onClick={onClick}>
        <Cross style={{ width: '24px', height: '24px', color: color }} />
      </CloseBut>
    </CloseButtonWrapper>
  );
};

export default CloseButton;
