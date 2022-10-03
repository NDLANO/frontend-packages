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

const tags = dummyData.map((tag) => ({ value: tag, label: tag }));

const Container = styled.div`
  margin: 10px auto;
  max-width: 600px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
`;

const TagSelectorExample = () => {
  const { t } = useTranslation();
  const [exampleTags, setExampleTags] = useState<readonly TagType[]>(tags);
  const [exampleTagsSelected, setExampleTagsSelected] = useState<readonly TagType[]>(tags.slice(0, 0));

  return (
    <Container>
      <TagSelector
        label={t('tagSelector.label')}
        tags={exampleTags}
        selected={exampleTagsSelected}
        onChange={(tags: readonly TagType[]) => {
          setExampleTagsSelected(tags);
        }}
        onCreateTag={(newTagName: string) => {
          setExampleTags((prevTags) => [...prevTags, { value: newTagName, label: newTagName }]);
          setExampleTagsSelected((prevSelectedTags) => [...prevSelectedTags, { value: newTagName, label: newTagName }]);
        }}
      />
    </Container>
  );
};

export default TagSelectorExample;
