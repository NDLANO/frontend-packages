/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState } from 'react';
import { uuid } from '@ndla/util';
import TreeStructureWrapper from './TreeStructureWrapper';
import FolderItems from './FolderItems';
import AddFolder from './AddFolder';
import keyboardNavigation, { KEYBOARD_KEYS_OF_INTEREST } from './keyboardNavigation';
import { FolderStructureProps, NewFolderProps, TreeStructureProps } from './TreeStructure.types';

export const MAX_LEVEL_FOR_FOLDERS = 4;

const getDefaultOpenFolders = (data: FolderStructureProps[]): string[] => {
  const openFolders: string[] = [];
  const getOpen = (children: FolderStructureProps[]) => {
    children.forEach((folder: FolderStructureProps) => {
      if (folder.openAsDefault) {
        openFolders.push(folder.id);
      }
      if (folder.data && folder.data?.length > 0) {
        getOpen(folder.data);
      }
    });
  };
  getOpen(data);
  return openFolders;
};

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
  const [newFolder, setNewFolder] = useState<NewFolderProps | undefined>();
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(getDefaultOpenFolders(data)));
  const [keyNavigationId, setKeyNavigationId] = useState<{ id: string; isFolder?: boolean } | undefined>();
  const [markedFolderId, setMarkedFolderId] = useState<string | undefined>(folderIdMarkedByDefault);
  const rootLevelId = uuid();

  useEffect(() => {
    if (keyNavigationId?.id) {
      const dataProp = keyNavigationId.isFolder ? 'data-add-folder-id' : 'data-tree-structure-id';
      const currentElement = document.querySelector(`[${dataProp}="${keyNavigationId.id}"]`) as HTMLButtonElement;
      currentElement?.focus();
    } else if (editable) {
      const currentElement = document.querySelector(`[data-add-folder-id="${rootLevelId}"]`) as HTMLButtonElement;
      currentElement?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyNavigationId]);

  useEffect(() => {
    if (!loading) {
      setNewFolder(undefined);
    }
  }, [loading]);

  const onToggleOpen = (id: string) => {
    setOpenFolders((prev) => {
      if (prev.has(id)) {
        prev.delete(id);
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
        setKeyNavigationId({ id: newFolderId, isFolder: false });
      }
    } else {
      setNewFolder(undefined);
    }
  };

  const onMarkFolder = (id: string) => {
    setMarkedFolderId(id);
    setKeyNavigationId({ id, isFolder: false });
  };

  return (
    <div
      onKeyDown={(e) => {
        if (KEYBOARD_KEYS_OF_INTEREST.includes(e.key)) {
          keyboardNavigation({
            e,
            data,
            setKeyNavigationId,
            keyNavigationId: keyNavigationId,
            setOpenFolders,
            openFolders,
            editable: editable,
          });
        }
      }}>
      <h3>{label}</h3>
      <TreeStructureWrapper aria-label="Menu tree" role="tree" framed={framed}>
        {editable && (
          <AddFolder
            editing={newFolder && newFolder.parentId === undefined ? true : false}
            loading={loading}
            idPaths={[]}
            onSaveNewFolder={onSaveNewFolder}
            onCreateNewFolder={onCreateNewFolder}
            tabIndex={keyNavigationId?.id ? -1 : 0}
            rootLevelId={rootLevelId}
          />
        )}
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
          keyNavigationIsFolder={keyNavigationId?.isFolder}
          setKeyNavigationId={setKeyNavigationId}
          firstLevel
        />
      </TreeStructureWrapper>
    </div>
  );
};

export default TreeStructure;
