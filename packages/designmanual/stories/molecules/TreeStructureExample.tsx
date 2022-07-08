/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, ReactNode } from 'react';
import styled from '@emotion/styled';
import { useTranslation, TFunction } from 'react-i18next';
import { TreeStructure, FolderStructureProps } from '@ndla/ui';
import { uuid } from '@ndla/util';
import { MenuButton, MenuItemProps } from '@ndla/button';
import { User, HashTag } from '@ndla/icons/common';
import { Pencil, TrashCanOutline } from '@ndla/icons/action';
import { flattenFolders } from '@ndla/ui/src/TreeStructure/helperFunctions';

const Container = styled.div`
  margin-top: 40px;
  max-width: 600px;
`;

export const MY_FOLDERS_ID = 'folders';

const menuItemsForFolderChild = (id: string, editText: string, deleteText: string): MenuItemProps[] => [
  {
    icon: <Pencil />,
    text: editText,
    onClick: (e) => {
      console.log(editText, id); // eslint-disable-line no-console
      e?.preventDefault();
      return;
    },
  },
  {
    icon: <TrashCanOutline />,
    text: deleteText,
    type: 'danger',
    onClick: (e) => {
      console.log(deleteText, id); // eslint-disable-line no-console
      e?.preventDefault();
      return;
    },
  },
];

const folderChild =
  (t: TFunction) =>
  (id: string, tabIndex: number): ReactNode =>
    (
      <MenuButton
        size="xsmall"
        menuItems={menuItemsForFolderChild(
          id,
          t('treeStructure.folderChildOptions.edit'),
          t('treeStructure.folderChildOptions.delete'),
        )}
        tabIndex={tabIndex}
      />
    );

export const STRUCTURE_EXAMPLE = (newUser?: boolean): FolderStructureProps[] => [
  {
    id: MY_FOLDERS_ID,
    name: 'Mine mapper',
    status: 'private',
    isFavorite: false,
    subfolders: [
      {
        id: uuid(),
        name: 'Mine favoritter',
        status: 'private',
        isFavorite: false,
        subfolders: newUser
          ? []
          : [
              {
                id: uuid(),
                name: 'Eksamen',
                status: 'private',
                isFavorite: false,
                subfolders: [
                  {
                    id: uuid(),
                    name: 'Eksamens oppgaver',
                    status: 'private',
                    isFavorite: false,
                    subfolders: [],
                  },
                  {
                    id: uuid(),
                    name: 'Eksamen 2022',
                    status: 'private',
                    isFavorite: false,
                    subfolders: [],
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Oppgaver',
                status: 'private',
                isFavorite: false,
                subfolders: [],
              },
            ],
      },
    ],
  },
];

export const STRUCTURE_EXAMPLE_WRAPPED = (): FolderStructureProps[] => [
  {
    id: '',
    name: 'Min NDLA',
    icon: <User />,
    subfolders: [],
  },
  ...STRUCTURE_EXAMPLE(false),
  {
    id: 'tags',
    name: 'Mine tagger',
    icon: <HashTag />,
    subfolders: [],
  },
];

const generateNewFolder = (name: string, id: string) => ({
  id,
  name,
  status: 'private',
  isFavorite: false,
  subfolders: [],
  openAsDefault: true,
});

export const TreeStructureExampleComponent = ({
  structure: initalStructure,
  label,
  editable,
  framed,
  onSelectFolder,
  openOnFolderClick,
  defaultOpenFolders,
  withDots,
}: {
  structure: FolderStructureProps[];
  label?: string;
  editable: boolean;
  framed: boolean;
  onSelectFolder?: (id: string) => void;
  openOnFolderClick: boolean;
  defaultOpenFolders?: string[];
  withDots?: boolean;
}) => {
  const { t } = useTranslation();
  const [structure, setStructure] = useState<FolderStructureProps[]>(initalStructure);
  const [loading, setLoading] = useState(false);
  return (
    <Container>
      <TreeStructure
        folderChild={withDots ? folderChild(t) : undefined}
        framed={framed}
        onSelectFolder={onSelectFolder}
        label={label}
        editable={editable}
        openOnFolderClick={openOnFolderClick}
        defaultOpenFolders={defaultOpenFolders}
        onNewFolder={async (name: string, parentId: string) => {
          // Just as an example, pretend to save to database and update the structure
          // eslint-disable-next-line no-console
          console.log(`Example, create new folder under ${parentId} with name ${name}`);
          setLoading(true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setLoading(false);
          const newFolderId = uuid();
          setStructure((oldStructure) => {
            const flattenedStructure = flattenFolders(oldStructure);
            const targetFolder = flattenedStructure.find((folder) => folder.id === parentId);
            if (targetFolder) {
              targetFolder.subfolders.unshift(generateNewFolder(name, newFolderId));
            }
            return oldStructure;
          });
          return newFolderId;
        }}
        folders={structure}
        loading={loading}
      />
    </Container>
  );
};

const TreeStructureExample = () => (
  <div>
    <h1>TreeStructure new user:</h1>
    <TreeStructureExampleComponent
      openOnFolderClick={false}
      label="Editable"
      editable
      framed
      onSelectFolder={(id: string) => {}}
      structure={STRUCTURE_EXAMPLE(true)}
      defaultOpenFolders={[MY_FOLDERS_ID]}
    />
    <h1>TreeStructure editable:</h1>
    <TreeStructureExampleComponent
      label="Editable"
      openOnFolderClick={false}
      editable
      framed
      onSelectFolder={(id: string) => {}}
      structure={STRUCTURE_EXAMPLE(false)}
      defaultOpenFolders={[MY_FOLDERS_ID]}
    />
    <h1>TreeStructure non-editable:</h1>
    <TreeStructureExampleComponent
      label="Static"
      onSelectFolder={(id: string) => {}}
      openOnFolderClick
      editable={false}
      framed
      structure={STRUCTURE_EXAMPLE(false)}
      defaultOpenFolders={[MY_FOLDERS_ID]}
      withDots
    />
    <h1>TreeStructure without frame</h1>
    <TreeStructureExampleComponent
      label="Static"
      editable={false}
      framed={false}
      openOnFolderClick
      defaultOpenFolders={[MY_FOLDERS_ID]}
      structure={STRUCTURE_EXAMPLE_WRAPPED()}
      withDots
    />
  </div>
);

export default TreeStructureExample;
