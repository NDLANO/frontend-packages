/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { getLicenseRightByAbbreviation } from "@ndla/licenses";
import LicenseIcon from "./LicenseIcon";
import LicensePopover from "./LicensePopover";
import StyledLicenseIconList from "./StyledLicenseIconList";

export const StyledListItem = styled.li`
  padding-bottom: 5px;
  &[data-horizontal="true"] {
    padding-bottom: 0px;
  }
`;

interface StyledLicenseIconButtonprops {
  fill?: string;
}

export const StyledLicenseIcon = styled.button<StyledLicenseIconButtonprops>`
  display: flex;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  &:hover,
  &:focus {
    span {
      display: block;
      opacity: 1;
      animation-name: fadeIn;
      animation-duration: 200ms;
    }
  }
`;

interface LicenseIconItemProps {
  licenseRight: string;
  locale?: string;
  horizontal?: boolean;
}

const LicenseIconItem = ({ licenseRight, locale, horizontal }: LicenseIconItemProps) => {
  const { description, title } = getLicenseRightByAbbreviation(licenseRight, locale);

  return (
    <StyledListItem data-horizontal={horizontal}>
      <LicensePopover popover={description}>
        <StyledLicenseIcon>
          <LicenseIcon licenseRight={licenseRight} description={title} />
        </StyledLicenseIcon>
      </LicensePopover>
    </StyledListItem>
  );
};

interface LicenseIconListProps {
  licenseRights: string[];
  locale?: string;
  horizontal?: boolean;
}

const LicenseIconList = ({ licenseRights, locale, horizontal }: LicenseIconListProps) => (
  <StyledLicenseIconList>
    {licenseRights.map((licenseRight) => (
      <LicenseIconItem key={licenseRight} licenseRight={licenseRight} locale={locale} horizontal={horizontal} />
    ))}
  </StyledLicenseIconList>
);

export default LicenseIconList;
