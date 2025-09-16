/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Field, Fieldset } from "@ark-ui/react";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledProps, SystemStyleObject } from "@ndla/styled-system/types";
import type { TextProps } from "./Text";

const errorTextStyling: SystemStyleObject = {
  color: "text.error",
  whiteSpace: "pre-line",
  justifyContent: "center",
};

const StyledFieldErrorText = styled(
  Field.ErrorText,
  {
    base: errorTextStyling,
  },
  { baseComponent: true },
);

export interface FieldErrorMessageProps extends Omit<Field.ErrorTextProps, "color">, TextProps, StyledProps {}

export const FieldErrorMessage = forwardRef<HTMLSpanElement, FieldErrorMessageProps>(
  ({ textStyle = "label.small", fontWeight, css: cssProp, color, srOnly, ...props }, ref) => (
    <StyledFieldErrorText css={css.raw({ textStyle, fontWeight, color, srOnly }, cssProp)} {...props} ref={ref} />
  ),
);

const StyledFieldsetErrorText = styled(
  Fieldset.ErrorText,
  {
    base: errorTextStyling,
  },
  { baseComponent: true },
);

export interface FieldsetErrorTextProps extends Omit<Fieldset.ErrorTextProps, "color">, TextProps, StyledProps {}

export const FieldsetErrorText = forwardRef<HTMLSpanElement, FieldsetErrorTextProps>(
  ({ textStyle = "label.small", fontWeight, css: cssProp, color, srOnly, ...props }, ref) => (
    <StyledFieldsetErrorText css={css.raw({ textStyle, fontWeight, color, srOnly }, cssProp)} {...props} ref={ref} />
  ),
);
