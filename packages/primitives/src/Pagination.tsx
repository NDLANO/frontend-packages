/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Pagination, paginationAnatomy } from "@ark-ui/react/pagination";
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

export type PaginationRootProps = JsxStyleProps & Pagination.RootProps;

export const PaginationRoot = withProvider<HTMLElement, PaginationRootProps>(Pagination.Root, "root");

export const PaginationItem = withContext<HTMLButtonElement, JsxStyleProps & Pagination.ItemProps>(
  Pagination.Item,
  "item",
);

export const PaginationEllipsis = withContext<HTMLDivElement, JsxStyleProps & Pagination.EllipsisProps>(
  Pagination.Ellipsis,
  "ellipsis",
);

export const PaginationPrevTrigger = withContext<HTMLButtonElement, JsxStyleProps & Pagination.PrevTriggerProps>(
  Pagination.PrevTrigger,
  "prevTrigger",
);

export const PaginationNextTrigger = withContext<HTMLButtonElement, JsxStyleProps & Pagination.NextTriggerProps>(
  Pagination.NextTrigger,
  "nextTrigger",
);
