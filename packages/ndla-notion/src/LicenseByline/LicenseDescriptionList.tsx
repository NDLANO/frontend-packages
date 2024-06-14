/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { getLicenseRightByAbbreviation } from "@ndla/licenses";
import StyledList from "./LicenseList";

interface LicenseItemProps {
  licenseRight: string;
  locale?: string;
}

const StyledListItem = styled.li`
  padding-bottom: 5px;
`;

const LicenseItem = ({ licenseRight, locale }: LicenseItemProps) => {
  const { description } = getLicenseRightByAbbreviation(licenseRight, locale);

  return <StyledListItem>{description}</StyledListItem>;
};

interface LicenseDescriptionListProps {
  licenseRights: string[];
  locale?: string;
}

const LicenseDescriptionList = ({ licenseRights, locale }: LicenseDescriptionListProps) => (
  <StyledList>
    {licenseRights.slice(1).map((licenseRight) => (
      <LicenseItem key={licenseRight} licenseRight={licenseRight} locale={locale} />
    ))}
  </StyledList>
);

export default LicenseDescriptionList;
