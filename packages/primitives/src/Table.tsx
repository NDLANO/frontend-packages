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
    // whiteSpace: "nowrap",
    verticalAlign: "top",
    tableLayout: "fixed",
    "& > caption": {
      fontWeight: "bold",
      textAlign: "left",
      textTransform: "uppercase",
      marginBlockEnd: "xsmall",
      // margin
      // maybe font style
    },
    "& thead": {
      overflow: "hidden",
    },
    "& thead tr th": {
      fontWeight: "bold",
      borderBottom: "3px solid",
      borderColor: "stroke.default",
      verticalAlign: "text-top",
      // Some font bs
    },
    "& tbody th": {
      borderRight: "3px solid",
      borderColor: "stroke.default",
      padding: "3xsmall",
    },
    "& thead tr:nth-child(2) th": {
      border: "1px solid",
      borderColor: "stroke.subtle",
      textTransform: "none",
      fontWeight: "semibold",
      height: "large",
      backgroundColor: "stroke.subtle",
      paddingBlock: "4xsmall",
      paddingInlineEnd: "medium",
      paddingInlineStart: "3xsmall",
      _empty: {
        backgroundColor: "transparent",
      },
    },
    // skipping nth child thing
    "& td": {
      border: "1px solid",
      borderColor: "stroke.subtle",
      verticalAlign: "top",
    },
    "& td, & th": {
      display: "table-cell",
      paddingInline: "xsmall",
      paddingBlock: "3xsmall",
    },
  },
});

export type TableProps = ComponentPropsWithoutRef<"table">;

export const Table = (props: TableProps) => <StyledTable {...props} />;
