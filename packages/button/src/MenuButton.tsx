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
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HorizontalMenu } from '@ndla/icons/contentType';
import { useTranslation } from 'react-i18next';
import { ButtonSize } from './';
import { convertSizeForSVG } from './IconButton';

interface StyledButtonProps {
  svgSize: number;
}

const shouldForwardProp = (name: string) => name !== 'svgSize';

const StyledMenuButton = styled(DropdownMenu.Trigger, { shouldForwardProp })<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.small};
  padding: 0;
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
  aspect-ratio: 1;
  background: none;
  border: none;
  transition: ${misc.transition.default};
  color: ${colors.brand.secondary};

  svg {
    width: ${({ svgSize }) => svgSize}px;
    height: ${({ svgSize }) => svgSize}px;
  }
`;

const MenuIconWrapper = styled.span<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ svgSize }) => svgSize}px;
  height: ${({ svgSize }) => svgSize}px;
  aspect-ratio: 1;
  border-radius: 100%;
  ${StyledMenuButton}:hover &,
  ${StyledMenuButton}:active &,
  ${StyledMenuButton}:focus &,
  ${StyledMenuButton}:focus-within & {
    background-color: ${colors.brand.lighter};
    color: ${colors.brand.primary};
  }
`;

const StyledHorizontalMenu = styled(HorizontalMenu)`
  border-radius: 100%;
  transition: ${misc.transition.default};
`;

const StyledMenuItems = styled(DropdownMenu.Content)`
  background: ${colors.white};
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

const StyledMenuItem = styled(DropdownMenu.Item)<StyledMenuItemProps>`
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};
  padding: ${spacing.xxsmall} ${spacing.small} ${spacing.xxsmall} ${spacing.xsmall};
  cursor: pointer;
  color: ${({ type }) => (type === 'danger' ? colors.support.red : colors.text.primary)};
  &[data-highlighted] {
    outline: none;
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
  menuIcon?: ReactNode;
  size?: ButtonSize;
}

export const MenuButton = ({ menuItems, size, menuIcon, className, tabIndex, ...rest }: MenuButtonProps) => {
  const { t } = useTranslation();
  return (
    <DropdownMenu.Root>
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
        <MenuIconWrapper svgSize={convertSizeForSVG(size || 'normal')}>
          {menuIcon || <StyledHorizontalMenu />}
        </MenuIconWrapper>
      </StyledMenuButton>
      <DropdownMenu.Portal
        onKeyDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}>
        <StyledMenuItems>
          {menuItems?.map(({ type, text, icon, onClick }) => (
            <StyledMenuItem
              key={text}
              onClick={(e) => {
                onClick(e);
                e.stopPropagation();
                e.preventDefault();
              }}
              type={type}
              aria-label={text}>
              {icon}
              {text}
            </StyledMenuItem>
          ))}
        </StyledMenuItems>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MenuButton;
