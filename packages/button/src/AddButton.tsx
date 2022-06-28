/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { Plus } from '@ndla/icons/action';
import { Button, ButtonProps } from './Button';

const AddIconBorder = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.brand.tertiary};
  border-radius: 50%;
`;

const AddButtonStyle = styled(Button)`
  display: flex;
  gap: ${spacing.small};
  svg {
    fill: ${colors.brand.primary};
    width: 24px;
    height: 24px;
  }
  :hover {
    background-color: transparent;
    margin: 0;
    border: none;
    svg {
      fill: white;
    }
    div {
      background-color: ${colors.brand.primary};
    }
  }
  &:focus,
  &:active {
    background-color: transparent;
    border: none;
  }
`;
const AddFolder = styled.span`
  color: ${colors.brand.primary};
  align-items: center;
  display: flex;
  ${fonts.weight.semibold}
  ${fonts.sizes('16')}
`;

interface AddButtonProps extends ButtonProps {
  onClick: MouseEventHandler;
}

export const AddButton = ({ onClick }: AddButtonProps) => {
  const { t } = useTranslation();
  return (
    <AddButtonStyle size="xsmall" aria-label={t('myNdla.newFolder')} ghostPill onClick={onClick}>
      <AddIconBorder>
        <Plus />
      </AddIconBorder>
      <AddFolder>{t('myNdla.newFolder')}</AddFolder>
    </AddButtonStyle>
  );
};

export default AddButton;
