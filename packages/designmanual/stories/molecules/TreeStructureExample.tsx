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

const Container = styled.div`
  margin-top: 40px;
  max-width: 600px;
`;

export const MY_FOLDERS_ID = 'MY_FOLDERS_ID';

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
    color: 'red',
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

export const STRUCTURE_EXAMPLE = (newUser?: boolean) => [
  {
    id: MY_FOLDERS_ID,
    name: 'Mine mapper',
    status: 'private',
    isFavorite: false,
    data: [
      {
        id: uuid(),
        name: 'Mine favoritter',
        status: 'private',
        isFavorite: false,
        data: newUser
          ? []
          : [
              {
                id: uuid(),
                name: 'Eksamen',
                status: 'private',
                isFavorite: false,
                data: [
                  {
                    id: uuid(),
                    name: 'Eksamens oppgaver',
                    status: 'private',
                    isFavorite: false,
                    data: [],
                  },
                  {
                    id: uuid(),
                    name: 'Eksamen 2022',
                    status: 'private',
                    isFavorite: false,
                    data: [],
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Oppgaver',
                status: 'private',
                isFavorite: false,
                data: [],
              },
            ],
      },
    ],
  },
];

export const STRUCTURE_EXAMPLE_WRAPPED = () => [
  {
    id: uuid(),
    name: 'Min NDLA',
    url: 'https://ndla.no',
    icon: <User />,
    data: [],
  },
  ...STRUCTURE_EXAMPLE(false),
  {
    id: uuid(),
    name: 'Mine tagger',
    url: 'https://ndla.no',
    icon: <HashTag />,
    data: [],
  },
];

const generateNewFolder = (name: string, id: string) => ({
  id,
  name,
  status: 'private',
  isFavorite: false,
  data: [],
  openAsDefault: true,
});

export const TreeStructureExampleComponent = ({
  structure: initalStructure,
  label,
  editable,
  framed,
  folderIdMarkedByDefault,
  openOnFolderClick,
  defaultOpenFolders,
  withDots,
}: {
  structure: FolderStructureProps[];
  label?: string;
  editable: boolean;
  framed: boolean;
  folderIdMarkedByDefault?: string;
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
        label={label}
        editable={editable}
        openOnFolderClick={openOnFolderClick}
        folderIdMarkedByDefault={folderIdMarkedByDefault}
        defaultOpenFolders={defaultOpenFolders}
        onNewFolder={async ({ value, idPaths, parentId }: { value: string; idPaths: number[]; parentId?: string }) => {
          // Just as an example, pretend to save to database and update the structure
          // eslint-disable-next-line no-console
          console.log(`Example, create new folder under ${parentId} with name ${value}`);
          setLoading(true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setLoading(false);
          const newFolderId = uuid();
          await setStructure((oldStructure) => {
            const newStructure = [...oldStructure];
            let updateFolderObject = newStructure;
            idPaths?.forEach((dataIndex, _index) => {
              updateFolderObject = updateFolderObject[dataIndex].data as FolderStructureProps[];
            });
            // toggle open
            updateFolderObject.unshift(generateNewFolder(value, newFolderId));
            return newStructure;
          });
          return newFolderId;
        }}
        data={structure}
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
      structure={STRUCTURE_EXAMPLE(true)}
      defaultOpenFolders={[MY_FOLDERS_ID]}
    />
    <h1>TreeStructure editable:</h1>
    <TreeStructureExampleComponent
      label="Editable"
      openOnFolderClick={false}
      editable
      framed
      structure={STRUCTURE_EXAMPLE(false)}
      defaultOpenFolders={[MY_FOLDERS_ID]}
    />
    <h1>TreeStructure non-editable:</h1>
    <TreeStructureExampleComponent
      label="Static"
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
      structure={STRUCTURE_EXAMPLE_WRAPPED()}
      withDots
    />
  </div>
);

export default TreeStructureExample;
