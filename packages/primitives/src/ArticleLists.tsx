/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithoutRef } from "react";
import { styled } from "@ndla/styled-system/jsx";
import { StyledVariantProps } from "@ndla/styled-system/types";

const StyledOrderedList = styled("ol", {
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

export type OrderedListVariantProps = StyledVariantProps<typeof StyledOrderedList>;

export type OrderedListProps = ComponentPropsWithoutRef<"ol"> & OrderedListVariantProps;

export const OrderedList = ({ variant = "numbers", ...props }: OrderedListProps) => (
  <StyledOrderedList variant={variant} data-variant={variant} {...props} />
);

const StyledUnOrderedList = styled("ul", {
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

export type UnOrderedListProps = ComponentPropsWithoutRef<"ul">;

export const UnOrderedList = ({ ...props }: UnOrderedListProps) => <StyledUnOrderedList {...props} />;

const StyledDefinitionList = styled("dl", {
  base: {
    "& dt": {
      fontWeight: "bold",
    },
    "& dd": {
      marginInlineStart: "medium",
    },
  },
});

export type DefinitionListProps = ComponentPropsWithoutRef<"dl">;

export const DefinitionList = ({ ...props }: DefinitionListProps) => <StyledDefinitionList {...props} />;
