import { DialogOverlay } from '@reach/dialog';
import { css } from '@emotion/core';
import { ReactNode } from 'react';
interface Props {
  animateIn: boolean;
  animationDuration: string;
  children: ReactNode;
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

export const StyledDialogOverlay = ({ animateIn, animationDuration = '400ms', children, ...props }: Props) => {
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
