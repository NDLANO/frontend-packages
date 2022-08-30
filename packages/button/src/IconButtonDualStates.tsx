/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { animations } from '@ndla/core';
import { IconButton, IconButtonProps } from './IconButtonV2';

interface Props extends Omit<IconButtonProps, 'aria-label'> {
  ariaLabelActive: string;
  ariaLabelInActive: string;
  active?: boolean;
  activeIcon: ReactElement;
  inactiveIcon: ReactElement;
}

interface StyledIconButtonProps {
  active: boolean;
}

const StyledIconButton = styled(IconButton)<StyledIconButtonProps>`
  svg {
    transition: opacity ${animations.durations.fast} ease;
    &:first-of-type {
      position: absolute;
      opacity: ${({ active }) => (active ? 1 : 0)};
    }
    &:last-of-type {
      opacity: ${({ active }) => (active ? 0 : 1)};
    }
  }
`;

export const IconButtonDualStates = ({
  active,
  ariaLabelActive,
  ariaLabelInActive,
  activeIcon,
  inactiveIcon,
  ...props
}: Props) => (
  <StyledIconButton active={!!active} aria-label={active ? ariaLabelActive : ariaLabelInActive} {...props}>
    {activeIcon}
    {inactiveIcon}
  </StyledIconButton>
);

export default IconButtonDualStates;
