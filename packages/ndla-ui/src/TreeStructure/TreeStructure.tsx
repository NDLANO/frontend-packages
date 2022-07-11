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
import { IFolder } from '@ndla/types-learningpath-api';
import TreeStructureStyledWrapper from './TreeStructureWrapper';
import FolderItems from './FolderItems';
import { flattenFolders } from './helperFunctions';
import { CommonTreeStructureProps, FolderType } from './TreeStructure.types';

export const MAX_LEVEL_FOR_FOLDERS = 4;

const StyledLabel = styled.label`
  font-weight: ${fonts.weight.semibold};
`;

const AddFolderWrapper = styled.div`
  display: flex;
  margin-top: ${spacing.xsmall};
`;

export interface TreeStructureProps extends CommonTreeStructureProps {
  defaultOpenFolders?: string[];
  folders: FolderType[];
  editable?: boolean;
  framed?: boolean;
  label?: string;
  maximumLevelsOfFoldersAllowed?: number;
  onNewFolder: (name: string, parentId: string) => Promise<IFolder>;
}

const TreeStructure = ({
  defaultOpenFolders,
  editable,
  folderChild,
  folders,
  framed,
  label,
  loading,
  maximumLevelsOfFoldersAllowed = MAX_LEVEL_FOR_FOLDERS,
  onNewFolder,
  onSelectFolder,
  openOnFolderClick,
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
      setOpenFolders((prev) => {
        return uniq(defaultOpenFolders.concat(prev));
      });
    }
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
    setOpenFolders(openFolders.filter((folder) => folder !== id));
  };

  const onOpenFolder = (id: string) => {
    setOpenFolders(uniq(openFolders.concat(id)));
  };

  const onSaveNewFolder = (name: string, parentId: string) => {
    onNewFolder(name, parentId).then((newFolder) => {
      if (newFolder) {
        setSelectedFolder(newFolder);
        setFocusedId(newFolder.id);
        setOpenFolders(uniq(openFolders.concat(parentId)));
      }
    });
  };

  const onCancelNewFolder = () => {
    setNewFolderParentId(undefined);
  };

  const canAddFolder =
    editable && selectedFolder && selectedFolder?.breadcrumbs.length < (maximumLevelsOfFoldersAllowed || 1);

  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <TreeStructureStyledWrapper aria-label="Menu tree" role="tree" framed={framed}>
        <FolderItems
          editable={editable}
          focusedFolderId={focusedId}
          folderChild={folderChild}
          folders={folders}
          level={1}
          loading={loading}
          selectedFolder={selectedFolder}
          maximumLevelsOfFoldersAllowed={maximumLevelsOfFoldersAllowed}
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
          visibleFolders={visibleFolderIds}
        />
      </TreeStructureStyledWrapper>
      {editable && (
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
              onClick={() => {
                setNewFolderParentId(selectedFolder?.id);
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
