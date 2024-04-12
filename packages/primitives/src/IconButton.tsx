/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { cx } from "@ndla/styled-system/css";
import { iconButton, IconButtonVariantProps } from "@ndla/styled-system/recipes";

export interface IconButtonProps extends Omit<IconButtonVariantProps, "shape">, ComponentPropsWithRef<"button"> {
  ["aria-label"]: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ type = "button", size, className, variant, colorTheme, modifier, ...props }, ref) => (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={ref}
      {...props}
      className={cx(iconButton({ size, variant, colorTheme, modifier, shape: "full" }), className)}
    />
  ),
);
