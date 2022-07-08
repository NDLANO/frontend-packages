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
  const defaultOpenFolderId = defaultOpenFolders && defaultOpenFolders[defaultOpenFolders.length - 1];

  const [openFolders, setOpenFolders] = useState<string[]>(defaultOpenFolders || []);

  const [newFolderParentId, setNewFolderParentId] = useState<string | undefined>();
  const [focusedFolderId, setFocusedFolderId] = useState<string | undefined>();
  const [selectedFolderId, setSelectedFolderId] = useState<string | undefined>(
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
    if (defaultOpenFolderId !== undefined) {
      setSelectedFolderId(defaultOpenFolderId);
    }
  }, [defaultOpenFolderId]);

  useEffect(() => {
    if (!loading) {
      setNewFolderParentId(undefined);
    }
  }, [loading]);

  const onCloseFolder = (id: string) => {
    // Did we just closed a folder with a marked folder inside it?
    // If so, we need to mark the folder we just closed.
    if (selectedFolderId) {
      const closingFolderPath = getPathOfFolder(folders, id);
      const markedFolderPath = getPathOfFolder(folders, selectedFolderId);
      const markedFolderIsSubPath = closingFolderPath.every(
        (folderId, _index) => markedFolderPath[_index] === folderId,
      );
      if (markedFolderIsSubPath) {
        if (onSelectFolder) {
          setSelectedFolderId(closingFolderPath[closingFolderPath.length - 1]);
          onSelectFolder(closingFolderPath[closingFolderPath.length - 1]);
        } else {
          setFocusedFolderId(closingFolderPath[closingFolderPath.length - 1]);
        }
      }
    }
    setOpenFolders(openFolders.filter((folder) => folder !== id));
  };

  const onOpenFolder = (id: string) => {
    setOpenFolders(uniq(openFolders.concat(id)));
  };

  const onCreateNewFolder = (parentId: string) => {
    setNewFolderParentId(parentId);
  };

  const onSaveNewFolder = (name: string, parentId: string) => {
    onNewFolder(name, parentId).then((newFolderId) => {
      if (newFolderId) {
        setSelectedFolderId(newFolderId);
        setFocusedFolderId(newFolderId);
        setOpenFolders(uniq(openFolders.concat(parentId)));
      }
    });
  };

  const onCancelNewFolder = () => {
    setNewFolderParentId(undefined);
  };

  const onMarkFolder = (id: string) => {
    setSelectedFolderId(id);
    setFocusedFolderId(id);
  };

  const paths = getPathOfFolder(folders, selectedFolderId || '');
  const canAddFolder = editable && paths.length < (maximumLevelsOfFoldersAllowed || 1);

  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <TreeStructureStyledWrapper aria-label="Menu tree" role="tree" framed={framed}>
        <FolderItems
          onSelectFolder={onSelectFolder}
          level={1}
          folders={folders}
          editable={editable}
          onOpenFolder={onOpenFolder}
          onCloseFolder={onCloseFolder}
          newFolderParentId={newFolderParentId}
          onCreateNewFolder={onCreateNewFolder}
          onCancelNewFolder={onCancelNewFolder}
          onSaveNewFolder={onSaveNewFolder}
          visibleFolders={visibleFolderIds}
          openFolders={openFolders}
          markedFolderId={selectedFolderId}
          onMarkFolder={onMarkFolder}
          openOnFolderClick={openOnFolderClick}
          loading={loading}
          focusedFolderId={focusedFolderId}
          setFocusedFolderId={setFocusedFolderId}
          folderChild={folderChild}
          maximumLevelsOfFoldersAllowed={maximumLevelsOfFoldersAllowed}
        />
      </TreeStructureStyledWrapper>
      {editable && (
        <AddFolderWrapper>
          <Tooltip
            tooltip={
              canAddFolder
                ? t('myNdla.newFolderUnder', {
                    folderName: flattenedFolders.find((folder) => folder.id === selectedFolderId)?.name,
                  })
                : t('treeStructure.maxFoldersAlreadyAdded')
            }>
            <AddButton
              disabled={!canAddFolder}
              aria-label={t('myNdla.newFolder')}
              onClick={() => {
                setNewFolderParentId(selectedFolderId);
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
