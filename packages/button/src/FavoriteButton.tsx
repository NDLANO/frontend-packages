/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { FavoriteHeart } from '@ndla/icons/action';
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
  > span {
    box-shadow: none;
  }
  &:hover,
  &:focus {
    background-color: ${colors.brand.light};
    box-shadow: none;
    > span {
      box-shadow: none;
    }
  }
  &:active {
    transform: translate(1px, 1px);
  }
`;

const StyledHeart = styled(FavoriteHeart)`
  height: ${spacing.normal};
  width: ${spacing.normal};
  color: ${colors.text.primary};
`;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  'aria-label': string;
};

export const FavoriteButton = (props: Props) => (
  <StyledButton {...props}>
    <StyledHeart />
  </StyledButton>
);

export default FavoriteButton;
