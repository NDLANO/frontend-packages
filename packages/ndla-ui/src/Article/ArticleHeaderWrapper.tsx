/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { breakpoints, mq, spacing } from "@ndla/core";

type Props = {
  competenceGoals?: ReactNode;
  children: ReactNode;
};

const StyledHeaderWrapper = styled.div`
  margin-bottom: ${spacing.normal};
  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: ${spacing.large};
  }
`;

const CompetenceWrapper = styled.div`
  margin-top: ${spacing.normal};
`;

const ArticleHeaderWrapper = ({ children, competenceGoals }: Props) => {
  return (
    <StyledHeaderWrapper>
      {children}
      <CompetenceWrapper>{competenceGoals}</CompetenceWrapper>
    </StyledHeaderWrapper>
  );
};

export default ArticleHeaderWrapper;
