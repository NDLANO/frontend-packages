/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { buttonBaseRecipe, iconButtonRecipe, type IconButtonVariantProps } from "@ndla/primitives";
import { css } from "@ndla/styled-system/css";
import { forwardRef, type ReactNode } from "react";
import { SafeLink, type SafeLinkProps } from "./SafeLink";

export interface SafeLinkIconButtonProps extends SafeLinkProps, IconButtonVariantProps {
  children: ReactNode;
}

export const SafeLinkIconButton = forwardRef<HTMLAnchorElement, SafeLinkIconButtonProps>(
  ({ variant, size, css: cssProp, ...props }, ref) => (
    <SafeLink
      {...props}
      css={css.raw(buttonBaseRecipe.raw({ variant }), iconButtonRecipe.raw({ size }), cssProp)}
      ref={ref}
    />
  ),
);
