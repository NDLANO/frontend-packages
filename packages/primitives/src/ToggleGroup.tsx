/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { toggleGroupAnatomy, ToggleGroup } from "@ark-ui/react";
import { RecipeVariantProps, css, cva, sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { IconButton, IconButtonProps } from "./Button";
import { createStyleContext } from "./createStyleContext";

const toggleGroupRecipe = sva({
  slots: toggleGroupAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "row",
      gap: "4xsmall",
    },
  },
});

const toggleGroupItemRecipe = cva({
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      primary: {
        _on: {
          background: "surface.action.selected",
        },
      },
      secondary: {
        _on: {
          background: "surface.actionSubtle.active",
        },
      },
      tertiary: {
        _on: {
          background: "surface.actionSubtle.active",
          boxShadow: "inset 0 0 0 1px var(--shadow-color)",
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(toggleGroupRecipe);

export type ToggleGroupVariantProps = RecipeVariantProps<typeof toggleGroupRecipe>;
export type ToggleGroupRootProps = ToggleGroup.RootProps & JsxStyleProps & ToggleGroupVariantProps;

export const ToggleGroupRoot = withProvider<HTMLDivElement, ToggleGroupRootProps>(ToggleGroup.Root, "root", {
  baseComponent: true,
});

export type ToggleGroupItemVariantProps = RecipeVariantProps<typeof toggleGroupItemRecipe>;

export type ToggleGroupItemProps = ToggleGroup.ItemProps & IconButtonProps & ToggleGroupItemVariantProps;

const InternalToggleGroupItem = withContext<HTMLButtonElement, ToggleGroupItemProps>(ToggleGroup.Item, "item");

export const ToggleGroupItem = forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ children, variant, css: cssProp, ...props }, ref) => (
    <InternalToggleGroupItem
      {...props}
      css={css.raw(toggleGroupItemRecipe.raw({ variant }), cssProp)}
      ref={ref}
      asChild
    >
      <IconButton variant={variant}>{children}</IconButton>
    </InternalToggleGroupItem>
  ),
);
