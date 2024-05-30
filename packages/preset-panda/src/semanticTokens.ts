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
    "4xsmall": { value: "{spacing.2}" },
    "3xsmall": { value: "{spacing.3}" },
    xxsmall: { value: "{spacing.4}" },
    xsmall: { value: "{spacing.6}" },
    small: { value: "{spacing.8}" },
    medium: { value: "{spacing.12}" },
    large: { value: "{spacing.15}" },
    xlarge: { value: "{spacing.18}" },
    xxlarge: { value: "{spacing.24}" },
    "3xlarge": { value: "{spacing.36}" },
    "4xlarge": { value: "{spacing.48}" },
  },
  sizes: {
    "4xsmall": { value: "{spacing.2}" },
    "3xsmall": { value: "{spacing.3}" },
    xxsmall: { value: "{spacing.4}" },
    xsmall: { value: "{spacing.6}" },
    small: { value: "{spacing.8}" },
    medium: { value: "{spacing.12}" },
    large: { value: "{spacing.15}" },
    xlarge: { value: "{spacing.18}" },
    xxlarge: { value: "{spacing.24}" },
    "3xlarge": { value: "{spacing.36}" },
    "4xlarge": { value: "{spacing.48}" },
  },
  colors: {
    background: {
      default: { value: "{colors.white}" },
      subtle: { value: "{colors.grey.100}" },
      strong: { value: "{colors.purple.50}" },
    },
    text: {
      default: { value: "{colors.grey.950}" },
      subtle: { value: "{colors.grey.700}" },
      strong: { value: "{colors.primary}" },
      action: { value: "{colors.purple.800}" },
      onAction: { value: "{colors.white}" },
      link: { value: "{colors.purple.900}" },
      error: { value: "{colors.pink.800}" },
    },
    icon: {
      default: { value: "{colors.grey.950}" },
      strong: { value: "{colors.primary}" },
      onAction: { value: "{colors.white}" },
    },
    surface: {
      brand: {
        1: {
          DEFAULT: { value: "{colors.purple.500}" },
          subtle: { value: "{colors.purple.100}" },
          strong: { value: "{colors.purple.950}" },
        },
        2: {
          DEFAULT: { value: "{colors.blue.500}" },
          subtle: { value: "{colors.blue.100}" },
          strong: { value: "{colors.blue.900}" },
        },
        3: {
          DEFAULT: { value: "{colors.green.500}" },
          subtle: { value: "{colors.green.100}" },
          strong: { value: "{colors.green.900}" },
        },
        4: {
          DEFAULT: { value: "{colors.yellow.500}" },
          subtle: { value: "{colors.yellow.100}" },
          strong: { value: "{colors.yellow.1100}" },
        },
        5: {
          DEFAULT: { value: "{colors.pink.500}" },
          subtle: { value: "{colors.pink.100}" },
          strong: { value: "{colors.pink.900}" },
        },
      },
      default: { value: "{colors.white}" },
      hover: { value: "{colors.grey.100}" },
      active: { value: "{colors.grey.200}" },
      selected: { value: "{colors.purple.200}" },
      infoSubtle: {
        DEFAULT: { value: "{colors.grey.100}" },
        hover: { value: "{colors.grey.200}" },
        active: { value: "{colors.grey.300}" },
      },
      action: {
        DEFAULT: { value: "{colors.primary}" },
        hover: { value: "{colors.purple.900}" },
        active: { value: "{colors.purple.800}" },
        disabled: { value: "{colors.grey.200}" },
      },
      actionSubtle: {
        DEFAULT: { value: "{colors.purple.50}" },
        hover: { value: "{colors.purple.100}" },
        active: { value: "{colors.purple.300}" },
      },
      success: {
        DEFAULT: { value: "{colors.green.500}" },
        hover: { value: "{colors.green.700}" },
        active: { value: "{colors.green.900}" },
      },
      successSubtle: {
        DEFAULT: { value: "{colors.green.100}" },
        hover: { value: "{colors.green.300}" },
        active: { value: "{colors.green.500}" },
      },
      warning: {
        DEFAULT: { value: "{colors.yellow.600}" },
        hover: { value: "{colors.yellow.800}" },
        active: { value: "{colors.yellow.1200}" },
      },
      warningSubtle: {
        DEFAULT: { value: "{colors.yellow.100}" },
        hover: { value: "{colors.yellow.300}" },
        active: { value: "{colors.yellow.400}" },
      },
      error: {
        DEFAULT: { value: "{colors.pink.700}" },
        hover: { value: "{colors.pink.800}" },
        active: { value: "{colors.pink.900}" },
      },
      errorSubtle: {
        DEFAULT: { value: "{colors.pink.100}" },
        hover: { value: "{colors.pink.300}" },
        active: { value: "{colors.pink.500}" },
      },
    },
    stroke: {
      default: { value: "{colors.primary}" },
      hover: { value: "{colors.purple.800}" },
      subtle: { value: "{colors.grey.500}" },
      success: { value: "{colors.green.900}" },
      info: { value: "{colors.grey.500}" },
      warning: { value: "{colors.yellow.1200}" },
      error: { value: "{colors.pink.800}" },
    },
  },
});
