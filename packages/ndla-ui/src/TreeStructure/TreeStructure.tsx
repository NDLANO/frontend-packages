/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useMemo, useRef } from 'react';
import { ButtonV2 as Button, IconButtonV2 as IconButton } from '@ndla/button';
import { Plus } from '@ndla/icons/action';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';
import Tooltip from '@ndla/tooltip';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { colors, fonts, misc, spacing } from '@ndla/core';
import { css } from '@emotion/core';
import { uniq } from 'lodash';
import { IFolder } from '@ndla/types-learningpath-api';
import FolderItems from './FolderItems';
import { flattenFolders, treestructureId } from './helperFunctions';
import { CommonTreeStructureProps, FolderType, TreeStructureType } from './types';
import { arrowNavigation } from './arrowNavigation';

export const MAX_LEVEL_FOR_FOLDERS = 4;

const StyledLabel = styled.label`
  font-weight: ${fonts.weight.semibold};
`;

interface StyledRowProps {
  isOpen: boolean;
}

const StyledRow = styled.div<StyledRowProps>`
  display: flex;
  justify-content: space-between;
  padding: ${spacing.xxsmall};
  border-bottom: ${({ isOpen }) => isOpen && `1px solid ${colors.brand.tertiary}`};
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

const StyledSelectedFolder = styled(Button)`
  flex: 1;
  justify-content: flex-start;
  color: ${colors.black};
  :hover,
  :focus {
    background: none;
    box-shadow: none;
    border-color: transparent;
  }
  :focus-visible {
    outline: none;
  }
`;

const StyledAddFolderButton = styled(Button)`
  &,
  &:disabled {
    border-color: transparent;
  }
`;

const StyledPlus = styled(Plus)`
  height: 24px;
  width: 24px;
`;

export interface TreeStructureProps extends CommonTreeStructureProps {
  defaultOpenFolders?: string[];
  folders: FolderType[];
  label?: string;
  maximumLevelsOfFoldersAllowed?: number;
  onNewFolder?: (name: string, parentId: string) => Promise<IFolder>;
}

const TreeStructure = ({
  defaultOpenFolders,
  folders,
  label,
  loading,
  maximumLevelsOfFoldersAllowed = MAX_LEVEL_FOR_FOLDERS,
  onNewFolder,
  onSelectFolder,
  targetResource,
  type,
}: TreeStructureProps) => {
  const { t } = useTranslation();

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
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultSelectedFolderId]);

  useEffect(() => {
    if (showTree) {
      setFocusedFolder(selectedFolder);
    } else {
      setNewFolderParentId(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showTree]);

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

  const canAddFolder = selectedFolder && selectedFolder?.breadcrumbs.length < (maximumLevelsOfFoldersAllowed || 1);

  return (
    <StyledTreeStructure>
      {label && <StyledLabel id={treestructureId(type, 'label')}>{label}</StyledLabel>}
      <TreeStructureWrapper
        aria-label={label}
        type={type}
        onBlur={(e) => {
          if (type === 'picker' && !e.currentTarget.contains(e.relatedTarget)) {
            setShowTree(false);
          }
        }}>
        {type === 'picker' && (
          <StyledRow isOpen={showTree}>
            <StyledSelectedFolder
              ref={ref}
              tabIndex={0}
              id={treestructureId(type, 'combobox')}
              role="combobox"
              aria-controls={treestructureId(type, 'popup')}
              aria-haspopup="tree"
              aria-expanded={showTree}
              aria-labelledby={label ? treestructureId(type, 'label') : undefined}
              aria-activedescendant={focusedFolder ? treestructureId(type, focusedFolder.id) : undefined}
              variant="ghost"
              colorTheme="light"
              fontWeight="normal"
              shape="sharp"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (showTree) {
                    setSelectedFolder(focusedFolder);
                  }
                  return;
                }
                if (e.key === 'Escape') {
                  setShowTree(false);
                  return;
                }
                if (['ArrowUp', 'ArrowDown'].includes(e.key) && !showTree) {
                  setShowTree(true);
                  return;
                }
                if (focusedFolder) {
                  arrowNavigation(e, focusedFolder.id, flattenedFolders, setFocusedFolder, onOpenFolder, onCloseFolder);
                }
              }}
              onClick={() => {
                setShowTree(!showTree);
              }}>
              {selectedFolder?.name}
            </StyledSelectedFolder>
            {onNewFolder && showTree && (
              <Tooltip
                tooltip={
                  canAddFolder
                    ? t('myNdla.newFolderUnder', {
                        folderName: selectedFolder?.name,
                      })
                    : t('treeStructure.maxFoldersAlreadyAdded')
                }>
                <StyledAddFolderButton
                  variant="outline"
                  shape="pill"
                  disabled={!canAddFolder}
                  aria-label={
                    canAddFolder
                      ? t('myNdla.newFolderUnder', {
                          folderName: selectedFolder?.name,
                        })
                      : t('treeStructure.maxFoldersAlreadyAdded')
                  }
                  onClick={() => setNewFolderParentId(focusedFolder?.id)}>
                  <StyledPlus /> {t('myNdla.newFolder')}
                </StyledAddFolderButton>
              </Tooltip>
            )}
            <IconButton
              aria-hidden
              aria-label=""
              tabIndex={-1}
              variant="ghost"
              colorTheme="greyLighter"
              size="small"
              onClick={() => {
                if (!showTree) {
                  ref.current?.focus();
                }
                setShowTree(!showTree);
              }}>
              {showTree ? <ChevronUp /> : <ChevronDown />}
            </IconButton>
          </StyledRow>
        )}
        {showTree && (
          <ScrollableDiv type={type}>
            <FolderItems
              focusedFolder={focusedFolder}
              folders={folders}
              level={0}
              loading={loading}
              selectedFolder={selectedFolder}
              maxLevel={maximumLevelsOfFoldersAllowed}
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
              closeTree={() => setShowTree(false)}
            />
          </ScrollableDiv>
        )}
      </TreeStructureWrapper>
    </StyledTreeStructure>
  );
};

export default TreeStructure;
