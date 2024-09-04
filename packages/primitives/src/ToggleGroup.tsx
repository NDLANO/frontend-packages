/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { toggleGroupAnatomy, ToggleGroup } from "@ark-ui/react";
import { RecipeVariantProps, sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";

const toggleGroupRecipe = sva({
  slots: toggleGroupAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "row",
      gap: "4xsmall",
    },
    item: {
      _hover: {
        boxShadow: "inset 0 0 0 1px var(--shadow-color)",
        background: "surface.actionSubtle.hover",
        _focusVisible: {
          boxShadow: "inset 0 0 0 3px var(--shadow-color)",
        },
      },
      _active: {
        borderColor: "stroke.default",
        background: "surface.actionSubtle.hover.strong",
      },
      "&[data-state='on']": {
        backgroundColor: "surface.actionSubtle.active",
        borderColor: "stroke.default",
        border: "1px solid",
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

export const ToggleGroupItem = withContext<HTMLButtonElement, JsxStyleProps & ToggleGroup.ItemProps>(
  ToggleGroup.Item,
  "item",
  { baseComponent: true },
);
