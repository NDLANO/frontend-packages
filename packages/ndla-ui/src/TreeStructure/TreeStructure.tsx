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
import { EditWrapper } from './StyledComponents';
import { uuid } from '@ndla/util';

const Arrow = styled(ChevronRight)`
  transform: rotate(${({ open }) => open ? '90' : '0'}deg);
`;

interface NewFolderProp {
  id: string;
  name: string;
  parentId: string;
};

interface TreeStructureItem {
  id: string;
  name: string;
  isOpen?: boolean;
  children?: TreeStructureItem[];
  selectedByDefault?: boolean;
};

interface TreeStructureProps {
  structure: TreeStructureItem[];
  onCreateFolder: (onCreateFolderParametre: { parentId: string, name: string }) => void;
  selectedFolder?: string;
};

interface CreateFolderInputProps {
  parentId: string;
  onSave: (props: { name: string, parentId: string, cancel: boolean })=> void;
}

const CreateFolderInput = ({ parentId, onSave }: CreateFolderInputProps) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

  return (
    <EditWrapper>
      <input
        ref={inputRef}
        value={value}
        onBlur={() => onSave({ name: value, parentId, cancel: true })}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter' || e.key === 'Tab' || e.key === 'Escape') {
            onSave({ name: value, parentId, cancel: e.key === 'Escape' });
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
  selectedFolder,
  onSelectFolder,
  onCreateNewFolder,
  newFolder,
  onSaveEditingFolderName,
  newFolderParentId,
}: {
  parentId: string,
  structure: TreeStructureItem[],
  openItems: string[],
  onToggleFolder: (id: string) => void,
  onSelectFolder: (id: string) => void,
  onCreateNewFolder: (parentId: string) => void,
  selectedFolder?: string,
  newFolder?: NewFolderProp,
}) => {
  const ButtonIsNowLink = 'a'
  return (
    <ul>
      {newFolder?.parentId !== parentId ? (
        <button onClick={() => onCreateNewFolder(parentId)}>new folder</button>)
       : (
        <CreateFolderInput
          key={newFolderParentId}
          parentId={newFolderParentId}
          onSave={onSaveEditingFolderName}
        />
      )}
      {structure.map(({ id, name, children }) => {
        const isOpen = openItems.includes(id);
        return (
          <li
            key={id}
          >
            <>
              <button onClick={() => onToggleFolder(id)}>
                <Arrow open={isOpen} />
              </button>
              <ButtonIsNowLink onClick={() => onSelectFolder(id)}>
                {selectedFolder === id && !newFolderParentId && 'yes'}{name}
              </ButtonIsNowLink>
            </>
            {isOpen && (
              <TreeContent
                parentId={id}
                structure={children || []}
                openItems={openItems}
                onToggleFolder={onToggleFolder}
                selectedFolder={selectedFolder}
                onSelectFolder={onSelectFolder}
                onCreateNewFolder={onCreateNewFolder}
                newFolder={newFolder}
                onSaveEditingFolderName={onSaveEditingFolderName}
                newFolder={newFolder}
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

const TreeStructure = ({ structure, onCreateFolder, selectedFolder: defaultSelectFolder }: TreeStructureProps) => {
  const [selectedFolder, setSelectedFolder] = useState<string | undefined>(undefined);
  const [openItems, setOpenItems] = useState<string[]>(flattenOpenStructure(structure));
  const [newFolder, setNewFolder] = useState<NewFolderProp | undefined>(undefined);

  console.log('ok', structure);
  useEffect(() => {
    let selectedByDefault = undefined;
    const findSelectedByDefault = (loopStructure) => {
      console.log('loop it', loopStructure);
      return (
        loopStructure.forEach(({ selectedByDefault, children, id }) => {
          if (selectedByDefault) {
            console.log('FOUND IT', id);
            selectedByDefault = id;
            break;
          }
          findSelectedByDefault(children);
        })
      );
    };
    findSelectedByDefault(structure);
    console.log({ selectedByDefault });
    setSelectedFolder(selectedByDefault);
  }, [structure]);

  const onToggleFolder = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  const onSaveEditingFolderName = ({ name, parentId, cancel }: { name: string, parentId: string, cancel: boolean }) => {
    if (!cancel && name !== '') {
      onCreateFolder({ parentId, name });
    }
    setNewFolder(undefined);
  };

  const onSelectFolder = (id: string) => {
    setSelectedFolder(id);
  };

  const onCreateNewFolder = (parentId: string) => {
    if (newFolder?.id !== parentId) {
      setNewFolder({
        parentId,
        name: '',
        id: uuid(),
      });
    }
  }

  return (
    <>
    <div>
      selectedFolder: {selectedFolder}
    </div>
      <TreeContent
        structure={structure}
        openItems={openItems}
        selectedFolder={selectedFolder}
        onSelectFolder={onSelectFolder}
        onToggleFolder={onToggleFolder}
        onCreateNewFolder={onCreateNewFolder}
        newFolder={newFolder}
        onSaveEditingFolderName={onSaveEditingFolderName}
        parentId={'root'}
      />
    </>
  );
};

export default TreeStructure;
