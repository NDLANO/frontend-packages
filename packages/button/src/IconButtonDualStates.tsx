import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { animations } from '@ndla/core';
import { IconButton, IconButtonProps } from './IconButton';

type Props = Omit<IconButtonProps, 'aria-label'>;

export interface IconButtonDualStatesProps extends Props {
  ariaLabelActive: string;
  ariaLabelInActive: string;
  active: boolean;
  activeIcon: ReactElement;
  inactiveIcon: ReactElement;
}

interface StyledIconButtonProps extends IconButtonProps {
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
}: IconButtonDualStatesProps) => (
  <StyledIconButton active={active} aria-label={active ? ariaLabelActive : ariaLabelInActive} {...props}>
    {activeIcon}
    {inactiveIcon}
  </StyledIconButton>
);

export default IconButtonDualStates;
