/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import { Popover } from '@ndla/tooltip';
import PropTypes from 'prop-types';
import { getLicenseRightByAbbreviation } from '../licenseRights';
import LicenseIcon from './LicenseIcon';
import StyledLicenseIconList from './StyledLicenseIconList';

type StyledLicenseIconItemProps = {
  horizontal?: boolean;
};

export const StyledListItem = styled.li<StyledLicenseIconItemProps>`
  display: flex;
  padding-bottom: ${(props) => (props.horizontal ? `0` : `5px`)};
  margin-bottom: 0;
  margin-right: 0.2em;
  line-height: 1.3rem;
  color: ${colors.brand.primary};
`;

interface StyledLicenseIconButtonprops {
  light?: boolean;
  horizontal?: boolean;
  fill?: string;
}

export const StyledLicenseIcon = styled.span<StyledLicenseIconButtonprops>`
  display: flex;
  color: ${(p) => (p.light ? colors.white : colors.text.primary)};
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
  const { description } = getLicenseRightByAbbreviation(licenseRight, locale);

  return (
    <StyledListItem horizontal={horizontal}>
      <Popover popover={description}>
        <StyledLicenseIcon tabIndex={0} light={light} fill={color} horizontal={horizontal}>
          <LicenseIcon licenseRight={licenseRight} description={description} />
        </StyledLicenseIcon>
      </Popover>
    </StyledListItem>
  );
};

LicenseIconItem.propTypes = {
  licenseRight: PropTypes.string.isRequired,
  locale: PropTypes.string,
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

LicenseIconList.propTypes = {
  licenseRights: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  locale: PropTypes.string,
  color: PropTypes.string,
  marginRight: PropTypes.bool,
  horizontal: PropTypes.bool,
};

export default LicenseIconList;
