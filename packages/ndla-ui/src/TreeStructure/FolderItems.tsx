/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { animations, spacing } from '@ndla/core';
import FolderItem from './FolderItem';
import FolderNameInput from './FolderNameInput';
import { CommonFolderItemsProps, FolderType } from './types';

const StyledUL = styled.ul<{ firstLevel?: boolean }>`
  ${animations.fadeInLeft(animations.durations.fast)};
  animation-fill-mode: forwards;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: ${({ firstLevel }) => (firstLevel ? `-${spacing.xsmall}` : spacing.small)};
`;

const StyledLI = styled.li`
  margin: 0;
  padding: 0;
`;

export interface FolderItemsProps extends CommonFolderItemsProps {
  folders: FolderType[];
  editable?: boolean;
  maximumLevelsOfFoldersAllowed: number;
  newFolderParentId: string | undefined;
  onCancelNewFolder: () => void;
  onSaveNewFolder: (name: string, parentId: string) => void;
  openFolders: string[];
}

const FolderItems = ({
  editable,
  folders,
  level,
  loading,
  maximumLevelsOfFoldersAllowed,
  newFolderParentId,
  onCancelNewFolder,
  onSaveNewFolder,
  openFolders,
  ...rest
}: FolderItemsProps) => (
  <StyledUL role="group" firstLevel={level === 0}>
    {folders.map((folder) => {
      const { subfolders, id } = folder;
      const isOpen = openFolders?.includes(id);

      return (
        <StyledLI key={id} role="treeitem">
          <div>
            <FolderItem
              hideArrow={subfolders?.length === 0 || level > maximumLevelsOfFoldersAllowed}
              folder={folder}
              isOpen={isOpen}
              level={level}
              loading={loading}
              noPaddingWhenArrowIsHidden={editable && level === 0 && subfolders?.length === 0}
              {...rest}
            />
          </div>
          {newFolderParentId === id && (
            <FolderNameInput
              loading={loading}
              onCancelNewFolder={onCancelNewFolder}
              onSaveNewFolder={onSaveNewFolder}
              parentId={newFolderParentId}
            />
          )}
          {subfolders && isOpen && (
            <FolderItems
              editable={editable}
              folders={subfolders}
              level={level + 1}
              loading={loading}
              maximumLevelsOfFoldersAllowed={maximumLevelsOfFoldersAllowed}
              newFolderParentId={newFolderParentId}
              onCancelNewFolder={onCancelNewFolder}
              onSaveNewFolder={onSaveNewFolder}
              openFolders={openFolders}
              {...rest}
            />
          )}
        </StyledLI>
      );
    })}
  </StyledUL>
);

export default FolderItems;
