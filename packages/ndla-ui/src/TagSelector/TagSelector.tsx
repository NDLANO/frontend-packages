/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, useRef, useEffect } from 'react';
import { spacingUnit } from '@ndla/core';
import SuggestionInput from './SuggestionInput';

const DEFAULT_DROPDOWN_MAXHEIGHT = '240px';

export interface TagProp {
  name: string;
  id: string;
}

interface Props {
  label: string;
  tags: TagProp[];
  tagsSelected: string[];
  onToggleTag: (id: string) => void;
  onCreateTag: (tagName: string) => void;
}

const sortedTags = (tags: TagProp[], selectedTags: string[], selected: boolean): TagProp[] =>
  tags
    .filter(({ id }) => selectedTags.some((idSelected) => (idSelected === id) === selected))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

const getSuggestions = (tags: TagProp[], inputValue: string): TagProp[] => {
  if (inputValue === '') {
    return [];
  }
  const inputLowercase = inputValue.toLowerCase();
  return tags
    .filter(({ name }) => name.toLowerCase().startsWith(inputLowercase))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
};

const TagSelector = ({ label, tags, tagsSelected, onCreateTag, onToggleTag }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [dropdownMaxHeight, setDropdownMaxHeight] = useState(DEFAULT_DROPDOWN_MAXHEIGHT);
  const containerRef = useRef<HTMLDivElement>(null);

  const INPUT_ID = 'INPUT_ID';

  useEffect(() => {
    setExpanded(false);
  }, [tagsSelected]);

  useEffect(() => {
    const setMaxDropdownMaxHeight = () => {
      if (containerRef.current && typeof window) {
        // Calculate distance from bottom of container to bottom of viewport
        const containerBottom = containerRef.current.getBoundingClientRect().bottom;
        const viewportBottom = window.innerHeight;
        const maxDropdownHeight = viewportBottom - containerBottom;
        setDropdownMaxHeight(`${maxDropdownHeight - spacingUnit}px`);
      }
    };
    if (typeof window) {
      if (expanded) {
        setMaxDropdownMaxHeight();
        window.addEventListener('resize', setMaxDropdownMaxHeight);
      } else {
        window.removeEventListener('resize', setMaxDropdownMaxHeight);
      }
    }
    return () => {
      typeof window && window.removeEventListener('resize', setMaxDropdownMaxHeight);
    };
  }, [expanded]);

  return (
    <div ref={containerRef}>
      <label htmlFor={INPUT_ID}>{label}</label>
      <SuggestionInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const target = e.target as HTMLInputElement;
          setInputValue(target.value);
          setExpanded(false);
        }}
        tags={tags.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))}
        suggestions={expanded ? tags : getSuggestions(tags, inputValue)}
        value={inputValue}
        onCreateTag={onCreateTag}
        onToggleTag={onToggleTag}
        setInputValue={setInputValue}
        addedTags={sortedTags(tags, tagsSelected, true)}
        expanded={expanded}
        setExpanded={setExpanded}
        dropdownMaxHeight={dropdownMaxHeight}
        name={INPUT_ID}
        id={INPUT_ID}
      />
    </div>
  );
};

export default TagSelector;
