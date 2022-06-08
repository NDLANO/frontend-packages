/* tslint:disable */
import React, { useState } from 'react';
import { TreeStructure, FolderStructureProps } from '@ndla/ui';
import { uuid } from '@ndla/util';
import { User } from '@ndla/icons/common';

const STRUCTURE_EXAMPLE = () => [
  {
    id: uuid(),
    name: 'Mine favoritter',
    status: 'private',
    isFavorite: false,
    data: [],
  },
  {
    id: uuid(),
    name: 'Mine mapper',
    status: 'private',
    isFavorite: false,
    openAsDefault: true,
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

const STRUCTURE_EXAMPLE_WRAPPED = () => (
  [
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
      icon: <User />,
      data: [],
    },
  ]
)

const generateNewFolder = (name: string, id: string) => ({
  id,
  name,
  status: 'private',
  isFavorite: false,
  data: [],
});

const TreeStructureExampleComponent = ({ structure: initalStructure, label, editable, framed }: { structure: FolderStructureProps[]; label: string; editable: boolean; framed: boolean }) => {
  const [structure, setStructure] = useState<FolderStructureProps[]>(initalStructure);
  const [loading, setLoading] = useState(false);
  return (
    <TreeStructure
      framed={framed}
      label={label}
      editable={editable}
      openOnFolderClick
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
  );
};

const TreeStructureExample = () => (
  <div>
    <h1>TreeStructure editable:</h1>
    <TreeStructureExampleComponent label="Editable" editable framed structure={STRUCTURE_EXAMPLE()} />
    <hr />
    <h1>TreeStructure non-editable:</h1>
    <TreeStructureExampleComponent label="Static" editable={false} framed structure={STRUCTURE_EXAMPLE()}/>
    <hr />
    <h1>TreeStructure without frame</h1>
    <TreeStructureExampleComponent label="Static" editable={false} framed={false} structure={STRUCTURE_EXAMPLE_WRAPPED()} />
  </div>
);

export default TreeStructureExample;
