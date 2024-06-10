/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithoutRef, ElementType } from "react";
import { css, cx } from "@ndla/styled-system/css";
import { ColorToken, FontWeightToken } from "@ndla/styled-system/tokens";
import { UtilityValues } from "@ndla/styled-system/types/prop-type";

export interface TextProps {
  textStyle?: UtilityValues["textStyle"];
  fontWeight?: FontWeightToken;
  color?: ColorToken;
  srOnly?: boolean;
}

type Props<T extends ElementType> = TextProps & { as?: T } & ComponentPropsWithoutRef<T>;

const BaseText = <T extends ElementType = "p">(props: Props<T>) => {
  const { as: As = "p", className, fontWeight, color, textStyle = "body.medium", srOnly, ...rest } = props;
  return <As className={cx(css({ textStyle, fontWeight, color, srOnly: srOnly }), className)} {...rest} />;
};

export type HeadingType = Extract<ElementType, "h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

export const Heading = <T extends HeadingType = "h1">(props: Props<T>) => {
  const { as = "h1", textStyle = "heading.medium", ...rest } = props;
  return <BaseText as={as} textStyle={textStyle} {...rest} />;
};

type TextType = Extract<ElementType, "p" | "span" | "div">;

export const Text = <T extends TextType = "p">(props: Props<T>) => {
  const { as = "p", textStyle = "body.medium", ...rest } = props;
  return <BaseText as={as} textStyle={textStyle} {...rest} />;
};
