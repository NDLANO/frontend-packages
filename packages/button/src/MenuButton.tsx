/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement, ReactNode, MouseEvent } from 'react';
import { colors, spacing, shadows, misc, animations } from '@ndla/core';
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
  padding: 0;
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
  z-index: 99999;
  position: relative;
  @media (prefers-reduced-motion: no-preference) {
    ${animations.fadeInTop(animations.durations.fast)}
  }
`;

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
  padding: ${spacing.xxsmall} ${spacing.small} ${spacing.xxsmall} ${spacing.xsmall};
  cursor: pointer;
  color: ${({ color }) => (color === 'red' ? colors.support.red : colors.text.primary)};
  &[data-selected] {
    color: ${({ color }) => (color === 'red' ? colors.support.red : colors.brand.primary)};
    background: ${({ color }) => (color === 'red' ? colors.support.redLightest : colors.brand.lighter)};
  }
`;

export interface MenuItemProps {
  icon?: ReactElement;
  text?: string;
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
  color?: 'red';
}

interface MenuButtonProps extends ButtonProps {
  menuItems?: MenuItemProps[];
  children?: ReactElement;
  menuButtonPrefix?: ReactNode;
  hideMenuIcon?: boolean;
  tabIndex?: number;
}
export const MenuButton = ({ menuItems, size, children, hideMenuIcon, className, tabIndex }: MenuButtonProps) => {
  const { t } = useTranslation();
  return (
    <Menu aria-label={t('myNdla.more')} tabIndex={tabIndex}>
      <StyledMenuButton tabIndex={tabIndex} className={className} svgSize={convertSizeForSVG(size || 'normal')}>
        {children}
        {!hideMenuIcon && <StyledHorizontalMenu />}
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
