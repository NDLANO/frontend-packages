/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { css } from '@emotion/react';
import { Done } from '@ndla/icons/editor';
import { OptionProps } from 'react-select';
import { Option } from './types';

interface CheckProps {
  isSelected: boolean;
}

const shouldForwardProp = (prop: string) => prop !== 'isVisible';

const StyledCheck = styled(Done, { shouldForwardProp })<CheckProps>`
  visibility: ${({ isSelected }) => (isSelected ? 'visible' : 'hidden')};
  flex-shrink: 0;
`;

interface Props {
  small?: boolean;
  isFocused: boolean;
}

const StyledBaseOption = styled.div<Props>`
  ${fonts.sizes('18px', '24px')};
  padding: ${spacing.small};
  display: flex;
  align-items: center;
  gap: ${spacing.xxsmall};
  cursor: pointer;
  background-color: ${({ isFocused }) => (isFocused ? colors.brand.lighter : colors.white)};
  padding-right: 20px;
  color: ${colors.brand.dark};
  font-weight: ${fonts.weight.semibold};
  ${({ small }) =>
    small &&
    css`
      font-weight: ${fonts.weight.normal};
      ${fonts.sizes('16px', '16px')};
      padding: ${spacing.xsmall};
    `}
`;

const BaseOption = <T extends boolean>({
  innerRef,
  innerProps,
  isFocused,
  isSelected,
  small,
  children,
}: OptionProps<Option, T> & Props) => {
  return (
    <StyledBaseOption small={small} ref={innerRef} {...innerProps} isFocused={isFocused}>
      <StyledCheck isSelected={isSelected} />
      {children}
    </StyledBaseOption>
  );
};

export default BaseOption;
