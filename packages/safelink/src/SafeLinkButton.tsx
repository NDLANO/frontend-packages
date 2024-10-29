/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, ReactNode } from "react";
import { buttonBaseRecipe, buttonRecipe, ButtonVariantProps } from "@ndla/primitives";
import { css } from "@ndla/styled-system/css";
import { SafeLink, SafeLinkProps } from "./SafeLink";

export interface SafeLinkButtonProps extends SafeLinkProps, ButtonVariantProps {
  children: ReactNode;
}

export const SafeLinkButton = forwardRef<HTMLAnchorElement, SafeLinkButtonProps>(
  ({ variant, size, css: cssProp, ...props }, ref) => (
    <SafeLink
      {...props}
      css={css.raw(
        buttonBaseRecipe.raw({ variant }),
        variant !== "link" ? buttonRecipe.raw({ size }) : undefined,
        cssProp,
      )}
      ref={ref}
    />
  ),
);
