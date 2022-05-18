import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button, { IconButtonDualStates } from '@ndla/button';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';
import { spacing } from '@ndla/core';
// @ts-ignore
import { Input } from '@ndla/forms';

export interface TagProp {
  name: string;
  id: string;
};

interface Props {
  tags: TagProp[];
  tagsSelected: string[];
  onTagsUpdate: (tags: string[]) => void;
  onCreateTag: (tagName: string) => void;
}

const TagsContainer = styled.div`
  max-height: 16rem;
  overflow-y: scroll;
  display: flex;
  gap: ${spacing.xsmall}
`;

const TagSelector = ({ tags, tagsSelected, onCreateTag, onTagsUpdate }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [showAllTags, setShowAllTags] = useState(false);
  return (
    <div>
      <Input
        placeholder="legg til"
        onChange={(e: KeyboardEvent) => {
          const target = e.target as HTMLInputElement;
          setInputValue(target.value)}
        }
        onKeyDown={(e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            onCreateTag(inputValue);
            setInputValue('');
          }
        }}
        value={inputValue}
      />
      <IconButtonDualStates
        ariaLabelActive="Se alle tagger"
        ariaLabelInActive="Skjul alle tagger"
        active={showAllTags}
        inactiveIcon={<ChevronDown />}
        activeIcon={<ChevronUp />}
        size="small"
        onClick={() => setShowAllTags(!showAllTags)}
      />
      {showAllTags && <TagsContainer>
        {tags.map(({ name, id }) => {
          const tagIsSelected = tagsSelected.some((idSelected) => id === idSelected);
          return (
            <Button
              onClick={() => onTagsUpdate(tagIsSelected ? tagsSelected.filter((idSelected) => id !== idSelected) : [...tagsSelected, id])}
              lighter={!tagIsSelected}
              borderShape='rounded'
              key={id}
              size="xsmall"
            >
              # {name}
            </Button>
          );
        })}
      </TagsContainer>}
    </div>
  );
};

export default TagSelector;
