/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { cx } from "@ndla/styled-system/css";
import { ButtonVariantProps, button, ButtonVariantMap } from "@ndla/styled-system/recipes";

export { button };
export type { ButtonVariantMap };

export interface ButtonProps extends ButtonVariantProps, ComponentPropsWithRef<"button"> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "button", size, className, shape, variant, colorTheme, modifier, ...props }, ref) => (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={ref}
      {...props}
      className={cx(button({ size, shape, variant, colorTheme, modifier }), className)}
    />
  ),
);
