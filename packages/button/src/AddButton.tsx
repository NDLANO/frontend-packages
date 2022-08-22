/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { Button, ButtonProps } from './Button';

const TextWrapper = styled.span`
  align-items: center;
  display: flex;
  ${fonts.weight.semibold}
  ${fonts.sizes('16')}
`;

const AddButtonStyle = styled(Button)<ButtonProps>`
  display: flex;
  padding: ${spacing.xxsmall} ${spacing.small};

  gap: ${spacing.xsmall};
  svg {
    width: 24px;
    height: 24px;
  }

  &:disabled {
    color: ${colors.brand.grey};
    svg {
      fill: ${colors.brand.grey};
    }

    ${TextWrapper} {
      color: ${colors.brand.grey};
    }
  }
`;

interface AddButtonProps extends ButtonProps {
  ['aria-label']: string;
  text?: string;
}

export const AddButton = ({ children, size, text, ...rest }: AddButtonProps) => (
  <AddButtonStyle size={size || 'xsmall'} {...rest}>
    {children}
    <TextWrapper>{text}</TextWrapper>
  </AddButtonStyle>
);

export default AddButton;
