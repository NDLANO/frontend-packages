/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { MultiValueProps } from 'react-select';
import { buttonStyleV2 as buttonStyle } from '@ndla/button';
import { TagType } from './types';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import { HashTag } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';

interface StyledProps {
  selected: boolean;
}

const StyledValueButton = styled.div<StyledProps>`
  && {
    background: ${({ selected }) => selected && colors.brand.primary};
    color: ${({ selected }) => selected && colors.white};
    padding: ${spacing.xxsmall} ${spacing.small};
  }
`;

const ValueButton = ({ innerProps, children, removeProps, isFocused, ...rest }: MultiValueProps<TagType, true>) => {
  return (
    <StyledValueButton
      selected={isFocused}
      role="button"
      css={buttonStyle({ colorTheme: 'lighter', shape: 'pill', size: 'small' })}
      {...innerProps}
      {...removeProps}>
      #{children}
      <Cross />
    </StyledValueButton>
  );
};

export default ValueButton;
