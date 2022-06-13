/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { MouseEventHandler, ReactElement } from 'react';
import { colors, spacingUnit, spacing } from '@ndla/core';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import { HorizontalMenu } from '@ndla/icons/contentType';
import { ButtonSize, ButtonProps } from './';

interface StyledButtonProps {
  svgSize: number;
}

const StyledMenuButton = styled(MenuButton)<StyledButtonProps>`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  border-radius: 50px;

  padding: ${({ svgSize }) => spacingUnit * (svgSize > spacingUnit ? 0.2 : 0.25)}px;
  &:hover,
  &:active,
  &:focus {
    background-color: ${colors.brand.light};
    border: none;
    box-shadow: none;
  }
  svg {
    fill: ${colors.brand.secondary};
    margin: 0;

    width: ${({ svgSize }) => svgSize}px;
    height: ${({ svgSize }) => svgSize}px;
  }
`;

const StyledMenuList = styled(MenuList)`
  border: none;
  background-color: white;
  padding: ${spacing.nsmall};
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const StyledMenuItem = styled(MenuItem)<MenuItemProps>`
  gap: ${spacing.small};
  padding: ${spacing.xxsmall};
  display: flex;
  cursor: pointer;
  color: ${(prop) => prop.color};
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    fill: ${(prop) => prop.color};
  }
`;
const convertSizeForSVG = (size: ButtonSize) => {
  if (size === 'xsmall') {
    return spacingUnit * 0.75;
  }
  if (size === 'small') {
    return spacingUnit * 1;
  }
  if (size === 'normal') {
    return spacingUnit * 1.25;
  }
  if (size === 'medium') {
    return spacingUnit * 2;
  }
  if (size === 'large') {
    return spacingUnit * 2.5;
  }
  return spacingUnit;
};
interface MenuItemProps {
  icon?: ReactElement;
  text?: string;
  onClick?: MouseEventHandler;
  color?: string;
}
interface MultiButtonProps extends ButtonProps {
  svgSize: StyledButtonProps;
  menuItems?: MenuItemProps[];
}
export const MoreButton = ({ menuItems, size }: MultiButtonProps) => {
  return (
    <>
      <Menu>
        <StyledMenuButton svgSize={convertSizeForSVG(size || 'normal')}>
          <HorizontalMenu />
        </StyledMenuButton>
        <StyledMenuList>
          {menuItems?.map((item) => {
            return (
              <StyledMenuItem onSelect={() => item.onClick} color={item.color}>
                <div> {item.icon}</div>
                <div>{item.text}</div>
              </StyledMenuItem>
            );
          })}
        </StyledMenuList>
      </Menu>
    </>
  );
};

export default MoreButton;
