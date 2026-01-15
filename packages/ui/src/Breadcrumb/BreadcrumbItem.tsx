/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ReactNode } from "react";
import { styled } from "@ndla/styled-system/jsx";

export interface SimpleBreadcrumbItem {
  to: string | Partial<Location>;
  name: ReactNode;
}

export interface IndexedBreadcrumbItem extends SimpleBreadcrumbItem {
  index: number;
}

export interface BreadcrumbRenderProps {
  item: IndexedBreadcrumbItem;
  totalCount: number;
}

const StyledListItem = styled("li", {
  base: {
    display: "flex",
    color: "inherit",
    gap: "3xsmall",
    alignItems: "flex-end",
    tabletDown: {
      display: "block",
    },
    "& a": {
      _visited: {
        color: "inherit",
      },
    },
  },
});

interface Props {
  item: IndexedBreadcrumbItem;
  autoCollapse?: boolean;
  totalCount: number;
  renderItem: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
  renderSeparator: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
}

export const BreadcrumbItem = ({ renderItem, renderSeparator, item, totalCount }: Props) => {
  const isLast = item.index === totalCount - 1;
  return (
    <StyledListItem aria-current={isLast ? "page" : undefined}>
      {renderItem(item, totalCount)}
      {renderSeparator(item, totalCount)}
    </StyledListItem>
  );
};
