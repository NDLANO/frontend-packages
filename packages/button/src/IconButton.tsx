/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import styled from '@emotion/styled';
import { misc } from '@ndla/core';
import Tooltip from '@ndla/tooltip';

const StyledButton = styled.button<Props>`
  background-color: ${(p: Props) => p.button?.backgroundColor};
  border: ${(p: Props) => p.button?.border};
  color: ${(p: Props) => p.button?.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: ${(p: Props) => p.button?.height};
  width: ${(p: Props) => p.button?.width};
  border-radius: ${(p: Props) => p.button?.borderRadius};
  transition: ${misc.transition.default};
  font-size: ${(p: Props) => p.size};
  &:hover,
  &:focus {
    background-color: ${(p: Props) => p.button?.hoverBackground};
    color: ${(p: Props) => p.button?.hoverColor};
    box-shadow: none;
  }
  &:active {
  }

  svg {
    fill: ${(p: Props) => p.svg?.fill};
    stroke: ${(p: Props) => p.svg?.stroke};
    stroke-width: ${(p: Props) => p.svg?.strokeWidth};
    height: ${(p: Props) => p.size};
    width: ${(p: Props) => p.size};
    &:hover,
    &:focus {
      fill: ${(p: Props) => p.svg?.hoverFill};
      box-shadow: none;
    }
  }
`;

type SvgProps = {
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  hoverFill?: string;
};

type ButtonProps = {
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  hoverColor?: string;
  hoverBackground?: string;
};
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement;
  onClick?: React.MouseEventHandler;
  button?: ButtonProps;
  svg?: SvgProps;
  toolTip?: string;
  size?: string;
}

export const IconButton = ({ children, onClick, svg, button, toolTip, size, ...rest }: Props) => (
  <Tooltip tooltip={toolTip}>
    <StyledButton onClick={onClick} svg={svg} button={button} size={size}>
      {children}
    </StyledButton>
  </Tooltip>
);

export default IconButton;
