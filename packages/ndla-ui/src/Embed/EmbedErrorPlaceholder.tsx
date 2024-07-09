/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { WarningOutline } from "@ndla/icons/common";
import { Figure, type FigureSize } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { EmbedByline } from "../LicenseByline";
import { EmbedBylineErrorProps } from "../LicenseByline/EmbedByline";

interface Props {
  type: EmbedBylineErrorProps["type"];
  figureType?: FigureSize;
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

// `
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: ${colors.brand.greyLighter};
//   height: 330px;
//
//   svg {
//     fill: ${colors.text.light};
//     height: 90%;
//     width: 90%;
//   }
//   &[data-embed-type="audio"] {
//     height: 150px;
//   }
// `;

const StyledFigure = styled(Figure, {
  base: {
    "& > *:not(:first-child)": {
      marginBlockStart: "3xsmall",
    },
  },
});

const EmbedErrorPlaceholder = ({ type, children, figureType }: Props) => {
  return (
    <StyledFigure size={figureType}>
      {children ?? (
        <ErrorPlaceholder data-embed-type={type}>
          <WarningOutline />
        </ErrorPlaceholder>
      )}
      <EmbedByline error type={type} />
    </StyledFigure>
  );
};

export default EmbedErrorPlaceholder;
