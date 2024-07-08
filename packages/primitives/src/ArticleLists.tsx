/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { type HTMLArkProps, ark } from "@ark-ui/react/factory";
import { css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { JsxStyleProps, RecipeVariantProps } from "@ndla/styled-system/types";

const orderedListRecipe = cva({
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

export type OrderedListVariantProps = RecipeVariantProps<typeof orderedListRecipe>;

export type OrderedListProps = HTMLArkProps<"ol"> & JsxStyleProps & OrderedListVariantProps;

const StyledOrderedList = styled(ark.ol, {}, { baseComponent: true });

export const OrderedList = forwardRef<HTMLOListElement, OrderedListProps>(
  ({ variant, css: cssProp, ...props }, ref) => (
    <StyledOrderedList css={css.raw(orderedListRecipe.raw({ variant }), cssProp)} {...props} ref={ref} />
  ),
);

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
