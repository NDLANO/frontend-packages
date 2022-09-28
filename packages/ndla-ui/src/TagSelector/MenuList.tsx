/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import React from 'react';
import { MenuListProps } from 'react-select';
import { TagType } from './types';

const StyledMenuList = styled.div`
  overflow: overlay;
  ::-webkit-scrollbar {
    width: ${spacing.small};
  }
  ::-webkit-scrollbar-thumb {
    border: 4px solid transparent;
    border-radius: 14px;
    background-clip: padding-box;
    padding: 0 4px;
    background-color: ${colors.brand.neutral7};
  }

  display: flex;
  flex-direction: column;
`;

const MenuList = ({ innerProps, innerRef, children }: MenuListProps<TagType, true>) => {
  return (
    <StyledMenuList ref={innerRef} {...innerProps}>
      {children}
    </StyledMenuList>
  );
};

export default MenuList;
