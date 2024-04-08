/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef } from "react";
import { cx } from "@ndla/styled-system/css";
import { IconVariantProps, icon } from "@ndla/styled-system/recipes";

export interface IconProps extends IconVariantProps, ComponentPropsWithRef<"svg"> {
  title?: string;
  description?: string;
}

export const Icon = ({
  children,
  size,
  role,
  title,
  description,
  width,
  height,
  className,
  "aria-hidden": ariaHidden = true,
  ...props
}: IconProps) => {
  return (
    <svg
      data-icon=""
      aria-hidden={ariaHidden}
      preserveAspectRatio="xMidYMid meet"
      {...props}
      className={cx(icon({ size }), className)}
    >
      {title && <title>{title}</title>}
      {description && <desc>{description}</desc>}
      {children}
    </svg>
  );
};
