/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import { colors, fonts, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@ndla/button';
import { alphabet } from './alphabet';

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${spacing.xsmall};
`;

const StyledButton = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${spacing.normal};
  height: ${spacing.normal};
  padding: 0;

  :disabled {
    pointer-events: none;
    color: ${colors.brand.light};
  }

  ${fonts.sizes(18)};
  && {
    font-weight: ${fonts.weight.semibold};
  }
`;

interface Props {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  letters: string[];
}

const LetterFilter = ({ value, onChange, letters }: Props) => {
  const { t } = useTranslation();

  const uppercaseLetters = useMemo(() => letters.map((letter) => letter.toUpperCase()), [letters]);

  return (
    <StyledUL>
      {alphabet.map((letter) => {
        const disabled = !uppercaseLetters.includes(letter.toUpperCase());
        const selected = letter.toUpperCase() === value?.toUpperCase();
        return (
          <li>
            <StyledButton
              onClick={() => (selected ? onChange(undefined) : onChange(letter))}
              aria-label={t('listview.filters.alphabet.letterFilter', { letter })}
              ghostPill={!selected}
              disabled={disabled}
              size="xsmall">
              {letter}
            </StyledButton>
          </li>
        );
      })}
    </StyledUL>
  );
};

export default LetterFilter;
