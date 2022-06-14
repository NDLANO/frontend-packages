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
import { MAX_LEVEL_FOR_FOLDERS } from './TreeStructure';

const StyledUL = styled.ul`
  ${animations.fadeInLeft(animations.durations.fast)};
  animation-fill-mode: forwards;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: -${spacing.xsmall};
  li {
    margin: 0;
    padding: 0;
    > ul {
      margin-left: ${spacing.normal};
    }
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
              hideArrow={dataChildren?.length === 0 || newIdPaths.length >= MAX_LEVEL_FOR_FOLDERS}
              noPaddingWhenArrowIsHidden={editable && firstLevel && dataChildren?.length === 0}
              setKeyNavigationId={setKeyNavigationId}
            />
          </div>
          {newFolder?.parentId === id && <FolderNameInput loading={loading} onSaveNewFolder={onSaveNewFolder} />}
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
            />
          )}
        </li>
      );
    })}
  </StyledUL>
);

export default FolderItems;
