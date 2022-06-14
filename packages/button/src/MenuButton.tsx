/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { colors, spacingUnit, spacing } from '@ndla/core';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import { HorizontalMenu } from '@ndla/icons/contentType';
import { useTranslation } from 'react-i18next';
import { ButtonProps } from './';
import { convertSizeForSVG } from './IconButton';

interface StyledButtonProps {
  svgSize: number;
}

const StyledMenuButton = styled(MenuButton)<StyledButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  border-radius: 100%;
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

const StyledMenuItem = styled(MenuItem)`
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
  :hover {
    color: ${colors.brand.primary};
  }
`;

interface MenuItemProps {
  icon?: ReactElement;
  text?: string;
  onClick: void;
  color?: string;
}
interface MultiButtonProps extends ButtonProps {
  svgSize: StyledButtonProps;
  menuItems?: MenuItemProps[];
}
export const MoreButton = ({ menuItems, size }: MultiButtonProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Menu aria-label={t('myNdla.more')}>
        <StyledMenuButton svgSize={convertSizeForSVG(size || 'normal')}>
          <HorizontalMenu />
        </StyledMenuButton>
        <StyledMenuList>
          {menuItems?.map(({ color, text, icon, onClick }) => {
            return (
              <StyledMenuItem onSelect={() => onClick()} color={color} aria-label={text}>
                <div> {icon}</div>
                <div>{text}</div>
              </StyledMenuItem>
            );
          })}
        </StyledMenuList>
      </Menu>
    </>
  );
};

export default MoreButton;
