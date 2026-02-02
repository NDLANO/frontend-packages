/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { styled } from "@ndla/styled-system/jsx";
import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { BreadcrumbItem, type IndexedBreadcrumbItem, type SimpleBreadcrumbItem } from "./BreadcrumbItem";

interface Props {
  items: SimpleBreadcrumbItem[];
  renderItem: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
  renderSeparator: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
}

const StyledList = styled("ol", {
  base: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    listStyle: "none",
    gap: "xxsmall",
    mobileDown: {
      alignItems: "flex-start",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
});

export const Breadcrumb = ({ items, renderItem, renderSeparator }: Props) => {
  const { t } = useTranslation();

  return (
    <nav aria-label={t("breadcrumb.breadcrumb")}>
      <StyledList>
        {items.map((item, index) => (
          <BreadcrumbItem
            renderItem={renderItem}
            renderSeparator={renderSeparator}
            key={typeof item.to === "string" ? item.to : item.to.pathname}
            totalCount={items.length}
            item={{ ...item, index }}
          />
        ))}
      </StyledList>
    </nav>
  );
};
