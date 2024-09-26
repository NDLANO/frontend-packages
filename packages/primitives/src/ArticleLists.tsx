/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CSSProperties, forwardRef, useMemo } from "react";
import { HTMLArkProps, ark } from "@ark-ui/react";
import { css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps, RecipeVariantProps } from "@ndla/styled-system/types";

const LIST_ITEM = "& > li";
const LETTER_LIST = "& > ol[data-variant='letters']";
const NUMBER_LIST = "& > ol:not([data-variant='letters'])";
const LETTER_LIST_ITEM = `${LETTER_LIST} > li`;

const orderedListRecipe = cva({
  base: {
    [LIST_ITEM]: {
      marginBlock: "small",
      _before: {
        position: "absolute",
        transform: "translateX(-100%)",
        paddingInlineEnd: "0.25ch",
        fontVariantNumeric: "tabular-nums",
      },
    },
    marginInlineStart: "3ch",
    "& > li > ol": {
      marginInlineStart: "2.5ch",
    },
  },
  defaultVariants: {
    variant: "numbers",
  },
  variants: {
    variant: {
      numbers: {
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
              marginInlineStart: "1ch",
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
                  marginInlineStart: "2.5ch",
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
                      marginInlineStart: "4.5ch",
                      counterIncrement: "level4",
                      _before: {
                        content:
                          "counter(level1, decimal) '.' counter(level2, decimal) '.' counter(level3, decimal) '.' counter(level4,  decimal) '. '",
                      },
                      [LETTER_LIST_ITEM]: {
                        marginInlineStart: "0.5ch",
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

export type OrderedListProps = HTMLArkProps<"ol"> & JsxStyleProps & OrderedListVariantProps;

const StyledOrderedList = styled(ark.ol, {}, { baseComponent: true });

export const OrderedList = forwardRef<HTMLOListElement, OrderedListProps>(
  ({ variant, css: cssProp, start, ...props }, ref) => {
    const style = useMemo(() => ({ "--start": start ? start - 1 : undefined }) as CSSProperties, [start]);
    return (
      <StyledOrderedList
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

export type UnOrderedListProps = HTMLArkProps<"ul"> & JsxStyleProps;

export const UnOrderedList = styled("ul", {
  base: {
    listStyle: "revert",
    paddingInlineStart: "3ch",
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
