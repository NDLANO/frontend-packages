/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ComponentProps, type ReactNode } from "react";
import { styled } from "@ndla/styled-system/jsx";

const GridContainer = styled("div", {
  base: {
    display: "grid",
    justifyContent: "center",
    borderRadius: "xsmall",
    gridRowGap: "large",
    gridColumnGap: "medium",
    width: "100%",
    backgroundColor: "background.subtle",
    minWidth: "surface.xxsmall",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",

    "& div[data-embed-type='pitch']": {
      height: "100%",
      "& > :last-child": {
        marginTop: "auto",
      },
    },
    tabletDown: {
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    },
    tabletToDesktop: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      "& > div:nth-child(3):last-child": {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        gridColumn: "span 2",
      },
    },
  },
  variants: {
    columns: {
      "2": {},
      "2x2": {},
      "3": { desktop: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" } },
      "4": { desktop: { gridTemplateColumns: "repeat(4, minmax(0, 1fr))" } },
    },
    background: {
      white: { backgroundColor: "surface.default" },
      transparent: { backgroundColor: "transparent" },
      gray: { backgroundColor: "background.subtle" },
    },
    border: {
      lightBlue: {
        padding: "xsmall",
        border: "1px solid",
        borderColor: "surface.brand.2",
      },
    },
  },
});

export interface GridProps extends ComponentProps<"div"> {
  columns: "2" | "3" | "4" | "2x2";
  border?: "none" | "lightBlue";
  background?: "transparent" | "white" | "gray";
  children?: ReactNode[];
}

export const Grid = ({ columns, border, children, background = "gray", ...rest }: GridProps) => {
  const amountOfColumns = children?.length === 3 ? "3" : columns;

  return (
    <GridContainer
      data-embed-type="grid"
      border={border === "none" ? undefined : border}
      columns={amountOfColumns}
      background={background}
      {...rest}
    >
      {children}
    </GridContainer>
  );
};
