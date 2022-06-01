import React, { useState } from 'react';
import { TreeStructure } from '@ndla/ui';
import { uuid } from '@ndla/util';

const STRUCTURE_EXAMPLE = [
  {
    id: uuid(),
    name: 'Mine favoritter',
    status: 'private',
    isFavorite: false,
    data: [],
  },
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
];

const generateNewFolder = (name: string, id: string) => ({
  id,
  name,
  status: 'private',
  isFavorite: false,
  data: [],
});

const TreeStructureExample = () => {
  const [structure, setStructure] = useState(STRUCTURE_EXAMPLE);
  const [loading, setLoading] = useState(false);
  return (
    <TreeStructure
      label="Hello from other side"
      editable
      onNewFolder={async ({ value, idPaths, parentId }: { value: string; idPaths: number[]; parentId?: string }) => {
        // Just as an example, pretend to save to database and update the structure
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
        const newFolderId = uuid();
        await setStructure((oldStructure) => {
          const newStructure = [...oldStructure];
          let updateFolderObject = newStructure;
          idPaths?.forEach((dataIndex, _index) => {
            updateFolderObject = updateFolderObject[dataIndex].data;
          });
          // toggle open
          updateFolderObject.unshift(generateNewFolder(value, newFolderId));
          return newStructure;
        });
        return newFolderId;
      }}
      onToggleOpen={(idPaths: number[]) => {
        setStructure((oldStructure) => {
          const newStructure = [...oldStructure];
          let updateFolderObject = newStructure;
          idPaths.forEach((dataIndex, _index) => {
            if (_index === 0) {
              updateFolderObject = updateFolderObject[dataIndex];
            } else {
              updateFolderObject = updateFolderObject.data[dataIndex];
            }
          });
          // toggle open
          updateFolderObject.isOpen = !updateFolderObject.isOpen;
          return newStructure;
        });
      }}
      data={structure}
      loading={loading}
    />
  );
};

export default TreeStructureExample;
