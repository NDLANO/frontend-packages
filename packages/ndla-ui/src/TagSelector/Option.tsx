/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { OptionProps } from 'react-select';
import styled from '@emotion/styled';
import { buttonStyleV2 as buttonStyle } from '@ndla/button';
import { colors, fonts } from '@ndla/core';
import { Done } from '@ndla/icons/editor';
import { TagType } from './types';

interface StyledProps {
  selected: boolean;
  focused: boolean;
}

const StyledMenuOption = styled.div<StyledProps>`
  && {
    background: ${({ focused }) => focused && colors.brand.lighter};
    color: ${({ focused }) => focused && colors.brand.primary};
    justify-content: space-between;
    ${fonts.sizes(16)};
    font-weight: ${fonts.weight.normal};
    color: ${({ selected }) => selected && colors.brand.grey};
  }
`;

const StyledCheck = styled(Done)`
  width: 24px;
  height: 24px;
  fill: ${colors.brand.tertiary};
`;

const Option = ({ innerProps, innerRef, children, isSelected, isFocused }: OptionProps<TagType, true>) => {
  return (
    <StyledMenuOption
      focused={isFocused}
      selected={isSelected}
      css={buttonStyle({ colorTheme: 'lighter', variant: 'ghost', shape: 'sharp' })}
      ref={innerRef}
      {...innerProps}
    >
      {children}
      {isSelected && <StyledCheck />}
    </StyledMenuOption>
  );
};

export default Option;
