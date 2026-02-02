/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ColorToken, FontWeightToken } from "@ndla/styled-system/tokens";
import type { StyledProps, UtilityValues } from "@ndla/styled-system/types";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { forwardRef } from "react";

export interface TextProps {
  textStyle?: UtilityValues["textStyle"];
  fontWeight?: FontWeightToken;
  color?: ColorToken;
  srOnly?: boolean;
}

const StyledP = styled(ark.p, {}, { baseComponent: true });

export interface TextComponentProps extends Omit<HTMLArkProps<"p">, "color">, StyledProps, TextProps {}

export const Text = forwardRef<HTMLParagraphElement, TextComponentProps>(
  ({ textStyle = "body.medium", fontWeight, color, srOnly, css: cssProp, ...rest }, ref) => (
    <StyledP css={css.raw({ textStyle, fontWeight, color, srOnly }, cssProp)} ref={ref} {...rest} />
  ),
);

const StyledH1 = styled(ark.h1, {}, { baseComponent: true });

export interface HeadingComponentProps extends Omit<HTMLArkProps<"h1">, "color">, StyledProps, TextProps {}

export const Heading = forwardRef<HTMLHeadingElement, HeadingComponentProps>(
  ({ textStyle = "heading.medium", fontWeight, color, srOnly, css: cssProp, ...rest }, ref) => (
    <StyledH1 css={css.raw({ textStyle, fontWeight, color, srOnly }, cssProp)} ref={ref} {...rest} />
  ),
);
