/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { animations } from '@ndla/core';
import { IFolder } from '@ndla/types-backend/learningpath-api';
import FolderItem from './FolderItem';
import { CommonFolderItemsProps, NewFolderInputFunc, OnCreatedFunc } from './types';
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

const StyledLI = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  &[data-type='navigation'] {
    align-items: flex-start;
  }
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
    role={level === 0 ? 'tree' : 'group'}
  >
    {children}
    {folders.map((folder, index) => {
      const { subfolders, id } = folder;
      const isOpen = openFolders?.includes(id);

      return (
        <StyledLI key={id} tabIndex={-1} role="none" data-type={type}>
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
              {...rest}
            >
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
