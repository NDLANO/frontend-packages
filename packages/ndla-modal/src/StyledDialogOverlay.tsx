/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import { DialogOverlay } from '@reach/dialog';
import styled from '@emotion/styled';
interface Props {
  className: string;
  animateIn: boolean;
  animationDuration?: string;
  isOpen: boolean;
  onDismiss: () => void;
  children?: ReactNode;
}

interface StyledDialogOverlayComponentProps {
  animateIn?: boolean;
  animationDuration?: string;
}

const shouldForwardProp = (propName: string) => propName !== 'animateIn' && propName !== 'animationDuration';

const StyledDialogOverlayComponent = styled(DialogOverlay, { shouldForwardProp })<StyledDialogOverlayComponentProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgba(1, 1, 1, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  animation-name: ${(p) => (p.animateIn ? 'fadeIn' : 'fadeOut')};
  animation-duration: ${(p) => p.animationDuration};
`;

export const StyledDialogOverlay = ({ animateIn, animationDuration = '400ms', children, ...props }: Props) => {
  return (
    <StyledDialogOverlayComponent animateIn={animateIn} animationDuration={animationDuration} {...props}>
      {children}
    </StyledDialogOverlayComponent>
  );
};
