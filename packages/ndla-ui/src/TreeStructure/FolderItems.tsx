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
  editable,
  focusedFolderId,
  folderChild,
  folders,
  level,
  loading,
  markedFolderId,
  maximumLevelsOfFoldersAllowed,
  newFolderParentId,
  onCancelNewFolder,
  onCloseFolder,
  onOpenFolder,
  onSaveNewFolder,
  onSelectFolder,
  openFolders,
  openOnFolderClick,
  setFocusedId,
  setSelectedId,
  visibleFolders,
}: FolderItemsProps) => (
  <StyledUL role="group" firstLevel={level === 1}>
    {folders.map(({ name, subfolders, id, icon }, _index) => {
      const isOpen = openFolders?.includes(id);
      return (
        <StyledLI key={id} role="treeitem">
          <div>
            <FolderItem
              focusedFolderId={focusedFolderId}
              folderChild={folderChild}
              hideArrow={subfolders?.length === 0 || level > maximumLevelsOfFoldersAllowed}
              icon={icon}
              id={id}
              isOpen={isOpen}
              level={level}
              loading={loading}
              markedFolderId={markedFolderId}
              name={name}
              noPaddingWhenArrowIsHidden={editable && level === 1 && subfolders?.length === 0}
              onCloseFolder={onCloseFolder}
              onOpenFolder={onOpenFolder}
              onSelectFolder={onSelectFolder}
              openOnFolderClick={openOnFolderClick}
              setFocusedId={setFocusedId}
              setSelectedId={setSelectedId}
              visibleFolders={visibleFolders}
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
              focusedFolderId={focusedFolderId}
              folderChild={folderChild}
              folders={subfolders}
              level={level + 1}
              loading={loading}
              markedFolderId={markedFolderId}
              maximumLevelsOfFoldersAllowed={maximumLevelsOfFoldersAllowed}
              newFolderParentId={newFolderParentId}
              onCancelNewFolder={onCancelNewFolder}
              onCloseFolder={onCloseFolder}
              onOpenFolder={onOpenFolder}
              onSaveNewFolder={onSaveNewFolder}
              onSelectFolder={onSelectFolder}
              openFolders={openFolders}
              openOnFolderClick={openOnFolderClick}
              setFocusedId={setFocusedId}
              setSelectedId={setSelectedId}
              visibleFolders={visibleFolders}
            />
          )}
        </StyledLI>
      );
    })}
  </StyledUL>
);

export default FolderItems;
