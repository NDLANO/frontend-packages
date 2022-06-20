/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement, ReactNode } from 'react';
import { colors, spacingUnit, spacing, shadows } from '@ndla/core';
import { Menu, MenuList, MenuItem, MenuButton as MenuButtonReach } from '@reach/menu-button';
import { HorizontalMenu } from '@ndla/icons/contentType';
import { useTranslation } from 'react-i18next';
import { ButtonProps } from './';
import { convertSizeForSVG } from './IconButton';

interface StyledButtonProps {
  svgSize: number;
}

const StyledMenuButton = styled(MenuButtonReach)<StyledButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing.small};
  padding: ${({ svgSize }) => spacingUnit * (svgSize > spacingUnit ? 0.2 : 0.25)}px;
  &:hover *,
  &:active *,
  &:focus * {
    color: ${colors.brand.primary};
  }

  svg {
    fill: ${colors.brand.secondary};
    margin: 0;
    width: ${({ svgSize }) => svgSize}px;
    height: ${({ svgSize }) => svgSize}px;
  }
`;
const StyledHorizontalMenu = styled(HorizontalMenu)`
  border-radius: 100%;
  &:hover,
  &:active,
  &:focus,
  ${() => StyledMenuButton}:active, ${() => StyledMenuButton}:focus, ${() => StyledMenuButton}:hover & {
    background-color: ${colors.brand.light};
  }
`;

const StyledMenuList = styled(MenuList)`
  border: none;
  background-color: white;
  padding: ${spacing.small};
  border-radius: 4px;
  box-shadow: ${shadows.levitate1};
`;

const StyledMenuItem = styled(MenuItem)`
  gap: ${spacing.small};
  padding: ${spacing.xxsmall};
  display: flex;
  cursor: pointer;
  color: ${(prop) => prop.color};
  span {
    display: flex;
    align-items: center;
  }
  svg {
    fill: ${(prop) => prop.color};
  }
  :hover {
    color: ${colors.brand.primary};
  }
`;

export interface MenuItemProps {
  icon?: ReactElement;
  text?: string;
  onClick: () => void;
  color?: string;
}
interface MenuButtonProps extends ButtonProps {
  menuItems?: MenuItemProps[];
  children?: ReactElement;
  menuButtonPrefix?: ReactNode;
}
export const MenuButton = ({ menuItems, size, children }: MenuButtonProps) => {
  const { t } = useTranslation();
  return (
    <Menu aria-label={t('myNdla.more')}>
      <StyledMenuButton svgSize={convertSizeForSVG(size || 'normal')}>
        {children}
        <StyledHorizontalMenu />
      </StyledMenuButton>
      <StyledMenuList>
        {menuItems?.map(({ color, text, icon, onClick }) => (
          <StyledMenuItem onSelect={onClick} color={color} aria-label={text}>
            <span>{icon}</span>
            <span>{text}</span>
          </StyledMenuItem>
        ))}
      </StyledMenuList>
    </Menu>
  );
};

export default MenuButton;
