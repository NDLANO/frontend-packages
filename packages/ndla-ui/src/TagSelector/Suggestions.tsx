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
import { spacing, colors, misc, animations, fonts, shadows } from '@ndla/core';
import Button from '@ndla/button';
import type { TagType } from './TagSelector';

const ABSOLUTE_DROPDOWN_MAXHEIGHT = '360px';

const CheckedIcon = styled(Check)`
  width: ${spacing.normal};
  height: ${spacing.normal};
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${fonts.sizes(18)};
  transition: ${misc.transition.default};
  font-weight: 400;

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
  inline?: boolean;
  dropdownMaxHeight: string;
  suggestions: TagType[];
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
              <span>{name}</span>
              {alreadyAdded && <CheckedIcon />}
            </SuggestionButton>
          );
        })}
      </SuggestionList>
    </Suggestions>
  </SuggestionsWrapper>
);

export default TagSuggestions;
