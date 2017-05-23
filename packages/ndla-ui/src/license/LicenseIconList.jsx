/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { BY, NC, ND, SA, CC, getLicenseRightByAbbreviation } from 'ndla-licenses';
import BEMHelper from 'react-bem-helper';
import Icon from '../icons/Icon';
import Button from '../button/Button';

const classes = new BEMHelper({
  name: 'license-icons',
  prefix: 'c-',
});

const LicenseIcon = ({ licenseRight, className }) => {
  const licenseDescription = getLicenseRightByAbbreviation(licenseRight).description;
  switch (licenseRight) {
    case CC: return <Icon.LicenseCc className={className} aria-label={licenseDescription} />;
    case BY: return <Icon.LicenseBy className={className} aria-label={licenseDescription} />;
    case NC: return <Icon.LicenseNc className={className} aria-label={licenseDescription} />;
    case ND: return <Icon.LicenseNd className={className} aria-label={licenseDescription} />;
    case SA: return <Icon.LicenseSa className={className} aria-label={licenseDescription} />;
    default: return undefined;
  }
};

LicenseIcon.propTypes = {
  licenseRight: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const LicenseIconItem = ({ licenseRight, activeLicenseRight, onLicenseIconClick }) => (
  <li {...classes('item', (activeLicenseRight === licenseRight && 'active'))}>
    { onLicenseIconClick ?
      <div>
        <Button stripped onClick={() => onLicenseIconClick(getLicenseRightByAbbreviation(licenseRight))} >
          <LicenseIcon licenseRight={licenseRight} {...classes('icon')} />
        </Button>
        console.warn(licenseRight);
        { licenseRight.description }
      </div>
      :
      <div>
        <LicenseIcon licenseRight={licenseRight} {...classes('icon')} />
        { licenseRight.description }
      </div>
    }
  </li>
);

LicenseIconItem.propTypes = {
  licenseRight: PropTypes.string.isRequired,
  activeLicenseRight: PropTypes.string,
  onLicenseIconClick: PropTypes.func,
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
  onLicenseIconClick: PropTypes.func,
};

export default LicenseIconList;
