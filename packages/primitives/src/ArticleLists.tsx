/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type CSSProperties, forwardRef, useMemo } from "react";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { HTMLStyledProps, RecipeVariantProps, StyledProps } from "@ndla/styled-system/types";

const LIST_ITEM = "& > li";
const LETTER_LIST = "& > ol[data-variant='letters']";
const NUMBER_LIST = "& > ol:not([data-variant='letters'])";
const LETTER_LIST_ITEM = `${LETTER_LIST} > li`;

const orderedListRecipe = cva({
  base: {
    marginInlineStart: "small",
    paddingInlineStart: "small",
    [LIST_ITEM]: {
      "& > ul": {
        marginInlineStart: "0 !important",
      },
      _before: {
        position: "absolute",
        transform: "translateX(calc(-100% + (token(spacing.small) * -1)))",
        fontVariantNumeric: "tabular-nums",
      },
    },
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
        [NUMBER_LIST]: {
          marginInlineStart: "0",
          paddingInlineStart: "0",
        },
        counterReset: "level1",
        "&[data-count='true']": {
          counterReset: "level1 var(--start, 0)",
        },
        [LIST_ITEM]: {
          counterIncrement: "level1",
          _before: {
            content: "counter(level1, decimal) '. '",
          },
          [NUMBER_LIST]: {
            counterReset: "level2",
            "&[data-count='true']": {
              counterReset: "level2 var(--start, 0)",
            },
            [LIST_ITEM]: {
              marginInlineStart: "small",
              counterIncrement: "level2",
              _before: {
                content: "counter(level1, decimal) '.' counter(level2, decimal) '. '",
              },
              [NUMBER_LIST]: {
                counterReset: "level3",
                "&[data-count='true']": {
                  counterReset: "level3 var(--start, 0)",
                },
                [LIST_ITEM]: {
                  marginInlineStart: "calc(1.5ch + token(spacing.small))",
                  counterIncrement: "level3",
                  _before: {
                    content: "counter(level1, decimal) '.' counter(level2, decimal) '.' counter(level3, decimal) '. '",
                  },
                  [NUMBER_LIST]: {
                    counterReset: "level4",
                    "&[data-count='true']": {
                      counterReset: "level4 var(--start, 0)",
                    },
                    [LIST_ITEM]: {
                      marginInlineStart: "calc(3ch + token(spacing.small))",
                      counterIncrement: "level4",
                      _before: {
                        content:
                          "counter(level1, decimal) '.' counter(level2, decimal) '.' counter(level3, decimal) '.' counter(level4,  decimal) '. '",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      letters: {
        counterReset: "level1",
        "&[data-count='true']": {
          counterReset: "level1 var(--start, 0)",
        },
        [LETTER_LIST]: {
          marginInlineStart: "0",
          paddingInlineStart: "0",
        },
        [LIST_ITEM]: {
          counterIncrement: "level1",
          _before: {
            content: "counter(level1, upper-alpha) '. '",
          },
          [LETTER_LIST_ITEM]: {
            _before: {
              content: "counter(level1, lower-alpha) '. '",
            },
            [LETTER_LIST_ITEM]: {
              _before: {
                content: "counter(level1, lower-roman) '. '",
              },
            },
          },
        },
      },
    },
  },
});

export type OrderedListVariantProps = RecipeVariantProps<typeof orderedListRecipe>;

export type OrderedListProps = StyledProps & HTMLArkProps<"ol"> & OrderedListVariantProps;

const StyledOrderedList = styled(ark.ol, {}, { baseComponent: true });

export const OrderedList = forwardRef<HTMLOListElement, OrderedListProps>(
  ({ variant, css: cssProp, start, ...props }, ref) => {
    const style = useMemo(() => ({ "--start": start ? start - 1 : undefined }) as CSSProperties, [start]);
    return (
      <StyledOrderedList
        data-embed-type="ordered-list"
        data-variant={variant}
        data-count={start !== undefined}
        css={css.raw(orderedListRecipe.raw({ variant }), cssProp)}
        style={style}
        ref={ref}
        {...props}
      />
    );
  },
);

export interface UnOrderedListProps extends StyledProps, HTMLArkProps<"ul"> {}

export const UnOrderedList = styled("ul", {
  base: {
    listStyle: "revert",
    marginInlineStart: "medium",
    paddingInlineStart: "small",
    "& ul": {
      marginInlineStart: "0",
    },
    "& li": {
      marginBlock: "small",
      paddingInlineStart: "small",
      _marker: {
        color: "icon.strong",
      },

      "& > ol": {
        marginInlineStart: "0 !important",
      },
    },

    listStyleType: "disc",
    "& > li > ul": {
      listStyleType: "circle",
      "& > li > ul": {
        listStyleType: "square",
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

export type DefinitionListProps = HTMLStyledProps<"dl">;
