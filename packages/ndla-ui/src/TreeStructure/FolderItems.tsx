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
import { CommonFolderItemsProps, Folder, FolderChildFuncType } from './TreeStructure.types';

const StyledUL = styled.ul<{ firstLevel?: boolean }>`
  ${animations.fadeInLeft(animations.durations.fast)};
  animation-fill-mode: forwards;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: ${({ firstLevel }) => (firstLevel ? `-${spacing.xsmall}` : spacing.normal)};
`;

const StyledLI = styled.li`
  margin: 0;
  padding: 0;
`;

export interface FolderItemsProps extends CommonFolderItemsProps {
  folderChild?: FolderChildFuncType;
  folders: Folder[];
  editable?: boolean;
  keyNavigationFocusIsCreateFolderButton?: boolean;
  maximumLevelsOfFoldersAllowed: number;
  newFolderParentId: string | undefined;
  onCancelNewFolder: () => void;
  onSaveNewFolder: (name: string, parentId: string) => void;
  openFolders: string[];
}

const FolderItems = ({
  editable,
  folderChild,
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
  <StyledUL role="group" firstLevel={level === 1}>
    {folders.map((folder, _index) => {
      const { subfolders, id } = folder;
      const isOpen = openFolders?.includes(id);
      return (
        <StyledLI key={id} role="treeitem">
          <div>
            <FolderItem
              folderChild={folderChild}
              hideArrow={subfolders?.length === 0 || level > maximumLevelsOfFoldersAllowed}
              folder={folder}
              isOpen={isOpen}
              level={level}
              loading={loading}
              noPaddingWhenArrowIsHidden={editable && level === 1 && subfolders?.length === 0}
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
              folderChild={folderChild}
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
