/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { colors, shadows } from '@ndla/core';
import { ChevronDown } from '@ndla/icons/common';
import { Content, Item, Portal, Root, Trigger } from '@radix-ui/react-dropdown-menu';
import ButtonV2 from './ButtonV2';

const MainButton = styled(ButtonV2)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Spacer = styled.div`
  background-color: white;
  width: 1px;
  border-top: 2px solid ${colors.brand.primary};
  border-bottom: 2px solid ${colors.brand.primary};
  &[data-disabled] {
    border-bottom-color: ${colors.background.dark};
    border-top-color: ${colors.background.dark};
  }
`;

interface ButtonProps {
  label: string;
  value: string;
  enable?: boolean;
}

interface Props {
  mainButton: ButtonProps;
  secondaryButtons: Array<ButtonProps>;
  onClick: (value: string) => void;
  disabled?: boolean;
  large?: boolean;
  menuPosition?: 'top' | 'bottom';
  children?: ReactElement;
}

const MenuButton = styled(ButtonV2)`
  display: flex;
  width: 100%;
  border: 0;
  &:not(:first-child):not(:last-child) {
    border-radius: 0;
    border-top: 1px solid ${colors.white};
  }
  &:first-of-type {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-of-type {
    border-top: 1px solid ${colors.white};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const MenuItems = styled(Content)`
  box-shadow: ${shadows.levitate1};
`;

const ToggleButton = styled(ButtonV2)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
  transition: all 200ms ease;
  &[data-state='open'] {
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const MultiButton = ({
  mainButton,
  secondaryButtons,
  onClick,
  disabled,
  large,
  menuPosition = 'top',
  children,
}: Props) => {
  const hideSecondaryButton = secondaryButtons.length === 0;

  const isDisabled = secondaryButtons.find((button) => button.enable) ? false : disabled;

  return (
    <Wrapper>
      <MainButton size={large ? 'large' : undefined} disabled={disabled} onClick={() => onClick(mainButton.value)}>
        {children || mainButton.label}
      </MainButton>
      {!hideSecondaryButton && (
        <>
          <Spacer data-disabled={disabled} />
          <Root>
            <Trigger asChild>
              <ToggleButton size={large ? 'large' : undefined} disabled={isDisabled}>
                <ChevronDown />
              </ToggleButton>
            </Trigger>
            <Portal>
              <MenuItems side={menuPosition} align="end">
                {secondaryButtons.map((button) => (
                  <Item
                    asChild
                    key={button.value}
                    disabled={button.enable !== undefined ? !button.enable : false}
                    onSelect={() => onClick(button.value)}
                  >
                    <MenuButton disabled={button.enable !== undefined ? !button.enable : false}>
                      {button.label}
                    </MenuButton>
                  </Item>
                ))}
              </MenuItems>
            </Portal>
          </Root>
        </>
      )}
    </Wrapper>
  );
};

export default MultiButton;
