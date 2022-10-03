/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactNode, MouseEvent, ButtonHTMLAttributes } from 'react';
import { colors, spacing, shadows, misc, animations } from '@ndla/core';
import { Menu, MenuItem, MenuButton as MenuButtonReach, MenuPopover, MenuItems } from '@reach/menu-button';
import { positionRight, positionDefault } from '@reach/popover';
import { HorizontalMenu } from '@ndla/icons/contentType';
import { useTranslation } from 'react-i18next';
import { ButtonSize } from './';
import { convertSizeForSVG } from './IconButton';

interface StyledButtonProps {
  svgSize: number;
}

const shouldForwardProp = (name: string) => name !== 'svgSize';

const StyledMenuButton = styled(MenuButtonReach, { shouldForwardProp })<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.small};
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 100%;
  transition: ${misc.transition.default};
  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    color: ${colors.brand.primary};
    ${() => StyledHorizontalMenu} {
      background-color: ${colors.brand.light};
    }
  }

  svg {
    width: ${({ svgSize }) => svgSize}px;
    height: ${({ svgSize }) => svgSize}px;
    fill: ${colors.brand.secondary};
  }
`;

const StyledHorizontalMenu = styled(HorizontalMenu)`
  border-radius: 100%;
  transition: ${misc.transition.default};
`;

const StyledMenuItems = styled(MenuItems)`
  padding: 0;
  border: none;
  border-radius: 4px;
  box-shadow: ${shadows.levitate1};
  z-index: 99999;
  @media (prefers-reduced-motion: no-preference) {
    ${animations.fadeIn(animations.durations.fast)}
  }
`;

interface StyledMenuItemProps {
  type?: 'danger';
}

const StyledMenuItem = styled(MenuItem)<StyledMenuItemProps>`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
  padding: ${spacing.xxsmall} ${spacing.small} ${spacing.xxsmall} ${spacing.xsmall};
  cursor: pointer;
  color: ${({ type }) => (type === 'danger' ? colors.support.red : colors.text.primary)};
  &[data-selected] {
    color: ${({ type }) => (type === 'danger' ? colors.support.red : colors.brand.primary)};
    background: ${({ type }) => (type === 'danger' ? colors.support.redLightest : colors.brand.lighter)};
  }
`;

export interface MenuItemProps {
  icon?: ReactNode;
  text?: string;
  onClick: (e?: MouseEvent<HTMLDivElement>) => void;
  type?: 'danger';
}

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  menuItems?: MenuItemProps[];
  children?: ReactNode;
  menuButtonPrefix?: ReactNode;
  hideMenuIcon?: boolean;
  tabIndex?: number;
  size?: ButtonSize;
  alignRight?: boolean;
}
export const MenuButton = ({
  menuItems,
  size,
  children,
  hideMenuIcon,
  className,
  tabIndex,
  alignRight,
  ...rest
}: MenuButtonProps) => {
  const { t } = useTranslation();
  return (
    <Menu tabIndex={tabIndex}>
      <StyledMenuButton
        aria-label={t('myNdla.more')}
        tabIndex={tabIndex}
        className={className}
        svgSize={convertSizeForSVG(size || 'normal')}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }} // Prevent redirect from triggering when placed inside <a>
        {...rest}>
        {children}
        {!hideMenuIcon && <StyledHorizontalMenu />}
      </StyledMenuButton>
      <MenuPopover
        onKeyDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        portal={true}
        position={alignRight ? positionRight : positionDefault}>
        <StyledMenuItems>
          {menuItems?.map(({ type, text, icon, onClick }) => (
            <StyledMenuItem
              key={text}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
              onSelect={onClick}
              type={type}
              aria-label={text}>
              {icon}
              {text}
            </StyledMenuItem>
          ))}
        </StyledMenuItems>
      </MenuPopover>
    </Menu>
  );
};

export default MenuButton;
