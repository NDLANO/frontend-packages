/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement, ReactNode } from 'react';
import { colors, spacingUnit, spacing, shadows, misc } from '@ndla/core';
import { Menu, MenuList, MenuItem, MenuButton as MenuButtonReach } from '@reach/menu-button';
import { HorizontalMenu } from '@ndla/icons/contentType';
import { useTranslation } from 'react-i18next';
import { ButtonProps } from './';
import { convertSizeForSVG } from './IconButton';

interface StyledButtonProps {
  svgSize: number;
}

const StyledMenuButton = styled(MenuButtonReach)<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacing.small};
  padding: ${({ svgSize }) => spacingUnit * (svgSize > spacingUnit ? 0.2 : 0.25)}px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  &:hover *,
  &:active *,
  &:focus * {
    color: ${colors.brand.primary};
  }

  svg {
    margin: 0;
    width: ${({ svgSize }) => svgSize}px;
    height: ${({ svgSize }) => svgSize}px;
    fill: ${colors.brand.secondary};
  }
`;
const StyledHorizontalMenu = styled(HorizontalMenu)`
  border-radius: 100%;
  transition: ${misc.transition.default};
  &:hover,
  &:active,
  &:focus,
  ${() => StyledMenuButton}:active, ${() => StyledMenuButton}:focus, ${() => StyledMenuButton}:hover & {
    background-color: ${colors.brand.light};
  }
`;

const StyledMenuList = styled(MenuList)`
  overflow: hidden;
  padding: 0;
  background-color: white;
  border: none;
  border-radius: 4px;
  box-shadow: ${shadows.levitate1};
`;

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: ${spacing.small};
  padding: ${spacing.small};
  cursor: pointer;
  color: ${({ color }) => color === 'red' && colors.support.red};
  &[data-selected] {
    background: ${colors.brand.secondary};
  }
`;

export interface MenuItemProps {
  icon?: ReactElement;
  text?: string;
  onClick: () => void;
  color?: 'red';
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
            {icon}
            {text}
          </StyledMenuItem>
        ))}
      </StyledMenuList>
    </Menu>
  );
};

export default MenuButton;
