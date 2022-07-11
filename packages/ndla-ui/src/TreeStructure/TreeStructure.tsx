/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useMemo } from 'react';
import { AddButton } from '@ndla/button';
import Tooltip from '@ndla/tooltip';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { spacing, fonts } from '@ndla/core';
import { uniq } from 'lodash';
import TreeStructureStyledWrapper from './TreeStructureWrapper';
import FolderItems from './FolderItems';
import { getPathOfFolder, flattenFolders } from './helperFunctions';
import { TreeStructureProps } from './TreeStructure.types';

export const MAX_LEVEL_FOR_FOLDERS = 4;

const StyledLabel = styled.label`
  font-weight: ${fonts.weight.semibold};
`;

const AddFolderWrapper = styled.div`
  display: flex;
  margin-top: ${spacing.xsmall};
`;

const TreeStructure = ({
  folders,
  label,
  editable,
  loading,
  onNewFolder,
  onSelectFolder,
  openOnFolderClick,
  framed,
  defaultOpenFolders,
  folderChild,
  maximumLevelsOfFoldersAllowed = MAX_LEVEL_FOR_FOLDERS,
}: TreeStructureProps) => {
  const { t } = useTranslation();
  const defaultSelectedFolderId = defaultOpenFolders && defaultOpenFolders[defaultOpenFolders.length - 1];

  const [openFolders, setOpenFolders] = useState<string[]>(defaultOpenFolders || []);

  const [newFolderParentId, setNewFolderParentId] = useState<string | undefined>();
  const [focusedId, setFocusedId] = useState<string | undefined>();
  const [selectedId, setSelectedId] = useState<string | undefined>(
    defaultOpenFolders?.[defaultOpenFolders.length - 1] || folders[0]?.id,
  );

  const flattenedFolders = useMemo(() => flattenFolders(folders, openFolders), [folders, openFolders]);
  const visibleFolderIds = flattenedFolders.map((folder) => folder.id);

  useEffect(() => {
    if (defaultOpenFolders) {
      setOpenFolders((prev) => {
        return uniq(defaultOpenFolders.concat(prev));
      });
    }
  }, [defaultOpenFolders]);

  useEffect(() => {
    if (defaultSelectedFolderId !== undefined) {
      setSelectedId(defaultSelectedFolderId);
    }
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
      if (subFolders.some((folder) => folder.id === selectedId)) {
        if (onSelectFolder) {
          setSelectedId(closedFolder.id);
          onSelectFolder(closedFolder.id);
        }
        setFocusedId(closedFolder.id);
      }
    }
    setOpenFolders(openFolders.filter((folder) => folder !== id));
  };

  const onOpenFolder = (id: string) => {
    setOpenFolders(uniq(openFolders.concat(id)));
  };

  const onSaveNewFolder = (name: string, parentId: string) => {
    onNewFolder(name, parentId).then((newFolderId) => {
      if (newFolderId) {
        setSelectedId(newFolderId);
        setFocusedId(newFolderId);
        setOpenFolders(uniq(openFolders.concat(parentId)));
      }
    });
  };

  const onCancelNewFolder = () => {
    setNewFolderParentId(undefined);
  };

  const paths = getPathOfFolder(folders, selectedId || '');
  const canAddFolder = editable && paths.length < (maximumLevelsOfFoldersAllowed || 1);

  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <TreeStructureStyledWrapper aria-label="Menu tree" role="tree" framed={framed}>
        <FolderItems
          maximumLevelsOfFoldersAllowed={maximumLevelsOfFoldersAllowed}
          level={1}
          editable={editable}
          folders={folders}
          folderChild={folderChild}
          openFolders={openFolders}
          visibleFolders={visibleFolderIds}
          markedFolderId={selectedId}
          openOnFolderClick={openOnFolderClick}
          onOpenFolder={onOpenFolder}
          onCloseFolder={onCloseFolder}
          newFolderParentId={newFolderParentId}
          onCancelNewFolder={onCancelNewFolder}
          onSaveNewFolder={onSaveNewFolder}
          onSelectFolder={onSelectFolder}
          loading={loading}
          setSelectedId={setSelectedId}
          focusedFolderId={focusedId}
          setFocusedId={setFocusedId}
        />
      </TreeStructureStyledWrapper>
      {editable && (
        <AddFolderWrapper>
          <Tooltip
            tooltip={
              canAddFolder
                ? t('myNdla.newFolderUnder', {
                    folderName: flattenedFolders.find((folder) => folder.id === selectedId)?.name,
                  })
                : t('treeStructure.maxFoldersAlreadyAdded')
            }>
            <AddButton
              disabled={!canAddFolder}
              aria-label={t('myNdla.newFolder')}
              onClick={() => {
                setNewFolderParentId(selectedId);
              }}>
              {t('myNdla.newFolder')}
            </AddButton>
          </Tooltip>
        </AddFolderWrapper>
      )}
    </div>
  );
};

export default TreeStructure;
