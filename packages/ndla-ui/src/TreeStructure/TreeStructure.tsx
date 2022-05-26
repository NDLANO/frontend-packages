/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { uuid } from '@ndla/util';

interface TreeStructureItem {
  id: string;
  title: string;
  isOpen?: boolean;
  children?: TreeStructureItem[];
};

interface TreeStructureProps {
  structure: TreeStructureItem[];
};

const EditNewFolder = ({ id, title, onBlur, onSave }) => {
  const [value, setValue] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

  return (
    <input
      ref={inputRef}
      value={value}
      onBlur={() => {}}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === 'Tab' || e.key === 'Escape') {
          onSave({ value, id, cancel: e.key === 'Escape' });
          e.preventDefault();
        }
      }}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setValue(target.value);
      }}
    />
  );
}

const TreeContent = ({
  parentId,
  structure,
  openItems,
  onToggleFolder,
  onCreateFolder,
  onSaveEditingFolderName,
  newFolders,
}: { structure: TreeStructureItem[], openItems: string[], onToggleFolder: (id: string) => void }) => {
  const newFoldersForParent = newFolders.filter((folder) => folder.parentId === parentId);
  return (
    <ul>
      {newFoldersForParent.map(({ id, title, editing }) => (
        (editing ? <EditNewFolder key={id} id={id} title={title} onSave={onSaveEditingFolderName} /> : (
          <div key={id}>
            {title}
          </div>
        ))
      ))}
      <button onClick={() => onCreateFolder(parentId)}>new folder</button>
      {structure.map(({ id, title, children }) => {
        const isOpen = openItems.includes(id);
        return (
          <li
            key={id}
          >
            <button onClick={() => onToggleFolder(id)}>
              {title} ({isOpen ? 'open' : 'closed'})
            </button>
            {isOpen && (
              <TreeContent
                structure={children || []}
                openItems={openItems}
                onToggleFolder={onToggleFolder}
                onCreateFolder={onCreateFolder}
                onSaveEditingFolderName={onSaveEditingFolderName}
                newFolders={newFolders}
                parentId={id}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

const flattenOpenStructure = (structure: TreeStructureItem[]): string[] => {
  const openItems: string[] = [];
  const flatten = (structure: TreeStructureItem[]) => {
    structure.forEach(({ id, isOpen, children }) => {
      if (isOpen) {
        openItems.push(id);
        if(children) {
          flatten(children);
        }
      }
    });
  };
  flatten(structure);
  return openItems;
};

const TreeStructure = ({ structure }: TreeStructureProps) => {
  const [openItems, setOpenItems] = useState<string[]>(flattenOpenStructure(structure));
  const [newFolders, setNewFolders] = useState<{ id: string, title: string, parentId: string }[]>([]);
  const onToggleFolder = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  const onCreateFolder = (id: string) => {
    const newFolder = {
      parentId: id,
      id: uuid(),
      title: '',
      editing: true,
    };
    setNewFolders([...newFolders, newFolder]);
  };

  const onSaveEditingFolderName = ({ value, id, cancel }: { value: string, id: string, cancel: boolean }) => {
    if (cancel || value === '') {
      setNewFolders(newFolders.filter(folder => folder.id !== id));
    } else {
      setNewFolders(newFolders.map(folder => folder.id === id ? { ...folder, title: value, editing: false } : folder));
    }
  };

  return (
    <TreeContent
      structure={structure}
      openItems={openItems}
      onToggleFolder={onToggleFolder}
      onCreateFolder={onCreateFolder}
      onSaveEditingFolderName={onSaveEditingFolderName}
      newFolders={newFolders}
      parentId={'root'}
    />
  );
};

export default TreeStructure;

/*
interface StructureItemType {
  subChildren?: StructureType;
  icon: 'folder' | 'file';
  title: string;
  link?: string;
};

export interface StructureType {
  [id: string]: StructureItemType;
};

export interface TreeStructureProps {
  structure: StructureType;
};

interface PathsType {
  [key: string]: boolean;
};

const BranchItem = styled.li``;
const TreeItem = styled.ul``;

const Icon = ({ type }) => (
  <div>{type}</div>
);

const TreeBranch = ({ subChildren, navigateStructure, icon, title, link, id, openedPaths, newFolder, parentPaths }: any) => (
  <BranchItem>
    {link && <a href={link}><Icon type={icon} />{title}</a>}
    {!link && <button onClick={() => navigateStructure(id)}><Icon type={icon} />{title} {openedPaths[id] ? 'open' : 'closed'}</button>}
    {openedPaths[id] && !link && subChildren && (
      <TreeStructure
        parentPaths={[...parentPaths, id]}
        navigateStructure={navigateStructure}
        structure={subChildren}
        openedPaths={openedPaths}
        newFolder={newFolder}
      />
    )}
  </BranchItem>
);

const TreeStructure = ({ structure, navigateStructure, openedPaths, newFolder, parentPaths }: TreeStructureProps) => (
  <TreeItem>
    <button onClick={() => newFolder([...parentPaths])}>Ny mappe...{parentPaths.toString()}</button>
    {structure && Object.keys(structure).map((id) => (
      <TreeBranch
        key={id}
        id={id}
        {...structure[id]}
        navigateStructure={navigateStructure}
        parentPaths={parentPaths}
        openedPaths={openedPaths}
        newFolder={newFolder}
      />
    ))}
  </TreeItem>
);

const flattenOpenPaths = (structure: StructureType, paths: PathsType): PathsType => {
  Object.keys(structure).forEach((id) => {
    paths[id] = structure[id].isOpen || false;
    structure[id]?.subChildren && flattenOpenPaths(structure[id].subChildren, paths);
  })
  return paths;
};

const TreeStructureLogicWrapper = ({ structure }: TreeStructureProps) => {
  const [logicStructure, setLogicStructure] = useState<StructureType>(structure);
  const [openedPaths, setOpenedPaths] = useState<PathsType>(flattenOpenPaths(structure, []));
  console.log('openedPaths', openedPaths);
  const navigateStructure = (id: string) => {
    setOpenedPaths(prevPaths => {
      prevPaths[id] = !prevPaths[id];
      return { ...prevPaths };
    });
  }
  const newFolder = (parentPaths: string[]) => {
    setLogicStructure((prevStructure) => {
      const newStructure = { ...prevStructure };
      let updateItem = newStructure;
      parentPaths.forEach(id => {
        updateItem = updateItem[id].subChildren;
      });
      // Add new folder
      updateItem[uuid()] = {
        title: 'Hello',
      };
      return newStructure;
    })
  }
  // We use openedPaths instead of isOpen from now on.......
  return (
    <TreeStructure
      structure={logicStructure}
      openedPaths={openedPaths}
      navigateStructure={navigateStructure}
      newFolder={newFolder}
      parentPaths={[]}
    />
  );
};

export default TreeStructureLogicWrapper;

*/