/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import FolderNameInput from './FolderNameInput';
import FolderItem from './FolderItem';

const MAX_LEVEL_FOR_FOLDERS = 4;

export interface FolderStructureProps {
  id: string;
  name: string;
  isOpen?: boolean;
  data?: FolderStructureProps;
}

interface NewFolderProps {
  parentId?: string;
  idPaths: number[];
}

interface CommonFolderProps {
  data: FolderStructureProps[];
  editable?: boolean;
  idPaths: number[];
  loading?: boolean;
}

export interface FoldersProps extends CommonFolderProps {
  label: string;
  onNewFolder: (props: { value: string; parentId?: string; idPaths: number[] }) => string;
}

type onCreateNewFolderProp = ({ idPaths, parentId }: { idPaths: number[]; parentId: string | undefined }) => void;
type onSaveNewFolderProp = ({ value, cancel }: { value: string; cancel: boolean }) => void;

interface FolderItemsProps extends CommonFolderProps {
  onToggleOpen: (id: string) => void;
  onCreateNewFolder: onCreateNewFolderProp;
  newFolder: NewFolderProps | undefined;
  openFolders: string[];
  markedFolderId: string;
}

interface NewFolderOptionProp {
  editing: boolean;
  loading?: boolean;
  parentId: string;
  idPaths: string[];
  onSaveNewFolder: onSaveNewFolderProp;
  onCreateNewFolder: onCreateNewFolderProp;
}

const NewFolderOption = ({
  editing,
  onSaveNewFolder,
  onCreateNewFolder,
  loading,
  parentId,
  idPaths,
}: NewFolderOptionProp) => {
  if (editing) {
    return <FolderNameInput loading={loading} onSaveNewFolder={onSaveNewFolder} />;
  }
  return <button onClick={() => onCreateNewFolder({ parentId, idPaths })}>new folder</button>;
};

const FolderItems = ({
  loading,
  data,
  idPaths,
  editable,
  onToggleOpen,
  onCreateNewFolder,
  onSaveNewFolder,
  newFolder,
  openFolders,
  markedFolderId,
  onMarkFolder,
}: FolderItemsProps) => (
  <ul>
    {data.map(({ name, data: dataChildren, id }, _index) => {
      const newIdPaths = [...idPaths, _index];
      const isOpen = openFolders?.has(id);
      return (
        <li key={id}>
          <div>
            <FolderItem
              loading={loading}
              isOpen={isOpen}
              id={id}
              name={name}
              marked={markedFolderId === id}
              onToggleOpen={onToggleOpen}
              onMarkFolder={onMarkFolder}
            />
          </div>
          {editable && isOpen && newIdPaths.length < MAX_LEVEL_FOR_FOLDERS && (
            <NewFolderOption
              editing={newFolder?.parentId === id}
              loading={loading}
              parentId={id}
              idPaths={newIdPaths}
              onSaveNewFolder={onSaveNewFolder}
              onCreateNewFolder={onCreateNewFolder}
            />
          )}
          {dataChildren && isOpen && (
            <FolderItems
              loading={loading}
              newFolder={newFolder}
              openFolders={openFolders}
              idPaths={newIdPaths}
              editable={editable}
              data={dataChildren}
              onToggleOpen={onToggleOpen}
              onCreateNewFolder={onCreateNewFolder}
              onSaveNewFolder={onSaveNewFolder}
              markedFolderId={markedFolderId}
              onMarkFolder={onMarkFolder}
            />
          )}
        </li>
      );
    })}
  </ul>
);

const TreeStructure = ({ data, label, editable, loading, onNewFolder }: FoldersProps) => {
  const [newFolder, setNewFolder] = useState<NewFolderProps | undefined>();
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set([]));
  const [markedFolderId, setMarkedFolderId] = useState<string | undefined>();

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
    if (!cancel) {
      // We would like to create a new folder with the name of value.
      // Its location in structure is based on newFolder object
      const newFolderId = await onNewFolder({ ...newFolder, value });
      if (newFolderId) {
        setMarkedFolderId(newFolderId);
      }
    } else {
      setNewFolder(undefined);
    }
  };

  const onMarkFolder = (id: string) => {
    setMarkedFolderId(id);
  };

  return (
    <div>
      <h1>
        {label} {loading ? 'wait...' : ''}
      </h1>
      <button onClick={() => onCreateNewFolder({ idPaths: [] })}>new folder</button>
      {newFolder && newFolder.parentId === undefined && (
        <FolderNameInput loading={loading} onSaveNewFolder={onSaveNewFolder} />
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
      />
    </div>
  );
};

export default TreeStructure;
