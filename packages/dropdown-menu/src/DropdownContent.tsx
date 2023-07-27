/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useMemo } from 'react';
import styled from '@emotion/styled';
import { Arrow, Content, DropdownMenuContentProps, Portal } from '@radix-ui/react-dropdown-menu';
import { Slot } from '@radix-ui/react-slot';
import { animations, colors, misc, shadows } from '@ndla/core';

interface Props extends Omit<DropdownMenuContentProps, 'asChild'> {
  portal?: boolean;
  showArrow?: boolean;
}

const StyledContent = styled(Content)`
  background: ${colors.white};
  padding: 0;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: ${misc.borderRadius};
  box-shadow: ${shadows.levitate1};
  overflow: hidden;
  z-index: 100;
  @media (prefers-reduced-motion: no-preference) {
    ${animations.fadeIn(animations.durations.fast)}
  }
`;

const StyledArrow = styled(Arrow)`
  fill: white;
`;

const DropdownContent = ({ portal = true, showArrow, side = 'top', children, ...rest }: Props) => {
  const MaybePortal = useMemo(() => (portal ? Portal : Slot), [portal]);
  return (
    <MaybePortal>
      <StyledContent side={side} {...rest}>
        {showArrow && <StyledArrow data-arrow="" aria-hidden />}
        {children}
      </StyledContent>
    </MaybePortal>
  );
};

export default DropdownContent;
