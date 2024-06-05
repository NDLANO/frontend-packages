/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
  horizontal?: boolean;
}

export const StyledList = styled.ul<Props>`
  display: flex;
  &[data-horizontal="false"] {
    flex-direction: column;
  }
  list-style-type: disc;
`;

const StyledLicenseIconList = ({ horizontal = false, children }: Props) => {
  return <StyledList data-horizontal={horizontal}>{children}</StyledList>;
};

export default StyledLicenseIconList;
