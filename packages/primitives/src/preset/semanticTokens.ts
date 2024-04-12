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
    xxsmall: { value: "{spacing.2}" },
    xsmall: { value: "{spacing.3}" },
    small: { value: "{spacing.6}" },
    nsmall: { value: "{spacing.8}" },
    normal: { value: "{spacing.12}" },
    medium: { value: "{spacing.15}" },
    mediumLarge: { value: "{spacing.18}" },
    large: { value: "{spacing.24}" },
    xlarge: { value: "{spacing.36}" },
    xxlarge: { value: "{spacing.48}" },
  },
  sizes: {
    xxsmall: { value: "{spacing.2}" },
    xsmall: { value: "{spacing.3}" },
    small: { value: "{spacing.6}" },
    nsmall: { value: "{spacing.8}" },
    normal: { value: "{spacing.12}" },
    medium: { value: "{spacing.15}" },
    mediumLarge: { value: "{spacing.19}" },
    large: { value: "{spacing.24}" },
    xlarge: { value: "{spacing.36}" },
    xxlarge: { value: "{spacing.48}" },
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
