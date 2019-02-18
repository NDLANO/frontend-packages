/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { colors, fonts, spacing } from '@ndla/core';
import styled from 'react-emotion';
import { getLicenseRightByAbbreviation } from '../licenseRights';
import LicenseIcon from './LicenseIcon';

const classes = new BEMHelper({
  name: 'license-icons',
  prefix: 'c-',
});

export const StyledLicenseIconList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const StyledLicenseIconItem = styled.li`
  display: flex;
  padding-bottom: 5px;
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
    width: 24px;
    height: 24px;
    min-width: 24px;
  }

  &:hover {
    svg {
      color: ${colors.brand.primary};
    }

    span {
      display: block;
      opacity: 1;
      animation-name: fadeIn;
      animation-duration: 200ms;
    }
  }
`;

const LicenseIconItem = ({ licenseRight, locale }) => {
  const { description } = getLicenseRightByAbbreviation(licenseRight);

  return (
    <StyledLicenseIconItem {...classes('item')}>
      <LicenseIcon
        licenseRight={licenseRight}
        description={description}
        {...classes('icon', 'hover')}
      />
      <span className="c-license-icons__hover">
        {getLicenseRightByAbbreviation(licenseRight, locale).description}
      </span>
    </StyledLicenseIconItem>
  );
};

LicenseIconItem.propTypes = {
  licenseRight: PropTypes.string.isRequired,
};

const LicenseIconList = ({ licenseRights, className, locale }) => (
  <StyledLicenseIconList {...classes('list', '', className)}>
    {licenseRights.map(licenseRight => (
      <LicenseIconItem
        key={licenseRight}
        licenseRight={licenseRight}
        locale={locale}
      />
    ))}
  </StyledLicenseIconList>
);

LicenseIconList.propTypes = {
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  locale: PropTypes.string,
};

export default LicenseIconList;
