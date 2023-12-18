/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from 'react';
import styled from '@emotion/styled';
import { Meta, StoryFn } from '@storybook/react';
import TagSelector from './TagSelector';
import { defaultParameters } from '../../../../stories/defaults';

/**
 * Komponent for å tagge noe, primært tiltenkt Min NDLA
 */
export default {
  title: 'Patterns/TagSelector',
  component: TagSelector,
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  argTypes: {
    onChange: { control: false },
    onCreateTag: { control: false },
    tags: { control: false },
    selected: { control: false },
  },
  args: {
    label: 'Select tags',
    labelHidden: false,
  },
} as Meta<typeof TagSelector>;

const Container = styled.div`
  margin: 10px auto;
  max-width: 600px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
`;

export const TagSelectorStory: StoryFn<typeof TagSelector> = (args) => {
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
  const [exampleTags, setExampleTags] = useState<string[]>(dummyData);
  const [exampleTagsSelected, setExampleTagsSelected] = useState<string[]>(dummyData.slice(0, 0));

  return (
    <Container>
      <TagSelector
        label={args.label}
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

TagSelectorStory.storyName = 'TagSelect';
