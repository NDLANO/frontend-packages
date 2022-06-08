/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState } from 'react';
import TreeStructureWrapper from './TreeStructureWrapper';
import FolderItems from './FolderItems';
import AddFolder from './AddFolder';
import keyboardNavigation, { KEYBOARD_KEYS_OF_INTEREST } from './keyboardNavigation';
import { FolderStructureProps, NewFolderProps, FoldersProps } from './TreeStructure.types';

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

const TreeStructure = ({ data, label, editable, loading, onNewFolder, openOnFolderClick }: FoldersProps) => {
  const [newFolder, setNewFolder] = useState<NewFolderProps | undefined>();
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(getDefaultOpenFolders(data)));
  const [keyNavigationId, setKeyNavigationId] = useState<string | undefined>();
  const [markedFolderId, setMarkedFolderId] = useState<string | undefined>();

  useEffect(() => {
    if (keyNavigationId) {
      const currentElement = document.querySelector(
        `[data-tree-structure-id="${keyNavigationId}"]`,
      ) as HTMLButtonElement;
      currentElement?.focus();
    }
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
        setKeyNavigationId(newFolderId);
      }
    } else {
      setNewFolder(undefined);
    }
  };

  const onMarkFolder = (id: string) => {
    setMarkedFolderId(id);
    setKeyNavigationId(id);
  };

  return (
    <div
      onKeyDown={(e) => {
        if (KEYBOARD_KEYS_OF_INTEREST.includes(e.key)) {
          keyboardNavigation({
            e,
            data,
            setKeyNavigationId,
            keyNavigationId,
            onMarkFolder,
            setOpenFolders,
            openFolders,
          });
        }
      }}>
      <h1>{label}</h1>
      <TreeStructureWrapper aria-label="Menu tree" role="tree">
        {editable && (
          <AddFolder
            editing={newFolder && newFolder.parentId === undefined ? true : false}
            loading={loading}
            idPaths={[]}
            onSaveNewFolder={onSaveNewFolder}
            onCreateNewFolder={onCreateNewFolder}
            tabIndex={keyNavigationId ? -1 : 0}
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
          keyNavigationId={keyNavigationId}
          setKeyNavigationId={setKeyNavigationId}
          firstLevel
        />
      </TreeStructureWrapper>
    </div>
  );
};

export default TreeStructure;
