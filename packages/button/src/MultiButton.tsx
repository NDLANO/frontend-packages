/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { colors, misc } from '@ndla/core';
import FocusTrapReact from 'focus-trap-react';
import { css } from '@emotion/react';
import { ChevronDown } from '@ndla/icons/common';
import Button from './ButtonV2';

const clipLeft = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
`;

const clipRight = css`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
`;

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: stretch;
`;

type SpacerProps = {
  outline: boolean | undefined;
  disabled: boolean | undefined;
};

const Spacer = styled.div<SpacerProps>`
  background-color: ${({ outline, disabled }) => (outline && !disabled ? colors.brand.primary : 'white')};
  width: 1px;
  border-top: 2px solid ${({ disabled }) => (disabled ? colors.background.dark : colors.brand.primary)};
  border-bottom: 2px solid ${({ disabled }) => (disabled ? colors.background.dark : colors.brand.primary)};
`;

const StyledMenuWrapper = styled.div`
  position: relative;
`;

const PopUpMenu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

interface StyledOptionProps {
  verticalPosition: 'top' | 'bottom';
  large: boolean | undefined;
}

const StyledOptionWrapperAnimation = styled.div<StyledOptionProps>`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  border-radius: ${misc.borderRadius};
  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.4));
  position: absolute;
  right: 0;
  ${({ large, verticalPosition }) => {
    return css`
      ${verticalPosition}: ${large ? 52 : 38}px;
    `;
  }}
  z-index: 1;
`;

interface StyledButtonProps {
  outline: boolean | undefined;
}

const ButtonItem = styled(Button)<StyledButtonProps>`
  ${(props) =>
    props.outline &&
    css`
      border-color: ${colors.white};
      &:hover,
      &:focus {
        border: 2px solid ${colors.brand.primary};
      }
    `};
  white-space: nowrap;
  text-align: right;
  border-radius: 0;
  width: 100%;
  &:hover,
  &:focus,
  &:disabled {
    transform: translateY(0) translateX(0);
  }
`;

const MenuItem = styled.li<StyledButtonProps>`
  margin: 0;
  border-bottom: 1px solid ${(props) => (props.outline ? colors.brand.primary : colors.white)};
  line-height: normal;
  border-radius: 0;
  &:first-of-type {
    ${ButtonItem} {
      border-top-left-radius: ${misc.borderRadius};
      border-top-right-radius: ${misc.borderRadius};
    }
  }
  &:last-of-type {
    border-bottom: 0;
    ${ButtonItem} {
      border-bottom-left-radius: ${misc.borderRadius};
      border-bottom-right-radius: ${misc.borderRadius};
    }
  }
`;

type StyledIconProps = {
  isOpen: boolean;
};

const StyledIcon = styled(ChevronDown)<StyledIconProps>`
  transition: transform 200ms ease;
  transform: rotate(${({ isOpen }) => (isOpen ? 180 : 0)}deg);
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
  outline?: boolean;
  disabled?: boolean;
  large?: boolean;
  menuPosition?: 'top' | 'bottom';
  children?: ReactElement;
}

export const MultiButton = ({
  mainButton,
  secondaryButtons,
  onClick,
  outline,
  disabled,
  large,
  menuPosition = 'top',
  children,
}: Props) => {
  const [isOpen, toggleIsOpen] = useState(false);
  const { t } = useTranslation();
  const setPopupState = (newState: boolean) => {
    toggleIsOpen(newState);
  };
  const hideSecondaryButton = secondaryButtons.length === 0;

  const verticalPosition = menuPosition === 'top' ? 'bottom' : 'top';

  const isDisabled = secondaryButtons.find((button) => button.enable) ? false : disabled;

  return (
    <StyledWrapper>
      <Button
        css={clipRight}
        size={large ? 'large' : undefined}
        disabled={disabled}
        variant={outline && !disabled ? 'outline' : undefined}
        onClick={() => {
          onClick(mainButton.value);
        }}
      >
        {children || mainButton.label}
      </Button>
      {!hideSecondaryButton && (
        <>
          <Spacer outline={outline} disabled={disabled} />
          <FocusTrapReact
            active={isOpen}
            focusTrapOptions={{
              onDeactivate: () => setPopupState(false),
              clickOutsideDeactivates: true,
              escapeDeactivates: true,
            }}
          >
            <StyledMenuWrapper>
              <Button
                css={clipLeft}
                size={large ? 'large' : undefined}
                variant={outline && !disabled ? 'outline' : undefined}
                disabled={isDisabled}
                onClick={() => setPopupState(!isOpen)}
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-label={isOpen ? t('multibutton.close') : t('multibutton.open')}
              >
                <StyledIcon isOpen={isOpen} aria-hidden="true" />
              </Button>
              {isOpen && (
                <StyledOptionWrapperAnimation large={large} verticalPosition={verticalPosition}>
                  <PopUpMenu role="menu">
                    {secondaryButtons.map((button) => (
                      <MenuItem key={button.value} outline={outline} role="menuitem">
                        <ButtonItem
                          disabled={!(button.enable ?? !disabled)}
                          variant={outline ? 'outline' : undefined}
                          outline={outline}
                          size={large ? 'large' : undefined}
                          onClick={() => {
                            onClick(button.value);
                            setPopupState(false);
                          }}
                        >
                          {button.label}
                        </ButtonItem>
                      </MenuItem>
                    ))}
                  </PopUpMenu>
                </StyledOptionWrapperAnimation>
              )}
            </StyledMenuWrapper>
          </FocusTrapReact>
        </>
      )}
    </StyledWrapper>
  );
};

export default MultiButton;
