/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { misc } from '@ndla/core';
import Tooltip from '@ndla/tooltip';
import { colors } from '@ndla/core';

export type IconSize = 'small' | 'medium' | 'large';
export type IconColor = 'primary' | 'secondary' | 'tertiary';
export type IconHoverFill = 'primary' | 'secondary' | 'tertiary';
export type IconType = 'favorite' | 'primary';

export const Theme = {
  heartIcon: {
    fill: colors.brand.primary,
    backgroundColor: 'transparent',
    hover: colors.brand.primary,
    heightWidthSize: '1.5em',
  },
  primaryIcon: {
    colors: 'red',
  },
};

export const StyledButton = styled.button<Props>`
  size: ${(props) => {
    if (props.size === 'small') {
      return '1.5em';
    }

    if (props.size === 'medium') {
      return '1.5em';
    }
  }};
  color: ${(props) => {
    if (props.svg?.fill === 'primary') {
      return colors.brand.primary;
    }
  }};
  ${(props) =>
    props.iconType === 'favorite' &&
    css`
      font-size: size;

      svg {
        height: size;
        width: size;
        fill: colors;
      }
    `}
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${(p: Props) => p.button?.borderRadius};
  transition: ${misc.transition.default};
  &:hover,
  &:focus {
    background-color: ${(p: Props) => p.button?.hoverBackground};
    color: ${(p: Props) => p.button?.hoverColor};
    box-shadow: none;
  }

  svg {
    stroke-width: ${(p: Props) => p.svg?.strokeWidth};

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
  size?: IconSize;
  iconType?: IconType;
}

export const IconButton = ({ children, onClick, svg, button, toolTip, size, ...rest }: Props) => (
  <Tooltip tooltip={toolTip}>
    <StyledButton onClick={onClick} svg={svg} button={button} size={size}>
      {children}
    </StyledButton>
  </Tooltip>
);

export default IconButton;
