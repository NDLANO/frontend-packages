/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import Button, { IconButtonDualStates } from '@ndla/button';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';
import { Check } from '@ndla/icons/editor';
import { spacing, spacingUnit, colors, misc, animations, fonts, shadows } from '@ndla/core';
import Tooltip from '@ndla/tooltip';
import { uuid } from '@ndla/util';
import type { TagProp } from './TagSelector';

const ABSOLUTE_DROPDOWN_MAXHEIGHT = '360px';

const CheckedIcon = styled(Check)`
  width: ${spacingUnit}px;
  height: ${spacingUnit}px;
  fill: ${colors.brand.light};
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

const CombinedInputAndDropdownWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

interface SuggestionsWrapperProps {
  dropdownMaxHeight: string;
  inline?: boolean;
}

const SuggestionsWrapper = styled.div`
  position: relative;
`;

const Suggestions = styled.div<SuggestionsWrapperProps>`
  position: ${({ inline }) => (inline ? 'static' : 'absolute')};
  z-index: 99999;
  right: 0;
  left: 0;
  box-shadow: ${shadows.levitate1};
  margin: 0 ${spacing.small};
  padding: ${spacing.small} 0;
  overflow-y: scroll;
  scroll-behavior: smooth;
  max-height: min(${({ dropdownMaxHeight }) => dropdownMaxHeight}, ${ABSOLUTE_DROPDOWN_MAXHEIGHT});
  border-radius: ${misc.borderRadius};
  background: ${colors.white};
  ${animations.fadeIn(animations.durations.fast)}
  > div {
    opacity: 0;
    ${animations.fadeInBottom()}
    animation-delay: ${animations.durations.fast};
    animation-fill-mode: forwards;
    display: flex;
    flex-direction: column;
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
  &:disabled {
    &:hover {
      svg {
        fill: ${colors.brand.greyLight};
      }
    }
  }
`;

interface SuggestionInputProps {
  suggestions: TagProp[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setExpanded: (expanded: boolean) => void;
  expanded: boolean;
  onToggleTag: (id: string) => void;
  setInputValue: (value: string) => void;
  onCreateTag: (tagName: string) => void;
  addedTags: TagProp[];
  name: string;
  id: string;
  dropdownMaxHeight: string;
  prefix?: string | React.ReactNode;
  inline?: boolean;
}

const SuggestionInput = ({
  suggestions,
  value,
  setInputValue,
  onCreateTag,
  onChange,
  onToggleTag,
  addedTags,
  setExpanded,
  expanded,
  dropdownMaxHeight,
  prefix,
  inline,
}: SuggestionInputProps) => {
  const { t } = useTranslation();
  const [currentHighlightedIndex, setCurrentHighlightedIndex] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const suggestionIdRef = useRef<string>(uuid());

  useEffect(() => {
    setCurrentHighlightedIndex(0);
  }, [suggestions]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [addedTags]);

  useEffect(() => {
    const selectedSuggestionElement = document
      .getElementById(suggestionIdRef.current)
      ?.querySelector('[aria-selected="true"]');
    if (selectedSuggestionElement) {
      // Do we need to scroll this into view?
      selectedSuggestionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [currentHighlightedIndex]);

  const hasBeenAdded = (id: string) => addedTags.some(({ id: idAdded }) => idAdded === id);

  return (
    <SuggestionInputContainer ref={containerRef}>
      <StyledInputWrapper>
        {addedTags.map(({ id, name }) => (
          <Button
            aria-label={t('tagSelector.removeTag', { name })}
            onClick={() => onToggleTag(id)}
            light
            borderShape="rounded"
            key={id}
            size="small">
            {prefix}
            {name}
            {` `}
            <Cross />
          </Button>
        ))}
        <CombinedInputAndDropdownWrapper>
          <input
            placeholder={t('tagSelector.placeholder')}
            value={value}
            autoComplete="off"
            onBlur={(e) => {
              const relatedTarget = e.relatedTarget as HTMLElement;
              if (!relatedTarget?.dataset?.suggestionbutton) {
                setExpanded(false);
                setHasFocus(false);
              }
            }}
            onChange={onChange}
            onFocus={() => setHasFocus(true)}
            ref={inputRef}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Escape') {
                setExpanded(false);
                e.preventDefault();
              } else if (e.key === 'Enter' || e.key === 'Tab') {
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
          />
          <Tooltip tooltip={expanded ? t('tagSelector.hideAllTags') : t('tagSelector.showAllTags')}>
            <IconButtonDualStates
              data-suggestionbutton
              ariaLabelActive={t('tagSelector.showAllTags')}
              ariaLabelInActive={t('tagSelector.hideAllTags')}
              active={expanded}
              greyLighter
              inactiveIcon={<ChevronDown />}
              activeIcon={<ChevronUp />}
              size="small"
              aria-controls={suggestionIdRef.current}
              onClick={() => {
                setInputValue('');
                setExpanded(!expanded);
                inputRef.current?.focus();
              }}
            />
          </Tooltip>
        </CombinedInputAndDropdownWrapper>
      </StyledInputWrapper>
      <div id={suggestionIdRef.current} aria-live="polite">
        {(hasFocus || expanded) && suggestions.length > 0 ? (
          <SuggestionsWrapper>
            <Suggestions inline={inline} dropdownMaxHeight={dropdownMaxHeight}>
              <div role="listbox">
                {suggestions.map(({ id, name }, index: number) => {
                  const alreadyAdded = hasBeenAdded(id);
                  const selected = index === currentHighlightedIndex;
                  return (
                    <SuggestionButton
                      data-suggestionbutton
                      role="option"
                      aria-selected={selected}
                      disabled={alreadyAdded}
                      isHighlighted={selected}
                      onClick={() => onToggleTag(id)}
                      key={id}>
                      <span>{name}</span>
                      {alreadyAdded && <CheckedIcon />}
                    </SuggestionButton>
                  );
                })}
              </div>
            </Suggestions>
          </SuggestionsWrapper>
        ) : null}
      </div>
    </SuggestionInputContainer>
  );
};

export default SuggestionInput;
