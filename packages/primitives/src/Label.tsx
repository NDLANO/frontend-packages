/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Field, Fieldset, HTMLArkProps, ark } from "@ark-ui/react";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { TextProps } from "./Text";

const StyledLegend = styled(
  ark.legend,
  {
    base: {
      float: "left",
      width: "inherit",
      _disabled: {
        color: "text.subtle",
      },
    },
  },
  { baseComponent: true },
);

export type LegendProps = HTMLArkProps<"legend"> & JsxStyleProps & TextProps;

export const Legend = forwardRef<HTMLLegendElement, LegendProps>(
  ({ textStyle = "label.medium", fontWeight = "bold", css: cssProp, srOnly, color, ...rest }, ref) => (
    <StyledLegend css={css.raw({ textStyle, fontWeight, srOnly, color }, cssProp)} {...rest} ref={ref} />
  ),
);

export type FieldsetLegendProps = Fieldset.LegendProps & TextProps & JsxStyleProps;

export const FieldsetLegend = forwardRef<HTMLLegendElement, LegendProps>(({ children, ...props }, ref) => (
  <Fieldset.Legend asChild {...props} ref={ref}>
    <Legend>{children}</Legend>
  </Fieldset.Legend>
));

const StyledLabel = styled(
  ark.label,
  {
    base: {
      display: "inline-block",
      _disabled: {
        color: "text.subtle",
      },
    },
  },
  { baseComponent: true },
);

export type LabelProps = HTMLArkProps<"label"> & TextProps & JsxStyleProps;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ textStyle = "label.medium", fontWeight = "bold", css: cssProp, srOnly, color, ...rest }, ref) => (
    <StyledLabel css={css.raw({ textStyle, fontWeight, srOnly, color }, cssProp)} {...rest} ref={ref} />
  ),
);

export const FieldLabel = forwardRef<HTMLLabelElement, LabelProps>(({ children, ...props }, ref) => (
  <Field.Label asChild {...props} ref={ref}>
    <Label>{children}</Label>
  </Field.Label>
));
