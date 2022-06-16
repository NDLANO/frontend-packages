/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useRef, useMemo } from 'react';
import { uuid } from '@ndla/util';
import Button from '@ndla/button';
import Tooltip from '@ndla/tooltip';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { spacing, fonts } from '@ndla/core';
import TreeStructureStyledWrapper from './TreeStructureWrapper';
import FolderItems from './FolderItems';
import { getIdPathsOfFolder, getPathOfFolder, getFolderName } from './helperFunctions';
import keyboardNavigation, { KEYBOARD_KEYS_OF_INTEREST } from './keyboardNavigation/keyboardNavigation';
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
}: TreeStructureProps) => {
  const { t } = useTranslation();
  const [newFolder, setNewFolder] = useState<NewFolderProps | undefined>();
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(defaultOpenFolders || []));
  const [focusedFolderId, setFocusedFolderId] = useState<string | undefined>();
  const [markedFolderId, setMarkedFolderId] = useState<string | undefined>(folderIdMarkedByDefault || data[0].id);
  const treestructureRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rootLevelId = useMemo(() => uuid(), []); // TODO: use useId hook when we update to React 18

  useEffect(() => {
    setOpenFolders((prev) => {
      defaultOpenFolders?.forEach((id) => prev.add(id));
      return new Set(prev);
    });
  }, [defaultOpenFolders]);

  useEffect(() => {
    if (!loading) {
      setNewFolder(undefined);
    }
  }, [loading]);

  const onToggleOpen = (id: string) => {
    setOpenFolders((prev) => {
      if (prev.has(id)) {
        prev.delete(id);
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
      } else {
        prev.add(id);
      }
      return new Set(prev);
    });
  };

  const onCreateNewFolder = (props: { idPaths: number[]; parentId?: string }) => {
    setNewFolder(props);
  };

  const onSaveNewFolder = async (value: string) => {
    if (newFolder) {
      // We would like to create a new folder with the name of value.
      // Its location in structure is based on newFolder object
      const newFolderId = await onNewFolder({ ...newFolder, value });
      if (newFolderId) {
        setMarkedFolderId(newFolderId);
        setFocusedFolderId(newFolderId);
        // Open current folder in case it was closed..
        setOpenFolders((prev) => {
          if (newFolder.parentId) {
            prev.add(newFolder.parentId);
          }
          return new Set(prev);
        });
      }
    }
  };

  const onCancelNewFolder = () => {
    setNewFolder(undefined);
  };

  const onMarkFolder = (id: string) => {
    setMarkedFolderId(id);
    setFocusedFolderId(id);
  };

  const disableAddFolderButton =
    markedFolderId === undefined || getPathOfFolder(data, markedFolderId).length >= MAX_LEVEL_FOR_FOLDERS;

  return (
    <div
      ref={treestructureRef}
      onKeyDown={(e) => {
        if (wrapperRef.current?.contains(document.activeElement) && KEYBOARD_KEYS_OF_INTEREST.includes(e.key)) {
          keyboardNavigation({
            e,
            data,
            setFocusedFolderId,
            focusedFolderId,
            onToggleOpen,
            openFolders,
          });
        }
      }}>
      <StyledLabel htmlFor={rootLevelId}>{label}</StyledLabel>
      <TreeStructureStyledWrapper ref={wrapperRef} id={rootLevelId} aria-label="Menu tree" role="tree" framed={framed}>
        <FolderItems
          idPaths={[]}
          data={data}
          editable={editable}
          onToggleOpen={onToggleOpen}
          newFolder={newFolder}
          onCreateNewFolder={onCreateNewFolder}
          onCancelNewFolder={onCancelNewFolder}
          onSaveNewFolder={onSaveNewFolder}
          openFolders={openFolders}
          markedFolderId={markedFolderId}
          onMarkFolder={onMarkFolder}
          openOnFolderClick={openOnFolderClick}
          loading={loading}
          focusedFolderId={focusedFolderId}
          setFocusedFolderId={setFocusedFolderId}
          firstLevel
        />
      </TreeStructureStyledWrapper>
      {editable && (
        <AddFolderWrapper>
          <Tooltip
            align="right"
            disabled={disableAddFolderButton}
            tooltip={t('myNdla.newFolderUnder', {
              folderName: getFolderName(data, markedFolderId),
            })}>
            <Button
              size="small"
              light
              disabled={disableAddFolderButton}
              onClick={() => {
                const paths = getPathOfFolder(data, markedFolderId || '');
                const idPaths = getIdPathsOfFolder(data, markedFolderId || '');
                setNewFolder({ idPaths, parentId: paths[paths.length - 1] });
              }}>
              {t('myNdla.newFolder')}
            </Button>
          </Tooltip>
        </AddFolderWrapper>
      )}
    </div>
  );
};

export default TreeStructure;
