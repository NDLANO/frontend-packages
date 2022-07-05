/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { uuid } from '@ndla/util';
import { AddButton } from '@ndla/button';
import Tooltip from '@ndla/tooltip';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { spacing, fonts } from '@ndla/core';
import { uniq } from 'lodash';
import TreeStructureStyledWrapper from './TreeStructureWrapper';
import FolderItems from './FolderItems';
import { getIdPathsOfFolder, getPathOfFolder, getFolderName, flattenFolders } from './helperFunctions';
import { NewFolderProps, TreeStructureProps } from './TreeStructure.types';

export const MAX_LEVEL_FOR_FOLDERS = 4;

const StyledLabel = styled.label`
  font-weight: ${fonts.weight.semibold};
`;

const AddFolderWrapper = styled.div`
  display: flex;
  margin-top: ${spacing.xsmall};
`;

const TreeStructure = ({
  data,
  label,
  editable,
  loading,
  onNewFolder,
  openOnFolderClick,
  framed,
  folderIdMarkedByDefault,
  defaultOpenFolders,
  folderChild,
  maximumLevelsOfFoldersAllowed,
}: TreeStructureProps) => {
  const { t } = useTranslation();
  const [newFolder, setNewFolder] = useState<NewFolderProps | undefined>();
  const [openFolders, setOpenFolders] = useState<string[]>(defaultOpenFolders || []);
  const [focusedFolderId, setFocusedFolderId] = useState<string | undefined>();
  const [markedFolderId, setMarkedFolderId] = useState<string | undefined>(folderIdMarkedByDefault || data[0]?.id);
  const treestructureRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rootLevelId = useMemo(() => uuid(), []); // TODO: use useId hook when we update to React 18

  const visibleFolders = useMemo(() => flattenFolders(data, openFolders), [data, openFolders]);

  useEffect(() => {
    if (defaultOpenFolders) {
      setOpenFolders((prev) => {
        return uniq([...defaultOpenFolders, ...prev]);
      });
    }
  }, [defaultOpenFolders]);

  useEffect(() => {
    if (!loading) {
      setNewFolder(undefined);
    }
  }, [loading]);

  const onCloseFolder = (id: string) => {
    // Did we just closed a folder with a marked folder inside it?
    // If so, we need to mark the folder we just closed.
    if (markedFolderId) {
      const closingFolderPath = getPathOfFolder(data, id);
      const markedFolderPath = getPathOfFolder(data, markedFolderId);
      const markedFolderIsSubPath = closingFolderPath.every(
        (folderId, _index) => markedFolderPath[_index] === folderId,
      );
      if (markedFolderIsSubPath) {
        setMarkedFolderId(closingFolderPath[closingFolderPath.length - 1]);
      }
    }
    setOpenFolders(openFolders.filter((folder) => folder !== id));
  };

  const onOpenFolder = (id: string) => {
    setOpenFolders(uniq([...openFolders, id]));
  };

  const onCreateNewFolder = (props: { idPaths: number[]; parentId?: string }) => {
    setNewFolder(props);
  };

  const onSaveNewFolder = (value: string) => {
    if (newFolder) {
      // We would like to create a new folder with the name of value.
      // Its location in structure is based on newFolder object
      onNewFolder({ ...newFolder, value }).then((newFolderId) => {
        if (newFolderId) {
          setMarkedFolderId(newFolderId);
          setFocusedFolderId(newFolderId);
          // Open current folder in case it was closed..

          if (newFolder.parentId) {
            setOpenFolders(uniq([...openFolders, newFolder.parentId]));
          }
        }
      });
    }
  };

  const onCancelNewFolder = () => {
    setNewFolder(undefined);
  };

  const onMarkFolder = (id: string) => {
    setMarkedFolderId(id);
    setFocusedFolderId(id);
  };

  const paths = getPathOfFolder(data, markedFolderId || '');
  const canAddFolder = editable && paths.length < (maximumLevelsOfFoldersAllowed || 1);

  return (
    <div ref={treestructureRef}>
      {label && <StyledLabel htmlFor={rootLevelId}>{label}</StyledLabel>}
      <TreeStructureStyledWrapper ref={wrapperRef} id={rootLevelId} aria-label="Menu tree" role="tree" framed={framed}>
        <FolderItems
          level={0}
          data={data}
          subFolders={data}
          editable={editable}
          onOpenFolder={onOpenFolder}
          onCloseFolder={onCloseFolder}
          newFolder={newFolder}
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
                    folderName: getFolderName(data, markedFolderId),
                  })
                : t('myNdla.maxFoldersAlreadyAdded')
            }>
            <AddButton
              disabled={!canAddFolder}
              aria-label={t('myNdla.newFolder')}
              onClick={() => {
                const idPaths = getIdPathsOfFolder(data, markedFolderId || '');
                setNewFolder({ idPaths, parentId: paths[paths.length - 1] });
              }}>
              {t('myNdla.newFolder')}
            </AddButton>
          </Tooltip>
        </AddFolderWrapper>
      )}
    </div>
  );
};

TreeStructure.defaultProps = {
  maximumLevelsOfFoldersAllowed: MAX_LEVEL_FOR_FOLDERS,
};

export default TreeStructure;
