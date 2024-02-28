/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { colors } from "@ndla/core";
import { getLicenseRightByAbbreviation } from "@ndla/licenses";
import LicenseIcon from "./LicenseIcon";
import LicensePopover from "./LicensePopover";
import StyledLicenseIconList from "./StyledLicenseIconList";

interface StyledListItemProps {
  horizontal?: boolean;
}

export const StyledListItem = styled.li<StyledListItemProps>`
  display: flex;
  padding-bottom: ${(props) => (props.horizontal ? `0` : `5px`)};
  margin-right: 0.2em;
  line-height: 1.3rem;
  color: ${colors.brand.primary};
`;

interface StyledLicenseIconButtonprops {
  light?: boolean;
  horizontal?: boolean;
  fill?: string;
}

export const StyledLicenseIcon = styled.button<StyledLicenseIconButtonprops>`
  display: flex;
  color: ${(p) => (p.light ? colors.white : colors.text.primary)};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${(p) => (p.light ? colors.brand.light : colors.text.light)};
    span {
      display: block;
      opacity: 1;
      animation-name: fadeIn;
      animation-duration: 200ms;
    }
  }
  & > svg {
    fill: ${(props) => props.fill};
    ${(props) =>
      props.horizontal
        ? `width: 18px;
    height: 18px;`
        : `width: 24px;
    height: 24px;`};
  }
`;

interface LicenseIconItemProps {
  licenseRight: string;
  locale?: string;
  horizontal?: boolean;
  light?: boolean;
  color?: string;
}

const LicenseIconItem = ({ licenseRight, locale, horizontal, light, color }: LicenseIconItemProps) => {
  const { description, title } = getLicenseRightByAbbreviation(licenseRight, locale);

  return (
    <StyledListItem horizontal={horizontal}>
      <LicensePopover popover={description}>
        <StyledLicenseIcon light={light} fill={color} horizontal={horizontal}>
          <LicenseIcon licenseRight={licenseRight} description={title} />
        </StyledLicenseIcon>
      </LicensePopover>
    </StyledListItem>
  );
};

interface LicenseIconListProps {
  licenseRights: string[];
  locale?: string;
  color?: string;
  marginRight?: boolean;
  horizontal?: boolean;
  light?: boolean;
}

const LicenseIconList = ({ licenseRights, locale, color, marginRight, horizontal, light }: LicenseIconListProps) => (
  <StyledLicenseIconList marginRight={marginRight} color={color} horizontal={horizontal}>
    {licenseRights.map((licenseRight) => (
      <LicenseIconItem
        key={licenseRight}
        licenseRight={licenseRight}
        locale={locale}
        horizontal={horizontal}
        light={light}
        color={color}
      />
    ))}
  </StyledLicenseIconList>
);

export default LicenseIconList;
