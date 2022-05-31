import React, { useState } from 'react';
import { TreeStructure } from '@ndla/ui';
import { uuid } from '@ndla/util';

const STRUCTURE_EXAMPLE = [
  {
    id: uuid(),
    name: 'Mappe navn',
    isOpen: true,
    children: [
      {
        id: uuid(),
        name: 'Mappe navn',
        isOpen: true,
        children: [
          {
            id: uuid(),
            name: 'Mappe navn',
            isOpen: false,
          }
        ]
      },
      {
        id: uuid(),
        name: 'Mappe navn',
        isOpen: false,
        children: []
      },
      {
        id: uuid(),
        name: 'Mappe navn',
        isOpen: false,
        children: [],
        selectedByDefault: true,
      }
    ],
  }
];


const TreeStructureExample = () => {
  const [structure, setStructure] = useState(STRUCTURE_EXAMPLE);
  const [loading, setLoading] = useState(false);
  return (
    <TreeStructure
      onCreateFolder={async ({ parentId, name }: { parentId: string; name: string }) => {
        await setLoading(true);
        await setStructure((oldStructure) => {
          return [...oldStructure, {
            id: uuid(),
            name,
            isOpen: false,
            children: [],
            selectedByDefault: true,
          }]
        });
      }}
      structure={structure}
      loading={loading}
    />
  );
};

export default TreeStructureExample;
