/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, useRef, useEffect, RefObject, ChangeEvent, KeyboardEvent } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import Button, { IconButtonDualStates } from '@ndla/button';
import { ChevronDown, ChevronUp, HashTag } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';
import { spacing, colors, misc, animations, fonts } from '@ndla/core';
import Tooltip from '@ndla/tooltip';
import Suggestions from './Suggestions';
import type { TagType } from './TagSelector';

const TAG_INPUT_ID = 'TAG_INPUT_ID';

const TagSelectorWrapper = styled.div`
  display: flex;
  background: ${colors.white};
  flex-direction: column;
  border: 1px solid ${colors.brand.neutral7};
  border-radius: ${misc.borderRadius};
  &:focus-within {
    border-color: ${colors.brand.tertiary};
  }
`;

const SuggestionTextWrapper = styled.div`
  ${fonts.sizes(18)};
  position: absolute;
  display: flex;
  flex-grow: 1;
  left: 0;
  right: 0;
  overflow: hidden;
  max-height: ${spacing.large};
  padding-left: 0;
  span {
    color: ${colors.brand.greyMedium};
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    &:first-of-type {
      color: transparent;
    }
  }
`;

const SuggestionText = ({ value, suggestionValue }: { value: string; suggestionValue: string }) => (
  <SuggestionTextWrapper>
    {!!value && (
      <>
        <span>{value}</span>
        <span>{suggestionValue.substring(value.length)}</span>
      </>
    )}
  </SuggestionTextWrapper>
);

const StyledCross = styled(Cross)`
  margin-left: ${spacing.xxsmall};
`;

const StyledInput = styled.input`
  ::placeholder {
    color: ${colors.brand.primary};
  }
  color: ${colors.brand.primary};
  caret-color: ${colors.brand.primary};
  flex-grow: 1;
  border: 0;
  outline: none;
  padding: 0;
  ${fonts.sizes(18)};
  z-index: 1;
  position: relative;
  background: transparent;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${spacing.xsmall};
  padding: ${spacing.xsmall};
  transition: border-color ${animations.durations.normal} ease;
`;

const CombinedInputAndDropdownWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  position: relative;
`;

const StyledTagButton = styled(Button)`
  padding: ${spacing.xxsmall} ${spacing.small};
  ${animations.fadeIn(animations.durations.slow)};
`;

interface SuggestionInputProps {
  suggestions: TagType[];
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setExpanded: (expanded: boolean) => void;
  expanded: boolean;
  onToggleTag: (id: string) => void;
  setInputValue: (value: string) => void;
  onCreateTag: (tagName: string) => void;
  addedTags: TagType[];
  scrollAnchorElement: RefObject<HTMLDivElement>;
  dropdownMaxHeight?: number;
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
  scrollAnchorElement,
  dropdownMaxHeight,
}: SuggestionInputProps) => {
  const { t } = useTranslation();
  const [currentHighlightedIndex, setCurrentHighlightedIndex] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentHighlightedIndex(0);
  }, [suggestions]);

  const hasBeenAdded = (id: string) => addedTags.some(({ id: idAdded }) => idAdded === id);

  const isOpen = (hasFocus || expanded) && suggestions.length > 0;

  return (
    <TagSelectorWrapper ref={containerRef}>
      <StyledInputWrapper>
        {addedTags.map(({ id, name }) => (
          <StyledTagButton
            aria-label={t('tagSelector.removeTag', { name })}
            onClick={() => onToggleTag(id)}
            light
            borderShape="rounded"
            key={id}
            size="small">
            <HashTag />
            {name}
            <StyledCross />
          </StyledTagButton>
        ))}
        <CombinedInputAndDropdownWrapper>
          {suggestions[currentHighlightedIndex] && (
            <SuggestionText value={value} suggestionValue={suggestions[currentHighlightedIndex].name} />
          )}
          <StyledInput
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
            onFocus={() => {
              if (isMobile && scrollAnchorElement?.current) {
                scrollAnchorElement.current.scrollIntoView({
                  behavior: 'smooth',
                });
              }
              setHasFocus(true);
            }}
            ref={inputRef}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
              if (!['Enter', ' ', 'Tab', 'ArrowDown', 'ArrowUp', 'Backspace'].includes(e.key)) {
                return;
              }
              const trimmedValue = value.replace(/\s/g, '');
              if (e.key === 'Escape') {
                setExpanded(false);
                e.preventDefault();
                return;
              }
              if (e.key === 'Backspace' && trimmedValue === '' && addedTags.length) {
                // Remove the added last tag
                onToggleTag(addedTags[addedTags.length - 1].id);
                return;
              }
              if (e.key === 'ArrowUp') {
                setCurrentHighlightedIndex(
                  currentHighlightedIndex - 1 < 0 ? suggestions.length - 1 : currentHighlightedIndex - 1,
                );
                e.preventDefault();
                return;
              }
              if (e.key === 'ArrowDown') {
                setCurrentHighlightedIndex(
                  currentHighlightedIndex + 1 >= suggestions.length ? 0 : currentHighlightedIndex + 1,
                );
                e.preventDefault();
                return;
              }
              if (trimmedValue === '' && !expanded) {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                }
                return;
              }
              if (e.key === 'Enter' || e.key === 'Tab' || e.key === ' ') {
                if (suggestions.length > 0 && e.key !== ' ') {
                  if (!hasBeenAdded(suggestions[currentHighlightedIndex].id)) {
                    onToggleTag(suggestions[currentHighlightedIndex].id);
                  } else if (trimmedValue.length < suggestions[currentHighlightedIndex].name.length) {
                    onCreateTag(trimmedValue);
                    e.preventDefault();
                  }
                  setInputValue('');
                  e.preventDefault();
                  return;
                }
                onCreateTag(trimmedValue);
                setInputValue('');
                e.preventDefault();
              }
              return;
            }}
          />
          <Tooltip tooltip={expanded ? t('tagSelector.hideTags') : t('tagSelector.showTags')}>
            <IconButtonDualStates
              data-suggestionbutton
              ariaLabelActive={t('tagSelector.showTags')}
              ariaLabelInActive={t('tagSelector.hideTags')}
              active={expanded}
              colorTheme="greyLighter"
              variant="ghost"
              inactiveIcon={<ChevronDown />}
              activeIcon={<ChevronUp />}
              aria-controls={TAG_INPUT_ID}
              onClick={() => {
                if (isOpen) {
                  setInputValue('');
                }
                inputRef.current?.focus();
                setExpanded(!expanded);
              }}
            />
          </Tooltip>
        </CombinedInputAndDropdownWrapper>
      </StyledInputWrapper>
      <div id={TAG_INPUT_ID} aria-live="polite">
        {isOpen ? (
          <Suggestions
            maxHeight={dropdownMaxHeight}
            suggestions={suggestions}
            currentHighlightedIndex={currentHighlightedIndex}
            onToggleTag={onToggleTag}
            hasBeenAdded={hasBeenAdded}
          />
        ) : null}
      </div>
    </TagSelectorWrapper>
  );
};

export default SuggestionInput;
