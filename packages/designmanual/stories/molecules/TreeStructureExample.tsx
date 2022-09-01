/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { useTranslation, TFunction } from 'react-i18next';
import { TreeStructure, FolderType, TreeStructureMenuProps, TreeStructureProps } from '@ndla/ui';
import { uuid } from '@ndla/util';
import { User, HashTag } from '@ndla/icons/common';
import { Pencil, TrashCanOutline } from '@ndla/icons/action';
import { flattenFolders } from '@ndla/ui/src/TreeStructure/helperFunctions';
import { FolderOutlined } from '@ndla/icons/contentType';
import { TreeStructureType } from '@ndla/ui/src/TreeStructure/types';

const Container = styled.div<{ type: TreeStructureType }>`
  display: flex;
  margin-top: 40px;
  max-width: 600px;
  overflow: hidden;
  max-height: ${({ type }) => type !== 'navigation' && '250px'};
`;

export const MY_FOLDERS_ID = 'folders';

const menuItems = (t: TFunction): TreeStructureMenuProps[] => [
  {
    icon: <Pencil />,
    text: t('treeStructure.folderChildOptions.edit'),
    onClick: (e: MouseEvent<HTMLDivElement> | undefined, folder: FolderType) => {
      console.log('Endre tekst på', folder.id); // eslint-disable-line no-console
      e?.preventDefault();
      return;
    },
  },
  {
    icon: <TrashCanOutline />,
    text: t('treeStructure.folderChildOptions.delete'),
    type: 'danger',
    onClick: (e: MouseEvent<HTMLDivElement> | undefined, folder: FolderType) => {
      console.log('Sletter', folder.id); // eslint-disable-line no-console
      e?.preventDefault();
      return;
    },
  },
];

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
  framed,
  onSelectFolder,
  openOnFolderClick,
  defaultOpenFolders,
  withDots,
  targetResource,
  onNewFolder,
}: {
  structure: FolderType[];
  label?: string;
  type: TreeStructureType;
  framed: boolean;
  onSelectFolder?: (id: string) => void;
  openOnFolderClick: boolean;
  defaultOpenFolders?: string[];
  withDots?: boolean;
  targetResource?: TreeStructureProps['targetResource'];
  onNewFolder?: boolean;
}) => {
  const { t } = useTranslation();
  const [structure, setStructure] = useState<FolderType[]>(initalStructure);
  const [loading, setLoading] = useState(false);
  return (
    <Container type={type}>
      <TreeStructure
        targetResource={targetResource}
        menuItems={withDots ? menuItems(t) : undefined}
        framed={framed}
        onSelectFolder={onSelectFolder}
        label={label}
        type={type}
        openOnFolderClick={openOnFolderClick}
        defaultOpenFolders={defaultOpenFolders}
        // @ts-ignore
        onNewFolder={
          onNewFolder &&
          (async (name: string, parentId: string) => {
            // A funky implementation to imitate backend updates of structure
            // eslint-disable-next-line no-console
            console.log(`Example, create new folder under ${parentId} with name ${name}`);
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setLoading(false);
            const flattenedStructure = flattenFolders(structure);
            const targetFolder = flattenedStructure.find((folder) => folder.id === parentId);
            const newFolderId = uuid();
            if (targetFolder) {
              const newFolder = generateNewFolder(name, newFolderId, targetFolder.breadcrumbs);

              setStructure((oldStructure) => {
                if (targetFolder) {
                  targetFolder.subfolders.unshift(newFolder);
                }
                return oldStructure;
              });
              return generateNewFolder(name, newFolderId, targetFolder.breadcrumbs);
            }
          })
        }
        folders={structure}
        loading={loading}
      />
    </Container>
  );
};

const TreeStructureExample = () => (
  <div>
    <h1>TreeStructure editable:</h1>
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
    <h1>TreeStructure non-editable:</h1>
    <TreeStructureExampleComponent
      label="Velg mappe"
      onSelectFolder={(id: string) => {}}
      openOnFolderClick
      structure={FOLDER_TREE_STRUCTURE}
      defaultOpenFolders={[MY_FOLDERS_ID]}
      targetResource={targetResource}
      withDots
    />
    <h1>TreeStructure without frame</h1>
    <TreeStructureExampleComponent
      openOnFolderClick
      type="navigation"
      defaultOpenFolders={[MY_FOLDERS_ID]}
      structure={NAVIGATION_STRUCTURE}
      withDots
    />
  </div>
);

export default TreeStructureExample;
