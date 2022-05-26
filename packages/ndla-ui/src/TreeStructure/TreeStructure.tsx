/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { Folder } from '@ndla/icons/editor';
import { ChevronRight } from '@ndla/icons/common';
import { uuid } from '@ndla/util';
import { EditWrapper } from './StyledComponents';

const Arrow = styled(ChevronRight)`
  transform: rotate(${({ open }) => open ? '90' : '0'}deg);
`;

interface TreeStructureItem {
  id: string;
  title: string;
  isOpen?: boolean;
  children?: TreeStructureItem[];
};

interface TreeStructureProps {
  structure: TreeStructureItem[];
};

const EditNewFolder = ({ id, title, onSave }) => {
  const [value, setValue] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

  return (
    <EditWrapper>
      <input
        ref={inputRef}
        value={value}
        onBlur={() => onSave({ value, id, cancel: true })}
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
    </EditWrapper>
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
      <button onClick={() => onCreateFolder(parentId)}>new folder</button>
      {newFoldersForParent.map(({ id, title, editing }) => (
        (editing ? <EditNewFolder key={id} id={id} title={title} onSave={onSaveEditingFolderName} /> : (
          <div key={id}>
            {title}
          </div>
        ))
      ))}
      {structure.map(({ id, title, children }) => {
        const isOpen = openItems.includes(id);
        return (
          <li
            key={id}
          >
            <button onClick={() => onToggleFolder(id)}>
              <Arrow open={isOpen} /> {title}
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
