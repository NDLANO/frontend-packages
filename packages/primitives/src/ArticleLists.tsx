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

const orderedListRecipe = cva({
  base: {
    "& li": {
      marginBlock: "small",
      "& > p": {
        display: "inline",
      },
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
        "& > li": {
          counterIncrement: "level1",
          _before: {
            content: "counter(level1, decimal) '. '",
          },
          "& > ol[data-variant='letters'] > li": {
            paddingInlineStart: "medium",
          },
          "& > ol:not([data-variant='letters'])": {
            counterReset: "level2",
            "&[data-count='true']": {
              counterReset: "level2 var(--start, 0)",
            },
            "& > li": {
              paddingInlineStart: "medium",
              counterIncrement: "level2",
              _before: {
                content: "counter(level1, decimal) '.' counter(level2, decimal) '. '",
              },
              "& > ol[data-variant='letters'] > li": {
                paddingInlineStart: "large",
              },
              "& > ol:not([data-variant='letters'])": {
                counterReset: "level3",
                "&[data-count='true']": {
                  counterReset: "level3 var(--start, 0)",
                },
                "& > li": {
                  paddingInlineStart: "large",
                  counterIncrement: "level3",
                  _before: {
                    content: "counter(level1, decimal) '.' counter(level2, decimal) '.' counter(level3, decimal) '. '",
                  },
                  "& > ol:not([data-variant='letters'])": {
                    counterReset: "level4",
                    "&[data-count='true']": {
                      counterReset: "level4 var(--start, 0)",
                    },
                    "& > li": {
                      "& > ol[data-variant='letters'] > li": {
                        paddingInlineStart: "xxlarge",
                      },
                      paddingInlineStart: "xxlarge",
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
        "& > li": {
          counterIncrement: "level1",
          _before: {
            content: "counter(level1, upper-alpha) '. '",
          },
          "& > ol > li": {
            paddingInlineStart: "medium",
          },
          "& > ol[data-variant='letters'] > li": {
            _before: {
              content: "counter(level1, lower-alpha) '. '",
            },
            "& > ol[data-variant='letters'] > li": {
              paddingInlineStart: "small",
              _before: {
                display: "inline-block",
                width: "xsmall",
                right: "small",
                textAlign: "right",
                content: "counter(level1, lower-roman) '. '",
                marginRight: "4xsmall",
              },
            },
            "& > ol:not([data-variant='letters']) > li": {
              paddingInlineStart: "small",
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
    paddingInlineStart: "medium",
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
