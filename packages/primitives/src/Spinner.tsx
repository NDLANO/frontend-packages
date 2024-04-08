/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithoutRef } from "react";
import { cx } from "@ndla/styled-system/css";
import { spinner, SpinnerVariantProps } from "@ndla/styled-system/recipes";

export interface SpinnerProps extends SpinnerVariantProps, ComponentPropsWithoutRef<"div"> {}

export const Spinner = ({ size, inverted, className, ...props }: SpinnerProps) => (
  <div {...props} className={cx(spinner({ size, inverted }), className)} />
);
