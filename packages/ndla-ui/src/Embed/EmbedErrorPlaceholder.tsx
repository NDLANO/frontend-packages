/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { AlertLine } from "@ndla/icons/common";
import { Figure, type FigureFloat, type FigureSize } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { EmbedByline } from "../LicenseByline";
import { EmbedBylineErrorProps } from "../LicenseByline/EmbedByline";

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
    backgroundColor: "surface.disabled",
    height: "surface.xsmall",
    "& svg": {
      fill: "text.subtle",
      height: "90%",
      width: "90%",
    },
    "&[data-embed-type='audio']": {
      height: "surface.3xsmall",
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

const EmbedErrorPlaceholder = ({ type, children, figureType, float }: Props) => {
  return (
    <StyledFigure size={figureType} float={float} data-embed-type={type}>
      {children ?? (
        <ErrorPlaceholder data-embed-type={type}>
          <AlertLine />
        </ErrorPlaceholder>
      )}
      <EmbedByline error type={type} />
    </StyledFigure>
  );
};

export default EmbedErrorPlaceholder;
