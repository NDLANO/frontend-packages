/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, SVGProps } from "react";
import { uuid } from "@ndla/util";

interface Props extends Omit<SVGProps<SVGSVGElement>, "viewBox"> {
  children?: ReactNode;
  primaryColor?: string;
  secondaryColor?: string;
  viewBox?: string | null;
}

const ContentLoader = ({
  children,
  width = 400,
  height = 130,
  preserveAspectRatio = "xMidYMid meet",
  className = "",
  primaryColor = "#f0f0f0",
  secondaryColor = "#e0e0e0",
  speed = 2,
  viewBox: viewBoxProp,
  ...rest
}: Props) => {
  const idClip = uuid();
  const idGradient = uuid();
  const viewBox = viewBoxProp === undefined ? `0 0 ${width} ${height}` : viewBoxProp;

  return (
    <svg
      viewBox={viewBox ?? undefined}
      version="1.1"
      preserveAspectRatio={preserveAspectRatio}
      className={className}
      {...rest}
      height={typeof height === "string" ? height : undefined}
      width={typeof width === "string" ? width : undefined}
    >
      <rect
        style={{ fill: `url(#${idGradient})` }}
        clipPath={`url(#${idClip})`}
        x="0"
        y="0"
        width={width}
        height={height}
      />

      <defs>
        <clipPath id={idClip}>{children}</clipPath>

        <linearGradient id={idGradient}>
          <stop offset="0%" stopColor={primaryColor}>
            <animate attributeName="offset" values="-2; 1" dur={`${speed}s`} repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor={secondaryColor}>
            <animate attributeName="offset" values="-1.5; 1.5" dur={`${speed}s`} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={primaryColor}>
            <animate attributeName="offset" values="-1; 2" dur={`${speed}s`} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ContentLoader;
