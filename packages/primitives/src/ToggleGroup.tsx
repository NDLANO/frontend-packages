/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { StyledProps } from "@ndla/styled-system/types";
import { toggleGroupAnatomy, ToggleGroup } from "@ark-ui/react";
import { type RecipeVariantProps, sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";

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

export type ToggleGroupVariantProps = NonNullable<RecipeVariantProps<typeof toggleGroupRecipe>>;
export interface ToggleGroupRootProps extends ToggleGroup.RootProps, StyledProps, ToggleGroupVariantProps {}

export const ToggleGroupRoot = withProvider(ToggleGroup.Root, "root", { baseComponent: true });

export interface ToggleGroupItemProps extends ToggleGroup.ItemProps, StyledProps {}

export const ToggleGroupItem = withContext(ToggleGroup.Item, "item", { baseComponent: true });
