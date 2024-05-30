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

export const Legend = forwardRef<HTMLLegendElement, TextProps & ComponentPropsWithRef<"legend">>(
  ({ textStyle = "label.medium", fontWeight = "bold", className, srOnly, ...rest }, ref) => {
    const control = useFormControlContext();
    const { id: _, htmlFor: __, ...fieldProps } = control?.getLabelProps(rest, ref) ?? { ref, ...rest };
    return (
      <StyledLegend
        className={cx(css({ textStyle, fontWeight, srOnly }), className)}
        {...rest}
        {...fieldProps}
        ref={ref}
      />
    );
  },
);

const StyledLabel = styled("label", {
  base: {
    display: "inline-block",
    _disabled: {
      color: "text.subtle",
    },
  },
});

export const Label = forwardRef<HTMLLabelElement, TextProps & ComponentPropsWithRef<"label">>(
  ({ textStyle = "label.medium", fontWeight = "bold", className, srOnly, ...rest }, ref) => {
    const control = useFormControlContext();
    const fieldProps = control?.getLabelProps(rest, ref) ?? { ref, ...rest };
    return (
      <StyledLabel
        className={cx(css({ textStyle, fontWeight, srOnly }), className)}
        {...rest}
        {...fieldProps}
        ref={ref}
      />
    );
  },
);

export const Fieldset = styled("fieldset", {
  base: {
    border: "none",
    padding: "0",
    margin: "0",
  },
});
