import React from 'react';
import FolderItem from './FolderItem';
import AddFolder from './AddFolder';
import { FolderItemsProps } from './TreeStructure.types';
import { MAX_LEVEL_FOR_FOLDERS } from './TreeStructure';

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
  keyNavigationId,
  setKeyNavigationId,
  firstLevel,
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
              highlightedByKeyBoardNavigation={
                keyNavigationId === id || (firstLevel && keyNavigationId === undefined && !editable)
              }
              hideArrow={(!editable && dataChildren?.length === 0) || newIdPaths.length >= MAX_LEVEL_FOR_FOLDERS}
              setKeyNavigationId={setKeyNavigationId}
            />
          </div>
          {editable && isOpen && newIdPaths.length < MAX_LEVEL_FOR_FOLDERS && (
            <AddFolder
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
              keyNavigationId={keyNavigationId}
              setKeyNavigationId={setKeyNavigationId}
              firstLevel={false}
            />
          )}
        </li>
      );
    })}
  </ul>
);

export default FolderItems;
