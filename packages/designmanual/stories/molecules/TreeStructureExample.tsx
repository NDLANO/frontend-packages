/* tslint:disable */
import React, { useState } from 'react';
import { TreeStructure, FolderStructureProps } from '@ndla/ui';
import { uuid } from '@ndla/util';

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

const generateNewFolder = (name: string, id: string) => ({
  id,
  name,
  status: 'private',
  isFavorite: false,
  data: [],
});

const TreeStructureExampleComponent = ({ label, editable }: { label: string; editable: boolean }) => {
  const [structure, setStructure] = useState<FolderStructureProps[]>(STRUCTURE_EXAMPLE());
  const [loading, setLoading] = useState(false);
  return (
    <TreeStructure
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
    <TreeStructureExampleComponent label="Editable" editable />
    <hr />
    <h1>TreeStructure non-editable:</h1>
    <TreeStructureExampleComponent label="Static" editable={false} />
  </div>
);

export default TreeStructureExample;
