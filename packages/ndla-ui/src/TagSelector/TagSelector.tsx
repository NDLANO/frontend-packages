/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, useRef, useEffect } from 'react';
import { spacingUnit } from '@ndla/core';
import { uuid } from '@ndla/util';
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
  prefix?: string | React.ReactNode;
  inline?: boolean;
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

const TagSelector = ({ label, tags, tagsSelected, onCreateTag, onToggleTag, inline }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [dropdownMaxHeight, setDropdownMaxHeight] = useState(DEFAULT_DROPDOWN_MAXHEIGHT);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputIdRef = useRef<string>(uuid());

  useEffect(() => {
    setExpanded(false);
  }, [tagsSelected]);

  useEffect(() => {
    const setMaxDropdownMaxHeight = () => {
      if (!inline && containerRef.current && typeof window !== 'undefined') {
        // Calculate distance from bottom of container to bottom of viewport
        const containerBottom = containerRef.current.getBoundingClientRect().bottom;
        const viewportBottom = document.documentElement.scrollHeight;
        const maxDropdownHeight = viewportBottom - containerBottom;
        setDropdownMaxHeight(`${maxDropdownHeight - spacingUnit}px`);
      }
    };
    if (!inline && typeof window !== 'undefined') {
      if (expanded) {
        setMaxDropdownMaxHeight();
        window.addEventListener('resize', setMaxDropdownMaxHeight);
      } else {
        window.removeEventListener('resize', setMaxDropdownMaxHeight);
      }
    }
    return () => {
      typeof window !== 'undefined' && window.removeEventListener('resize', setMaxDropdownMaxHeight);
    };
  }, [expanded, inline]);

  return (
    <div ref={containerRef}>
      <label htmlFor={inputIdRef.current}>{label}</label>
      <SuggestionInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const target = e.target as HTMLInputElement;
          setInputValue(target.value);
          setExpanded(false);
        }}
        suggestions={expanded ? tags : getSuggestions(tags, inputValue)}
        value={inputValue}
        onCreateTag={onCreateTag}
        onToggleTag={onToggleTag}
        setInputValue={setInputValue}
        addedTags={sortedTags(tags, tagsSelected, true)}
        expanded={expanded}
        setExpanded={setExpanded}
        dropdownMaxHeight={dropdownMaxHeight}
        name={inputIdRef.current}
        id={inputIdRef.current}
        inline={inline}
      />
    </div>
  );
};

export default TagSelector;
