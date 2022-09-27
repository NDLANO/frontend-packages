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
  { value: 'Cat', label: 'Cat' },
  { value: 'Dog', label: 'Dog' },
  { value: 'Fish', label: 'Fish' },
  { value: 'Dinosaur', label: 'Dinosaur' },
  { value: 'Frog', label: 'Frog' },
  { value: 'Dragon', label: 'Dragon' },
  { value: 'Lion', label: 'Lion' },
  { value: 'Snake', label: 'Snake' },
  { value: 'Alligator', label: 'Alligator' },
  { value: 'Antelope', label: 'Antelope' },
  { value: 'Bear', label: 'Bear' },
  { value: 'Baboon', label: 'Baboon' },
  { value: 'Kangaroo', label: 'Kangaroo' },
  { value: 'Scorpion', label: 'Scorpion' },
  { value: 'Goose', label: 'Goose' },
  { value: 'Fox', label: 'Fox' },
  { value: 'Donkey', label: 'Donkey' },
  { value: 'Chicken', label: 'Chicken' },
];

const Container = styled.div`
  margin: 10px auto;
  max-width: 600px;
`;

const TagSelectorExample = () => {
  const { t } = useTranslation();
  const [exampleTags, setExampleTags] = useState<readonly TagType[]>(dummyData);
  const [exampleTagsSelected, setExampleTagsSelected] = useState<readonly TagType[]>(dummyData.slice(0, 2));

  return (
    <Container>
      <TagSelector
        prefix="#"
        label={t('tagSelector.label')}
        tags={exampleTags}
        selected={exampleTagsSelected}
        onChange={(tags: readonly TagType[]) => {
          console.log(tags);
          setExampleTagsSelected(tags);
        }}
        onCreateTag={(name: string) => {
          setExampleTags((prevTags) => [...prevTags, { value: name, label: name }]);
          setExampleTagsSelected((prevSelectedTags) => [...prevSelectedTags, { value: name, label: name }]);
        }}
      />
    </Container>
  );
};

export default TagSelectorExample;
