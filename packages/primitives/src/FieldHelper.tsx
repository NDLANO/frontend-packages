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
import { JsxStyleProps } from "@ndla/styled-system/types";
import { useFormControlContext } from "./FormControl";
import { TextProps } from "./Text";

export const FieldHelper = forwardRef<HTMLDivElement, TextProps & HTMLArkProps<"div"> & JsxStyleProps>(
  ({ textStyle = "label.small", fontWeight, color, srOnly, className, css: cssProp, ...props }, ref) => {
    const field = useFormControlContext();
    return (
      <ark.div
        {...(field?.getHelpTextProps(props, ref) ?? { ref, ...props })}
        className={cx(css({ textStyle, fontWeight, color, srOnly }, cssProp), className)}
      />
    );
  },
);
