/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { spacing, fonts, mq, breakpoints } from "@ndla/core";

const StyledFooterText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: ${spacing.xsmall};
  > span {
    padding: ${spacing.xsmall} 0 0;
    text-align: center;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    ${fonts.size.text.content};
    > span {
      padding: 0;
    }
    align-items: start;
  }
`;

type FooterTextProps = {
  children: ReactNode;
};

export const FooterText = ({ children }: FooterTextProps) => <StyledFooterText>{children}</StyledFooterText>;
