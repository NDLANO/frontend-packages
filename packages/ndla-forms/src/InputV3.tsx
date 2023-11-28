/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  ComponentProps,
  HTMLAttributes,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { composeRefs } from '@ndla/util';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, misc, spacing } from '@ndla/core';
import { useFormControl } from './FormControl';

interface InputContextType {}

const InputContext = createContext<InputContextType | undefined>(undefined);

const inputCss = css`
  border: 1px solid ${colors.brand.greyLighter};
  background: ${colors.brand.greyLightest};
  transition-duration: border-color 100ms ease;
  border-radius: ${misc.borderRadius};
  min-height: ${spacing.large};
  padding: 0px ${spacing.small};

  &:focus-within {
    border-color: ${colors.brand.primary};
  }
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  svg {
    width: ${spacing.normal};
    height: ${spacing.normal};
  }
`;

export const InputContainer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...rest }, ref) => (
    <InputContext.Provider value={{}}>
      <StyledInputContainer css={inputCss} {...rest} ref={ref}>
        {children}
      </StyledInputContainer>
    </InputContext.Provider>
  ),
);

const baseInputCss = css`
  width: 100%;
  color: ${colors.text.primary};
  background: none;
  border: 0;
  &:disabled {
    cursor: not-allowed;
  }
  &:focus {
    appearance: none;
    outline: none;
  }
`;

const baseTextAreaCss = css`
  padding: ${spacing.small};
  resize: none;
  overflow-y: hidden;
`;

export const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>((props, ref) => {
  const context = useContext(InputContext);
  const field = useFormControl(props);
  return <input css={[baseInputCss, context ? undefined : inputCss]} ref={ref} {...field} />;
});

interface TextAreaProps extends ComponentProps<'textarea'> {}

const onKeydown = (e: KeyboardEvent) => {
  const el = e.target as HTMLTextAreaElement;
  el.style.height = '0';
  el.style.height = `${el.scrollHeight + 3}px`;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const context = useContext(InputContext);
  const field = useFormControl(props);
  const localRef = useRef<HTMLTextAreaElement>(null);

  const resize = useCallback(() => {
    if (!localRef.current) return;
    localRef.current.style.height = '0';
    localRef.current.style.height = `${localRef.current.scrollHeight + 3}px`;
  }, []);

  useEffect(() => {
    window.addEventListener('keyup', onKeydown);
    window.addEventListener('resize', resize);
    resize();
    return () => {
      window.removeEventListener('keyup', onKeydown);
      window.removeEventListener('resize', resize);
    };
  }, [resize]);

  return (
    <textarea
      css={[baseInputCss, context ? undefined : inputCss, baseTextAreaCss]}
      ref={composeRefs(ref, localRef)}
      {...field}
    />
  );
});
