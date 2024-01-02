/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export type ButtonSize = "xsmall" | "small" | "normal" | "medium" | "large";
export type ButtonColor = "primary" | "light" | "lighter" | "greyLighter" | "greyLightest" | "danger" | "darker";
export type ButtonShape = "normal" | "pill" | "sharp";
export type ButtonVariant = "solid" | "outline" | "ghost" | "link" | "stripped";
export type ButtonFontWeight = "light" | "normal" | "semibold" | "bold";

export interface ButtonTheme {
  foreground: string;
  background: string;
  hoverForeground: string;
  hoverBackground: string;
}
