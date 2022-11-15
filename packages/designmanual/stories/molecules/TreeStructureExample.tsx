/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { TreeStructure, FolderType, TreeStructureProps } from '@ndla/ui/src/TreeStructure';
import { uuid } from '@ndla/util';
import { User, HashTag } from '@ndla/icons/common';
import { flattenFolders } from '@ndla/ui/src/TreeStructure/helperFunctions';
import { FolderOutlined } from '@ndla/icons/contentType';
import { TreeStructureType } from '@ndla/ui/src/TreeStructure/types';
import { FolderInput } from '@ndla/ui';
import { colors, spacing } from '@ndla/core';

const Container = styled.div<{ type?: TreeStructureType }>`
  display: flex;
  margin-top: 40px;
  max-width: 600px;
  max-height: ${({ type }) => type !== 'navigation' && '250px'};
`;

const StyledFolderInput = styled(FolderInput)`
  border-left: ${spacing.xsmall} solid ${colors.brand.light};
  border-right: ${spacing.xsmall} solid ${colors.brand.light};
  &:focus-within {
    border-color: ${colors.brand.light};
  }
  // Not good practice, but necessary to give error message same padding as caused by border.
  & + span {
    padding: 0 ${spacing.xsmall};
  }
`;

export const MY_FOLDERS_ID = 'folders';

const targetResource: TreeStructureProps['targetResource'] = {
  id: 'test-resource',
  resourceId: 123,
  resourceType: 'type',
  tags: [],
  path: '',
  created: '',
};

export const STRUCTURE_EXAMPLE: FolderType[] = [
  {
    id: '1',
    name: 'Mine favoritter',
    status: 'private',
    breadcrumbs: [{ id: '1', name: 'Mine Favoritter' }],
    resources: [targetResource],
    subfolders: [
      {
        id: '2',
        name: 'Eksamen',
        status: 'private',
        breadcrumbs: [
          { id: '1', name: 'Mine Favoritter' },
          { id: '2', name: 'Eksamen' },
        ],
        resources: [],
        subfolders: [
          {
            id: '3',
            name: 'Eksamens oppgaver',
            status: 'private',
            breadcrumbs: [
              { id: '1', name: 'Mine Favoritter' },
              { id: '2', name: 'Eksamen' },
              { id: '3', name: 'Eksamens oppgaver' },
            ],
            resources: [],
            subfolders: [],
          },
          {
            id: '4',
            name: 'Eksamen 2022',
            status: 'private',
            breadcrumbs: [
              { id: '1', name: 'Mine Favoritter' },
              { id: '2', name: 'Eksamen' },
              { id: '4', name: 'Eksamen 2022' },
            ],
            resources: [],
            subfolders: [],
          },
        ],
      },
      {
        id: '5',
        name: 'Oppgaver',
        status: 'private',
        breadcrumbs: [
          { id: '1', name: 'Mine Favoritter' },
          { id: '5', name: 'Oppgaver' },
        ],
        resources: [],
        subfolders: [],
      },
    ],
  },
];

export const FOLDER_TREE_STRUCTURE: FolderType[] = [
  {
    id: MY_FOLDERS_ID,
    name: 'Mine mapper',
    status: 'private',
    icon: <FolderOutlined />,
    breadcrumbs: [],
    resources: [],
    subfolders: [...STRUCTURE_EXAMPLE],
  },
];

export const NAVIGATION_STRUCTURE: FolderType[] = [
  {
    id: '',
    name: 'Min NDLA',
    status: 'private',
    icon: <User />,
    isNavigation: true,
    subfolders: [],
    resources: [],
    breadcrumbs: [],
  },
  {
    id: MY_FOLDERS_ID,
    name: 'Mine mapper',
    status: 'private',
    icon: <FolderOutlined />,
    isNavigation: true,
    breadcrumbs: [],
    resources: [],
    subfolders: [],
  },
  ...STRUCTURE_EXAMPLE,
  {
    id: 'tags',
    name: 'Mine emneknagger',
    status: 'private',
    icon: <HashTag />,
    isNavigation: true,
    subfolders: [],
    resources: [],
    breadcrumbs: [],
  },
];

const generateNewFolder = (name: string, id: string, breadcrumbs: { id: string; name: string }[]): FolderType => ({
  id,
  name,
  status: 'private',
  subfolders: [],
  breadcrumbs: breadcrumbs.concat({ name, id }),
  resources: [],
});

export const TreeStructureExampleComponent = ({
  structure: initalStructure,
  label,
  type,
  onSelectFolder,
  openOnFolderClick,
  defaultOpenFolders,
  targetResource,
  onNewFolder,
}: {
  structure: FolderType[];
  label?: string;
  type: TreeStructureType;
  onSelectFolder?: (id: string) => void;
  openOnFolderClick: boolean;
  defaultOpenFolders?: string[];
  targetResource?: TreeStructureProps['targetResource'];
  onNewFolder?: boolean;
}) => {
  const [structure, setStructure] = useState<FolderType[]>(initalStructure);
  return (
    <Container type={type}>
      <TreeStructure
        targetResource={targetResource}
        onSelectFolder={onSelectFolder}
        label={label}
        type={type}
        defaultOpenFolders={defaultOpenFolders}
        newFolderInput={({ parentId, onClose, onCreate }) => (
          <NewFolder
            structure={structure}
            setStructure={setStructure}
            parentId={parentId}
            onClose={onClose}
            onCreate={onCreate}
          />
        )}
        folders={structure}
        loading={false}
      />
    </Container>
  );
};

const TreeStructureExample = () => (
  <div>
    <h1>Trestruktur velger</h1>
    <TreeStructureExampleComponent
      label="Velg mappe"
      openOnFolderClick={false}
      onSelectFolder={(id: string) => {}}
      structure={FOLDER_TREE_STRUCTURE}
      defaultOpenFolders={[MY_FOLDERS_ID]}
      targetResource={targetResource}
      onNewFolder
      type="picker"
    />
    <h1>Trestruktur navigasjon</h1>
    <TreeStructureExampleComponent
      openOnFolderClick
      type="navigation"
      defaultOpenFolders={[MY_FOLDERS_ID]}
      structure={NAVIGATION_STRUCTURE}
    />
  </div>
);

interface NewFolderProps {
  parentId: string;
  structure: FolderType[];
  setStructure: Dispatch<SetStateAction<FolderType[]>>;
  onClose?: () => void;
  onCreate?: (folder: FolderType, parentId: string) => void;
}

const NewFolder = ({ parentId, onClose, structure, setStructure, onCreate }: NewFolderProps) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSave = async () => {
    if (error) {
      return;
    }
    if (name === '') {
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoading(false);
    const flattenedStructure = flattenFolders(structure);
    const targetFolder = flattenedStructure.find((folder) => folder.id === parentId);
    const newFolderId = uuid();
    const newFolder = generateNewFolder(name, newFolderId, targetFolder?.breadcrumbs ?? []);
    if (targetFolder) {
      setStructure((oldStructure) => {
        targetFolder.subfolders.unshift(newFolder);
        return oldStructure;
      });
    } else {
      setStructure((old) => [newFolder].concat(old));
    }
    onCreate?.(newFolder, parentId);
    onClose?.();
  };

  useEffect(() => {
    if (name.length === 0) {
      setError('Navn er påkrevd');
    } else {
      setError('');
    }
  }, [name]);

  return (
    <StyledFolderInput
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
      labelHidden
      name="name"
      label={'Mine mapper'}
      placeholder={'Skriv inn mappenavn'}
      loading={loading}
      onClose={onClose}
      onSave={onSave}
      error={error}
      value={name}
      onChange={(e) => {
        if (!loading) {
          setName(e.currentTarget.value);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose?.();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          onSave();
        }
      }}
    />
  );
};

export default TreeStructureExample;
