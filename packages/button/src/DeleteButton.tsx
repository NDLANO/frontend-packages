/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import { Button } from './Button';

const StyledDeleteButton = styled(Button)`
  color: ${colors.support.red};
  border: 1px solid ${colors.support.red};
  background-color: transparent;
  &:hover,
  :focus {
    background-color: ${colors.support.red};
    color: white;
    border: 1px solid white;
  }
`;
interface DeleteButtonProps {
  children?: ReactElement;
}
export const DeleteButton = ({ children }: DeleteButtonProps) => {
  return <StyledDeleteButton>{children}</StyledDeleteButton>;
};

export default DeleteButton;
