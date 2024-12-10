/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useRef, useImperativeHandle, type ReactNode, forwardRef } from "react";
import { ArrowRightShortLine } from "@ndla/icons";
import { SafeLink } from "@ndla/safelink";
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
  renderItem?: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
  renderSeparator?: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
}

const BreadcrumbItem = forwardRef<any, Props>(({ renderItem, renderSeparator, item, totalCount }, ref) => {
  const liRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    setMaxWidth: (maxWidth: number) => {
      liRef.current.children[0].style.maxWidth = maxWidth;
    },
  }));

  const { to, name, index } = item;
  const isLast = index === totalCount - 1;
  return (
    <StyledListItem ref={liRef} aria-current={isLast ? "page" : undefined}>
      {renderItem ? (
        renderItem(item, totalCount)
      ) : isLast ? (
        <span>{name}</span>
      ) : (
        <SafeLink to={to}>
          <span>{name}</span>
        </SafeLink>
      )}
      {renderSeparator ? renderSeparator(item, totalCount) : !isLast && <ArrowRightShortLine />}
    </StyledListItem>
  );
});

export default BreadcrumbItem;
