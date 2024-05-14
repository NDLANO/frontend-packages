/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import BEMHelper from "react-bem-helper";

const classes = new BEMHelper({
  name: "article",
  prefix: "c-",
});

type Props = {
  competenceGoals?: ReactNode;
  children: ReactNode;
};

const ArticleHeaderWrapper = ({ children, competenceGoals }: Props) => {
  return (
    <div {...classes("header")}>
      {children}
      <div {...classes("competence")}>{competenceGoals}</div>
    </div>
  );
};

export default ArticleHeaderWrapper;
