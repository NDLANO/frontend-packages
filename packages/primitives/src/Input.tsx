/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  ComponentPropsWithRef,
  HTMLAttributes,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { css, cx } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { composeRefs } from "@ndla/util";

interface InputContextType {}

const InputContext = createContext<InputContextType | undefined>(undefined);

const inputCss = css.raw({
  outline: "1px solid",
  outlineColor: "brand.grey",
  background: "brand.greyLightest",
  borderRadius: "small",
  minHeight: "large",
  paddingY: "0",
  paddingX: "small",
  _ariaInvalid: {
    outlineColor: "support.red",
    _focusWithin: {
      outlineColor: "support.red",
    },
  },
  _focusWithin: {
    outlineWidth: "2px",
    outlineOffset: "-1px",
    outlineColor: "brand.primary",
  },
});

const StyledInputContainer = styled("div", {
  base: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    "& svg": {
      width: "normal",
      height: "normal",
    },
  },
});

export const InputContainer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...rest }, ref) => (
    <InputContext.Provider value={{}}>
      <StyledInputContainer className={cx(css(inputCss), className)} {...rest} ref={ref}>
        {children}
      </StyledInputContainer>
    </InputContext.Provider>
  ),
);

const baseInputCss = css.raw({
  width: "100%",
  color: "text.primary",
  outline: "none",
  background: "none",
  border: "0",
  _disabled: {
    cursor: "not-allowed",
  },
  _focus: {
    appearance: "none",
  },
});

const baseTextAreaCss = css.raw({
  paddingX: "small",
  paddingY: "small",
  resize: "none",
  overflowY: "hidden",
});

export const Input = forwardRef<HTMLInputElement, ComponentPropsWithRef<"input">>(({ className, ...field }, ref) => {
  const context = useContext(InputContext);
  return <input className={cx(css(baseInputCss, context ? undefined : inputCss), className)} ref={ref} {...field} />;
});

interface TextAreaProps extends ComponentPropsWithRef<"textarea"> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, ...field }, ref) => {
  const context = useContext(InputContext);
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
      className={cx(css(baseInputCss, context ? undefined : inputCss, baseTextAreaCss), className)}
      ref={composeRefs(ref, localRef)}
      {...field}
    />
  );
});
