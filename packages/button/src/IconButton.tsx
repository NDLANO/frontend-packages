/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import styled from '@emotion/styled';
import { colors, spacing, misc } from '@ndla/core';

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: ${spacing.medium};
  width: ${spacing.medium};
  border-radius: 50%;
  transition: ${misc.transition.default};
  &:hover,
  &:focus {
    background-color: ${colors.brand.light};
    box-shadow: none;
  }
  &:active {
    transform: translate(1px, 1px);
  }
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string;
  children: ReactElement;
  onClick?: React.MouseEventHandler;
}

export const IconButton = ({ ariaLabel, children, onClick }: Props) => (
  <StyledButton onClick={onClick} aria-label={ariaLabel}>
    {children}
  </StyledButton>
);

export default IconButton;
