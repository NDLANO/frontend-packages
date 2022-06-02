/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import FolderNameInput from './FolderNameInput';
import FolderItem from './FolderItem';
import TreeStructureWrapper from './TreeStructureWrapper';
import NewFolderButton from './NewFolderButton';

const MAX_LEVEL_FOR_FOLDERS = 4;

export interface FolderStructureProps {
  id: string;
  name: string;
  isOpen?: boolean;
  data?: FolderStructureProps;
  openAsDefault?: boolean;
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
  openOnFolderClick?: boolean;
}

export interface FoldersProps extends CommonFolderProps {
  label: string;
  onNewFolder: (props: { value: string; parentId?: string; idPaths: number[] }) => Promise<string>;
}

export type onCreateNewFolderProp = ({
  idPaths,
  parentId,
}: {
  idPaths: number[];
  parentId: string | undefined;
}) => void;
type onSaveNewFolderProp = ({ value, cancel }: { value: string; cancel: boolean }) => void;

interface FolderItemsProps extends CommonFolderProps {
  onToggleOpen: (id: string) => void;
  onSaveNewFolder: onSaveNewFolderProp;
  onCreateNewFolder: onCreateNewFolderProp;
  newFolder: NewFolderProps | undefined;
  openFolders: Set<string>;
  markedFolderId?: string;
  onMarkFolder: (id: string) => void;
}

const NewFolderWrapper = styled.div<{ withPadding?: boolean }>`
  padding-left: ${({ withPadding }) => (withPadding ? spacing.medium : '0')};
`;

interface NewFolderOptionProp {
  editing: boolean;
  loading?: boolean;
  parentId?: string;
  idPaths: number[];
  onSaveNewFolder: onSaveNewFolderProp;
  onCreateNewFolder: onCreateNewFolderProp;
  withPadding?: boolean;
  tabIndex?: 0 | undefined;
}

const NewFolderOption = ({
  editing,
  onSaveNewFolder,
  onCreateNewFolder,
  loading,
  parentId,
  idPaths,
  withPadding,
  tabIndex,
}: NewFolderOptionProp) => (
  <NewFolderWrapper withPadding={withPadding}>
    {editing ? (
      <FolderNameInput loading={loading} onSaveNewFolder={onSaveNewFolder} />
    ) : (
      <NewFolderButton
        tabIndex={tabIndex}
        onCreateNewFolder={onCreateNewFolder}
        parentId={parentId}
        idPaths={idPaths}
      />
    )}
  </NewFolderWrapper>
);

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
  openOnFolderClick,
}: FolderItemsProps) => (
  <ul role="group">
    {data.map(({ name, data: dataChildren, id }, _index) => {
      const newIdPaths = [...idPaths, _index];
      const isOpen = openFolders?.has(id);
      return (
        <li key={id} role="treeitem">
          <div>
            <FolderItem
              openOnFolderClick={openOnFolderClick}
              loading={loading}
              isOpen={isOpen}
              id={id}
              name={name}
              marked={markedFolderId === id}
              onToggleOpen={onToggleOpen}
              onMarkFolder={onMarkFolder}
              hideArrow={!editable && dataChildren?.length === 0 || (newIdPaths.length >= MAX_LEVEL_FOR_FOLDERS)}
            />
          </div>
          {editable && isOpen && newIdPaths.length < MAX_LEVEL_FOR_FOLDERS && (
            <NewFolderOption
              withPadding
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
              openOnFolderClick={openOnFolderClick}
            />
          )}
        </li>
      );
    })}
  </ul>
);

const getDefaultOpenFolders = (data: FolderStructureProps[]): string[] => {
  const openFolders: string[] = [];
  const getOpen = (children: FolderStructureProps[]) => {
    children.forEach((folder: FolderStructureProps) => {
      if (folder.openAsDefault) {
        openFolders.push(folder.id);
      }
      if (folder.data?.length > 0) {
        getOpen(folder.data);
      }
    });
  };
  getOpen(data);
  return openFolders;
}

const TreeStructure = ({ data, label, editable, loading, onNewFolder, openOnFolderClick }: FoldersProps) => {
  const [newFolder, setNewFolder] = useState<NewFolderProps | undefined>();
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(getDefaultOpenFolders(data)));
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
      <h1>{label}</h1>
      <TreeStructureWrapper aria-label="Menu tree" role="tree">
        {editable && (
          <NewFolderOption
            editing={newFolder && newFolder.parentId === undefined ? true : false}
            loading={loading}
            idPaths={[]}
            onSaveNewFolder={onSaveNewFolder}
            onCreateNewFolder={onCreateNewFolder}
            tabIndex={0}
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
        />
      </TreeStructureWrapper>
    </div>
  );
};

export default TreeStructure;
