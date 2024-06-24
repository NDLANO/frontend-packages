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
import { ColorToken, FontWeightToken } from "@ndla/styled-system/tokens";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { UtilityValues } from "@ndla/styled-system/types/prop-type";

export interface TextProps {
  textStyle?: UtilityValues["textStyle"];
  fontWeight?: FontWeightToken;
  color?: ColorToken;
  srOnly?: boolean;
}

export const Text = forwardRef<HTMLParagraphElement, HTMLArkProps<"p"> & JsxStyleProps & TextProps>(
  ({ textStyle = "body.medium", fontWeight, color, srOnly, className, css: cssProp, ...rest }, ref) => (
    <ark.p className={cx(css({ textStyle, fontWeight, color, srOnly }, cssProp), className)} ref={ref} {...rest} />
  ),
);

export const Heading = forwardRef<HTMLHeadingElement, HTMLArkProps<"h1"> & JsxStyleProps & TextProps>(
  ({ textStyle = "heading.medium", fontWeight, color, srOnly, className, css: cssProp, ...rest }, ref) => (
    <ark.h1 className={cx(css({ textStyle, fontWeight, color, srOnly }, cssProp), className)} ref={ref} {...rest} />
  ),
);
