/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing, animations } from '@ndla/core';
import { Plus } from '@ndla/icons/action';
import { Button, ButtonProps } from './Button';

const AddIconBorder = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.brand.tertiary};
  border-radius: 50%;
  transition: background ${animations.durations.superFast} ease-in-out;
`;

const TextWrapper = styled.span`
  color: ${colors.brand.primary};
  align-items: center;
  display: flex;
  ${fonts.weight.semibold}
  ${fonts.sizes('16')}
`;

const AddButtonStyle = styled(Button)`
  display: flex;
  padding: 0;
  gap: ${spacing.small};
  svg {
    fill: ${colors.brand.primary};
    width: 24px;
    height: 24px;
  }
  &:focus,
  &:active,
  &:hover {
    background-color: transparent;
      &:not(:disabled) {
      svg {
        fill: white;
      }
      ${AddIconBorder} {
        background-color: ${colors.brand.primary};
      }
    }
    }
  }
  &:disabled {
    color: ${colors.brand.grey};
    svg {
        fill: ${colors.brand.grey};
      }
      ${AddIconBorder} {
        background-color: ${colors.brand.greyLighter};
        border-color: ${colors.brand.greyLight};
      }
      ${TextWrapper} {
        color: ${colors.brand.grey};
      }
  }
`;

interface AddButtonProps extends ButtonProps {
  ['aria-label']: string;
}

export const AddButton = ({ children, size, ...rest }: AddButtonProps) => (
  <AddButtonStyle size={size || 'xsmall'} stripped {...rest}>
    <AddIconBorder>
      <Plus />
    </AddIconBorder>
    <TextWrapper>{children}</TextWrapper>
  </AddButtonStyle>
);

export default AddButton;
