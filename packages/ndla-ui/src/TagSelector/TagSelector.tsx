/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, useRef, useEffect, Ref } from 'react';
import styled from '@emotion/styled';
import Button, { IconButtonDualStates } from '@ndla/button';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';
import { Check } from '@ndla/icons/editor';
import { spacing, spacingUnit, colors, misc, animations, fonts, shadows } from '@ndla/core';
import Tooltip from '@ndla/tooltip';

export interface TagProp {
  name: string;
  id: string;
}

interface Props {
  tags: TagProp[];
  tagsSelected: string[];
  onToggleTag: (id: string) => void;
  onCreateTag: (tagName: string) => void;
};

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
  position: relative;
  > div {
    position: absolute;
    z-index: 99999;
    right: 0;
    left: 0;
    box-shadow: ${shadows.levitate1};
    margin: 0 ${spacing.small};
    padding: ${spacing.small} 0;
    overflow-y: scroll;
    scroll-behavior: smooth;
    max-height: 240px;
    border-radius: ${misc.borderRadius};
    background: #fff;
    ${animations.fadeIn(animations.durations.fast)}
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


interface SuggestionButtonProps {
  isHighlighted: boolean;
}

const SuggestionButton = styled.button<SuggestionButtonProps>`
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  border: 0;
  outline: 0;
  background: ${({ isHighlighted }) => (isHighlighted ? colors.brand.lighter : 'transparent')};
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

type SuggestionInputProps = {
  suggestions: TagProp[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  tags: TagProp[];
  setExpanded: (expanded: boolean) => void;
  expanded: boolean;
  onToggleTag: (id: string) => void;
  setInputValue: (value: string) => void;
  onCreateTag: (tagName: string) => void;
  addedTags: TagProp[];
}

const SuggestionInput = ({
  suggestions,
  value,
  setInputValue,
  onCreateTag,
  onToggleTag,
  addedTags,
  tags,
  setExpanded,
  expanded,
  ...props
}: SuggestionInputProps) => {
  const [currentHighlightedIndex, setCurrentHighlightedIndex] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentHighlightedIndex(0);
  }, [suggestions]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [addedTags]);

  const hasBeenAdded = (id: string) => addedTags.some(({ id: idAdded }) => idAdded === id);

  return (
    <SuggestionInputContainer ref={containerRef}>
      <StyledInputWrapper>
        {addedTags.map(({ id, name }) => (
          <Button
            aria-label={`Ta vekk tilknyttning til ${name}`}
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
          onBlur={() => {
            setHasFocus(false);
            requestAnimationFrame(() => {
              // Check if the new focused element is a child of the original container
              if (!containerRef.current?.contains(document.activeElement)) {
                // Do blur logic here!
                setExpanded(false);
              }
            });
          }}
          onFocus={() => setHasFocus(true)}
          ref={inputRef}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Escape') {
              setExpanded(false);
            }
            if (e.key === 'Enter' || e.key === 'Tab') {
              if (value !== '' || expanded) {
                if (suggestions.length > 0) {
                  if (!hasBeenAdded(suggestions[currentHighlightedIndex].id)) {
                    onToggleTag(suggestions[currentHighlightedIndex].id);
                  }
                  setInputValue('');
                  if (e.key === 'Enter') {
                    e.preventDefault();
                  }
                } else {
                  onCreateTag(value);
                  setInputValue('');
                  e.preventDefault();
                }
              } else if (e.key === 'Enter') {
                e.preventDefault();
              }
            } else if (e.key === 'ArrowUp') {
              setCurrentHighlightedIndex(
                currentHighlightedIndex - 1 < 0 ? suggestions.length - 1 : currentHighlightedIndex - 1,
              );
              e.preventDefault();
            } else if (e.key === 'ArrowDown') {
              setCurrentHighlightedIndex(
                currentHighlightedIndex + 1 >= suggestions.length ? 0 : currentHighlightedIndex + 1,
              );
              e.preventDefault();
            }
          }}
          {...props}
        />
        <Tooltip tooltip={expanded ? 'Skjul alle tagger' : 'Se alle tagger'}>
          <IconButtonDualStates
            ariaLabelActive="Se alle tagger"
            ariaLabelInActive="Skjul alle tagger"
            active={expanded}
            inactiveIcon={<ChevronDown />}
            activeIcon={<ChevronUp />}
            size="small"
            onClick={() => {
              setInputValue('');
              setExpanded(!expanded);
              inputRef.current?.focus();
            }}
          />
        </Tooltip>
      </StyledInputWrapper>
      {(hasFocus || expanded) && suggestions.length > 0 ? (
        <SuggestionsWrapper>
          <div>
            <div>
              {suggestions.map(({ id, name }, index: number) => {
                const alreadyAdded = hasBeenAdded(id);
                return (
                  <SuggestionButton
                    disabled={alreadyAdded}
                    isHighlighted={index === currentHighlightedIndex}
                    onClick={() => onToggleTag(id)}
                    key={id}>
                    <span>{name}</span>
                    {alreadyAdded && <Check />}
                  </SuggestionButton>
                );
              })}
            </div>
          </div>
        </SuggestionsWrapper>
      ) : null}
    </SuggestionInputContainer>
  );
};

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

const TagSelector = ({ tags, tagsSelected, onCreateTag, onToggleTag }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [tagsSelected]);

  return (
    <div>
      <SuggestionInput
        placeholder="Tilknytt tag"
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
      />
    </div>
  );
};

export default TagSelector;
