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

export const FieldHelper = forwardRef<HTMLDivElement, TextProps & ComponentPropsWithRef<"div">>(
  ({ textStyle = "label.small", fontWeight, color, srOnly, className, ...props }, ref) => {
    const field = useFormControlContext();
    return (
      <styled.div
        {...(field?.getHelpTextProps(props, ref) ?? { ref, ...props })}
        className={cx(css({ textStyle, fontWeight, color, srOnly }), className)}
      />
    );
  },
);
