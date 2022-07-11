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
import { FolderItemsProps } from './TreeStructure.types';

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

const FolderItems = ({
  loading,
  folders,
  level,
  editable,
  onSelectFolder,
  onCloseFolder,
  onOpenFolder,
  onCancelNewFolder,
  setSelectedId,
  onSaveNewFolder,
  newFolderParentId,
  visibleFolders,
  openFolders,
  markedFolderId,
  openOnFolderClick,
  focusedFolderId,
  setFocusedId,
  folderChild,
  maximumLevelsOfFoldersAllowed,
}: FolderItemsProps) => (
  <StyledUL role="group" firstLevel={level === 1}>
    {folders.map(({ name, subfolders, id, icon }, _index) => {
      const isOpen = openFolders?.includes(id);
      return (
        <StyledLI key={id} role="treeitem">
          <div>
            <FolderItem
              setSelectedId={setSelectedId}
              level={level}
              icon={icon}
              onSelectFolder={onSelectFolder}
              openOnFolderClick={openOnFolderClick}
              loading={loading}
              isOpen={isOpen}
              id={id}
              visibleFolders={visibleFolders}
              name={name}
              markedFolderId={markedFolderId}
              focusedFolderId={focusedFolderId}
              onCloseFolder={onCloseFolder}
              onOpenFolder={onOpenFolder}
              hideArrow={subfolders?.length === 0 || level > maximumLevelsOfFoldersAllowed}
              noPaddingWhenArrowIsHidden={editable && level === 1 && subfolders?.length === 0}
              setFocusedId={setFocusedId}
              folderChild={folderChild}
            />
          </div>
          {newFolderParentId === id && (
            <FolderNameInput
              parentId={newFolderParentId}
              loading={loading}
              onCancelNewFolder={onCancelNewFolder}
              onSaveNewFolder={onSaveNewFolder}
            />
          )}
          {subfolders && isOpen && (
            <FolderItems
              setSelectedId={setSelectedId}
              onSelectFolder={onSelectFolder}
              loading={loading}
              newFolderParentId={newFolderParentId}
              visibleFolders={visibleFolders}
              openFolders={openFolders}
              level={level + 1}
              editable={editable}
              folders={subfolders}
              onCloseFolder={onCloseFolder}
              onOpenFolder={onOpenFolder}
              onSaveNewFolder={onSaveNewFolder}
              onCancelNewFolder={onCancelNewFolder}
              markedFolderId={markedFolderId}
              openOnFolderClick={openOnFolderClick}
              focusedFolderId={focusedFolderId}
              setFocusedId={setFocusedId}
              folderChild={folderChild}
              maximumLevelsOfFoldersAllowed={maximumLevelsOfFoldersAllowed}
            />
          )}
        </StyledLI>
      );
    })}
  </StyledUL>
);

export default FolderItems;
