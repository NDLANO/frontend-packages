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
import { Cross } from '@ndla/icons/action';
import { HashTag } from '@ndla/icons/common';
import { spacing, colors, misc, animations, fonts } from '@ndla/core';
import Button from '@ndla/button';
import type { TagType } from './TagSelector';

const SuggestionsWrapper = styled.div`
  position: relative;
`;

interface SuggestionProps {
  maxHeight?: number;
}

const Suggestions = styled.div<SuggestionProps>`
  border-top: 1.5px solid ${colors.brand.neutral7};
  right: 0;
  left: 0;
  max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};
  overflow-y: scroll;
  scroll-behavior: smooth;
  background: ${colors.white};
  ${animations.fadeIn(animations.durations.fast)}

  ::-webkit-scrollbar {
    width: ${spacing.small};
  }

  ::-webkit-scrollbar-track {
    width: ${spacing.small};
    margin-top: ${spacing.xsmall};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.brand.neutral7};
    border-radius: 10px;
    border: solid ${spacing.xxsmall} white;
  }
`;

const SuggestionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing.xsmall};
  padding: ${spacing.small};
  opacity: 0;
  ${animations.fadeInBottom()}
  animation-delay: ${animations.durations.fast};
  animation-fill-mode: forwards;
`;

interface SuggestionButtonProps {
  isHighlighted: boolean;
  alreadyAdded: boolean;
}

const SuggestionButton = styled(Button)<SuggestionButtonProps>`
  font-weight: ${fonts.weight.semibold};
  transition: ${misc.transition.default};
  padding: ${spacing.xxsmall} ${spacing.small};

  &:disabled {
    color: ${colors.brand.greyMedium};
    &:hover {
      svg {
        fill: ${colors.brand.greyLight};
      }
    }
  }
  ${({ isHighlighted, alreadyAdded }) =>
    isHighlighted &&
    css`
      background: ${alreadyAdded ? colors.brand.primary : colors.brand.lighter};
      color: ${alreadyAdded && colors.white};
      border-color: ${colors.brand.primary};
    `}
`;

const StyledCross = styled(Cross)`
  margin-left: ${spacing.xxsmall};
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
              borderShape="rounded"
              ghostPill={!alreadyAdded}
              light={alreadyAdded}
              data-suggestionbutton
              role="option"
              size="small"
              aria-selected={selected}
              isHighlighted={selected}
              onMouseDown={() => {
                onToggleTag(id);
              }}
              alreadyAdded={alreadyAdded}
              key={id}>
              <HashTag /> {name}
              {alreadyAdded && <StyledCross />}
            </SuggestionButton>
          );
        })}
      </SuggestionList>
    </Suggestions>
  </SuggestionsWrapper>
);

export default TagSuggestions;
