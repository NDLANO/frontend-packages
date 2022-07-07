/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { AddButton } from '@ndla/button';
import Tooltip from '@ndla/tooltip';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { spacing, fonts } from '@ndla/core';
import { uniq } from 'lodash';
import TreeStructureStyledWrapper from './TreeStructureWrapper';
import FolderItems from './FolderItems';
import { getPathOfFolder, getFolderName, flattenFolders } from './helperFunctions';
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
  folderIdMarkedByDefault,
  defaultOpenFolders,
  folderChild,
  maximumLevelsOfFoldersAllowed = MAX_LEVEL_FOR_FOLDERS,
}: TreeStructureProps) => {
  const { t } = useTranslation();
  const [newFolderParentId, setNewFolderParentId] = useState<string | undefined>();
  const [openFolders, setOpenFolders] = useState<string[]>(defaultOpenFolders || []);
  const [focusedFolderId, setFocusedFolderId] = useState<string | undefined>();
  const [markedFolderId, setMarkedFolderId] = useState<string | undefined>(folderIdMarkedByDefault || folders[0]?.id);
  const treestructureRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rootLevelId = 'treestructure-root';

  const visibleFolders = useMemo(
    () => flattenFolders(folders, openFolders).map((folder) => folder.id),
    [folders, openFolders],
  );

  useEffect(() => {
    if (defaultOpenFolders) {
      setOpenFolders((prev) => {
        return uniq([...defaultOpenFolders, ...prev]);
      });
    }
  }, [defaultOpenFolders]);

  useEffect(() => {
    if (!loading) {
      setNewFolderParentId(undefined);
    }
  }, [loading]);

  const onCloseFolder = (id: string) => {
    // Did we just closed a folder with a marked folder inside it?
    // If so, we need to mark the folder we just closed.
    if (markedFolderId) {
      const closingFolderPath = getPathOfFolder(folders, id);
      const markedFolderPath = getPathOfFolder(folders, markedFolderId);
      const markedFolderIsSubPath = closingFolderPath.every(
        (folderId, _index) => markedFolderPath[_index] === folderId,
      );
      if (markedFolderIsSubPath) {
        if (onSelectFolder) {
          setMarkedFolderId(closingFolderPath[closingFolderPath.length - 1]);
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
        setMarkedFolderId(newFolderId);
        setFocusedFolderId(newFolderId);

        setOpenFolders(uniq(openFolders.concat(parentId)));
      }
    });
  };

  const onCancelNewFolder = () => {
    setNewFolderParentId(undefined);
  };

  const onMarkFolder = (id: string) => {
    setMarkedFolderId(id);
    setFocusedFolderId(id);
  };

  const paths = getPathOfFolder(folders, markedFolderId || '');
  const canAddFolder = editable && paths.length < (maximumLevelsOfFoldersAllowed || 1);

  return (
    <div ref={treestructureRef}>
      {label && <StyledLabel htmlFor={rootLevelId}>{label}</StyledLabel>}
      <TreeStructureStyledWrapper ref={wrapperRef} id={rootLevelId} aria-label="Menu tree" role="tree" framed={framed}>
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
          visibleFolders={visibleFolders}
          openFolders={openFolders}
          markedFolderId={markedFolderId}
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
                    folderName: getFolderName(folders, markedFolderId),
                  })
                : t('myNdla.maxFoldersAlreadyAdded')
            }>
            <AddButton
              disabled={!canAddFolder}
              aria-label={t('myNdla.newFolder')}
              onClick={() => {
                setNewFolderParentId(markedFolderId);
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
