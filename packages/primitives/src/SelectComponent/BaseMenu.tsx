/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { ComponentType } from 'react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import { GroupBase, MenuProps } from 'react-select';
import { Option } from './types';

const StyledBaseMenu = styled.div`
  background-color: ${colors.white};
  border-radius: 4px;
  margin-top: 2px;
  width: 100%;
  border: 1px solid ${colors.brand.greyLight};
`;

const BaseMenu = ({ children, innerRef, innerProps }: MenuProps<unknown, boolean, GroupBase<Option>>) => {
  return (
    <StyledBaseMenu ref={innerRef} {...innerProps}>
      {children}
    </StyledBaseMenu>
  );
};

export default BaseMenu;
