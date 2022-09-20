/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import Tooltip from '@ndla/tooltip';
import styled from '@emotion/styled';
import { ButtonV2 as Button } from '@ndla/button';
import { Plus } from '@ndla/icons/action';
import { FolderType } from './types';

interface AddFolderButtonProps {
  selectedFolder?: FolderType;
  canAddFolder: boolean;
  focusedFolder?: FolderType;
  setNewFolderParentId: (id?: string) => void;
}

const StyledAddFolderButton = styled(Button)`
  &,
  &:disabled {
    border-color: transparent;
  }
`;

const StyledPlus = styled(Plus)`
  height: 24px;
  width: 24px;
`;

const AddFolderButton = ({
  selectedFolder,
  canAddFolder,
  setNewFolderParentId,
  focusedFolder,
}: AddFolderButtonProps) => {
  const { t } = useTranslation();
  return (
    <Tooltip
      tooltip={
        canAddFolder
          ? t('myNdla.newFolderUnder', {
              folderName: selectedFolder?.name,
            })
          : t('treeStructure.maxFoldersAlreadyAdded')
      }>
      <StyledAddFolderButton
        variant="outline"
        shape="pill"
        disabled={!canAddFolder}
        aria-label={
          canAddFolder
            ? t('myNdla.newFolderUnder', {
                folderName: selectedFolder?.name,
              })
            : t('treeStructure.maxFoldersAlreadyAdded')
        }
        onClick={() => setNewFolderParentId(focusedFolder?.id)}>
        <StyledPlus /> {t('myNdla.newFolder')}
      </StyledAddFolderButton>
    </Tooltip>
  );
};

export default AddFolderButton;
