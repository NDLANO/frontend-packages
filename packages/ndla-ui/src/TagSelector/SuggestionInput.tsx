/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, useRef, useEffect, ReactNode, RefObject, ChangeEvent, KeyboardEvent } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import Button, { IconButtonDualStates } from '@ndla/button';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';
import { Cross as CrossRaw } from '@ndla/icons/action';
import { spacing, colors, misc, animations, fonts } from '@ndla/core';
import Tooltip from '@ndla/tooltip';
import { uuid } from '@ndla/util';
import Suggestions from './Suggestions';
import type { TagType } from './TagSelectorOld';

const SuggestionTextWrapper = styled.div`
  ${fonts.sizes(18)};
  position: absolute;
  display: flex;
  flex-grow: 1;
  left: 0;
  right: 0;
  overflow: hidden;
  max-height: ${spacing.large};
  padding: 8.333px;
  padding-right: ${spacing.large};
  span {
    color: ${colors.brand.grey};
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

const Cross = styled(CrossRaw)`
  margin-left: ${spacing.xxsmall};
`;

const SuggestionInputContainer = styled.div`
  margin-bottom: ${spacing.large};
`;

const StyledInput = styled.input`
  flex-grow: 1;
  border: 0;
  outline: none;
  ${fonts.sizes(18)};
  z-index: 1;
  position: relative;
  background: transparent;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.xsmall};
  padding: ${spacing.small};
  border: 1px solid ${colors.brand.neutral7};
  transition: border-color ${animations.durations.normal} ease;
  border-radius: ${misc.borderRadius};
  &:focus-within {
    border-color: ${colors.brand.primary};
  }
`;

const CombinedInputAndDropdownWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
`;

const StyledTagButton = styled(Button)<{ enableTagButtonAnimation: boolean }>`
  ${({ enableTagButtonAnimation }) =>
    enableTagButtonAnimation ? animations.fadeInScaled(animations.durations.slow) : ''}
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
  dropdownMaxHeight: string;
  prefix?: string | ReactNode;
  inline?: boolean;
  scrollAnchorElement: RefObject<HTMLDivElement>;
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
  scrollAnchorElement,
}: SuggestionInputProps) => {
  const { t } = useTranslation();
  const [currentHighlightedIndex, setCurrentHighlightedIndex] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const suggestionIdRef = useRef<string>(uuid());
  const initalTags = useRef<string[]>(addedTags.map(({ id }) => id));

  useEffect(() => {
    setCurrentHighlightedIndex(0);
  }, [suggestions]);

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
          <StyledTagButton
            enableTagButtonAnimation={!initalTags.current.includes(id)}
            aria-label={t('tagSelector.removeTag', { name })}
            onClick={() => onToggleTag(id)}
            light
            borderShape="rounded"
            key={id}
            size="small">
            {prefix}
            {name}
            <Cross />
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
                if (suggestions.length > 0) {
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
          <Tooltip tooltip={expanded ? t('tagSelector.hideAllTags') : t('tagSelector.showAllTags')}>
            <IconButtonDualStates
              data-suggestionbutton
              ariaLabelActive={t('tagSelector.showAllTags')}
              ariaLabelInActive={t('tagSelector.hideAllTags')}
              active={expanded}
              colorTheme="lighter"
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
          <Suggestions
            inline={inline}
            dropdownMaxHeight={dropdownMaxHeight}
            suggestions={suggestions}
            currentHighlightedIndex={currentHighlightedIndex}
            onToggleTag={onToggleTag}
            hasBeenAdded={hasBeenAdded}
          />
        ) : null}
      </div>
    </SuggestionInputContainer>
  );
};

export default SuggestionInput;
