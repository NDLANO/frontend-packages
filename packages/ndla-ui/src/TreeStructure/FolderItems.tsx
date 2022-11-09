/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { animations } from '@ndla/core';
import { IFolder } from '@ndla/types-learningpath-api';
import FolderItem from './FolderItem';
import { CommonFolderItemsProps, NewFolderInputFunc, OnCreatedFunc, TreeStructureType } from './types';
import { treestructureId } from './helperFunctions';

const StyledUL = styled.ul`
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
  folders: IFolder[];
  newFolderParentId: string | undefined;
  onCancelNewFolder: () => void;
  openFolders: string[];
  parentFolder?: IFolder;
  children?: ReactNode;
  onCreate: OnCreatedFunc;
  newFolderInput?: NewFolderInputFunc;
}

const FolderItems = ({
  folders,
  level,
  loading,
  newFolderParentId,
  onCancelNewFolder,
  openFolders,
  type,
  parentFolder,
  children,
  onCreate,
  newFolderInput,
  ...rest
}: FolderItemsProps) => (
  <StyledUL
    id={
      level === 0 && type === 'picker'
        ? treestructureId(type, 'popup')
        : parentFolder
        ? treestructureId(type, `subfolders-${parentFolder.id}`)
        : undefined
    }
    tabIndex={-1}
    aria-labelledby={level === 0 && type === 'picker' ? treestructureId(type, 'label') : undefined}
    role={level === 0 ? 'tree' : 'group'}>
    {children}
    {folders.map((folder, index) => {
      const { subfolders, id } = folder;
      const isOpen = openFolders?.includes(id);

      return (
        <StyledLI key={id} tabIndex={-1} role="none" type={type}>
          <FolderItem
            index={index}
            folder={folder}
            isOpen={isOpen}
            level={level}
            loading={loading}
            type={type}
            isCreatingFolder={!!newFolderParentId}
            {...rest}
          />
          {((subfolders && isOpen) || newFolderParentId === id) && (
            <FolderItems
              parentFolder={folder}
              folders={subfolders}
              level={level + 1}
              loading={loading}
              type={type}
              newFolderParentId={newFolderParentId}
              onCancelNewFolder={onCancelNewFolder}
              openFolders={openFolders}
              newFolderInput={newFolderInput}
              onCreate={onCreate}
              {...rest}>
              {newFolderParentId === id && (
                <li role="none">{newFolderInput?.({ parentId: id, onClose: onCancelNewFolder, onCreate })}</li>
              )}
            </FolderItems>
          )}
        </StyledLI>
      );
    })}
  </StyledUL>
);

export default FolderItems;
