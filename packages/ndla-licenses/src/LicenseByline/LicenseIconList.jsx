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
import { getLicenseRightByAbbreviation } from '../licenseRights';
import LicenseIcon from './LicenseIcon';

const classes = new BEMHelper({
  name: 'license-icons',
  prefix: 'c-',
});

const LicenseIconItem = ({ licenseRight, locale }) => {
  const { description } = getLicenseRightByAbbreviation(licenseRight);

  return (
    <li {...classes('item')}>
      <LicenseIcon
        licenseRight={licenseRight}
        description={description}
        {...classes('icon', 'hover')}
      />
      <span className="c-license-icons__hover">
        {getLicenseRightByAbbreviation(licenseRight, locale).description}
      </span>
    </li>
  );
};

LicenseIconItem.propTypes = {
  licenseRight: PropTypes.string.isRequired,
};

const LicenseIconList = ({ licenseRights, className, locale }) => (
  <ul {...classes('list', '', className)}>
    {licenseRights.map(licenseRight => (
      <LicenseIconItem
        key={licenseRight}
        licenseRight={licenseRight}
        locale={locale}
      />
    ))}
  </ul>
);

LicenseIconList.propTypes = {
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  locale: PropTypes.string,
};

export default LicenseIconList;
