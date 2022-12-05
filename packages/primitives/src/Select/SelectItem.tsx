/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Item, ItemText, ItemIndicator } from '@radix-ui/react-select';
import { SerializedStyles } from '@emotion/react';
import { Done } from '@ndla/icons/editor';
import React, { forwardRef, ReactNode } from 'react';
import styled from '@emotion/styled';
import { fonts, spacing, colors } from '@ndla/core';

const StyledItem = styled(Item)`
  display: flex;
  ${fonts.sizes(16)};
  align-items: center;
  gap: ${spacing.xsmall};
  cursor: pointer;
  color: ${colors.text.primary};
  padding: 0 ${spacing.medium} 0 ${spacing.normal};
  position: relative;
  height: 25px;
  &[data-highlighted] {
    outline: none;
    color: ${colors.brand.primary};
    background: ${colors.brand.lighter};
  }
`;

const StyledSelectItemIndicator = styled(ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  value: string;
  children: ReactNode;
  itemCSS?: SerializedStyles;
}

const SelectItem = forwardRef<HTMLDivElement, Props>(({ value, itemCSS, children, ...rest }, ref) => {
  return (
    <StyledItem value={value} ref={ref} css={itemCSS} {...rest}>
      <ItemText>{children}</ItemText>
      <StyledSelectItemIndicator>
        <Done />
      </StyledSelectItemIndicator>
    </StyledItem>
  );
});

export default SelectItem;
