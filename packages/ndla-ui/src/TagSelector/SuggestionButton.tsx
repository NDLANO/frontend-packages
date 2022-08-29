/*
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';
import Button from '@ndla/button';
import { Done } from '@ndla/icons/editor';
import { colors, fonts, spacing, spacingUnit } from '@ndla/core';
import { css } from '@emotion/core';

interface SuggestionStyleProps {
  isHighlighted: boolean;
}

const StyledSuggestionButton = styled(Button)<SuggestionStyleProps>`
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

  ${StyledSuggestionButton}:hover & {
    color: ${colors.brand.greyMedium};
  }
`;

interface Props {
  selected: boolean;
  alreadyAdded: boolean;
  id: string;
  name: string;
  onToggleTag: (id: string) => void;
}

const SuggestionButton = ({ selected, alreadyAdded, onToggleTag, name, id }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (selected) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [selected]);

  return (
    <StyledSuggestionButton
      ref={ref}
      ghostPill
      disabled={alreadyAdded}
      data-suggestionbutton
      role="option"
      aria-selected={selected}
      isHighlighted={selected}
      onMouseDown={() => {
        onToggleTag(id);
      }}>
      {name} {alreadyAdded && <StyledDone isHighlighted={selected} />}
    </StyledSuggestionButton>
  );
};

export default SuggestionButton;
