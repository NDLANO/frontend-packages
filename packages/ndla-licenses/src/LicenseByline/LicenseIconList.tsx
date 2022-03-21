/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { colors, fonts, spacing } from '@ndla/core';
import styled from '@emotion/styled';
import { getLicenseRightByAbbreviation } from '../licenseRights';
import LicenseIcon from './LicenseIcon';
import StyledLicenseIconList from './StyledLicenseIconList';

type StyledLicenseIconItemProps = {
  horizontal?: boolean;
  fill?: string;
};

export const StyledLicenseIconItem = styled.li<StyledLicenseIconItemProps>`
  display: flex;
  padding-bottom: ${(props) => (props.horizontal ? `0` : `5px`)};
  margin-bottom: 0;
  margin-right: 0.2em;
  line-height: 1.3rem;

  span {
    z-index: 1;
    opacity: 0;
    display: none;
    max-width: 300px;
    position: absolute;
    background: ${colors.brand.primary};
    color: ${colors.white};
    text-align: left;
    border-radius: 2px;
    padding: ${spacing.small};
    font-family: ${fonts.sans};
    transform: translate(0, calc(-100% - 6px));
    ${fonts.sizes('14px', '18px')};
  }

  svg {
    fill: ${(props) => props.fill};
    ${(props) =>
      props.horizontal
        ? `width: 18px;
    height: 18px;`
        : `width: 24px;
    height: 24px;`};
  }
`;

interface StyledLicenseIconButtonprops {
  light?: boolean;
}
export const StyledLicenseIconButton = styled.button<StyledLicenseIconButtonprops>`
  display: flex;
  border: 0;
  margin: 0;
  padding: 0;
  color: '${(p) => (p.light ? colors.white : colors.text.primary)}';
  background: transparent;
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
`;

interface LicenseIconItemProps {
  licenseRight: string;
  locale?: string;
  horizontal?: boolean;
  light?: boolean;
  fill?: string;
}

const LicenseIconItem = ({ licenseRight, locale, horizontal, light, fill }: LicenseIconItemProps) => {
  const { description } = getLicenseRightByAbbreviation(licenseRight, locale);

  return (
    <StyledLicenseIconItem horizontal={horizontal} fill={fill}>
      <StyledLicenseIconButton type="button" light={light}>
        <LicenseIcon licenseRight={licenseRight} description={description} />
        <span role="tooltip">{getLicenseRightByAbbreviation(licenseRight, locale).description}</span>
      </StyledLicenseIconButton>
    </StyledLicenseIconItem>
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
  fill?: string;
}

const LicenseIconList = ({
  licenseRights,
  locale,
  color,
  marginRight,
  horizontal,
  light,
  fill,
}: LicenseIconListProps) => (
  <StyledLicenseIconList marginRight={marginRight} color={color} horizontal={horizontal}>
    {licenseRights.map((licenseRight) => (
      <LicenseIconItem
        key={licenseRight}
        licenseRight={licenseRight}
        locale={locale}
        horizontal={horizontal}
        light={light}
        fill={fill}
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
