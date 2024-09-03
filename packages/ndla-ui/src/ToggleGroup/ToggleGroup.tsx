/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { toggleGroupAnatomy, ToggleGroup } from "@ark-ui/react";
import { IconButton, IconButtonProps } from "@ndla/primitives";
import { RecipeVariantProps, sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "../../../primitives/src/createStyleContext";

const toggleGroupRecipe = sva({
  slots: toggleGroupAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "row",
      padding: "3xsmall",
      gap: "xxsmall",
    },
    item: {
      "&[data-state='on']": {
        backgroundColor: "surface.actionSubtle.active",
        borderColor: "stroke.default",
        border: "1px solid",
      },
    },
  },
  variants: {
    variant: {
      subtle: {
        root: {
          background: "surface.infoSubtle",
          borderTopRadius: "xsmall",
          borderColor: "stroke.subtle",
          border: "1px solid",
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(toggleGroupRecipe);

export type ToggleGroupVariantProps = RecipeVariantProps<typeof toggleGroupRecipe>;
export type ToggleGroupRootProps = ToggleGroup.RootProps & JsxStyleProps;

export const InternalToggleGroupRoot = withProvider<HTMLDivElement, ToggleGroupRootProps & ToggleGroupVariantProps>(
  ToggleGroup.Root,
  "root",
  {
    baseComponent: true,
  },
);

export const ToggleGroupRoot = ({ ...props }: ToggleGroupRootProps & ToggleGroupVariantProps) => {
  return <InternalToggleGroupRoot {...props} />;
};

export const InternalToggleGroupItem = withContext<HTMLButtonElement, JsxStyleProps & ToggleGroup.ItemProps>(
  ToggleGroup.Item,
  "item",
  { baseComponent: true },
);

export const ToggleGroupItem = ({ children, ...props }: ToggleGroup.ItemProps & IconButtonProps) => {
  return (
    <InternalToggleGroupItem {...props} asChild>
      <IconButton size="small" variant="tertiary">
        {children}
      </IconButton>
    </InternalToggleGroupItem>
  );
};
