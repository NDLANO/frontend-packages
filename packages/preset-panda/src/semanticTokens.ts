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
    "5xsmall": { value: "{spacing.1}" },
    "4xsmall": { value: "{spacing.2}" },
    "3xsmall": { value: "{spacing.3}" },
    xxsmall: { value: "{spacing.4}" },
    xsmall: { value: "{spacing.6}" },
    small: { value: "{spacing.8}" },
    medium: { value: "{spacing.12}" },
    large: { value: "{spacing.16}" },
    xlarge: { value: "{spacing.18}" },
    xxlarge: { value: "{spacing.24}" },
    "3xlarge": { value: "{spacing.36}" },
    "4xlarge": { value: "{spacing.48}" },
    "5xlarge": { value: "{spacing.60}" },
    surface: {
      "4xsmall": { value: "{spacing.50}" },
      "3xsmall": { value: "{spacing.75}" },
      xxsmall: { value: "{spacing.100}" },
      xsmall: { value: "{spacing.150}" },
      small: { value: "{spacing.200}" },
      medium: { value: "{spacing.250}" },
      large: { value: "{spacing.300}" },
      xlarge: { value: "{spacing.350}" },
      xxlarge: { value: "{spacing.400}" },
      "3xlarge": { value: "{spacing.500}" },
      "4xlarge": { value: "{spacing.550}" },
    },
  },
  sizes: {
    "5xsmall": { value: "{spacing.1}" },
    "4xsmall": { value: "{spacing.2}" },
    "3xsmall": { value: "{spacing.3}" },
    xxsmall: { value: "{spacing.4}" },
    xsmall: { value: "{spacing.6}" },
    small: { value: "{spacing.8}" },
    medium: { value: "{spacing.12}" },
    large: { value: "{spacing.16}" },
    xlarge: { value: "{spacing.18}" },
    xxlarge: { value: "{spacing.24}" },
    "3xlarge": { value: "{spacing.36}" },
    "4xlarge": { value: "{spacing.48}" },
    "5xlarge": { value: "{spacing.60}" },
    surface: {
      "4xsmall": { value: "{spacing.50}" },
      "3xsmall": { value: "{spacing.75}" },
      xxsmall: { value: "{spacing.100}" },
      xsmall: { value: "{spacing.150}" },
      small: { value: "{spacing.200}" },
      medium: { value: "{spacing.250}" },
      large: { value: "{spacing.300}" },
      xlarge: { value: "{spacing.350}" },
      xxlarge: { value: "{spacing.400}" },
      "3xlarge": { value: "{spacing.500}" },
      "4xlarge": { value: "{spacing.550}" },
      pageMax: { value: "1128px" },
      contentMax: { value: "744px" },
      articleMax: { value: "928px" },
      wideMax: { value: "1440px" },
    },
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
      link: { value: "{colors.blue.800}" },
      linkVisited: { value: "{colors.purple.900}" },
      error: { value: "{colors.red.600}" },
      disabled: { value: "{colors.grey.400}" },
    },
    icon: {
      default: { value: "{colors.grey.950}" },
      strong: { value: "{colors.primary}" },
      onAction: { value: "{colors.white}" },
      subtle: { value: "{colors.grey.700}" },
      warning: { value: "{colors.yellow.600}" },
      danger: { value: "{colors.red.500}" },
    },
    surface: {
      brand: {
        1: {
          DEFAULT: { value: "{colors.purple.500}" },
          subtle: { value: "{colors.purple.100}" },
          moderate: { value: "{colors.purple.300}" },
          strong: { value: "{colors.purple.950}" },
        },
        2: {
          DEFAULT: { value: "{colors.blue.500}" },
          subtle: { value: "{colors.blue.50}" },
          moderate: { value: "{colors.blue.100}" },
          bold: { value: "{colors.blue.800}" },
          strong: { value: "{colors.blue.900}" },
        },
        3: {
          DEFAULT: { value: "{colors.lightGreen.500}" },
          subtle: { value: "{colors.lightGreen.100}" },
          moderate: { value: "{colors.lightGreen.300}" },
          strong: { value: "{colors.lightGreen.900}" },
        },
        4: {
          DEFAULT: { value: "{colors.lightYellow.500}" },
          subtle: { value: "{colors.lightYellow.100}" },
          moderate: { value: "{colors.lightYellow.300}" },
          strong: { value: "{colors.lightYellow.1100}" },
        },
        5: {
          DEFAULT: { value: "{colors.pink.500}" },
          subtle: { value: "{colors.pink.100}" },
          moderate: { value: "{colors.pink.300}" },
          strong: { value: "{colors.pink.900}" },
        },
      },
      default: { value: "{colors.white}" },
      hover: { value: "{colors.grey.100}" },
      active: { value: "{colors.grey.200}" },
      selected: { value: "{colors.purple.200}" },
      disabled: {
        DEFAULT: { value: "{colors.grey.200}" },
        subtle: { value: "{colors.grey.50}" },
        strong: { value: "{colors.grey.700}" },
      },
      infoSubtle: {
        DEFAULT: { value: "{colors.grey.100}" },
        hover: { value: "{colors.grey.200}" },
        active: { value: "{colors.grey.300}" },
      },
      action: {
        DEFAULT: { value: "{colors.primary}" },
        hover: { value: "{colors.purple.900}" },
        active: { value: "{colors.purple.950}" },
        selected: { value: "{colors.purple.800}" },
        myNdla: {
          DEFAULT: { value: "{colors.lightYellow.300}" },
          hover: { value: "{colors.lightYellow.500}" },
          current: { value: "{colors.lightYellow.700}" },
        },
        brand: {
          1: {
            DEFAULT: { value: "{colors.purple.50}" },
            hover: { value: "{colors.purple.100}" },
            active: { value: "{colors.purple.300}" },
            selected: { value: "{colors.purple.400}" },
          },
          2: {
            DEFAULT: { value: "{colors.blue.50}" },
            hover: { value: "{colors.blue.100}" },
            selected: { value: "{colors.blue.200}" },
          },
        },
      },
      actionSubtle: {
        DEFAULT: { value: "{colors.purple.50}" },
        hover: {
          DEFAULT: { value: "{colors.purple.100}" },
          strong: { value: "{colors.purple.400}" },
        },
        active: { value: "{colors.purple.300}" },
        selected: { value: "{colors.purple.900}" },
      },
      success: {
        DEFAULT: { value: "{colors.green.500}" },
        hover: { value: "{colors.green.700}" },
        selected: { value: "{colors.green.900}" },
        active: { value: "{colors.green.700}" },
      },
      successSubtle: {
        DEFAULT: { value: "{colors.green.50}" },
        hover: { value: "{colors.green.100}" },
        active: { value: "{colors.green.300}" },
      },
      warning: {
        DEFAULT: { value: "{colors.yellow.400}" },
        hover: { value: "{colors.yellow.500}" },
        active: { value: "{colors.yellow.700}" },
      },
      warningSubtle: {
        DEFAULT: { value: "{colors.yellow.50}" },
        hover: { value: "{colors.yellow.100}" },
        active: { value: "{colors.yellow.200}" },
      },
      danger: {
        DEFAULT: { value: "{colors.red.500}" },
        hover: { value: "{colors.red.700}" },
        selected: { value: "{colors.red.800}" },
        active: { value: "{colors.red.900}" },
      },
      dangerSubtle: {
        DEFAULT: { value: "{colors.red.50}" },
        hover: { value: "{colors.red.100}" },
        active: { value: "{colors.red.200}" },
      },
      error: {
        DEFAULT: { value: "{colors.pink.500}" },
        hover: { value: "{colors.pink.700}" },
        active: { value: "{colors.pink.900}" },
      },
      errorSubtle: {
        DEFAULT: { value: "{colors.red.50}" },
        hover: { value: "{colors.pink.100}" },
        active: { value: "{colors.pink.200}" },
      },
      subtle: {
        DEFAULT: { value: "{colors.grey.50}" },
        selected: { value: "{colors.grey.100}" },
      },
    },
    stroke: {
      default: { value: "{colors.primary}" },
      hover: { value: "{colors.purple.800}" },
      subtle: { value: "{colors.grey.500}" },
      success: { value: "{colors.lightGreen.900}" },
      info: { value: "{colors.grey.500}" },
      warning: { value: "{colors.yellow.600}" },
      error: { value: "{colors.red.600}" },
      disabled: { value: "{colors.grey.300}" },
      discrete: { value: "{colors.grey.300}" },
    },
  },
});
