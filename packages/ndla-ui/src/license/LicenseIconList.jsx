/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import { BY, NC, ND, SA, CC, getLicenseRightByAbbreviation } from 'ndla-licenses';
import BEMHelper from 'react-bem-helper';
import Icon from '../icons/Icon';
import Button from '../button/Button';

const classes = new BEMHelper({
  name: 'license-icons',
  prefix: 'c-',
});

const LicenseIcon = ({ licenseRight, className }) => {
  switch (licenseRight) {
    case CC: return <Icon.LicenseCc className={className} />;
    case BY: return <Icon.LicenseBy className={className} />;
    case NC: return <Icon.LicenseNc className={className} />;
    case ND: return <Icon.LicenseNd className={className} />;
    case SA: return <Icon.LicenseSa className={className} />;
    default: return undefined;
  }
};

LicenseIcon.propTypes = {
  licenseRight: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const LicenseIconItem = ({ licenseRight, activeLicenseRight, onLicenseIconClick }) => (
  <li {...classes('item', (activeLicenseRight === licenseRight && 'active'))}>
    <Button stripped onClick={() => onLicenseIconClick(getLicenseRightByAbbreviation(licenseRight))} >
      <LicenseIcon licenseRight={licenseRight} {...classes('icon')} />
    </Button>
  </li>
);

LicenseIconItem.propTypes = {
  licenseRight: PropTypes.string.isRequired,
  activeLicenseRight: PropTypes.string,
  onLicenseIconClick: PropTypes.func.isRequired,
};

const LicenseIconList = ({ licenseRights, ...rest }) => {
  const licenseRightsWithCC = [CC, ...licenseRights];
  return (
    <ul {...classes('list')}>
      {
        licenseRightsWithCC.map(licenseRight => <LicenseIconItem key={licenseRight} licenseRight={licenseRight} {...rest} />)
      }
    </ul>
  );
};

LicenseIconList.propTypes = {
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeLicenseRight: PropTypes.string,
  onLicenseIconClick: PropTypes.func.isRequired,
};

export default LicenseIconList;
