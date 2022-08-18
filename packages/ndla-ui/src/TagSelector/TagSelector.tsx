/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { colors, fonts, misc } from '@ndla/core';
import { uuid } from '@ndla/util';
import SuggestionInput from './SuggestionInput';

const StyledLabel = styled.label`
  font-weight: ${fonts.weight.semibold};
`;

export interface TagType {
  name: string;
  id: string;
}

interface Props {
  label: string;
  tags: TagType[];
  tagsSelected: string[];
  onToggleTag: (id: string) => void;
  onCreateTag: (tagName: string) => void;
  prefix?: string;
}

const sortedTags = (tags: TagType[], selectedTags: string[]): TagType[] => {
  const returnTags = selectedTags
    .map((selectedId) => tags.find(({ id }) => selectedId === id))
    .filter((notUndefined) => notUndefined) as unknown as TagType[];
  return returnTags;
};

const getSuggestions = (tags: TagType[], inputValue: string): TagType[] => {
  if (inputValue === '') {
    return [];
  }
  const inputLowercase = inputValue.toLowerCase();
  return tags
    .filter(({ name }) => name.toLowerCase().startsWith(inputLowercase))
    .sort((a, b) => a.name.localeCompare(b.name, 'nb'));
};

const TagSelector = ({ label, tags, tagsSelected, onCreateTag, onToggleTag, prefix }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputIdRef = useRef<string>(uuid());

  useEffect(() => {
    setExpanded(false);
  }, [tagsSelected]);

  return (
    <div ref={containerRef}>
      <StyledLabel htmlFor={inputIdRef.current}>{label}</StyledLabel>
      <SuggestionInput
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const target = e.target as HTMLInputElement;
          setInputValue(target.value);
          setExpanded(false);
        }}
        suggestions={expanded ? tags : getSuggestions(tags, inputValue)}
        value={inputValue}
        onCreateTag={onCreateTag}
        onToggleTag={onToggleTag}
        setInputValue={setInputValue}
        addedTags={sortedTags(tags, tagsSelected)}
        expanded={expanded}
        setExpanded={setExpanded}
        scrollAnchorElement={containerRef}
        prefix={prefix}
      />
    </div>
  );
};

export default TagSelector;
