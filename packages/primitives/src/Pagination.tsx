/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { paginationAnatomy } from "@ark-ui/anatomy";
import { Pagination } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
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

export type PaginationRootProps = Pagination.RootProps;

export const PaginationRoot = withProvider<HTMLElement, Pagination.RootProps>(Pagination.Root, "root");

export const PaginationItem = withContext<HTMLButtonElement, Pagination.ItemProps>(Pagination.Item, "item");

export const PaginationEllipsis = withContext<HTMLDivElement, Pagination.EllipsisProps>(
  Pagination.Ellipsis,
  "ellipsis",
);

export const PaginationPrevTrigger = withContext<HTMLButtonElement, Pagination.PrevTriggerProps>(
  Pagination.PrevTrigger,
  "prevTrigger",
);

export const PaginationNextTrigger = withContext<HTMLButtonElement, Pagination.NextTriggerProps>(
  Pagination.NextTrigger,
  "nextTrigger",
);
