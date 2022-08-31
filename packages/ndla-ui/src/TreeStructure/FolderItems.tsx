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
import FolderNameInput from './FolderNameInput';
import { CommonFolderItemsProps, FolderType, TreeStructureType } from './types';
import NavigationLink from './NavigationLink';

const StyledUL = styled.ul<{ firstLevel?: boolean }>`
  ${animations.fadeInLeft(animations.durations.fast)};
  animation-fill-mode: forwards;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  list-style: none;
  margin: 0;
  padding: 0;
`;

interface StyledLiProps {
  type?: TreeStructureType;
}

const StyledLI = styled.li<StyledLiProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ type }) => type === 'navigation' && 'flex-start'};
  margin: 0;
  padding: 0;
`;

export interface FolderItemsProps extends CommonFolderItemsProps {
  folders: FolderType[];
  newFolderParentId: string | undefined;
  onCancelNewFolder: () => void;
  onSaveNewFolder: (name: string, parentId: string) => void;
  openFolders: string[];
}

const FolderItems = ({
  folders,
  level,
  loading,
  newFolderParentId,
  onCancelNewFolder,
  onSaveNewFolder,
  openFolders,
  type,
  ...rest
}: FolderItemsProps) => (
  <StyledUL role="group" firstLevel={level === 0}>
    {folders.map((folder) => {
      const { subfolders, id } = folder;
      const isOpen = openFolders?.includes(id);

      return (
        <StyledLI key={id} role="treeitem" type={type}>
          {folder.isNavigation ? (
            <NavigationLink folder={folder} isOpen={isOpen} level={level} type={type} loading={loading} {...rest} />
          ) : (
            <>
              <FolderItem folder={folder} isOpen={isOpen} level={level} loading={loading} type={type} {...rest} />
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
                  folders={subfolders}
                  level={level + 1}
                  loading={loading}
                  type={type}
                  newFolderParentId={newFolderParentId}
                  onCancelNewFolder={onCancelNewFolder}
                  onSaveNewFolder={onSaveNewFolder}
                  openFolders={openFolders}
                  {...rest}
                />
              )}
            </>
          )}
        </StyledLI>
      );
    })}
  </StyledUL>
);

export default FolderItems;
