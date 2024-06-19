/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { spacing } from "@ndla/core";
import LicenseList from "./LicenseList";

export const StyledListItem = styled.li`
  padding-bottom: ${spacing.xsmall};
  &[data-horizontal="true"] {
    padding-bottom: 0px;
  }
`;

interface LicenseIconListProps {
  licenseRights: string[];
}

const LicenseListItem = ({ licenseRights }: LicenseIconListProps) => (
  <LicenseList>{licenseRights.map((licenseRight) => licenseRight)}</LicenseList>
);

export default LicenseListItem;
