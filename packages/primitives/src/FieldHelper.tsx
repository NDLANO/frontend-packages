/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Field, Fieldset } from "@ark-ui/react";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";
import { forwardRef } from "react";
import type { TextProps } from "./Text";

const StyledFieldHelper = styled(Field.HelperText, {}, { baseComponent: true });

export interface FieldHelperProps extends Omit<Field.HelperTextProps, "color">, TextProps, StyledProps {}

export const FieldHelper = forwardRef<HTMLSpanElement, FieldHelperProps>(
  ({ textStyle = "label.small", fontWeight, color, srOnly, css: cssProp, ...props }, ref) => {
    return <StyledFieldHelper css={css.raw({ textStyle, fontWeight, color, srOnly }, cssProp)} {...props} ref={ref} />;
  },
);

const StyledFieldsetHelper = styled(Fieldset.HelperText, {}, { baseComponent: true });

export interface FieldsetHelperProps extends Omit<Fieldset.HelperTextProps, "color">, TextProps, StyledProps {}

export const FieldsetHelper = forwardRef<HTMLSpanElement, FieldsetHelperProps>(
  ({ textStyle = "label.small", fontWeight, color, srOnly, css: cssProp, ...props }, ref) => {
    return (
      <StyledFieldsetHelper css={css.raw({ textStyle, fontWeight, color, srOnly }, cssProp)} {...props} ref={ref} />
    );
  },
);
