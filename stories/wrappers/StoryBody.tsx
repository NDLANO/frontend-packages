/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { OneColumn, ArticleWrapper, ArticleContent } from "@ndla/ui";

interface Props {
  children?: ReactNode;
}

const StoryBody = ({ children }: Props) => (
  <OneColumn>
    <ArticleWrapper>
      <ArticleContent>{children}</ArticleContent>
    </ArticleWrapper>
  </OneColumn>
);

export default StoryBody;
