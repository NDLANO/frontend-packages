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
import { IconButtonV2 as IconButton } from '@ndla/button';
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
  ${fonts.sizes(18)};
  && {
    font-weight: ${fonts.weight.semibold};
  }

  :disabled {
    pointer-events: none;
    color: ${colors.brand.light};
  }
`;

interface Props {
  value?: string | undefined;
  onChange: (value?: string) => void;
  enabledLetters: string[];
}

const LetterFilter = ({ value, onChange, enabledLetters }: Props) => {
  const { t } = useTranslation();
  const uppercaseLetters = useMemo(() => enabledLetters.map((letter) => letter.toUpperCase()), [enabledLetters]);

  return (
    <StyledUL>
      {alphabet.map((letter) => {
        const disabled = !uppercaseLetters.includes(letter.toUpperCase());
        const selected = letter.toUpperCase() === value?.toUpperCase();
        return (
          <li key={letter}>
            <StyledButton
              onClick={() => (selected ? onChange(undefined) : onChange(letter))}
              aria-label={t('listview.filters.alphabet.letterFilter', { letter })}
              variant={!selected ? 'ghost' : undefined}
              colorTheme={!selected ? 'lighter' : 'primary'}
              disabled={disabled}
              size="xsmall"
            >
              {letter}
            </StyledButton>
          </li>
        );
      })}
    </StyledUL>
  );
};

export default LetterFilter;
