/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors, misc } from '@ndla/core';
import FocusTrapReact from 'focus-trap-react';
import { css } from '@emotion/core';
// @ts-ignore
import { ChevronDown } from '@ndla/icons/common';

// @ts-ignore
import { Button, buttonStyle, outlineStyle, largeStyle } from './Button';

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: stretch;
`;

type SpacerProps = {
  outline?: boolean;
  disabled?: boolean;
};

const Spacer = styled.div<SpacerProps>`
  background-color: ${props =>
    props.outline && !props.disabled ? colors.brand.primary : 'white'};
  width: 1px;
  border-top: 2px solid
    ${props => (props.disabled ? colors.background.dark : colors.brand.primary)};
  border-bottom: 2px solid
    ${props => (props.disabled ? colors.background.dark : colors.brand.primary)};
`;

const StyledMenuWrapper = styled.div`
  position: relative;
`;

const PopUpMenu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

type StyledOptionProps = {
  verticalPosition?: 'top' | 'bottom';
  offsetY?: number | string;
};

const StyledOptionWrapperAnimation = styled.div<StyledOptionProps>`
  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.4));
  position: absolute;
  right: 0;
  ${props => {
    if (props.verticalPosition === 'top') {
      return css`
        top: ${props.offsetY};
      `;
    } else if (props.verticalPosition === 'bottom') {
      return css`
        bottom: ${props.offsetY};
      `;
    }
  }}
  z-index: 1;
`;

const StyledOptionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledOptionWrapper = styled.div`
  background: #fff;
  border-radius: ${misc.borderRadius};
  display: flex;
  flex-direction: column;
`;

type StyledButtonProps = {
  outline?: boolean;
  large?: boolean;
};
const ButtonItem = styled.button<StyledButtonProps>`
  ${buttonStyle};
  ${props => props.outline && outlineStyle}
  ${props => props.large && largeStyle}
  ${props =>
    props.outline &&
    `
    border-color:white;
    &:hover,
    &:focus {
      border: 2px solid ${colors.brand.primary};
    }
  `}
  white-space: nowrap;
  text-align:right;
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
  border-bottom: 1px solid
    ${props => (props.outline ? colors.brand.primary : `white`)};
  line-height: normal;
  border-radius: 0;
  &:first-of-type {
    ${ButtonItem} {
      border-top-left-radius: ${misc.borderRadius};
      border-top-right-radius: ${misc.borderRadius};
    }
  }
  &:last-child {
    border-bottom: 0;
    ${ButtonItem} {
      border-bottom-left-radius: ${misc.borderRadius};
      border-bottom-right-radius: ${misc.borderRadius};
    }
  }
`;

type StyledIconProps = {
  rotate: number;
};

const StyledIcon = styled(ChevronDown)<StyledIconProps>`
  transition: transform 200ms ease;
  transform: rotate(${props => props.rotate}deg);
`;

type ButtonProps = {
  label: string;
  value: string;
};

type Props = {
  mainButton: ButtonProps;
  secondaryButtons: Array<ButtonProps>;
  onClick: (value: string) => void;
  outline?: boolean;
  disabled?: boolean;
  large?: boolean;
  menuPosition?: 'top' | 'bottom';
};

export const MultiButton = ({
  mainButton,
  secondaryButtons,
  onClick,
  outline,
  disabled,
  large,
  menuPosition = 'top',
}: Props) => {
  const [isOpen, toggleIsOpen] = useState(false);
  const setPopupState = (newState?: boolean) => {
    toggleIsOpen(!!newState);
  };

  let clippedButtonProps = {
    disabled: disabled,
    large: large,
    clippedButton: true,
    clippedButtonOutline: false,
  };
  const clippedButtonAttachmentOutline = {
    disabled: disabled,
    large: large,
    clippedButtonAttachment: true,
    clippedButtonAttachmentOutline: false,
  };
  if (outline) {
    clippedButtonProps.clippedButton = false;
    clippedButtonProps.clippedButtonOutline = true;
    clippedButtonAttachmentOutline.clippedButtonAttachment = false;
    clippedButtonAttachmentOutline.clippedButtonAttachmentOutline = true;
  }

  const popUpOffsetY = large ? '52px' : '38px';
  const verticalPosition = menuPosition === 'top' ? 'bottom' : 'top';

  return (
    <StyledWrapper>
      <Button
        {...clippedButtonProps}
        onClick={() => {
          onClick(mainButton.value);
        }}>
        {mainButton.label}
      </Button>
      <Spacer outline={outline} disabled={disabled} />
      <StyledMenuWrapper>
        <FocusTrapReact
          active={isOpen}
          focusTrapOptions={{
            onDeactivate: () => setPopupState(false),
            clickOutsideDeactivates: true,
            escapeDeactivates: true,
          }}>
          <div>
            <Button
              {...clippedButtonAttachmentOutline}
              onClick={() => setPopupState(!isOpen)}>
              <StyledIcon rotate={isOpen ? 180 : 0} />
            </Button>
            {isOpen && (
              <StyledOptionWrapperAnimation
                offsetY={popUpOffsetY}
                verticalPosition={verticalPosition}>
                <StyledOptionWrapper>
                  <StyledOptionContent>
                    <PopUpMenu>
                      {secondaryButtons.map(button => (
                        <MenuItem key={button.value} outline={outline}>
                          <ButtonItem
                            outline={outline}
                            large={large}
                            onClick={() => {
                              onClick(button.value);
                              setPopupState();
                            }}>
                            {button.label}
                          </ButtonItem>
                        </MenuItem>
                      ))}
                    </PopUpMenu>
                  </StyledOptionContent>
                </StyledOptionWrapper>
              </StyledOptionWrapperAnimation>
            )}
          </div>
        </FocusTrapReact>
      </StyledMenuWrapper>
    </StyledWrapper>
  );
};

export default MultiButton;
