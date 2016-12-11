/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { BY, NC, ND, SA, CC, getLicenseRightByAbbreviation } from 'ndla-licenses';
import Icon from '../icons/Icon';
import Button from '../button/Button';

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

const LicenseIconList = ({ licenseRights, iconsClassName, activeLicenseRight, onLicenseIconClick }) => {
  const licenseRightsWithCC = [CC, ...licenseRights];
  return (
    <div className="license-byline__icons">
      {
        licenseRightsWithCC.map(licenseRight =>
          <Button stripped onClick={() => onLicenseIconClick(getLicenseRightByAbbreviation(licenseRight))} key={licenseRight}>
            <LicenseIcon
              licenseRight={licenseRight}
              className={classNames('license__icon', 'license__icon--mini', iconsClassName, { 'license__icon--active': activeLicenseRight === licenseRight })}
            />
          </Button>,
        )
      }
    </div>
  );
};

LicenseIconList.propTypes = {
  licenseRights: PropTypes.array.isRequired,
  iconsClassName: PropTypes.string,
  activeLicenseRight: PropTypes.string,
  onLicenseIconClick: PropTypes.func.isRequired,
};

export default LicenseIconList;
