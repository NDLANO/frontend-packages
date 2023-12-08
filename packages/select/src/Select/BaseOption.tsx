/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { OptionProps } from 'react-select';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { Done } from '@ndla/icons/editor';
import { Option } from './types';

const StyledCheck = styled(Done)`
  visibility: hidden;
  flex-shrink: 0;
  &[data-selected='true'] {
    visibility: visible;
  }
`;

const StyledBaseOption = styled.div`
  ${fonts.sizes('18px', '24px')};
  padding: ${spacing.small};
  display: flex;
  align-items: center;
  gap: ${spacing.xxsmall};
  cursor: pointer;
  padding-right: 20px;
  color: ${colors.brand.dark};
  background-color: ${colors.white};
  font-weight: ${fonts.weight.semibold};
  &[data-focused='true'] {
    background-color: ${colors.brand.lighter};
  }
  &[data-bold='true'] {
    font-weight: ${fonts.weight.bold};
  }
  &[data-small='true'] {
    font-weight: ${fonts.weight.normal};
    ${fonts.sizes('16px', '16px')};
    padding: ${spacing.xsmall};
    &[data-bold='true'] {
      font-weight: ${fonts.weight.semibold};
    }
  }
  &[data-disabled='true'] {
    color: ${colors.brand.greyMedium};
  }
`;

const BaseOption = <T extends boolean>({
  innerRef,
  innerProps,
  isFocused,
  isSelected,
  isDisabled,
  selectProps: { small, bold },
  children,
}: OptionProps<Option, T>) => {
  return (
    <StyledBaseOption
      data-small={small}
      data-bold={bold}
      data-disabled={isDisabled}
      ref={innerRef}
      {...innerProps}
      data-focused={isFocused}
    >
      <StyledCheck data-selected={isSelected} />
      {children}
    </StyledBaseOption>
  );
};

export default BaseOption;
