/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, colors } from '@ndla/core';
import type { TagType } from './TagSelector';
import SuggestionButton from './SuggestionButton';

const Suggestions = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${colors.brand.tertiary};
  overflow-y: overlay;
  scroll-behavior: smooth;

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

interface Props {
  suggestions: TagType[];
  currentHighlightedIndex: number;
  onToggleTag: (id: string) => void;
  hasBeenAdded: (id: string) => boolean;
}

const TagSuggestions = ({ suggestions, currentHighlightedIndex, onToggleTag, hasBeenAdded }: Props) => (
  <Suggestions role="listbox">
    {suggestions.map(({ id, name }, index: number) => {
      const alreadyAdded = hasBeenAdded(id);
      const selected = index === currentHighlightedIndex;
      return (
        <SuggestionButton
          alreadyAdded={alreadyAdded}
          selected={selected}
          onToggleTag={onToggleTag}
          name={name}
          id={id}
        />
      );
    })}
  </Suggestions>
);

export default TagSuggestions;
