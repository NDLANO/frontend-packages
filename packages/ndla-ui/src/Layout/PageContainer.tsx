/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes, ReactNode } from "react";
import BEMHelper from "react-bem-helper";

const classes = new BEMHelper({
  name: "container",
  prefix: "o-",
});

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  background?: boolean;
  backgroundWide?: boolean;
  ndlaFilm?: boolean;
  learningPath?: boolean;
}

export const PageContainer = ({
  children,
  background = false,
  backgroundWide = false,
  ndlaFilm = false,
  learningPath = false,
  ...rest
}: Props) => (
  <div {...classes("", { background, backgroundWide, ndlaFilm, learningPath })} {...rest}>
    {children}
  </div>
);

export default PageContainer;
