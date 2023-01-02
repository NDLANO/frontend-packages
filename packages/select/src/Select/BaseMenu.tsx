import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import { MenuProps, components, GroupBase } from 'react-select';
import { Option } from './types';

const StyledBaseMenu = styled.div<Props>`
  background-color: ${colors.white};
  border: 1px solid ${colors.brand.light};
  border-radius: ${({ small }) => (small ? '4px' : '8px')};
  margin: 4px 0;
`;

interface Props {
  small?: boolean;
}

const BaseMenu = <T extends boolean>({ small, children, ...props }: MenuProps<Option, T> & Props) => {
  return (
    <components.Menu<Option, T, GroupBase<Option>> {...props}>
      <StyledBaseMenu small={small}>{children}</StyledBaseMenu>
    </components.Menu>
  );
};

export default BaseMenu;
