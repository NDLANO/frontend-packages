/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { HTMLArkProps, ark } from "@ark-ui/react";
import { css, cx } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { WithCss } from "@ndla/styled-system/types";
import { useFormControlContext } from "./FormControl";
import { TextProps } from "./Text";

const StyledErrorMessage = styled(ark.div, {
  base: {
    color: "text.error",
    whiteSpace: "pre-line",
    justifyContent: "center",
  },
});

export const FieldErrorMessage = forwardRef<HTMLSpanElement, TextProps & HTMLArkProps<"div"> & WithCss>(
  ({ textStyle = "label.small", fontWeight, css: cssProp, color, srOnly, className, ...props }, ref) => {
    const field = useFormControlContext();
    if (field && !field.isInvalid) return null;

    return (
      <StyledErrorMessage
        {...(field?.getErrorMessageProps(props, ref) ?? { ref, ...props })}
        className={cx(css({ textStyle, fontWeight, color, srOnly }, cssProp), className)}
      />
    );
  },
);
