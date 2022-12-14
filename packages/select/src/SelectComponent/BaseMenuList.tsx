/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import { GroupBase, MenuListProps } from 'react-select';
import { Option } from './types';

const StyledBaseMenuList = styled.div`
  background-color: ${colors.white};
  border-radius: 4px;
  margin: 2px 0px;
  width: 100%;
  border: 1px solid ${colors.brand.greyLight};
`;

const BaseMenuList = <T extends boolean>({
  children,
  innerRef,
  innerProps,
}: MenuListProps<Option, T, GroupBase<Option>>) => {
  return (
    <StyledBaseMenuList ref={innerRef} {...innerProps}>
      {children}
    </StyledBaseMenuList>
  );
};

export default BaseMenuList;
