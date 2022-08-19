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
import { Check } from '@ndla/icons/editor';
import { HashTag } from '@ndla/icons/common';
import { spacing, colors, misc, animations, fonts } from '@ndla/core';
import Button from '@ndla/button';
import type { TagType } from './TagSelector';

const CheckedIcon = styled(Check)`
  width: ${spacing.normal};
  height: ${spacing.normal};
  fill: ${colors.brand.light};
`;

const SuggestionsWrapper = styled.div`
  position: relative;
`;

interface SuggestionProps {
  maxHeight?: number;
}

const Suggestions = styled.div<SuggestionProps>`
  border-top: 1px solid ${colors.brand.neutral7};
  right: 0;
  left: 0;
  max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};
  padding: ${spacing.small} 0;
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
    background-color: ${colors.brand.greyLight};
    border-radius: 10px;
    border: solid ${spacing.xxsmall} white;
  }
`;

const SuggestionList = styled.div`
  opacity: 0;
  ${animations.fadeInBottom()}
  animation-delay: ${animations.durations.fast};
  animation-fill-mode: forwards;
`;

interface SuggestionButtonProps {
  isHighlighted: boolean;
}

const SuggestionButton = styled(Button)<SuggestionButtonProps>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  ${fonts.sizes(18)};
  font-weight: ${fonts.weight.semibold};
  transition: ${misc.transition.default};
  border-radius: 0;

  &:disabled {
    color: ${colors.brand.greyMedium};
    &:hover {
      svg {
        fill: ${colors.brand.greyLight};
      }
    }
  }
  ${({ isHighlighted }) =>
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
              borderShape="sharpened"
              ghostPill
              width="full"
              textAlign="left"
              data-suggestionbutton
              role="option"
              aria-selected={selected}
              disabled={alreadyAdded}
              isHighlighted={selected}
              onMouseDown={() => {
                onToggleTag(id);
              }}
              key={id}>
              <HashTag /> {name}
              {alreadyAdded && <CheckedIcon />}
            </SuggestionButton>
          );
        })}
      </SuggestionList>
    </Suggestions>
  </SuggestionsWrapper>
);

export default TagSuggestions;
