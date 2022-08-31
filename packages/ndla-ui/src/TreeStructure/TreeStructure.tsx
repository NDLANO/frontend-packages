/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useMemo } from 'react';
import { AddButton, ButtonV2 as Button } from '@ndla/button';
import Tooltip from '@ndla/tooltip';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { spacing, fonts } from '@ndla/core';
import { uniq } from 'lodash';
import { IFolder } from '@ndla/types-learningpath-api';
import TreeStructureWrapper from './TreeStructureWrapper';
import FolderItems from './FolderItems';
import { flattenFolders } from './helperFunctions';
import { CommonTreeStructureProps, FolderType } from './types';

export const MAX_LEVEL_FOR_FOLDERS = 4;

const StyledLabel = styled.label`
  font-weight: ${fonts.weight.semibold};
`;

const AddFolderWrapper = styled.div`
  display: flex;
  margin-top: ${spacing.xsmall};
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
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

export interface TreeStructureProps extends CommonTreeStructureProps {
  defaultOpenFolders?: string[];
  folders: FolderType[];
  label?: string;
  maximumLevelsOfFoldersAllowed?: number;
  onNewFolder?: (name: string, parentId: string) => Promise<IFolder>;
}

const TreeStructure = ({
  defaultOpenFolders,
  menuItems,
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

  const defaultSelectedFolderId = defaultOpenFolders && defaultOpenFolders[defaultOpenFolders.length - 1];

  const [openFolders, setOpenFolders] = useState<string[]>(defaultOpenFolders || []);

  const [newFolderParentId, setNewFolderParentId] = useState<string | undefined>();
  const [focusedId, setFocusedId] = useState<string | undefined>();
  const [selectedFolder, setSelectedFolder] = useState<FolderType | undefined>();

  const flattenedFolders = useMemo(() => flattenFolders(folders, openFolders), [folders, openFolders]);
  const visibleFolderIds = flattenedFolders.map((folder) => folder.id);

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
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <TreeStructureWrapper aria-label="Menu tree" role="tree" type={type}>
        {type === 'picker' && (
          <StyledRow>
            <StyledSelectedFolder variant="ghost" colorTheme="light" fontWeight="normal" shape="sharp">
              {selectedFolder?.name}
            </StyledSelectedFolder>
          </StyledRow>
        )}
        <FolderItems
          focusedFolderId={focusedId}
          menuItems={menuItems}
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
      </TreeStructureWrapper>
      {onNewFolder && (
        <AddFolderWrapper>
          <Tooltip
            tooltip={
              canAddFolder
                ? t('myNdla.newFolderUnder', {
                    folderName: selectedFolder?.name,
                  })
                : t('treeStructure.maxFoldersAlreadyAdded')
            }>
            <AddButton
              disabled={!canAddFolder}
              aria-label={t('myNdla.newFolder')}
              onClick={() => setNewFolderParentId(selectedFolder?.id)}>
              {t('myNdla.newFolder')}
            </AddButton>
          </Tooltip>
        </AddFolderWrapper>
      )}
    </div>
  );
};

export default TreeStructure;
