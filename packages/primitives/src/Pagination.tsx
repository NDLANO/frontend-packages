/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Pagination, paginationAnatomy } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";

const paginationRecipe = sva({
  slots: paginationAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      gap: "xxsmall",
    },
    item: {
      fontVariantNumeric: "tabular-nums",
    },
    ellipsis: {
      display: "inline-flex",
      alignItems: "center",
    },
  },
});

const { withProvider, withContext } = createStyleContext(paginationRecipe);

interface RootProps extends Pagination.RootProps {
  translations: Pagination.RootProps["translations"];
}

export type PaginationRootProps = JsxStyleProps & RootProps;

export const PaginationRoot = withProvider<HTMLElement, PaginationRootProps>(Pagination.Root, "root", {
  baseComponent: true,
});

export const PaginationItem = withContext<HTMLButtonElement, JsxStyleProps & Pagination.ItemProps>(
  Pagination.Item,
  "item",
  { baseComponent: true },
);

export const PaginationEllipsis = withContext<HTMLDivElement, JsxStyleProps & Pagination.EllipsisProps>(
  Pagination.Ellipsis,
  "ellipsis",
  { baseComponent: true },
);

export const PaginationContext = Pagination.Context;

export const PaginationPrevTrigger = withContext<HTMLButtonElement, JsxStyleProps & Pagination.PrevTriggerProps>(
  Pagination.PrevTrigger,
  "prevTrigger",
  { baseComponent: true },
);

export const PaginationNextTrigger = withContext<HTMLButtonElement, JsxStyleProps & Pagination.NextTriggerProps>(
  Pagination.NextTrigger,
  "nextTrigger",
  { baseComponent: true },
);
