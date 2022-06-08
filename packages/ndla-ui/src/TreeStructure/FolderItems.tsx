/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { animations } from '@ndla/core';
import FolderItem from './FolderItem';
import AddFolder from './AddFolder';
import { FolderItemsProps } from './TreeStructure.types';
import { MAX_LEVEL_FOR_FOLDERS } from './TreeStructure';

const StyledUL = styled.ul`
  ${animations.fadeInLeft(animations.durations.fast)};
  animation-fill-mode: forwards;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const FolderItems = ({
  loading,
  data,
  idPaths,
  editable,
  onToggleOpen,
  onCreateNewFolder,
  onSaveNewFolder,
  newFolder,
  openFolders,
  markedFolderId,
  onMarkFolder,
  openOnFolderClick,
  keyNavigationId,
  keyNavigationIsFolder,
  setKeyNavigationId,
  firstLevel,
}: FolderItemsProps) => (
  <StyledUL role="group">
    {data.map(({ name, data: dataChildren, id, url, icon }, _index) => {
      const newIdPaths = [...idPaths, _index];
      const isOpen = openFolders?.has(id);
      return (
        <li key={id} role="treeitem">
          <div>
            <FolderItem
              icon={icon}
              url={url}
              openOnFolderClick={openOnFolderClick}
              loading={loading}
              isOpen={isOpen}
              id={id}
              name={name}
              marked={markedFolderId === id}
              onToggleOpen={onToggleOpen}
              onMarkFolder={onMarkFolder}
              highlightedByKeyBoardNavigation={
                (keyNavigationId === id && !keyNavigationIsFolder) ||
                (firstLevel && keyNavigationId === undefined && !editable)
              }
              hideArrow={(!editable && dataChildren?.length === 0) || newIdPaths.length >= MAX_LEVEL_FOR_FOLDERS}
              setKeyNavigationId={setKeyNavigationId}
            />
          </div>
          {editable && isOpen && newIdPaths.length < MAX_LEVEL_FOR_FOLDERS && (
            <AddFolder
              withPadding
              editing={newFolder?.parentId === id}
              loading={loading}
              parentId={id}
              idPaths={newIdPaths}
              onSaveNewFolder={onSaveNewFolder}
              onCreateNewFolder={onCreateNewFolder}
              tabIndex={keyNavigationId === id && keyNavigationIsFolder ? 0 : -1}
            />
          )}
          {dataChildren && isOpen && (
            <FolderItems
              loading={loading}
              newFolder={newFolder}
              openFolders={openFolders}
              idPaths={newIdPaths}
              editable={editable}
              data={dataChildren}
              onToggleOpen={onToggleOpen}
              onCreateNewFolder={onCreateNewFolder}
              onSaveNewFolder={onSaveNewFolder}
              markedFolderId={markedFolderId}
              onMarkFolder={onMarkFolder}
              openOnFolderClick={openOnFolderClick}
              keyNavigationId={keyNavigationId}
              setKeyNavigationId={setKeyNavigationId}
              firstLevel={false}
              keyNavigationIsFolder={keyNavigationIsFolder}
            />
          )}
        </li>
      );
    })}
  </StyledUL>
);

export default FolderItems;
