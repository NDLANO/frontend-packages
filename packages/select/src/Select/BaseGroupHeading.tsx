/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { GroupHeadingProps } from 'react-select';
import { Option } from './types';

interface StyledProps {
  bold?: boolean;
  small?: boolean;
}

const StyledGroupHeader = styled.div<StyledProps>`
  padding: ${spacing.xsmall};
  color: ${colors.brand.grey};
  font-weight: ${({ bold }) => (bold ? fonts.weight.bold : fonts.weight.semibold)};
  ${({ small }) => (small ? fonts.sizes('16px', '18px') : fonts.sizes('18px', '24px'))};
`;

const BaseGroupHeading = <T extends boolean>({
  children,
  selectProps: { small, bold },
  ...rest
}: GroupHeadingProps<Option, T>) => {
  return (
    <StyledGroupHeader small={small} bold={bold} {...rest}>
      {children}
    </StyledGroupHeader>
  );
};

export default BaseGroupHeading;
