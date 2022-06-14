/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { TreeStructure, FolderStructureProps } from '@ndla/ui';
import { uuid } from '@ndla/util';
import { User, HashTag } from '@ndla/icons/common';

const Container = styled.div`
  margin: 40px auto;
  max-width: 600px;
`;

export const STRUCTURE_EXAMPLE = (firstId?: string) => [
  {
    id: uuid(),
    name: 'Mine mapper',
    status: 'private',
    isFavorite: false,
    openAsDefault: false,
    data: [
      {
        id: uuid(),
        name: 'Matematikk',
        status: 'private',
        isFavorite: false,
        data: [
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

const STRUCTURE_EXAMPLE_WRAPPED = () => [
  {
    id: uuid(),
    name: 'Min NDLA',
    url: 'https://ndla.no',
    icon: <User />,
    data: [],
  },
  ...STRUCTURE_EXAMPLE(),
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
}: {
  structure: FolderStructureProps[];
  label: string;
  editable: boolean;
  framed: boolean;
  folderIdMarkedByDefault?: string;
  openOnFolderClick: boolean;
}) => {
  const [structure, setStructure] = useState<FolderStructureProps[]>(initalStructure);
  const [loading, setLoading] = useState(false);
  return (
    <Container>
      <TreeStructure
        framed={framed}
        label={label}
        editable={editable}
        openOnFolderClick={openOnFolderClick} // False is chrome bookmark way, might not be the best solution for phones? (Tiny hitarea?)
        folderIdMarkedByDefault={folderIdMarkedByDefault}
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
      structure={[
        {
          id: uuid(),
          name: 'Mine mapper',
          status: 'private',
          isFavorite: false,
          openAsDefault: false,
          data: [],
        },
      ]}
    />
    <h1>TreeStructure editable:</h1>
    <TreeStructureExampleComponent
      label="Editable"
      openOnFolderClick={false}
      editable
      framed
      structure={STRUCTURE_EXAMPLE()}
    />
    <hr />
    <h1>TreeStructure non-editable:</h1>
    <TreeStructureExampleComponent
      label="Static"
      openOnFolderClick
      editable={false}
      framed
      structure={STRUCTURE_EXAMPLE()}
    />
    <hr />
    <h1>TreeStructure without frame</h1>
    <TreeStructureExampleComponent
      label="Static"
      editable={false}
      framed={false}
      openOnFolderClick
      structure={STRUCTURE_EXAMPLE_WRAPPED()}
    />
  </div>
);

export default TreeStructureExample;
