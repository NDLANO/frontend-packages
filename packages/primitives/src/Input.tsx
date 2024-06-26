/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createContext, forwardRef, useCallback, useContext, useEffect, useRef } from "react";
import { Field, HTMLArkProps, ark } from "@ark-ui/react";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { composeRefs } from "@ndla/util";

interface InputContextType {}

const InputContext = createContext<InputContextType | undefined>(undefined);

const inputCss = css.raw({
  outline: "1px solid",
  outlineColor: "stroke.subtle",
  background: "background.default",
  borderRadius: "xsmall",
  minHeight: "xxlarge",
  paddingBlock: "0",
  paddingInline: "xsmall",
  _ariaInvalid: {
    outlineColor: "stroke.error",
    _hover: {
      outlineColor: "stroke.error",
    },
    _focusWithin: {
      outlineColor: "stroke.error",
      _hover: {
        outlineColor: "stroke.error",
      },
    },
  },
  _hover: {
    outlineColor: "stroke.hover",
  },
  _focusWithin: {
    outlineWidth: "2px",
    outlineOffset: "-1px",
    outlineColor: "stroke.default",
    _hover: {
      outlineColor: "stroke.default",
    },
  },
  "&:disabled, &:has(:disabled)": {
    outlineColor: "stroke.subtle",
    _hover: {
      outlineColor: "stroke.subtle",
    },
  },
});

const StyledInputContainer = styled(ark.div, {
  base: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    "& svg": {
      width: "medium",
      height: "medium",
    },
  },
});

export const InputContainer = forwardRef<HTMLDivElement, HTMLArkProps<"div"> & JsxStyleProps>(
  ({ children, css: cssProp, ...rest }, ref) => (
    <InputContext.Provider value={{}}>
      <StyledInputContainer css={css.raw(inputCss, cssProp)} {...rest} ref={ref}>
        {children}
      </StyledInputContainer>
    </InputContext.Provider>
  ),
);

const baseInputCss = css.raw({
  width: "100%",
  color: "text.default",
  outline: "none",
  background: "none",
  border: "0",
  padding: "xxsmall",
  _disabled: {
    cursor: "not-allowed",
  },
  // Chrome messes with input styling when autofilling. Having a really long transitions cancels this out.
  _autofill: {
    transition: "background-color 600000s 0s, color 600000s 0s",
  },
  _focus: {
    appearance: "none",
  },
});

const baseTextAreaCss = css.raw({
  paddingInline: "xsmall",
  paddingBlock: "xsmall",
  resize: "none",
  overflowY: "hidden",
});

export interface InputProps extends HTMLArkProps<"input">, JsxStyleProps {}

const StyledInput = styled(ark.input);

export const Input = forwardRef<HTMLInputElement, InputProps>(({ css: cssProp, ...props }, ref) => {
  const context = useContext(InputContext);
  return <StyledInput css={css.raw(baseInputCss, context ? undefined : inputCss, cssProp)} ref={ref} {...props} />;
});

export const FieldInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Field.Input asChild>
    <Input {...props} ref={ref} />
  </Field.Input>
));

interface TextAreaProps extends HTMLArkProps<"textarea">, JsxStyleProps {}

const StyledTextArea = styled(ark.textarea);

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ css: cssProp, ...props }, ref) => {
  const context = useContext(InputContext);
  const localRef = useRef<HTMLTextAreaElement>(null);

  // Automatically resize a textarea based on its content
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
    <StyledTextArea
      css={css.raw(baseInputCss, context ? undefined : inputCss, baseTextAreaCss, cssProp)}
      ref={composeRefs(ref, localRef)}
      {...props}
    />
  );
});

export const FieldTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => (
  <Field.Textarea asChild>
    <TextArea {...props} ref={ref} />
  </Field.Textarea>
));
