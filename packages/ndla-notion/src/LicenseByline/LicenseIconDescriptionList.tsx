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

interface LicenseIconItemProps {
  licenseRight: string;
  locale?: string;
}

const StyledListItem = styled.li`
  padding-bottom: 5px;
  &[data-horizontal="true"] {
    padding-bottom: 0px;
  }
`;

const LicenseIconItem = ({ licenseRight, locale }: LicenseIconItemProps) => {
  const { description } = getLicenseRightByAbbreviation(licenseRight, locale);

  return <StyledListItem>{description}</StyledListItem>;
};

interface LicenseIconDescriptionListProps {
  licenseRights: string[];
  locale?: string;
}

const LicenseIconDescriptionList = ({ licenseRights, locale }: LicenseIconDescriptionListProps) => (
  <StyledList>
    {licenseRights.slice(1).map((licenseRight) => (
      <LicenseIconItem key={licenseRight} licenseRight={licenseRight} locale={locale} />
    ))}
  </StyledList>
);

export default LicenseIconDescriptionList;
