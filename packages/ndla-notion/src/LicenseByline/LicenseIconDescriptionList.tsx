/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { getLicenseRightByAbbreviation } from "@ndla/licenses";
import { StyledListItem } from "./LicenseIconList";
import StyledLicenseIconList from "./StyledLicenseIconList";

interface LicenseIconItemProps {
  licenseRight: string;
  locale?: string;
}

const LicenseIconItem = ({ licenseRight, locale }: LicenseIconItemProps) => {
  const { description } = getLicenseRightByAbbreviation(licenseRight, locale);

  return <StyledListItem>{description}</StyledListItem>;
};

interface LicenseIconDescriptionListProps {
  licenseRights: string[];
  locale?: string;
}

const LicenseIconDescriptionList = ({ licenseRights, locale }: LicenseIconDescriptionListProps) => (
  <StyledLicenseIconList>
    {licenseRights.slice(1).map((licenseRight) => (
      <LicenseIconItem key={licenseRight} licenseRight={licenseRight} locale={locale} />
    ))}
  </StyledLicenseIconList>
);

export default LicenseIconDescriptionList;
