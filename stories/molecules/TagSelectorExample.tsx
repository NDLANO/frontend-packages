/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from 'react';
import styled from '@emotion/styled';
import { TagSelector } from '@ndla/ui';
import { useTranslation } from 'react-i18next';

const dummyData = [
  'Cat',
  'Dog',
  'Fish',
  'Dinosaur',
  'Frog',
  'Dragon',
  'Lion',
  'Snake',
  'Alligator',
  'Antelope',
  'Bear',
  'Baboon',
  'Kangaroo',
  'Scorpion',
  'Goose',
  'Fox',
  'Donkey',
  'Chicken',
];

const Container = styled.div`
  margin: 10px auto;
  max-width: 600px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
`;

const TagSelectorExample = () => {
  const { t } = useTranslation();
  const [exampleTags, setExampleTags] = useState<string[]>(dummyData);
  const [exampleTagsSelected, setExampleTagsSelected] = useState<string[]>(dummyData.slice(0, 0));

  return (
    <Container>
      <TagSelector
        label={t('tagSelector.label')}
        tags={exampleTags}
        selected={exampleTagsSelected}
        onChange={(tags: string[]) => {
          setExampleTagsSelected(tags);
        }}
        onCreateTag={(newTagName: string) => {
          setExampleTags((prevTags) => [...prevTags, newTagName]);
          setExampleTagsSelected((prevSelectedTags) => [...prevSelectedTags, newTagName]);
        }}
      />
    </Container>
  );
};

export default TagSelectorExample;
