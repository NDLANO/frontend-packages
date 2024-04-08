/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineTextStyles, defineTokens } from "@pandacss/dev";
import { FontSizeToken } from "@ndla/styled-system/tokens";
import { TextStyle } from "@ndla/styled-system/types/composition";

export const fontWeights = defineTokens.fontWeights({
  light: { value: 300 },
  normal: { value: 400 },
  semibold: { value: 600 },
  bold: { value: 700 },
});

export const fonts = defineTokens.fonts({
  sans: {
    value: [
      "'Source Sans Pro'",
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
});

export const fontSizes = defineTokens.fontSizes({
  // 10px
  xxsmall: { value: "0.555556rem" },
  // 12px
  xsmall: { value: "0.666667rem" },
  // 16px
  small: { value: "0.888889rem" },
  // 18px
  nsmall: { value: "1rem" },
  // 20px
  normal: { value: "1.11111rem" },
  // 22px
  medium: { value: "1.22222rem" },
  // 24px
  mediumLarge: { value: "1.33333rem" },
  // 26px
  large: { value: "1.44444rem" },
  // 28px
  xlarge: { value: "1.55556rem" },
  // 30px
  xxlarge: { value: "1.66667rem" },
  // 38px
  "3xlarge": { value: "2.11111rem" },
  // 48px
  "4xlarge": { value: "2.66667rem" },
});

export const lineHeights = defineTokens.lineHeights({
  xxsmall: { value: "12px" },
  xsmall: { value: "20px" },
  small: { value: "24px" },
  nsmall: { value: "29px" },
  normal: { value: "30px" },
  medium: { value: "31px" },
  mediumLarge: { value: "32px" },
  large: { value: "35px" },
  xlarge: { value: "36px" },
  xxlarge: { value: "38px" },
  "3xlarge": { value: "48px" },
  "4xlarge": { value: "60px" },
});

const sizes = (size: FontSizeToken, lineHeight: string): TextStyle => {
  return {
    fontSize: size,
    lineHeight,
    // TODO: This is currently broken if @ndla/styled-system does not already exist. Need to figure out a way to make it work without using the token function.
    // _chinese: {
    //   fontSize: `calc(${token.var(`fontSizes.${size}`)} * 1.11)`,
    //   lineHeight: `calc(${lineHeight} * 1.11)`,
    // },
  };
};

export const textStyles = defineTextStyles({
  ingress: {
    value: {
      fontFamily: "sans",
      ...sizes("normal", "31px"),
      desktop: {
        ...sizes("mediumLarge", "35px"),
      },
    },
  },
  button: {
    value: {
      fontWeight: "semibold",
      ...sizes("small", "24px"),
    },
  },
  content: {
    value: {
      fontFamily: "serif",
      ...sizes("nsmall", "29px"),
    },
    alt: {
      value: {
        fontFamily: "sans",
        ...sizes("nsmall", "29px"),
      },
    },
  },
  metaText: {
    xxsmall: {
      value: {
        fontWeight: "semibold",
        ...sizes("xxsmall", "12px"),
      },
    },
    xsmall: {
      value: {
        fontWeight: "semibold",
        ...sizes("xsmall", "20px"),
      },
    },
    small: {
      value: {
        ...sizes("small", "24px"),
      },
    },
    medium: {
      value: {
        ...sizes("nsmall", "24px"),
      },
    },
    large: {
      value: {
        fontWeight: "bold",
        ...sizes("medium", "30px"),
      },
    },
  },
  label: {
    large: {
      value: {
        fontWeight: "semibold",
        ...sizes("mediumLarge", "36px"),
      },
    },
    small: {
      value: {
        fontWeight: "semibold",
        ...sizes("nsmall", "32px"),
      },
    },
  },
  h1: {
    value: {
      fontWeight: "bold",
      fontFamily: "serif",
      ...sizes("xxlarge", "36px"),
      tablet: {
        ...sizes("4xlarge", "60px"),
      },
    },
    resource: {
      value: {
        fontWeight: "bold",
        fontFamily: "sans",
        ...sizes("xxlarge", "36px"),
        tablet: {
          ...sizes("3xlarge", "48px"),
        },
      },
    },
  },
  h2: {
    value: {
      fontWeight: "bold",
      fontFamily: "sans",
      ...sizes("xlarge", "36px"),
      tablet: {
        ...sizes("xxlarge", "38px"),
      },
    },
  },
  h3: {
    value: {
      fontWeight: "bold",
      fontFamily: "sans",
      ...sizes("large", "35px"),
      tablet: {
        ...sizes("large", "36px"),
      },
    },
  },
  h4: {
    value: {
      fontWeight: "bold",
      fontFamily: "sans",
      ...sizes("medium", "30px"),
    },
  },
  listTitle: {
    value: {
      fontWeight: "bold",
      fontFamily: "sans",
      ...sizes("nsmall", "24px"),
      textTransform: "uppercase",
    },
  },
});

export const textStylesNew = defineTextStyles({
  heading: {
    value: {
      fontWeight: "bold",
      fontFamily: "sans",
    },
    large: {
      value: {
        fontSize: "48px",
        lineHeight: "60px",
      },
    },
    medium: {
      value: {
        fontSize: "38px",
        lineHeight: "48px",
      },
    },
    small: {
      value: {
        fontSize: "30px",
        lineHeight: "38px",
      },
    },
  },
  title: {
    value: {
      fontFamily: "sans",
      fontWeight: "bold",
    },
    large: {
      value: {
        fontSize: "26px",
        lineHeight: "36px",
      },
    },
    medium: {
      value: {
        fontSize: "22px",
        lineHeight: "30px",
      },
    },
    small: {
      value: {
        fontSize: "18px",
        lineHeight: "24px",
      },
    },
  },
  body: {
    article: {
      value: {
        fontFamily: "serif",
        fontSize: "18px",
        lineHeight: "29px",
      },
    },
    large: {
      value: {
        fontFamily: "sans",
        fontSize: "18px",
        lineHeight: "29px",
      },
    },
    medium: {
      value: {
        fontFamily: "sans",
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    small: {
      value: {
        fontFamily: "sans",
        fontSize: "14px",
        lineHeight: "21px",
      },
    },
  },
  label: {
    large: {
      value: {
        fontSize: "18px",
        lineHeight: "29px",
      },
      bold: {
        value: {
          fontWeight: "bold",
        },
      },
    },
    medium: {
      value: {
        fontSize: "16px",
        lineHeight: "24px",
      },
      bold: {
        value: {
          fontWeight: "bold",
        },
      },
    },
    small: {
      value: {
        fontSize: "14px",
        lineHeight: "21px",
      },
      bold: {
        value: {
          fontWeight: "bold",
        },
      },
    },
    xsmall: {
      value: {
        fontSize: "12px",
        lineHeight: "12px",
      },
      bold: {
        value: {
          fontWeight: "bold",
        },
      },
    },
  },
});
