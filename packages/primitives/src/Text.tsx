/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, type ComponentType } from "react";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { ColorToken, FontWeightToken } from "@ndla/styled-system/tokens";
import type { HTMLStyledProps, UtilityValues } from "@ndla/styled-system/types";

export interface TextProps {
  textStyle?: UtilityValues["textStyle"];
  fontWeight?: FontWeightToken;
  color?: ColorToken;
  srOnly?: boolean;
}

const StyledP = styled(ark.p, {}, { baseComponent: true });

export const Text = forwardRef<HTMLParagraphElement, HTMLStyledProps<ComponentType<HTMLArkProps<"p"> & TextProps>>>(
  ({ textStyle = "body.medium", fontWeight, color, srOnly, css: cssProp, ...rest }, ref) => (
    <StyledP css={css.raw({ textStyle, fontWeight, color, srOnly }, cssProp)} ref={ref} {...rest} />
  ),
);

const StyledH1 = styled(ark.h1, {}, { baseComponent: true });

export const Heading = forwardRef<HTMLHeadingElement, HTMLStyledProps<ComponentType<HTMLArkProps<"h1"> & TextProps>>>(
  ({ textStyle = "heading.medium", fontWeight, color, srOnly, css: cssProp, ...rest }, ref) => (
    <StyledH1 css={css.raw({ textStyle, fontWeight, color, srOnly }, cssProp)} ref={ref} {...rest} />
  ),
);
