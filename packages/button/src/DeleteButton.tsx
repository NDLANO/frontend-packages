/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import { Button } from './Button';

const StyledDeleteButton = styled(Button)`
  color: ${colors.support.red};
  border-color: ${colors.support.red};
  &:hover,
  :focus {
    background-color: ${colors.support.red};
  }
`;

// Deprecated: Use regular button with danger theme instead.
export const DeleteButton = ({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledDeleteButton outline {...rest}>
      {children}
    </StyledDeleteButton>
  );
};

export default DeleteButton;
