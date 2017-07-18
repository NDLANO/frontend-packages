/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  BY,
  NC,
  ND,
  SA,
  CC,
  getLicenseRightByAbbreviation,
} from 'ndla-licenses';
import BEMHelper from 'react-bem-helper';
import {
  LicenseBy,
  LicenseCc,
  LicenseNc,
  LicenseNd,
  LicenseSa,
} from '../icons';

const classes = new BEMHelper({
  name: 'license-icons',
  prefix: 'c-',
});

const LicenseIcon = ({ licenseRight, className }) => {
  const licenseDescription = getLicenseRightByAbbreviation(licenseRight)
    .description;
  switch (licenseRight) {
    case CC:
      return (
        <LicenseCc className={className} aria-label={licenseDescription} />
      );
    case BY:
      return (
        <LicenseBy className={className} aria-label={licenseDescription} />
      );
    case NC:
      return (
        <LicenseNc className={className} aria-label={licenseDescription} />
      );
    case ND:
      return (
        <LicenseNd className={className} aria-label={licenseDescription} />
      );
    case SA:
      return (
        <LicenseSa className={className} aria-label={licenseDescription} />
      );
    default:
      return undefined;
  }
};

LicenseIcon.propTypes = {
  licenseRight: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const LicenseIconItem = ({ licenseRight, activeLicenseRight, noText }) =>
  <li {...classes('item', activeLicenseRight === licenseRight && 'active')}>
    <LicenseIcon licenseRight={licenseRight} {...classes('icon')} />
    {!noText ? <span className="c-license-icons__licenselabel">
      {getLicenseRightByAbbreviation(licenseRight).description}
    </span> : ''}
  </li>;

LicenseIconItem.propTypes = {
  licenseRight: PropTypes.string.isRequired,
  activeLicenseRight: PropTypes.string,
  noText: PropTypes.bool,
};

const LicenseIconList = ({ licenseRights, noText, ...rest }) => {
  const licenseRightsWithCC = [CC, ...licenseRights];
  return (
    <ul {...classes('list')}>
      {licenseRightsWithCC.map(licenseRight =>
        <LicenseIconItem
          key={licenseRight}
          licenseRight={licenseRight}
          noText={noText}
          {...rest}
        />,
      )}
    </ul>
  );
};

LicenseIconList.propTypes = {
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeLicenseRight: PropTypes.string,
  noText: PropTypes.bool,
};

LicenseIconList.defaultProps = {
  noText: false,
};

export default LicenseIconList;
