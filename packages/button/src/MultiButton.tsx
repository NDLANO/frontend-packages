/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, misc } from '@ndla/core';
// @ts-ignore
import { PopUpWrapper } from '@ndla/forms';

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

const PopUpMenu = styled.ul`
  padding: 0;
  margin: 0;
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
      <PopUpWrapper
        label=""
        verticalPosition={verticalPosition}
        position="right"
        offsetY={popUpOffsetY}
        buttonComponentProps={clippedButtonAttachmentOutline}>
        {(setPopupState: VoidFunction) => (
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
        )}
      </PopUpWrapper>
    </StyledWrapper>
  );
};

export default MultiButton;
