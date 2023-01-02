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
import { CSSObjectWithLabel } from 'react-select';
import { MenuPropsType } from './types';

const StyledBaseMenu = styled.div<{ baseStyling: CSSObjectWithLabel }>`
  ${(props) => props.baseStyling};
  width: auto;
  min-width: 100%;
  overflow: hidden;
  border: 1px solid ${colors.brand.greyLighter};
`;

const BaseMenu = <T extends boolean>(props: MenuPropsType<T>) => {
  const { innerRef, innerProps, children } = props;
  const baseMenuStyles = props.getStyles('menu', props);

  return (
    <StyledBaseMenu baseStyling={baseMenuStyles} ref={innerRef} {...innerProps}>
      {children}
    </StyledBaseMenu>
  );
};

export default BaseMenu;
