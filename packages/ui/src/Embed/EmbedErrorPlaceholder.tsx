/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ErrorWarningLine } from "@ndla/icons";
import { Figure, type FigureFloat, type FigureSize } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { type ReactNode } from "react";
import { EmbedByline, type EmbedBylineErrorProps } from "../LicenseByline/EmbedByline";

interface Props {
  type: EmbedBylineErrorProps["type"];
  figureType?: FigureSize;
  float?: FigureFloat;
  children?: ReactNode;
}

const ErrorPlaceholder = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "background.subtle",
    height: "surface.xsmall",
    border: "1px solid",
    borderColor: "stroke.default",
    borderRadius: "xsmall",
    "& svg": {
      height: "5xlarge",
      width: "5xlarge",
      fill: "stroke.default",
    },
  },
});

const StyledFigure = styled(Figure, {
  base: {
    "& > *:not(:first-child)": {
      marginBlockStart: "3xsmall",
    },
  },
});

export const EmbedErrorPlaceholder = ({ type, children, figureType, float }: Props) => {
  return (
    <StyledFigure size={figureType} float={float} data-embed-type={type}>
      {children ?? (
        <ErrorPlaceholder data-embed-type={type}>
          <ErrorWarningLine />
        </ErrorPlaceholder>
      )}
      <EmbedByline error type={type} />
    </StyledFigure>
  );
};
