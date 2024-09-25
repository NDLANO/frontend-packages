/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, ReactNode, forwardRef } from "react";
import { Report } from "@ndla/icons/common";
import { Figure, type FigureFloat, type FigureSize } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { EmbedByline } from "../LicenseByline";
import { EmbedBylineErrorProps } from "../LicenseByline/EmbedByline";

interface Props extends ComponentPropsWithRef<"figure"> {
  type: EmbedBylineErrorProps["type"];
  figureType?: FigureSize;
  float?: FigureFloat;
  children?: ReactNode;
}

const StyledErrorPlaceholder = styled("div", {
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

interface ErrorPlaceholderProps extends ComponentPropsWithRef<"div"> {
  type: EmbedBylineErrorProps["type"];
}

export const ErrorPlaceholder = forwardRef<HTMLDivElement, ErrorPlaceholderProps>(
  ({ children, type, ...rest }, ref) => (
    <StyledErrorPlaceholder data-embed-type={type} {...rest} ref={ref}>
      {children ?? <Report />}
    </StyledErrorPlaceholder>
  ),
);

const EmbedErrorPlaceholder = forwardRef<HTMLElement, Props>(({ type, children, figureType, float, ...rest }, ref) => {
  return (
    <StyledFigure size={figureType} float={float} data-embed-type={type} {...rest} ref={ref}>
      {children}
      <EmbedByline error type={type} />
    </StyledFigure>
  );
});

export default EmbedErrorPlaceholder;
