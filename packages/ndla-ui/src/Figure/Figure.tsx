/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B These components is used to render static markup serverside

import { ReactNode } from "react";
import BEMHelper from "react-bem-helper";
import { isFunction as isFunctionHelper } from "@ndla/util";
const classes = new BEMHelper({
  name: "figure",
  prefix: "c-",
});

const Figure = ({ children, type = "full", resizeIframe, className, ...rest }: Props) => {
  const typeClass = type === "full-column" ? "c-figure--full-column" : `u-float-${type}`;
  const right = ["small-right", "xsmall-right"].includes(type);
  return (
    <figure
      data-sizetype={type}
      {...classes("", { resize: !!resizeIframe, right }, `${typeClass} ${className ?? ""}`)}
      {...rest}
    >
      {isFunction(children) ? children({ typeClass }) : children}
    </figure>
  );
};

const isFunction = (children: Function | ReactNode): children is Function => {
  return isFunctionHelper(children);
};

export type FigureType =
  | "full"
  | "full-column"
  | "left"
  | "small-left"
  | "right"
  | "small-right"
  | "xsmall-right"
  | "xsmall-left";

interface Props {
  id?: string;
  children: ReactNode | ((params: { typeClass: string }) => ReactNode);
  type?: FigureType;
  resizeIframe?: boolean;
  noFigcaption?: boolean;
  className?: string;
  lang?: string;
}

export default Figure;
