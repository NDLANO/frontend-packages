import React, { ReactElement, useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { IconButton } from '@ndla/button';
import { spacing, shadows, misc, fonts } from '@ndla/core';
import { Cross } from '@ndla/icons/action';

interface StyledProps {
  type?: 'success' | 'error' | 'info';
  expired?: boolean;
}

const StyledNotification = styled.div<StyledProps>`
  background: ${(props) => '#C8E4D2'};
  position: fixed;
  z-index: 99999;
  box-shadow: ${shadows.levitate1};
  bottom: ${spacing.small};
  left: ${spacing.small};
  right: ${spacing.small};
  padding: ${spacing.small} ${spacing.medium};
  display: flex;
  align-items: center;
  > div:first-of-type {
    flex-grow: 1;
    padding-left: ${spacing.medium};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:empty {
    display: none;
  }
  border-radius: ${misc.borderRadius};
  @keyframes snackbar-animations-in {
    0% {
      opacity: 0;
      transform: translateY(${spacing.medium});
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes snackbar-animations-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(${spacing.medium});
    }
  }
  animation: ${(props) => (props.expired ? 'snackbar-animations-out' : 'snackbar-animations-in')} 200ms ease-in-out;
  animation-fill-mode: forwards;
  ${fonts.sizes('18px')};
  font-family: ${fonts.sans};
`;

export interface SnackBarItemProp {
  type?: 'success' | 'error' | 'info';
  children?: ReactElement;
  snackbarItemId?: string;
}

export interface SnackBarProps extends SnackBarItemProp {
  id: string;
  closeAriaLabel?: string;
  onKill?: (id: string | undefined) => void;
}

const SnackBar = ({ onKill, type, children, snackbarItemId, closeAriaLabel, id }: SnackBarProps) => {
  const [expired, setExpired] = useState(false);
  const timeoutId = useRef<null | ReturnType<typeof setTimeout>>();
  useEffect(() => {
    if (timeoutId.current) {
      timeoutId && clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      setExpired(true);
    }, 8000);

    return () => {
      timeoutId.current && clearTimeout(timeoutId.current);
    };
  }, [snackbarItemId, timeoutId]);
  return (
    <StyledNotification
      id={id}
      aria-live="polite"
      type={type}
      expired={expired || !children}
      onAnimationEnd={() => expired && onKill && onKill(snackbarItemId)}>
      {children && (
        <>
          <div>{children}</div>
          <div>
            <IconButton aria-label={closeAriaLabel || 'lukk'} size="xsmall" outline onClick={() => setExpired(true)}>
              <Cross />
            </IconButton>
          </div>
        </>
      )}
    </StyledNotification>
  );
};

export default SnackBar;
