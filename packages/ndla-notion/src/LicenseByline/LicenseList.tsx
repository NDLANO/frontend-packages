/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import styled from "@emotion/styled";

interface LicenseListProps {
  children: ReactNode;
  horizontal?: boolean;
}

export const StyledList = styled.ul<LicenseListProps>`
  display: flex;
  &[data-horizontal="false"] {
    flex-direction: column;
  }
  list-style-type: disc;
`;

const LicenseList = ({ children, horizontal = false }: LicenseListProps) => (
  <StyledList data-horizontal={horizontal}>{children}</StyledList>
);

export default LicenseList;
