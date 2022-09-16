/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import { colors, fonts, misc, spacing } from '@ndla/core';
import { css } from '@emotion/core';
import { uniq } from 'lodash';
import { IFolder } from '@ndla/types-learningpath-api';
import FolderItems from './FolderItems';
import { flattenFolders, treestructureId } from './helperFunctions';
import { CommonTreeStructureProps, FolderType, TreeStructureType } from './types';
import ComboboxButton from './ComboboxButton';

export const MAX_LEVEL_FOR_FOLDERS = 4;

const StyledLabel = styled.label`
  font-weight: ${fonts.weight.semibold};
`;

const StyledTreeStructure = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TreeStructureWrapper = styled.div<{ type: TreeStructureType }>`
  display: flex;
  flex-direction: column;
  ${({ type }) =>
    type === 'picker' &&
    css`
      overflow: hidden;
      border: 1px solid ${colors.brand.neutral7};
      border-radius: ${misc.borderRadius};
      scroll-behavior: smooth;
    `}
  transition: ${misc.transition.default};
  &:focus-within {
    border-color: ${colors.brand.tertiary};
  }
`;

interface ScrollableDivProps {
  type: TreeStructureType;
}

const ScrollableDiv = styled.div<ScrollableDivProps>`
  ${({ type }) =>
    type === 'picker' &&
    css`
      overflow: overlay;
      ::-webkit-scrollbar {
        width: ${spacing.small};
      }
      ::-webkit-scrollbar-thumb {
        border: 4px solid transparent;
        border-radius: 14px;
        background-clip: padding-box;
        padding: 0 4px;
        background-color: ${colors.brand.neutral7};
      }
    `}
`;

export interface TreeStructureProps extends CommonTreeStructureProps {
  defaultOpenFolders?: string[];
  folders: FolderType[];
  label?: string;
  maxLevel?: number;
  onNewFolder?: (name: string, parentId: string) => Promise<IFolder>;
}

const TreeStructure = ({
  defaultOpenFolders,
  folders,
  label,
  loading,
  maxLevel = MAX_LEVEL_FOR_FOLDERS,
  onNewFolder,
  onSelectFolder,
  targetResource,
  type,
}: TreeStructureProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const defaultSelectedFolderId = defaultOpenFolders && defaultOpenFolders[defaultOpenFolders.length - 1];

  const [openFolders, setOpenFolders] = useState<string[]>(defaultOpenFolders || []);

  const [newFolderParentId, setNewFolderParentId] = useState<string | undefined>();
  const [focusedFolder, setFocusedFolder] = useState<FolderType | undefined>();
  const [selectedFolder, setSelectedFolder] = useState<FolderType | undefined>();
  const [showTree, setShowTree] = useState(type === 'navigation');

  const flattenedFolders = useMemo(() => flattenFolders(folders, openFolders), [folders, openFolders]);

  useEffect(() => {
    if (defaultOpenFolders) {
      if (!defaultOpenFolders.every((element) => openFolders.includes(element))) {
        setOpenFolders((prev) => {
          return uniq(defaultOpenFolders.concat(prev));
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultOpenFolders]);

  useEffect(() => {
    if (defaultSelectedFolderId !== undefined) {
      const selected = flattenFolders(folders).find((folder) => folder.id === defaultSelectedFolderId);
      if (selected) {
        setSelectedFolder(selected);
        if (type === 'picker') {
          setFocusedFolder(selected);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultSelectedFolderId]);

  const onToggleTree = (open: boolean) => {
    setShowTree(open);
    if (!open) {
      setNewFolderParentId(undefined);
    }
  };

  const onCloseFolder = (id: string) => {
    const closedFolder = flattenedFolders.find((folder) => folder.id === id);

    if (closedFolder) {
      const subFolders = closedFolder.subfolders && flattenFolders(closedFolder.subfolders);
      if (subFolders.some((folder) => folder.id === selectedFolder?.id)) {
        setFocusedFolder(closedFolder);
      }
    }
    setOpenFolders(openFolders.filter((folderId) => folderId !== id));
  };

  const onOpenFolder = (id: string) => {
    setOpenFolders(uniq(openFolders.concat(id)));
  };

  const onSaveNewFolder = (name: string, parentId: string) => {
    onNewFolder?.(name, parentId).then((newFolder) => {
      if (newFolder) {
        setSelectedFolder(newFolder);
        onSelectFolder?.(newFolder.id);
        setFocusedFolder(newFolder);
        setOpenFolders(uniq(openFolders.concat(parentId)));
        setNewFolderParentId?.(undefined);
        ref.current?.focus();
      }
    });
  };

  const onCancelNewFolder = () => {
    setNewFolderParentId?.(undefined);
    ref.current?.focus();
  };

  const setFolderFocus = (folder: FolderType, focus?: boolean) => {
    setFocusedFolder(folder);

    if (focus) {
      ref.current?.focus();
    }
  };

  return (
    <StyledTreeStructure>
      {label && <StyledLabel id={treestructureId(type, 'label')}>{label}</StyledLabel>}
      <TreeStructureWrapper
        aria-label={label}
        type={type}
        onBlur={(e) => {
          if (type === 'picker' && !e.currentTarget.contains(e.relatedTarget)) {
            onToggleTree(false);
          }
        }}>
        {type === 'picker' && (
          <ComboboxButton
            ref={ref}
            showTree={showTree}
            type={type}
            label={label}
            focusedFolder={focusedFolder}
            selectedFolder={selectedFolder}
            setSelectedFolder={setSelectedFolder}
            setFocusedFolder={setFocusedFolder}
            onToggleTree={onToggleTree}
            flattenedFolders={flattenedFolders}
            onCloseFolder={onCloseFolder}
            onOpenFolder={onOpenFolder}
            onNewFolder={onNewFolder}
            maxLevel={maxLevel}
            setNewFolderParentId={setNewFolderParentId}
          />
        )}
        {showTree && (
          <ScrollableDiv type={type}>
            <FolderItems
              focusedFolder={focusedFolder}
              folders={folders}
              level={0}
              loading={loading}
              selectedFolder={selectedFolder}
              maxLevel={maxLevel}
              newFolderParentId={newFolderParentId}
              onCancelNewFolder={onCancelNewFolder}
              onCloseFolder={onCloseFolder}
              onOpenFolder={onOpenFolder}
              onSaveNewFolder={onSaveNewFolder}
              onSelectFolder={onSelectFolder}
              openFolders={openFolders}
              setFocusedFolder={setFolderFocus}
              setSelectedFolder={setSelectedFolder}
              targetResource={targetResource}
              visibleFolders={flattenedFolders}
              type={type}
              closeTree={() => onToggleTree(false)}
            />
          </ScrollableDiv>
        )}
      </TreeStructureWrapper>
    </StyledTreeStructure>
  );
};

export default TreeStructure;
