/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { Done } from '@ndla/icons/editor';
import { spacing, colors, animations, fonts, spacingUnit } from '@ndla/core';
import Button from '@ndla/button';
import type { TagType } from './TagSelector';

const animationKeyframe = (maxHeight?: number) => keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: ${maxHeight}px;
  }
`;

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

  ${({ maxHeight }) =>
    maxHeight &&
    css`
      animation: ${animationKeyframe(maxHeight)} 0.25s linear;
    `}

  ::-webkit-scrollbar {
    width: ${spacing.small};
  }

  ::-webkit-scrollbar-thumb {
    border: 4px solid transparent;
    border-radius: 14px;
    background-clip: padding-box;
    padding: 0 4px;
    background-color: ${colors.brand.neutral7};
  }
`;

const SuggestionList = styled.div`
  display: flex;
  flex-direction: column;
`;

interface SuggestionStyleProps {
  isHighlighted: boolean;
}

const SuggestionButton = styled(Button)<SuggestionStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${fonts.weight.normal};
  padding: ${spacingUnit * 0.4}px ${spacing.nsmall};
  border-radius: 0;

  &:disabled {
    color: ${colors.brand.greyMedium};
    &:hover {
      background: ${colors.brand.greyLighter};
    }
  }
  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      background: ${colors.brand.lighter};
      &:disabled {
        background: ${colors.brand.greyLighter};
      }
    `}
`;

const StyledDone = styled(Done)<SuggestionStyleProps>`
  height: 20px;
  width: 20px;

  color: ${({ isHighlighted }) => (isHighlighted ? colors.brand.greyMedium : colors.brand.tertiary)};

  ${SuggestionButton}:hover & {
    color: ${colors.brand.greyMedium};
  }
`;

interface Props {
  suggestions: TagType[];
  currentHighlightedIndex: number;
  onToggleTag: (id: string) => void;
  hasBeenAdded: (id: string) => boolean;
  maxHeight?: number;
}

const TagSuggestions = ({ suggestions, currentHighlightedIndex, onToggleTag, hasBeenAdded, maxHeight }: Props) => (
  <div>
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
              key={id}>
              {name} {alreadyAdded && <StyledDone isHighlighted={selected} />}
            </SuggestionButton>
          );
        })}
      </SuggestionList>
    </Suggestions>
  </div>
);

export default TagSuggestions;
