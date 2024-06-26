/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Field, HTMLArkProps, ark } from "@ark-ui/react";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { TextProps } from "./Text";

const StyledLegend = styled(ark.legend, {
  base: {
    float: "none",
    width: "inherit",
    _disabled: {
      color: "text.subtle",
    },
  },
});

export type LegendProps = HTMLArkProps<"legend"> & JsxStyleProps & TextProps;

export const Legend = forwardRef<HTMLLegendElement, LegendProps>(
  ({ textStyle = "label.medium", fontWeight = "bold", css: cssProp, srOnly, ...rest }, ref) => (
    <StyledLegend css={css.raw({ textStyle, fontWeight, srOnly }, cssProp)} {...rest} ref={ref} />
  ),
);

const StyledLabel = styled(ark.label, {
  base: {
    display: "inline-block",
    _disabled: {
      color: "text.subtle",
    },
  },
});

export type LabelProps = HTMLArkProps<"label"> & TextProps & JsxStyleProps;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ textStyle = "label.medium", fontWeight = "bold", css: cssProp, srOnly, ...rest }, ref) => (
    <StyledLabel css={css.raw({ textStyle, fontWeight, srOnly }, cssProp)} {...rest} ref={ref} />
  ),
);

export const FieldLabel = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => (
  <Field.Label asChild>
    <Label {...props} ref={ref} />
  </Field.Label>
));

export const Fieldset = styled("fieldset", {
  base: {
    border: "none",
    padding: "0",
    margin: "0",
  },
});
