/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useCallback, useMemo, createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import DefaultSnack from './DefaultSnackbar';

export interface Snack {
  content?: ReactNode;
  duration?: number;
  render?: (id: string, onClose?: () => void) => ReactNode;
  id: string;
  icon?: ReactNode;
  closable?: boolean;
}

export interface SnackContext {
  addSnack: (snack: Snack) => void;
  removeSnack: (id: string) => void;
  clearSnacks: () => void;
  closeSnack: (snack: Snack) => void;
}

const SnackbarContext = createContext<SnackContext | undefined>(undefined);

export const useSnack = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnack can only be used within a SnackbarProvider!');
  }

  return context;
};

interface Props {
  children: ReactNode;
}

export const SnackbarProvider = ({ children }: Props) => {
  const [snacks, setSnacks] = useState<Snack[]>([]);

  const addSnack = useCallback((snack: Snack) => {
    setSnacks((prev) => prev.filter((s) => s.id !== snack.id).concat(snack));
  }, []);

  const removeSnack = useCallback((snackId: string) => {
    setSnacks((prev) => prev.filter(({ id }) => snackId !== id));
  }, []);

  const closeSnack = useCallback((snack: Snack) => {
    setSnacks((prev) => prev.map((p) => (p.id === snack.id ? { ...p, duration: 0 } : p)));
  }, []);

  const clearSnacks = useCallback(() => setSnacks([]), []);

  const value = useMemo(
    () => ({ addSnack, removeSnack, clearSnacks, closeSnack }),
    [addSnack, removeSnack, clearSnacks, closeSnack],
  );

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      <SnackbarContainer snacks={snacks} />
    </SnackbarContext.Provider>
  );
};

interface BaseSnackProps extends Snack {
  children: ReactNode;
}

interface BaseSnackContainerProps {
  expired: boolean;
}

const snackbarInAnimation = keyframes({
  '0%': { transform: `translateY(${spacing.medium})`, opacity: 0 },
  '100%': { opacity: 1 },
});

const snackbarOutAnimation = keyframes({
  '0%': { opacity: 1 },
  '100%': { transform: `translateY(${spacing.medium})`, opacity: 0 },
});

const BaseSnackContainer = styled.div<BaseSnackContainerProps>`
  animation: ${(p) => (p.expired ? snackbarOutAnimation : snackbarInAnimation)} 200ms ease-in-out;
  animation-fill-mode: forwards;
`;

export const BaseSnack = ({ duration = 5000, id, children }: BaseSnackProps) => {
  const { removeSnack } = useSnack();
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setExpired(true), duration);
    return () => clearTimeout(timeout);
  }, [duration]);

  return (
    <BaseSnackContainer expired={expired} onAnimationEnd={() => expired && removeSnack(id)}>
      {children}
    </BaseSnackContainer>
  );
};

interface SnackbarContainerProps {
  snacks: Snack[];
}

const StyledSnackList = styled.ul`
  position: fixed;
  z-index: 99999;
  align-items: center;
  bottom: ${spacing.small};
  left: ${spacing.small};
  right: ${spacing.small};
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
`;

const SnackbarContainer = ({ snacks }: SnackbarContainerProps) => {
  return (
    <StyledSnackList aria-live="polite" role="region">
      {snacks.map((snack) => (
        <BaseSnack key={snack.id} {...snack}>
          {snack.render?.(snack.id) ?? <DefaultSnack {...snack} />}
        </BaseSnack>
      ))}
    </StyledSnackList>
  );
};

export default SnackbarProvider;
