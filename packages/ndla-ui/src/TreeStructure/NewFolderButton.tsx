/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { Plus as PlusIcon } from '@ndla/icons/action';
import { spacing, colors, misc } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { onCreateNewFolderProp } from './TreeStructure.types';

const StyledButton = styled.button`
  cursor: pointer;
  gap: ${spacing.xsmall};
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  padding: ${spacing.xsmall} ${spacing.xsmall};
  border-radius: ${misc.borderRadius};
  margin-left: -8px;
  color: ${colors.brand.primary};
  &:hover {
    background: ${colors.brand.lighter};
  }
`;

interface Props {
  onCreateNewFolder: onCreateNewFolderProp;
  parentId?: string;
  idPaths: number[];
  tabIndex?: 0 | -1;
  rootLevelId?: string;
}

const NewFolderButton = ({ onCreateNewFolder, parentId, idPaths, tabIndex, rootLevelId }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledButton
      aria-label={t('treeStructure.createFolder')}
      data-add-folder-id={parentId || rootLevelId}
      tabIndex={tabIndex}
      onClick={() => onCreateNewFolder({ parentId, idPaths })}>
      <PlusIcon />
      <span>{t('treeStructure.createFolder')}</span>
    </StyledButton>
  );
};

export default NewFolderButton;
