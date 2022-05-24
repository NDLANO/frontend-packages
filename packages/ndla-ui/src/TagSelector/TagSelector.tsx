/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import Button, { IconButtonDualStates } from '@ndla/button';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';
import { Check } from '@ndla/icons/editor';
import { spacing, spacingUnit, colors, misc, animations, fonts, shadows } from '@ndla/core';

export interface TagProp {
  name: string;
  id: string;
}

interface Props {
  tags: TagProp[];
  tagsSelected: string[];
  onToggleTag: (id: string) => void;
  onCreateTag: (tagName: string) => void;
}

const TagsContainer = styled.div`
  max-height: 16rem;
  overflow-y: scroll;
  display: flex;
  gap: ${spacing.xsmall};
`;

const SuggestionInputContainer = styled.div`
  margin-bottom: ${spacing.large};
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.xsmall};
  padding: ${spacing.small};
  border: 1px solid ${colors.brand.greyLighter};
  input {
    flex-grow: 1;
    border: 0;
    outline: none;
    background: transparent;
    ${fonts.sizes(18)};
  }
  button {
    min-height: 42px;
  }
  transition: border-color ${animations.durations.normal} ease;
  border-radius: ${misc.borderRadius};
  &:focus-within {
    border-color: ${colors.brand.primary};
  }
`;

const SuggestionsWrapper = styled.div`
  > div {
    box-shadow: ${shadows.levitate1};
    margin: 0 ${spacing.small};
    padding: ${spacing.small} 0;
    overflow-y: scroll;
    max-height: 300px;
    border-radius: ${misc.borderRadius};
    background: #fff;
    ${animations.fadeIn(animations.durations.superFast)}
    > div {
      opacity: 0;
      ${animations.fadeInBottom()}
      animation-delay: ${animations.durations.fast};
      animation-fill-mode: forwards;
      display: flex;
      flex-direction: column;
    }
  }
`;

const SuggestionButton = styled.button`
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  border: 0;
  outline: 0;
  background: ${({ isHighlighted }) => isHighlighted ? colors.brand.lighter : 'transparent'};
  width: 100%;
  padding: ${spacing.small};
  ${fonts.sizes(18)};
  transition: ${misc.transition.default};
  &:not(:disabled) {
    cursor: pointer;
    color: ${colors.brand.primary};
    &:hover {
      background: ${colors.brand.lighter};
    }
  }
  svg {
    width: ${spacingUnit}px;
    height: ${spacingUnit}px;
    fill: ${colors.brand.light};
  }
  &:disabled {
    &:hover {
      svg {
        fill: ${colors.brand.greyLight};
      }
    }
  }
`;

const SuggestionInput = ({
  onExpandContract,
  expanded,
  suggestions,
  value,
  setInputValue,
  onCreateTag,
  onToggleTag,
  addedTags,
  ...props
}) => {
  const [currentHighlightedIndex, setCurrentHighlightedIndex] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    setCurrentHighlightedIndex(0);
  }, [suggestions]);

  return (
    <SuggestionInputContainer>
      <StyledInputWrapper>
        {addedTags.map(({ id, name }) => (
          <Button
            onClick={() => onToggleTag(id)}
            light
            borderShape="rounded"
            key={id}
            size="small">
            #{name} <Cross />
          </Button>
        ))}
        <input
          value={value}
          onBlur={() => setHasFocus(false)}
          onFocus={() => setHasFocus(true)}
          ref={inputRef}
          onKeyDown={(e: KeyboardEvent) => {
            const preventDefaultIf = ['Enter', 'Tab', 'ArrowUp', 'ArrowDown'];
            if (preventDefaultIf.includes(e.key)) {
              e.preventDefault();
            }
            if (e.key === 'Enter' || e.key === 'Tab') {
              if (suggestions.length > 0) {
                onToggleTag(suggestions[currentHighlightedIndex].id);
                setInputValue('');
              } else {
                onCreateTag(value);
                setInputValue('');
              }
            } else if (e.key === 'ArrowUp') {
              setCurrentHighlightedIndex(currentHighlightedIndex - 1 < 0 ? suggestions.length - 1 : currentHighlightedIndex - 1);
            } else if (e.key === 'ArrowDown') {
              setCurrentHighlightedIndex(currentHighlightedIndex + 1 >= suggestions.length ? 0 : currentHighlightedIndex + 1);
            }
          }}
          {...props}
        />
      </StyledInputWrapper>
      {(hasFocus && suggestions.length > 0) ? (
        <SuggestionsWrapper>
          <div>
            <div>
              {suggestions.map(({ id, name }, index) => {
                const alreadyAdded = addedTags.some(({ id: idAdded }) => idAdded === id);
                return (
                  <SuggestionButton
                    disabled={alreadyAdded}
                    isHighlighted={index === currentHighlightedIndex}
                    onClick={() => onToggleTag(id)}
                    key={id}
                  >
                    <span>{name}</span>
                    {alreadyAdded && <Check />}
                  </SuggestionButton>
                );
              })}
            </div>
          </div>
        </SuggestionsWrapper>
      ) : null}
      <IconButtonDualStates
        ariaLabelActive="Se alle tagger"
        ariaLabelInActive="Skjul alle tagger"
        active={expanded}
        inactiveIcon={<ChevronDown />}
        activeIcon={<ChevronUp />}
        size="small"
        onClick={onExpandContract}
      />
    </SuggestionInputContainer>
  );
};

const sortedTags = (tags: TagProp[], selectedTags: string[], selected: boolean): TagProps[] => (
  tags
    .filter(({ id }) => selectedTags.some((idSelected) => idSelected === id === selected))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
);

const getSuggestions = (tags: TagProp[], inputValue: string): TagProp[] => {
  if (inputValue === '') {
    return [];
  }
  const inputLowercase = inputValue.toLowerCase();
  return tags
    .filter(({ name }) => name.toLowerCase().startsWith(inputLowercase))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
}

const TagSelector = ({ tags, tagsSelected, onCreateTag, onToggleTag }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [showAllTags, setShowAllTags] = useState(false);
  return (
    <div>
      {tags.map((tag) => (
        <p key={tag.id}>
          {tag.name} (selected: {tagsSelected.some(idSelected => idSelected === tag.id) ? 'Ja' : 'Nope'})
        </p>
      ))}
      <SuggestionInput
        placeholder="legg til"
        onChange={(e: KeyboardEvent) => {
          const target = e.target as HTMLInputElement;
          setInputValue(target.value);
        }}
        suggestions={getSuggestions(tags, inputValue)}
        value={inputValue}
        onCreateTag={onCreateTag}
        onToggleTag={onToggleTag}
        setInputValue={setInputValue}
        onExpandContract={() => setShowAllTags(!showAllTags)}
        expanded={showAllTags}
        addedTags={sortedTags(tags, tagsSelected, true)}
      />
      {showAllTags && (
        <TagsContainer>
          {sortedTags(tags, tagsSelected, false).map(({ name, id }) => (
            <Button
              onClick={() =>
                onToggleTag(id)
              }
              lighter
              borderShape="rounded"
              key={id}
              size="xsmall">
              #{name}
            </Button>
          ))}
        </TagsContainer>
      )}
    </div>
  );
};

export default TagSelector;
