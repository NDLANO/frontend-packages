/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ComponentProps, type ReactNode } from "react";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledVariantProps } from "@ndla/styled-system/types";

const GridContainer = styled("div", {
  base: {
    display: "grid",
    justifyContent: "center",
    borderRadius: "xsmall",
    gridRowGap: "large",
    gridColumnGap: "medium",
    width: "100%",
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
    border: {
      lightBlue: {
        padding: "xsmall",
        border: "1px solid",
        borderColor: "stroke.subtle",
      },
    },
  },
});

const StyledGridItem = styled("div", {
  base: {
    padding: "medium",
  },
  variants: {
    border: {
      true: {
        outline: "1px solid",
        outlineColor: "stroke.subtle",
      },
    },
  },
});

type GridVariantProps = NonNullable<StyledVariantProps<typeof GridContainer>>;

export interface GridProps extends ComponentProps<"div">, GridVariantProps {
  children?: ReactNode[];
  columns: NonNullable<GridVariantProps["columns"]>;
}

type GridItemVariantProps = NonNullable<StyledVariantProps<typeof StyledGridItem>>;

export interface GridItemProps extends ComponentProps<"div">, GridItemVariantProps {}

export const Grid = ({ columns, border, children, ...rest }: GridProps) => {
  const amountOfColumns = children?.length === 3 ? "3" : columns;

  return (
    <GridContainer data-embed-type="grid" border={border} columns={amountOfColumns} {...rest}>
      {children}
    </GridContainer>
  );
};

export const GridItem = ({ border, children, ...rest }: GridItemProps) => {
  return (
    <StyledGridItem data-embed-type="grid-cell" border={border} {...rest}>
      {children}
    </StyledGridItem>
  );
};
