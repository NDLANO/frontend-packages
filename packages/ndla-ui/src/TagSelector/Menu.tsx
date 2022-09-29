/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import React from 'react';
import { MenuProps } from 'react-select';
import { StyledMenuOption } from './Option';
import { TagType } from './types';

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  overflow: hidden;
  border-top: 1px solid ${colors.brand.tertiary};
  min-height: 70px;

  &:has(${() => StyledMenuOption}:only-child) {
    min-height: 40px;
  }
`;

const Menu = ({ innerProps, innerRef, children }: MenuProps<TagType, true>) => {
  return (
    <StyledMenu ref={innerRef} {...innerProps}>
      {children}
    </StyledMenu>
  );
};

export default Menu;
