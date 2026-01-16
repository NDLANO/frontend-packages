/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type CSSProperties, forwardRef, useId, useMemo } from "react";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { HTMLStyledProps, RecipeVariantProps, StyledProps } from "@ndla/styled-system/types";

const orderedListRecipe = cva({
  base: {
    paddingInlineStart: "large",
    "& > li": {
      marginBlock: "small",
      _before: {
        position: "absolute",
        transform: "translateX(calc(-100% - token(spacing.small)))",
        fontVariantNumeric: "tabular-nums",
      },
    },
  },
  defaultVariants: {
    variant: "numbers",
  },
  variants: {
    variant: {
      numbers: {
        /** We utilize a CSS variable for the counter name to correctly reset counters when nested inside a letter list.
         * This way, the nested number list won't pick up on any other counters named "numbers" higher up in the DOM tree.
         * This fixes the following scenario
         * ol (numbers) -> 1.
         *  ol(letters) -> A.
         *    ol (numbers) -> 1. (Without the CSS variable, this would be 1.1)
         */
        counterReset: "var(--counter-name, numbers) var(--start, 0)",
        "& > li": {
          counterIncrement: "var(--counter-name, numbers)",
          _before: {
            content: `counters(var(--counter-name, numbers), ".") ". "`,
          },
          // If a nested OL is not a letters variant, it's a numbers variant. Keep increasing the margin to account for wider numbers.
          "& > ol:not([data-variant='letters']) > li": {
            paddingInlineStart: "small",
            "& > ol:not([data-variant='letters']) > li": {
              paddingInlineStart: "large",
              "& > ol:not([data-variant='letters']) > li": {
                paddingInlineStart: "xxlarge",
              },
            },
          },
        },
      },
      letters: {
        counterReset: "letters var(--start, 0)",
        "& > li": {
          counterIncrement: "letters",
          _before: {
            content: `counter(letters, upper-alpha) ". "`,
          },
          "& > ol[data-variant='letters'] > li": {
            _before: {
              content: `counter(letters, lower-alpha) ". "`,
            },
            "& > ol[data-variant='letters'] > li": {
              _before: {
                content: `counter(letters, lower-roman) ". "`,
              },
            },
          },
        },
      },
    },
  },
});

export type OrderedListVariantProps = NonNullable<RecipeVariantProps<typeof orderedListRecipe>>;

export interface OrderedListProps extends StyledProps, HTMLArkProps<"ol">, OrderedListVariantProps {}

const StyledOrderedList = styled(ark.ol, {}, { baseComponent: true });

export const OrderedList = forwardRef<HTMLOListElement, OrderedListProps>(
  ({ variant, css: cssProp, start, ...props }, ref) => {
    const counterId = useId();
    const style = useMemo(
      () =>
        ({
          "--start": start ? start - 1 : 0,
          "--counter-name": variant === "letters" ? counterId : undefined,
        }) as CSSProperties,
      [counterId, start, variant],
    );
    return (
      <StyledOrderedList
        data-embed-type="ordered-list"
        data-variant={variant}
        start={start}
        type={variant === "letters" ? "A" : undefined}
        css={css.raw(orderedListRecipe.raw({ variant }), cssProp)}
        style={style}
        ref={ref}
        {...props}
      />
    );
  },
);

export interface UnOrderedListProps extends StyledProps, HTMLArkProps<"ul"> {}

export const StyledUnOrderedList = styled("ul", {
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

export const UnOrderedList = forwardRef<HTMLUListElement, UnOrderedListProps>((props, ref) => {
  const counterId = useId();

  const style = useMemo(
    () =>
      ({
        "--counter-name": counterId,
      }) as CSSProperties,
    [counterId],
  );

  return <StyledUnOrderedList ref={ref} style={style} {...props} />;
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
