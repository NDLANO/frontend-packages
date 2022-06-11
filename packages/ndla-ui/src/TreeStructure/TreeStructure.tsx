/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useRef } from 'react';
import { uuid } from '@ndla/util';
import TreeStructureStyledWrapper from './TreeStructureWrapper';
import FolderItems from './FolderItems';
import AddFolder from './AddFolder';
import keyboardNavigation, { KEYBOARD_KEYS_OF_INTEREST } from './keyboardNavigation/keyboardNavigation';
import { FolderStructureProps, NewFolderProps, TreeStructureProps } from './TreeStructure.types';

export const MAX_LEVEL_FOR_FOLDERS = 4;

const getDefaultOpenFolders = (data: FolderStructureProps[], getAll?: boolean): string[] => {
  const openFolders: string[] = [];
  const getOpen = (children: FolderStructureProps[], collectAll?: boolean) => {
    children.forEach((folder: FolderStructureProps) => {
      if (folder.openAsDefault || collectAll) {
        openFolders.push(folder.id);
      }
      if (folder.data && folder.data?.length > 0) {
        getOpen(folder.data, collectAll);
      }
    });
  };
  getOpen(data, getAll);
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
  const [keyNavigationId, setKeyNavigationId] = useState<
    { id: string; currentFocusIsCreateFolderButton?: boolean } | undefined
  >();
  const [markedFolderId, setMarkedFolderId] = useState<string | undefined>(folderIdMarkedByDefault);
  const treestructureRef = useRef<HTMLDivElement>(null);
  const prevDataValue = useRef<string[]>(getDefaultOpenFolders(data));
  const rootLevelId = uuid(); // TODO: use useId hook when we update to React 18

  useEffect(() => {
    if (treestructureRef.current) {
      if (keyNavigationId?.id) {
        const dataProp = keyNavigationId.currentFocusIsCreateFolderButton
          ? 'data-add-folder-id'
          : 'data-tree-structure-id';
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
        setKeyNavigationId({ id: newFolderId, currentFocusIsCreateFolderButton: false });
      }
    } else {
      setNewFolder(undefined);
    }
  };

  const onMarkFolder = (id: string) => {
    setMarkedFolderId(id);
    setKeyNavigationId({ id, currentFocusIsCreateFolderButton: false });
  };

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
            setOpenFolders,
            openFolders,
            editable: editable,
          });
        }
      }}>
      <label htmlFor={rootLevelId}>{label}</label>
      <TreeStructureStyledWrapper id={rootLevelId} aria-label="Menu tree" role="tree" framed={framed}>
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
          keyNavigationFocusIsCreateFolderButton={keyNavigationId?.currentFocusIsCreateFolderButton}
          setKeyNavigationId={setKeyNavigationId}
          firstLevel
        />
      </TreeStructureStyledWrapper>
    </div>
  );
};

export default TreeStructure;
