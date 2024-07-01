/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { styled } from "@ndla/styled-system/jsx";

export const Figure = styled("figure", {
  base: {
    position: "relative",
    transitionDuration: "normal",
    transitionProperty: "transform, width, height",
    transitionTimingFunction: "default",
  },
  variants: {
    size: {
      full: {
        width: "100%",
      },
      medium: {
        tablet: {
          width: "50%",
        },
        desktop: {
          width: "65%",
        },
      },
      small: {
        tablet: {
          width: "35%",
        },
        desktop: {
          width: "50%",
        },
      },
      xsmall: {
        tablet: {
          width: "25%",
        },
        desktop: {
          width: "35%",
        },
      },
    },
    float: {
      left: {
        tablet: {
          float: "left",
          clear: "left",
          paddingInlineEnd: "medium",
        },
      },
      right: {
        tablet: {
          float: "right",
          clear: "right",
          paddingInlineStart: "medium",
        },
      },
    },
  },
  defaultVariants: {
    size: "full",
  },
  compoundVariants: [
    {
      float: ["left", "right"],
      css: {
        zIndex: "base",
        left: "auto",
        marginBlock: "xsmall",
      },
    },
  ],
});
