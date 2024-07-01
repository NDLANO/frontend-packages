/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLArkProps } from "@ark-ui/react";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps, StyledVariantProps } from "@ndla/styled-system/types";

export type OrderedListVariantProps = StyledVariantProps<typeof OrderedList>;

export type OrderedListProps = HTMLArkProps<"ol"> & JsxStyleProps & OrderedListVariantProps;

export const OrderedList = styled("ol", {
  base: {
    listStyle: "revert",
    listStylePosition: "inside",
    paddingInlineStart: "small",
    "& li": {
      marginBlock: "small",
    },
  },
  defaultVariants: {
    variant: "numbers",
  },
  variants: {
    variant: {
      numbers: {
        "& > li": {
          _marker: {
            content: "counters(list-item, '.') '. '",
          },
        },
      },
      letters: {
        "& ol[data-variant='numbers'] > li": {
          _marker: {
            content: "counter(list-item, numeric) '. '",
          },
        },
        "& li": {
          _marker: {
            content: "counter(list-item, upper-alpha) '. '",
          },

          "& > ol > li": {
            _marker: {
              content: "counter(list-item, lower-alpha) '. '",
            },
            "& li": {
              _marker: {
                content: "counter(list-item, lower-roman) '. '",
              },
            },
          },
        },
      },
    },
  },
});

export type UnOrderedListProps = HTMLArkProps<"ul"> & JsxStyleProps;

export const UnOrderedList = styled("ul", {
  base: {
    listStyle: "revert",
    listStylePosition: "inside",
    paddingInlineStart: "small",
    "& li": {
      marginBlock: "small",
      _marker: {
        color: "icon.strong",
      },
    },
  },
});

export const DefinitionList = styled("dl", {
  base: {
    "& dt": {
      fontWeight: "bold",
    },
    "& dd": {
      marginInlineStart: "medium",
    },
  },
});

export type DefinitionListProps = HTMLArkProps<"dl"> & JsxStyleProps;
