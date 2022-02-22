/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';

import { useTranslation } from 'react-i18next';
import { Cross } from '@ndla/icons/action';

interface Props {
  title?: string;
  onClick: () => void;
  className?: string;
}

const CloseBut = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  color: #20588f;
  &hover {
    color: #444;
  }
`;

const ModalClose = ({ title, onClick, className = '' }: Props) => {
  const { t } = useTranslation();
  return (
    <CloseBut onClick={onClick} data-cy="close-modal-button" className={className} aria-label={t('lukk')}>
      <Cross style={{ width: '24px', height: '24px' }} title={title} />
    </CloseBut>
  );
};

export default ModalClose;
