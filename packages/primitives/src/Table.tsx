/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithoutRef } from "react";
import { styled } from "@ndla/styled-system/jsx";

const StyledTable = styled("table", {
  base: {
    display: "block",
    overflowX: "auto",
    maxWidth: "100%",
    padding: "4xsmall",
    tableLayout: "fixed",
    "& > caption": {
      fontWeight: "bold",
      textAlign: "left",
      textTransform: "uppercase",
      marginBlockEnd: "xsmall",
    },
    "& thead": {
      overflow: "hidden",
    },
    "& thead tr th": {
      fontWeight: "bold",
      borderBottom: "3px solid",
      borderColor: "surface.brand.1.strong",
      verticalAlign: "text-top",
    },
    "& tbody th": {
      borderRight: "3px solid",
      borderColor: "surface.brand.1.strong",
      padding: "3xsmall",
    },
    "& thead tr:nth-child(2) th": {
      border: "1px solid",
      borderColor: "surface.brand.1.subtle",
      textTransform: "none",
      fontWeight: "semibold",
      height: "large",
      backgroundColor: "surface.brand.1.subtle",
      paddingBlock: "4xsmall",
      paddingInlineEnd: "medium",
      paddingInlineStart: "3xsmall",
      _empty: {
        backgroundColor: "transparent",
      },
    },
    "& td": {
      border: "1px solid",
      borderColor: "surface.brand.1.subtle",
      verticalAlign: "top",
    },
    "& td, & th": {
      display: "table-cell",
      paddingInline: "xsmall",
      paddingBlock: "3xsmall",
      "& [data-align='center']": {
        textAlign: "center",
      },
      "& [data-align='left']": {
        textAlign: "left",
      },
      "& [data-align='right']": {
        textAlign: "right",
      },
    },
  },
});

export type TableProps = ComponentPropsWithoutRef<"table">;

export const Table = (props: TableProps) => <StyledTable {...props} />;
