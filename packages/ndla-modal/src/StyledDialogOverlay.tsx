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

interface StyledDialogOverlayProps {
  animationName: string;
  animationDuration: string;
}
const InternalStyledDialogOverlay = styled(DialogOverlay)<StyledDialogOverlayProps>`
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
  min-height: 100vh;
  animation-name: ${(p) => p.animationName};
  animation-duration: ${(p) => p.animationDuration};
`;

export const StyledDialogOverlay = ({ animateIn, animationDuration = '400ms', children, ...props }: Props) => {
  return (
    <InternalStyledDialogOverlay
      animationName={animateIn ? 'fadeIn' : 'fadeOut'}
      animationDuration={animationDuration}
      {...props}>
      {children}
    </InternalStyledDialogOverlay>
  );
};
