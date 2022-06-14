/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useRef } from 'react';
import { uuid } from '@ndla/util';
import Button from '@ndla/button';
import Tooltip from '@ndla/tooltip';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import TreeStructureStyledWrapper from './TreeStructureWrapper';
import FolderItems from './FolderItems';
import { getIdPathsOfFolder, getPathOfFolder, getDefaultOpenFolders, getFolderName } from './helperFunctions';
import keyboardNavigation, { KEYBOARD_KEYS_OF_INTEREST } from './keyboardNavigation/keyboardNavigation';
import { FolderStructureProps, NewFolderProps, TreeStructureProps } from './TreeStructure.types';

export const MAX_LEVEL_FOR_FOLDERS = 4;

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
}: TreeStructureProps) => {
  const { t } = useTranslation();
  const [newFolder, setNewFolder] = useState<NewFolderProps | undefined>();
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(getDefaultOpenFolders(data)));
  const [keyNavigationId, setKeyNavigationId] = useState<{ id: string } | undefined>();
  const [markedFolderId, setMarkedFolderId] = useState<string | undefined>(
    folderIdMarkedByDefault || editable ? data[0].id : undefined,
  );
  const treestructureRef = useRef<HTMLDivElement>(null);
  const prevDataValue = useRef<string[]>(getDefaultOpenFolders(data));
  const rootLevelId = uuid(); // TODO: use useId hook when we update to React 18

  useEffect(() => {
    if (treestructureRef.current) {
      if (keyNavigationId?.id) {
        const dataProp = 'data-tree-structure-id';
        const currentElement = treestructureRef.current.querySelector(
          `[${dataProp}="${keyNavigationId.id}"]`,
        ) as HTMLButtonElement;
        currentElement?.focus();
      } else if (editable) {
        const currentElement = document.querySelector(`[data-add-folder-id="${rootLevelId}"]`) as HTMLButtonElement;
        currentElement?.focus();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyNavigationId]);

  useEffect(() => {
    if (prevDataValue?.current) {
      // Compare previous data with current data, find new folders and check if they are open and add them to the openFolders
      const newFolders: string[] = [];
      const getOpen = (children: FolderStructureProps[], set: string[], collectOnlyIfDefaultPropIsOpen: boolean) => {
        children.forEach(({ id, data: childData, openAsDefault }) => {
          if (!collectOnlyIfDefaultPropIsOpen || (openAsDefault && !prevDataValue.current.includes(id))) {
            set.push(id);
          }
          if (childData && childData?.length > 0) {
            getOpen(childData, set, collectOnlyIfDefaultPropIsOpen);
          }
        });
      };
      getOpen(data, newFolders, true);
      if (newFolders.length > 0) {
        setOpenFolders((alreadyOpenedFolders) => {
          newFolders.forEach((id) => {
            alreadyOpenedFolders.add(id);
          });
          return new Set(alreadyOpenedFolders);
        });
      }
    }
  }, [data]);

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

  const onSaveNewFolder = async ({ value, cancel }: { value: string; cancel: boolean }) => {
    if (!cancel && newFolder) {
      // We would like to create a new folder with the name of value.
      // Its location in structure is based on newFolder object
      const newFolderId = await onNewFolder({ ...newFolder, value });
      if (newFolderId) {
        setMarkedFolderId(newFolderId);
        setKeyNavigationId({ id: newFolderId });
        // Open current folder in case it was closed..
        setOpenFolders((prev) => {
          if (newFolder.parentId) {
            prev.add(newFolder.parentId);
          }
          return new Set(prev);
        });
      }
    } else {
      setNewFolder(undefined);
    }
  };

  const onMarkFolder = (id: string) => {
    setMarkedFolderId(id);
    setKeyNavigationId({ id });
  };

  const disableAddFolderButton =
    markedFolderId === undefined || getPathOfFolder(data, markedFolderId).length >= MAX_LEVEL_FOR_FOLDERS;

  return (
    <div
      ref={treestructureRef}
      onKeyDown={(e) => {
        if (KEYBOARD_KEYS_OF_INTEREST.includes(e.key)) {
          keyboardNavigation({
            e,
            data,
            setKeyNavigationId,
            keyNavigationId,
            onToggleOpen,
            openFolders,
          });
        }
      }}>
      <label htmlFor={rootLevelId}>{label}</label>
      <TreeStructureStyledWrapper id={rootLevelId} aria-label="Menu tree" role="tree" framed={framed}>
        <FolderItems
          idPaths={[]}
          data={data}
          editable={editable}
          onToggleOpen={onToggleOpen}
          newFolder={newFolder}
          onCreateNewFolder={onCreateNewFolder}
          onSaveNewFolder={onSaveNewFolder}
          openFolders={openFolders}
          markedFolderId={markedFolderId}
          onMarkFolder={onMarkFolder}
          openOnFolderClick={openOnFolderClick}
          loading={loading}
          keyNavigationId={keyNavigationId?.id}
          setKeyNavigationId={setKeyNavigationId}
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
              aria-label="Add folder"
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
