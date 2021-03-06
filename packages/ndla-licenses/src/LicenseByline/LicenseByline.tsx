/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React from 'react';
import PropTypes from 'prop-types';
import LicenseIconList from './LicenseIconList';
import StyledLicenseByline from './StyledLicenseByline';

interface Props {
  children?: React.ReactNode;
  licenseRights: string[];
  locale?: string;
  color?: string;
  marginRight?: boolean;
}

const LicenseByline = ({ children, licenseRights, locale, color, marginRight }: Props) => {
  return (
    <StyledLicenseByline>
      <LicenseIconList
        licenseRights={licenseRights}
        locale={locale}
        color={color}
        marginRight={marginRight}
        horizontal
      />
      {children}
    </StyledLicenseByline>
  );
};

LicenseByline.propTypes = {
  children: PropTypes.node,
  licenseRights: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  locale: PropTypes.string,
  color: PropTypes.string,
  marginRight: PropTypes.bool,
};

export default LicenseByline;
