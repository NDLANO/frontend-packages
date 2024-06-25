/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { HTMLArkProps, ark } from "@ark-ui/react";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps, WithCss } from "@ndla/styled-system/types";
import { useFormControlContext } from "./FormControl";
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

export type LegendProps = HTMLArkProps<"legend"> & WithCss & TextProps;

export const Legend = forwardRef<HTMLLegendElement, LegendProps>(
  ({ textStyle = "label.medium", fontWeight = "bold", css: cssProp, srOnly, ...rest }, ref) => (
    <StyledLegend css={css.raw({ textStyle, fontWeight, srOnly }, cssProp)} {...rest} ref={ref} />
  ),
);

export const FormLegend = forwardRef<HTMLLegendElement, LegendProps>((props, ref) => {
  const control = useFormControlContext();
  // Legend does not use htmlFor (for), so we remove it.
  const { id: _, htmlFor: __, ...fieldProps } = control?.getLabelProps(props, ref) ?? { ref, ...props };
  return <Legend {...props} {...fieldProps} ref={ref} />;
});

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

export const FormLabel = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const control = useFormControlContext();
  const fieldProps = control?.getLabelProps(props, ref) ?? { ref, ...props };
  return <Label {...props} {...fieldProps} ref={ref} />;
});

export const Fieldset = styled("fieldset", {
  base: {
    border: "none",
    padding: "0",
    margin: "0",
  },
});
