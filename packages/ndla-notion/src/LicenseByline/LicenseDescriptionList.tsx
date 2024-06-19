/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { spacing } from "@ndla/core";
import { getLicenseRightByAbbreviation } from "@ndla/licenses";

interface LicenseItemProps {
  licenseRight: string;
  locale?: string;
}

const StyledListItem = styled.li`
  padding-bottom: ${spacing.xsmall};
`;

const LicenseItem = ({ licenseRight, locale }: LicenseItemProps) => {
  const { description } = getLicenseRightByAbbreviation(licenseRight, locale);

  return <StyledListItem>{description}</StyledListItem>;
};

interface LicenseDescriptionListProps {
  licenseRights: string[];
  locale?: string;
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
`;

const LicenseDescriptionList = ({ licenseRights, locale }: LicenseDescriptionListProps) => (
  <StyledList>
    {/* Filter away the CC-rights description since it isn't showed in the list anymore */}
    {licenseRights
      .filter((right) => right !== "cc")
      .map((licenseRight) => (
        <LicenseItem key={licenseRight} licenseRight={licenseRight} locale={locale} />
      ))}
  </StyledList>
);

export default LicenseDescriptionList;
