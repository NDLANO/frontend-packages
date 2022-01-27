import React from 'react';
import { DialogOverlay } from '@reach/dialog';
import { css } from '@emotion/core';
interface Props {
  className: string;
  animateIn: boolean;
  animationDuration?: string;
  isOpen: boolean;
  onDismiss: () => void;
}

const dialogStyles = css`
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
`;

export const StyledDialogOverlay: React.FC<Props> = ({
  animateIn,
  animationDuration = '400ms',
  children,
  ...props
}) => {
  return (
    <DialogOverlay
      css={css`
        animation-name: ${animateIn ? 'fadeIn' : 'fadeOut'};
        animation-duration: ${animationDuration};
        ${dialogStyles}
      `}
      {...props}>
      {children}
    </DialogOverlay>
  );
};
