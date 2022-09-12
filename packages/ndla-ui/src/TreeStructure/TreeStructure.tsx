/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useMemo, useRef } from 'react';
import { ButtonV2 as Button, IconButtonDualStates } from '@ndla/button';
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
import { flattenFolders } from './helperFunctions';
import { CommonTreeStructureProps, FolderType, TreeStructureType } from './types';

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
    (type === 'normal' || type === 'picker') &&
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
    (type === 'picker' || type === 'normal') &&
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
  :hover,
  :focus {
    background: none;
    box-shadow: none;
    border-color: transparent;
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
  openOnFolderClick,
  targetResource,
  type = 'normal',
}: TreeStructureProps) => {
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);

  const defaultSelectedFolderId = defaultOpenFolders && defaultOpenFolders[defaultOpenFolders.length - 1];

  const [openFolders, setOpenFolders] = useState<string[]>(defaultOpenFolders || []);

  const [newFolderParentId, setNewFolderParentId] = useState<string | undefined>();
  const [focusedId, setFocusedId] = useState<string | undefined>();
  const [selectedFolder, setSelectedFolder] = useState<FolderType | undefined>();
  const [showTree, setShowTree] = useState(type !== 'picker');

  const flattenedFolders = useMemo(() => flattenFolders(folders, openFolders), [folders, openFolders]);
  const visibleFolderIds = flattenedFolders.map((folder) => folder.id);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (e.target instanceof Element && ref.current && !ref.current.contains(e.target)) {
        setShowTree(false);
      }
    };
    if (type === 'picker') {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [ref, type]);

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
    setNewFolderParentId(undefined);
  }, [selectedFolder]);

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
    if (!loading) {
      setNewFolderParentId(undefined);
    }
  }, [loading]);

  const onCloseFolder = (id: string) => {
    const closedFolder = flattenedFolders.find((folder) => folder.id === id);

    if (closedFolder) {
      const subFolders = closedFolder.subfolders && flattenFolders(closedFolder.subfolders);
      if (subFolders.some((folder) => folder.id === selectedFolder?.id)) {
        if (onSelectFolder) {
          setSelectedFolder(closedFolder);
          onSelectFolder(closedFolder.id);
        }
        setFocusedId(closedFolder.id);
      }
    }
    setOpenFolders(openFolders.filter((folderId) => folderId !== id));
  };

  const onOpenFolder = (id: string) => {
    setOpenFolders(uniq(openFolders.concat(id)));
  };

  const onSaveNewFolder = (name: string, parentId: string) => {
    setNewFolderParentId?.(undefined);
    onNewFolder?.(name, parentId).then((newFolder) => {
      if (newFolder) {
        setSelectedFolder(newFolder);
        onSelectFolder?.(newFolder.id);
        setFocusedId(newFolder.id);
        setOpenFolders(uniq(openFolders.concat(parentId)));
      }
    });
  };

  const onCancelNewFolder = () => {
    setNewFolderParentId?.(undefined);
  };

  const canAddFolder = selectedFolder && selectedFolder?.breadcrumbs.length < (maximumLevelsOfFoldersAllowed || 1);

  return (
    <StyledTreeStructure ref={ref}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <TreeStructureWrapper aria-label="Menu tree" role="tree" type={type}>
        {type === 'picker' && (
          <StyledRow isOpen={showTree}>
            <StyledSelectedFolder
              variant="ghost"
              colorTheme="light"
              fontWeight="normal"
              shape="sharp"
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
                  aria-label={t('myNdla.newFolder')}
                  onClick={() => setNewFolderParentId(selectedFolder?.id)}>
                  <StyledPlus /> {t('myNdla.newFolder')}
                </StyledAddFolderButton>
              </Tooltip>
            )}
            <IconButtonDualStates
              data-suggestionbutton
              ariaLabelActive={t('treeStructure.hideFolders')}
              ariaLabelInActive={t('treeStructure.showFolders')}
              active={showTree}
              variant="ghost"
              colorTheme="greyLighter"
              inactiveIcon={<ChevronDown />}
              activeIcon={<ChevronUp />}
              size="small"
              onClick={() => {
                setShowTree(!showTree);
              }}
            />
          </StyledRow>
        )}
        {showTree && (
          <ScrollableDiv type={type}>
            <FolderItems
              focusedFolderId={focusedId}
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
              openOnFolderClick={openOnFolderClick}
              setFocusedId={setFocusedId}
              setSelectedFolder={setSelectedFolder}
              targetResource={targetResource}
              visibleFolders={visibleFolderIds}
              type={type}
            />
          </ScrollableDiv>
        )}
      </TreeStructureWrapper>
    </StyledTreeStructure>
  );
};

export default TreeStructure;
