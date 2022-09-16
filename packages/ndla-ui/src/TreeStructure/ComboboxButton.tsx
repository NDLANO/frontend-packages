/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import { IFolder } from '@ndla/types-learningpath-api';
import { Plus } from '@ndla/icons/action';
import { ChevronUp, ChevronDown } from '@ndla/icons/common';
import { forwardRef } from 'react';
import { ButtonV2 as Button, IconButtonV2 as IconButton } from '@ndla/button';
import { treestructureId } from './helperFunctions';
import { FolderType, TreeStructureType } from './types';
import { arrowNavigation } from './arrowNavigation';
import Tooltip from '../../../tooltip/src';
import useCombinedRefs from '../utils/useCombinedRefs';

interface StyledRowProps {
  isOpen: boolean;
}

const StyledRow = styled.div<StyledRowProps>`
  display: flex;
  justify-content: space-between;
  padding: ${spacing.xxsmall};
  border-bottom: ${({ isOpen }) => isOpen && `1px solid ${colors.brand.tertiary}`};
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

interface Props {
  showTree: boolean;
  type: TreeStructureType;
  label?: string;
  focusedFolder?: FolderType;
  selectedFolder?: FolderType;
  setSelectedFolder: (folder?: FolderType) => void;
  onToggleTree: (open: boolean) => void;
  flattenedFolders: FolderType[];
  onOpenFolder: (id: string) => void;
  onCloseFolder: (id: string) => void;
  setFocusedFolder: (folder?: FolderType) => void;
  onNewFolder?: (name: string, parentId: string) => Promise<IFolder>;
  maxLevel: number;
  setNewFolderParentId: (id?: string) => void;
}

const ComboboxButton = forwardRef<HTMLButtonElement, Props>(
  (
    {
      showTree,
      type,
      label,
      focusedFolder,
      selectedFolder,
      setSelectedFolder,
      onToggleTree,
      flattenedFolders,
      setFocusedFolder,
      onOpenFolder,
      onCloseFolder,
      onNewFolder,
      maxLevel,
      setNewFolderParentId,
    },
    ref,
  ) => {
    const { t } = useTranslation();
    const innerRef = useRef<HTMLButtonElement>(null);
    const combinedRef = useCombinedRefs<HTMLButtonElement>(ref, innerRef);

    const canAddFolder = selectedFolder && selectedFolder?.breadcrumbs.length < (maxLevel || 1);
    return (
      <StyledRow isOpen={showTree}>
        <StyledSelectedFolder
          ref={combinedRef}
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
              onToggleTree(false);
              return;
            }
            if (['ArrowUp', 'ArrowDown'].includes(e.key) && !showTree) {
              onToggleTree(true);
              return;
            }
            if (focusedFolder) {
              arrowNavigation(e, focusedFolder.id, flattenedFolders, setFocusedFolder, onOpenFolder, onCloseFolder);
            }
          }}
          onClick={() => {
            onToggleTree(!showTree);
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
              innerRef.current?.focus();
            }
            onToggleTree(!showTree);
          }}>
          {showTree ? <ChevronUp /> : <ChevronDown />}
        </IconButton>
      </StyledRow>
    );
  },
);

export default ComboboxButton;
