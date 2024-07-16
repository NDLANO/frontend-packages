/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineTextStyles, defineTokens } from "@pandacss/dev";
import type { FontSizeToken, LineHeightToken } from "@ndla/styled-system/tokens";

export const fontWeights = defineTokens.fontWeights({
  light: { value: 300 },
  normal: { value: 400 },
  semibold: { value: 600 },
  bold: { value: 700 },
});

export const fonts = defineTokens.fonts({
  sans: {
    value: [
      "Satoshi",
      "Helvetica",
      "Arial",
      "STKaiti",
      "'华文楷体'",
      "KaiTi",
      "SimKai",
      "'楷体'",
      "KaiU",
      "DFKai-SB",
      "'標楷體'",
      "SongTi",
      "'宋体'",
      "sans-serif",
    ],
  },
  serif: {
    value: [
      "'Source Serif Pro'",
      "Times",
      "STKaiti",
      "'华文楷体'",
      "KaiTi",
      "SimKai",
      "'楷体'",
      "KaiU",
      "DFKai-SB",
      "'標楷體'",
      "SongTi",
      "'宋体'",
      "serif",
    ],
  },
  code: {
    value: ["'Source Code ProVariable'", "Monaco"],
  },
});

export const fontSizes = defineTokens.fontSizes({
  // 12px
  xxsmall: { value: "0.75rem" },
  // 14px
  xsmall: { value: "0.875rem" },
  // 16px
  small: { value: "1rem" },
  // 18px
  medium: { value: "1.125rem" },
  // 22px
  large: { value: "1.375rem" },
  // 26px
  xlarge: { value: "1.625rem" },
  // 30px
  xxlarge: { value: "1.875rem" },
  // 38px
  "3xlarge": { value: "2.375rem" },
  // 48px
  "4xlarge": { value: "3rem" },
});

export const lineHeights = defineTokens.lineHeights({
  xxsmall: { value: "0.75rem" },
  xsmall: { value: "1.375rem" },
  small: { value: "1.5rem" },
  medium: { value: "1.75rem" },
  large: { value: "1.875rem" },
  xlarge: { value: "2.25rem" },
  xxlarge: { value: "2.375rem" },
  "3xlarge": { value: "3rem" },
  "4xlarge": { value: "3.75rem" },
});

const sizes = (size: FontSizeToken, lineHeight: LineHeightToken) => {
  return {
    fontSize: size,
    lineHeight,
    _chinese: {
      fontSize: `calc(token(fontSizes.${size}) * 1.11)`,
      lineHeight: `calc(token(lineHeights.${lineHeight}) * 1.11)`,
    },
  };
};

export const textStyles = defineTextStyles({
  heading: {
    large: {
      value: {
        fontFamily: "sans",
        fontWeight: "bold",
        ...sizes("4xlarge", "4xlarge"),
      },
    },
    medium: {
      value: {
        fontFamily: "sans",
        fontWeight: "bold",
        ...sizes("3xlarge", "3xlarge"),
      },
    },
    small: {
      value: {
        fontFamily: "sans",
        fontWeight: "bold",
        ...sizes("xxlarge", "xxlarge"),
      },
    },
  },
  title: {
    large: {
      value: {
        fontFamily: "sans",
        fontWeight: "bold",
        ...sizes("xlarge", "xlarge"),
      },
    },
    medium: {
      value: {
        fontFamily: "sans",
        fontWeight: "bold",
        ...sizes("large", "large"),
      },
    },
    small: {
      value: {
        fontFamily: "sans",
        fontWeight: "bold",
        ...sizes("medium", "small"),
      },
    },
  },
  body: {
    article: {
      value: {
        fontFamily: "serif",
        fontWeight: "normal",
        ...sizes("medium", "medium"),
      },
    },
    articleLink: {
      value: {
        fontFamily: "serif",
        fontWeight: "normal",
        ...sizes("medium", "medium"),
      },
    },
    link: {
      value: {
        fontFamily: "sans",
        fontWeight: "normal",
        ...sizes("medium", "medium"),
      },
    },
    xlarge: {
      value: {
        fontFamily: "sans",
        fontWeight: "normal",
        ...sizes("medium", "large"),
      },
    },
    large: {
      value: {
        fontFamily: "sans",
        fontWeight: "normal",
        ...sizes("medium", "medium"),
      },
    },
    medium: {
      value: {
        fontFamily: "sans",
        fontWeight: "normal",
        ...sizes("small", "small"),
      },
    },
    small: {
      value: {
        fontFamily: "sans",
        fontWeight: "normal",
        ...sizes("xsmall", "xsmall"),
      },
    },
  },
  label: {
    large: {
      value: {
        fontFamily: "sans",
        fontWeight: "normal",
        ...sizes("medium", "medium"),
      },
      strong: {
        value: {
          fontFamily: "sans",
          fontWeight: "bold",
          ...sizes("medium", "medium"),
        },
      },
    },
    medium: {
      value: {
        fontFamily: "sans",
        fontWeight: "normal",
        ...sizes("small", "small"),
      },
    },
    small: {
      value: {
        fontFamily: "sans",
        fontWeight: "normal",
        ...sizes("xsmall", "xsmall"),
      },
    },
    xsmall: {
      value: {
        fontFamily: "sans",
        fontWeight: "normal",
        ...sizes("xxsmall", "xxsmall"),
      },
    },
  },
});
