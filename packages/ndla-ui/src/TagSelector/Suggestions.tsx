/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { Check } from '@ndla/icons/editor';
import { spacing, spacingUnit, colors, misc, animations, fonts, shadows } from '@ndla/core';
import type { TagProp } from './TagSelector';

const ABSOLUTE_DROPDOWN_MAXHEIGHT = '360px';

const CheckedIcon = styled(Check)`
  width: ${spacingUnit}px;
  height: ${spacingUnit}px;
  fill: ${colors.brand.light};
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
`;

const SuggestionItem = styled.div`
  opacity: 0;
  ${animations.fadeInBottom()}
  animation-delay: ${animations.durations.fast};
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
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

interface Props {
  inline?: boolean;
  dropdownMaxHeight: string;
  suggestions: TagProp[];
  currentHighlightedIndex: number;
  onToggleTag: (id: string) => void;
  hasBeenAdded: (id: string) => boolean;
}

const TagSuggestions = ({
  inline,
  dropdownMaxHeight,
  suggestions,
  currentHighlightedIndex,
  onToggleTag,
  hasBeenAdded,
}: Props) => (
  <SuggestionsWrapper>
    <Suggestions inline={inline} dropdownMaxHeight={dropdownMaxHeight}>
      <SuggestionItem role="listbox">
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
              onMouseDown={() => {
                onToggleTag(id);
              }}
              key={id}>
              <span>{name}</span>
              {alreadyAdded && <CheckedIcon />}
            </SuggestionButton>
          );
        })}
      </SuggestionItem>
    </Suggestions>
  </SuggestionsWrapper>
);

export default TagSuggestions;
