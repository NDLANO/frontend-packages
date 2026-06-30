/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Field } from "@ark-ui/react/field";
import { Fieldset } from "@ark-ui/react/fieldset";
import { css } from "@ndla/styled-system/css";
import { styled, type StyledProps } from "@ndla/styled-system/jsx";
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
