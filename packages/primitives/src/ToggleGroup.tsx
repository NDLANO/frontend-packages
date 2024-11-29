/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { toggleGroupAnatomy, ToggleGroup } from "@ark-ui/react";
import { type RecipeVariantProps, sva } from "@ndla/styled-system/css";
import type { JsxStyleProps } from "@ndla/styled-system/types";
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

const { withProvider, withContext } = createStyleContext(toggleGroupRecipe);

export type ToggleGroupVariantProps = RecipeVariantProps<typeof toggleGroupRecipe>;
export type ToggleGroupRootProps = ToggleGroup.RootProps & JsxStyleProps & ToggleGroupVariantProps;

export const ToggleGroupRoot = withProvider<HTMLDivElement, ToggleGroupRootProps>(ToggleGroup.Root, "root", {
  baseComponent: true,
});

export type ToggleGroupItemProps = ToggleGroup.ItemProps & JsxStyleProps;

export const ToggleGroupItem = withContext<HTMLButtonElement, ToggleGroupItemProps>(ToggleGroup.Item, "item", {
  baseComponent: true,
});
