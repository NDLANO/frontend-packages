/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import { MenuProps, components, GroupBase } from 'react-select';
import { Option } from './types';

const menuStyle = css`
  min-width: 100%;
  width: unset;
`;

const StyledBaseMenu = styled.div<Props>`
  overflow: hidden;
  background-color: ${colors.white};
  border: 1px solid ${colors.brand.light};
  border-radius: ${({ small }) => (small ? '4px' : '8px')};
  margin: 4px 0;
`;

interface Props {
  small?: boolean;
}

const BaseMenu = <T extends boolean>({ small, children, ...props }: Props & MenuProps<Option, T>) => (
  <components.Menu<Option, T, GroupBase<Option>> {...props} css={menuStyle}>
    <StyledBaseMenu small={small}>{children}</StyledBaseMenu>
  </components.Menu>
);
export default BaseMenu;
