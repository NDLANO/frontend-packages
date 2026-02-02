/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { RecipeVariantProps, StyledProps } from "@ndla/styled-system/types";
import { Field, type HTMLArkProps, ark } from "@ark-ui/react";
import { css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { composeRefs } from "@ndla/util";
import { createContext, forwardRef, useCallback, useContext, useEffect, useRef } from "react";

interface InputContextType {}

const InputContext = createContext<InputContextType | undefined>(undefined);

const inputCss = css.raw({
  boxShadowColor: "stroke.subtle",
  boxShadow: "inset 0 0 0 1px var(--shadow-color)",
  background: "background.default",
  borderRadius: "xsmall",
  _ariaInvalid: {
    boxShadowColor: "stroke.error",
    _hover: {
      boxShadowColor: "stroke.error",
    },
    _focusWithin: {
      boxShadowColor: "stroke.error",
      _hover: {
        boxShadowColor: "stroke.error",
      },
    },
  },
  _hover: {
    boxShadowColor: "stroke.hover",
  },
  _focusWithin: {
    boxShadow: "inset 0 0 0 2px var(--shadow-color)",
    boxShadowColor: "stroke.default",
    _hover: {
      boxShadowColor: "stroke.default",
    },
  },
  "&:disabled, &:has(:disabled)": {
    boxShadowColor: "stroke.subtle",
    _hover: {
      boxShadowColor: "stroke.subtle",
    },
  },
});

const StyledInputContainer = styled(
  ark.div,
  {
    base: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      "& svg": {
        width: "medium",
        height: "medium",
      },
      "&:not(:has(input:first-child,textarea:first-child))": {
        paddingInlineStart: "xsmall",
      },
      "&:not(:has(input:last-child,textarea:last-child))": {
        paddingInlineEnd: "xsmall",
      },
    },
  },
  { baseComponent: true },
);

interface InputContainerProps extends HTMLArkProps<"div">, StyledProps {}

export const InputContainer = forwardRef<HTMLDivElement, InputContainerProps>(
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
  _placeholder: {
    color: "text.subtle",
  },
});

const baseTextAreaCss = css.raw({
  padding: "xsmall",
  minHeight: "xxlarge",
  height: "xxlarge",
  resize: "none",
  overflowY: "hidden",
});

const StyledInput = styled(ark.input, {}, { baseComponent: true });

const inputRecipe = cva({
  defaultVariants: {
    componentSize: "medium",
  },
  variants: {
    componentSize: {
      small: {
        paddingBlock: "4xsmall",
        paddingInline: "xsmall",
      },
      medium: {
        minHeight: "xxlarge",
        padding: "xsmall",
      },
    },
  },
});

type InputVariantProps = NonNullable<RecipeVariantProps<typeof inputRecipe>>;

export interface InputProps extends HTMLArkProps<"input">, StyledProps, InputVariantProps {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ css: cssProp, componentSize, ...props }, ref) => {
  const context = useContext(InputContext);
  return (
    <StyledInput
      css={css.raw(inputRecipe.raw({ componentSize }), baseInputCss, context ? undefined : inputCss, cssProp)}
      ref={ref}
      {...props}
    />
  );
});

export const FieldInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Field.Input asChild {...props} ref={ref}>
    <Input />
  </Field.Input>
));

interface TextAreaProps extends HTMLArkProps<"textarea">, StyledProps {
  autoResize?: boolean;
}

const StyledTextArea = styled(ark.textarea, {}, { baseComponent: true });

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ css: cssProp, autoResize = true, ...props }, ref) => {
    const context = useContext(InputContext);
    const localRef = useRef<HTMLTextAreaElement>(null);

    // Automatically resize a textarea based on its content
    const resize = useCallback(() => {
      if (!localRef.current) return;
      localRef.current.style.height = "0";
      // TODO: Figure out if we need to add the 3 extra pixels, maybe related to scroll?
      localRef.current.style.height = `${localRef.current.scrollHeight + 3}px`;
    }, []);

    useEffect(() => {
      if (!autoResize) return;
      window.addEventListener("input", resize);
      window.addEventListener("resize", resize);
      resize();
      return () => {
        window.removeEventListener("input", resize);
        window.removeEventListener("resize", resize);
      };
    }, [resize, autoResize]);

    return (
      <StyledTextArea
        css={css.raw(baseInputCss, context ? undefined : inputCss, baseTextAreaCss, cssProp)}
        ref={composeRefs(ref, localRef)}
        {...props}
      />
    );
  },
);

export const FieldTextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => (
  <Field.Textarea asChild {...props} ref={ref}>
    <TextArea />
  </Field.Textarea>
));
