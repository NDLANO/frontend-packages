import React from 'react';
import { TreeStructure } from '@ndla/ui';
import { uuid } from '@ndla/util';

const TreeStructureExample = () => {
  return (
    <TreeStructure
      structure={[
        {
          id: uuid(),
          title: 'Mappe navn',
          isOpen: true,
          children: [
            {
              id: uuid(),
              title: 'Mappe navn',
              isOpen: true,
              children: [
                {
                  id: uuid(),
                  title: 'Mappe navn',
                  isOpen: false,
                }
              ]
            },
            {
              id: uuid(),
              title: 'Mappe navn',
              isOpen: false,
              children: []
            },
            {
              id: uuid(),
              title: 'Mappe navn',
              isOpen: false,
              children: []
            }
          ],
        }
      ]}
    />
  )
  /*
  return (
    <TreeStructure structure={{
      '1': {
        title: '1',
        isOpen: true,
        subChildren: {
          '1.1': {
            title: '1.1',
          }
        },
      },
      '2': {
        title: '2',
        isOpen: true,
        subChildren: {
          '2.1': {
            title: '2.1',
          },
          '2.2': {
            title: '2.2',
          },
          '2.3': {
            isOpen: true,
            title: '2.3',
            subChildren: {
              '2.3.1': {
                title: '2.3.1',
                isOpen: true,
              },
            },
          }
        },
      },
    }} />
  );
  */
};

export default TreeStructureExample;
