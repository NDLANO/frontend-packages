/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { css, cx } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { useFormControlContext } from "./FormControl";
import { TextProps } from "./Text";

const StyledLegend = styled("legend", {
  base: {
    float: "none",
    width: "inherit",
    _disabled: {
      color: "text.subtle",
    },
  },
});

export type LegendProps = ComponentPropsWithRef<"legend"> & TextProps;

export const Legend = forwardRef<HTMLLegendElement, LegendProps>(
  ({ textStyle = "label.medium", fontWeight = "bold", className, srOnly, ...rest }, ref) => (
    <StyledLegend className={cx(css({ textStyle, fontWeight, srOnly }), className)} {...rest} ref={ref} />
  ),
);

export const FormLegend = forwardRef<HTMLLegendElement, LegendProps>((props, ref) => {
  const control = useFormControlContext();
  // Legend does not use htmlFor (for), so we remove it.
  const { id: _, htmlFor: __, ...fieldProps } = control?.getLabelProps(props, ref) ?? { ref, ...props };
  return <Legend {...props} {...fieldProps} ref={ref} />;
});

const StyledLabel = styled("label", {
  base: {
    display: "inline-block",
    _disabled: {
      color: "text.subtle",
    },
  },
});

export type LabelProps = ComponentPropsWithRef<"label"> & TextProps;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ textStyle = "label.medium", fontWeight = "bold", className, srOnly, ...rest }, ref) => (
    <StyledLabel className={cx(css({ textStyle, fontWeight, srOnly }), className)} {...rest} ref={ref} />
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
