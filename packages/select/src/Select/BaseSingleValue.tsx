/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts } from '@ndla/core';
import { GroupBase, SingleValueProps } from 'react-select';
import { Option } from './types';

export const TextEllipsis = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  grid-area: 1 / 1 / 2 / 3;
  white-space: nowrap;
`;

const StyledPostfix = styled.span`
  font-weight: ${fonts.weight.semibold};
  &[data-small='false'][data-bold='true'] {
    font-weight: ${fonts.weight.bold};
  }
`;

interface Props<T extends boolean> extends SingleValueProps<Option, T, GroupBase<Option>> {
  small?: boolean;
  bold?: boolean;
}

const BaseSingleValue = <T extends boolean>({
  innerProps,
  selectProps: { small, prefix, postfix, bold },
  children,
}: Props<T>) => {
  return (
    <TextEllipsis {...innerProps}>
      <StyledPostfix data-small={small} data-bold={bold}>
        {prefix}
      </StyledPostfix>
      {children}
      <span>{postfix}</span>
    </TextEllipsis>
  );
};

export default BaseSingleValue;
