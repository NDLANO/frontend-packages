/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { spacing, colors, misc, animations, fonts, spacingUnit } from '@ndla/core';
import Button from '@ndla/button';
import type { TagType } from './TagSelector';

const SuggestionsWrapper = styled.div``;

interface SuggestionProps {
  maxHeight?: number;
}

const Suggestions = styled.div<SuggestionProps>`
  border-top: 1px solid ${colors.brand.neutral7};
  right: 0;
  left: 0;
  max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};
  overflow-y: overlay;
  scroll-behavior: smooth;
  background: ${colors.white};
  ${animations.fadeIn(animations.durations.fast)}

  ::-webkit-scrollbar {
    width: ${spacing.small};
  }

  ::-webkit-scrollbar-thumb {
    border: 4px solid transparent;
    background-clip: padding-box;
    padding: 0 4px;
    background-color: ${colors.brand.neutral7};
    border-radius: 14px;
  }
`;

const SuggestionList = styled.div`
  display: flex;
  flex-direction: column;
`;

interface SuggestionButtonProps {
  isHighlighted: boolean;
  alreadyAdded: boolean;
}

const SuggestionButton = styled(Button)<SuggestionButtonProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: ${fonts.weight.normal};
  transition: ${misc.transition.default};
  padding: ${spacingUnit / 3} ${spacing.nsmall};
  border-radius: 0;

  &:disabled {
    color: ${colors.brand.greyMedium};
    &:hover {
      background: ${colors.brand.greyLighter};
      svg {
        fill: ${colors.brand.greyLight};
      }
    }
  }
  ${({ isHighlighted, alreadyAdded }) =>
    isHighlighted
      ? css`
          background: ${colors.brand.lighter};
          &:disabled {
            background: ${colors.brand.greyLighter};
            svg {
              fill: ${colors.brand.grey};
            }
          }
        `
      : ''}
`;

interface Props {
  suggestions: TagType[];
  currentHighlightedIndex: number;
  onToggleTag: (id: string) => void;
  hasBeenAdded: (id: string) => boolean;
  maxHeight?: number;
}

const TagSuggestions = ({ suggestions, currentHighlightedIndex, onToggleTag, hasBeenAdded, maxHeight }: Props) => (
  <SuggestionsWrapper>
    <Suggestions maxHeight={maxHeight}>
      <SuggestionList role="listbox">
        {suggestions.map(({ id, name }, index: number) => {
          const alreadyAdded = hasBeenAdded(id);
          const selected = index === currentHighlightedIndex;
          return (
            <SuggestionButton
              ghostPill
              disabled={alreadyAdded}
              data-suggestionbutton
              role="option"
              aria-selected={selected}
              isHighlighted={selected}
              onMouseDown={() => {
                onToggleTag(id);
              }}
              alreadyAdded={alreadyAdded}
              key={id}>
              {name}
            </SuggestionButton>
          );
        })}
      </SuggestionList>
    </Suggestions>
  </SuggestionsWrapper>
);

export default TagSuggestions;
