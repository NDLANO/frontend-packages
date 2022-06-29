/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { TagType, TagSelector } from '@ndla/ui';
import { useTranslation } from 'react-i18next';

const dummyData = [
  { id: '1', name: 'Cat' },
  { id: '2', name: 'Dog' },
  { id: '3', name: 'Fish' },
  { id: '4', name: 'Dinosaur' },
  { id: '5', name: 'Frog' },
  { id: '6', name: 'Dragon' },
  { id: '7', name: 'Lion' },
  { id: '8', name: 'Snake' },
  { id: '9', name: 'Alligator' },
  { id: '10', name: 'Antelope' },
  { id: '11', name: 'Bear' },
  { id: '12', name: 'Baboon' },
  { id: '13', name: 'Kangaroo' },
  { id: '14', name: 'Scorpion' },
  { id: '15', name: 'Goose' },
  { id: '16', name: 'Fox' },
  { id: '17', name: 'Donkey' },
  { id: '18', name: 'Chicken' },
];

const Container = styled.div`
  margin: 40px auto;
  max-width: 600px;
`;

const TagSelectorExample = () => {
  const { t } = useTranslation();
  const [exampleTags, setExampleTags] = useState<TagType[]>(dummyData);
  const [exampleTagsSelected, setExampleTagsSelected] = useState(['6']);
  return (
    <Container>
      <TagSelector
        prefix="#"
        label={t('tagSelector.label')}
        tags={exampleTags}
        tagsSelected={exampleTagsSelected}
        onToggleTag={(id: string) => {
          setExampleTagsSelected((prevSelected) => {
            if (prevSelected.find((existingId) => existingId === id)) {
              // Already part of tags. Remove it.
              return prevSelected.filter((existingId) => existingId !== id);
            }
            // Not selected, add.
            return [...prevSelected, id];
          });
        }}
        onCreateTag={(newTagName: string) => {
          const newId = Math.random().toString();
          setExampleTags((prevTags) => [...prevTags, { id: newId, name: newTagName }]);
          setExampleTagsSelected((prevSelectedTags) => [...prevSelectedTags, newId]);
        }}
      />
    </Container>
  );
};

export default TagSelectorExample;
