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
} from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, misc, spacing } from "@ndla/core";
import { composeRefs } from "@ndla/util";
import { useFormControl } from "./FormControl";

interface InputContextType {}

const InputContext = createContext<InputContextType | undefined>(undefined);

const inputCss = css`
  outline: 1px solid ${colors.brand.grey};
  background: ${colors.brand.greyLightest};
  border-radius: ${misc.borderRadius};
  min-height: ${spacing.large};
  padding: 0px ${spacing.small};

  &:focus-within {
    outline-width: 2px;
    outline-offset: -1px;
    outline-color: ${colors.brand.primary};
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
  outline: none;
  background: none;
  border: 0;
  &:disabled {
    cursor: not-allowed;
  }
  &:focus {
    appearance: none;
  }
`;

const baseTextAreaCss = css`
  padding: ${spacing.small};
  resize: none;
  overflow-y: hidden;
`;

export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>((props, ref) => {
  const context = useContext(InputContext);
  const field = useFormControl(props);
  return <input css={[baseInputCss, context ? undefined : inputCss]} ref={ref} {...field} />;
});

interface TextAreaProps extends ComponentProps<"textarea"> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const context = useContext(InputContext);
  const field = useFormControl(props);
  const localRef = useRef<HTMLTextAreaElement>(null);

  const resize = useCallback(() => {
    if (!localRef.current) return;
    localRef.current.style.height = "0";
    localRef.current.style.height = `${localRef.current.scrollHeight + 3}px`;
  }, []);

  useEffect(() => {
    window.addEventListener("input", resize);
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("input", resize);
      window.removeEventListener("resize", resize);
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
