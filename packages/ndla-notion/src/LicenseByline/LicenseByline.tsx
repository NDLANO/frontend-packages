/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { spacing } from "@ndla/core";

interface Props {
  children?: ReactNode;
  licenseRights: string[];
  locale?: string;
  horizontal?: boolean;
}

const LicenseBylineWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledListItem = styled.li`
  padding-bottom: ${spacing.xsmall};
  &[data-horizontal="true"] {
    padding-bottom: 0px;
  }
`;

const StyledList = styled.ul`
  display: flex;
  &[data-horizontal="false"] {
    flex-direction: column;
  }
  list-style-type: disc;
`;

const LicenseByline = ({ children, licenseRights, horizontal = false }: Props) => {
  return (
    <LicenseBylineWrapper>
      <StyledList data-horizontal={horizontal}>
        {licenseRights.map((licenseRight) => (
          <StyledListItem key={licenseRight}>{licenseRight}</StyledListItem>
        ))}
      </StyledList>
      {children}
    </LicenseBylineWrapper>
  );
};

export default LicenseByline;
