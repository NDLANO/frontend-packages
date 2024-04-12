/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  spacing: {
    xxsmall: { value: "{spacing.1}" },
    xsmall: { value: "{spacing.1.5}" },
    small: { value: "{spacing.3}" },
    nsmall: { value: "{spacing.4.5}" },
    normal: { value: "{spacing.6}" },
    medium: { value: "{spacing.7.5}" },
    mediumLarge: { value: "{spacing.9}" },
    large: { value: "{spacing.12}" },
    xlarge: { value: "{spacing.18}" },
    xxlarge: { value: "{spacing.24}" },
  },
  sizes: {
    xxsmall: { value: "{spacing.1}" },
    xsmall: { value: "{spacing.1.5}" },
    small: { value: "{spacing.3}" },
    nsmall: { value: "{spacing.4.5}" },
    normal: { value: "{spacing.6}" },
    medium: { value: "{spacing.7.5}" },
    mediumLarge: { value: "{spacing.9}" },
    large: { value: "{spacing.12}" },
    xlarge: { value: "{spacing.18}" },
    xxlarge: { value: "{spacing.24}" },
  },
  colors: {
    button: {
      primary: {
        buttonForeground: { value: "{colors.white}" },
        buttonBackground: { value: "{colors.brand.primary}" },
        buttonHoverForeground: { value: "{colors.brand.primary}" },
        buttonHoverBackground: { value: "{colors.brand.light}" },
      },
      light: {
        buttonForeground: { value: "{colors.brand.primary}" },
        buttonBackground: { value: "{colors.brand.light}" },
        buttonHoverForeground: { value: "{colors.white}" },
        buttonHoverBackground: { value: "{colors.brand.dark}" },
      },
      lighter: {
        buttonForeground: { value: "{colors.brand.primary}" },
        buttonBackground: { value: "{colors.brand.lighter}" },
        buttonHoverForeground: { value: "{colors.white}" },
        buttonHoverBackground: { value: "{colors.brand.primary}" },
      },
      greyLighter: {
        buttonForeground: { value: "{colors.brand.primary}" },
        buttonBackground: { value: "{colors.brand.greyLighter}" },
        buttonHoverForeground: { value: "{colors.white}" },
        buttonHoverBackground: { value: "{colors.brand.primary}" },
      },
      greyLightest: {
        buttonForeground: { value: "{colors.brand.primary}" },
        buttonBackground: { value: "{colors.brand.greyLightest}" },
        buttonHoverForeground: { value: "{colors.white}" },
        buttonHoverBackground: { value: "{colors.brand.primary}" },
      },
      danger: {
        buttonForeground: { value: "{colors.white}" },
        buttonBackground: { value: "{colors.support.red}" },
        buttonHoverForeground: { value: "{colors.white}" },
        buttonHoverBackground: { value: "{colors.support.red}" },
      },
      darker: {
        buttonForeground: { value: "{colors.white}" },
        buttonBackground: { value: "{colors.brand.dark}" },
        buttonHoverForeground: { value: "{colors.white}" },
        buttonHoverBackground: { value: "{colors.brand.dark}" },
      },
    },
  },
});
