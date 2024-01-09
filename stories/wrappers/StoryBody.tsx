/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { OneColumn, LayoutItem } from "@ndla/ui";

interface Props {
  children?: ReactNode;
}

const StoryBody = ({ children }: Props) => (
  <OneColumn>
    <LayoutItem layout="center">
      <article className="c-article c-article--clean">{children}</article>
    </LayoutItem>
  </OneColumn>
);

export default StoryBody;
