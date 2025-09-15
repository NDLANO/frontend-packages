/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Pagination, paginationAnatomy } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";

const paginationRecipe = sva({
  slots: paginationAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      gap: "xxsmall",
      justifyContent: "center",
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

export type PaginationRootProps = StyledProps & RootProps;

export const PaginationRoot = withProvider(Pagination.Root, "root", { baseComponent: true });

export const PaginationItem = withContext(Pagination.Item, "item", { baseComponent: true });

export const PaginationEllipsis = withContext(Pagination.Ellipsis, "ellipsis", { baseComponent: true });

export const PaginationContext = Pagination.Context;

export const PaginationPrevTrigger = withContext(Pagination.PrevTrigger, "prevTrigger", { baseComponent: true });

export const PaginationNextTrigger = withContext(Pagination.NextTrigger, "nextTrigger", { baseComponent: true });
