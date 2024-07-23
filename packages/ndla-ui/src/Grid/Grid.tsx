/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { styled } from "@ndla/styled-system/jsx";

const GridContainer = styled("div", {
  base: {
    display: "grid",
    justifyContent: "center",
    borderRadius: "xsmall",
    padding: "xxlarge",
    gridRowGap: "large",
    gridColumnGap: "medium",
    width: "100%",
    backgroundColor: "background.subtle",
    maxWidth: "surface.4xlarge",
    minWidth: "surface.xxsmall",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    tabletDown: {
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))"
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
      "3": {desktop: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" } },
      "4": { desktop: { gridTemplateColumns: "repeat(4, minmax(0, 1fr))" } },
    },
    background: {
      white: { backgroundColor: "surface.default" },
      transparent: { backgroundColor: "transparent" },
      gray: { backgroundColor: "background.subtle" },
    },
    border: {
      lightBlue: {
        border: "1px solid",
        borderColor: "surface.brand.2",
      },
    },
    frontpage: { true: { gridGap: "4xlarge" } },
  },
});

export interface GridProps {
  columns: "2" | "3" | "4" | "2x2";
  border?: "none" | "lightBlue";
  background?: "transparent" | "white" | "gray";
  size?: boolean;
  children?: ReactNode[];
}

export const Grid = ({ columns, border, children, background = "gray", size }: GridProps) => {
  const amountOfColumns = children?.length === 3 ? "3" : columns;

  return (
    <GridContainer
      frontpage={size}
      border={border === "none" ? undefined : border}
      columns={amountOfColumns}
      background={background}
    >
      {children}
    </GridContainer>
  );
};
