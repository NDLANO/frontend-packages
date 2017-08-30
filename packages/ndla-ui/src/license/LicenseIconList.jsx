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
  SA,
  NC,
  ND,
  PD,
  CC0,
  CC,
  COPY,
  getLicenseRightByAbbreviation,
} from 'ndla-licenses';
import BEMHelper from 'react-bem-helper';
import {
  LicenseBy,
  LicenseCc,
  LicenseNc,
  LicenseNd,
  LicenseSa,
  LicenseCc0,
  LicensePd,
  LicenseCopy,
} from '../icons';
import { Button } from '../index';

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
    case CC0:
      return (
        <LicenseCc0 className={className} aria-label={licenseDescription} />
      );
    case PD:
      return (
        <LicensePd className={className} aria-label={licenseDescription} />
      );
    case COPY:
      return (
        <LicenseCopy className={className} aria-label={licenseDescription} />
      );
    default:
      return undefined;
  }
};

LicenseIcon.propTypes = {
  licenseRight: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const LicenseIconItem = ({
  licenseRight,
  activeLicenseRight,
  noText,
  clicked,
}) =>
  <li {...classes('item', activeLicenseRight === licenseRight && 'active')}>
    {!noText
      ? <span>
          <LicenseIcon licenseRight={licenseRight} {...classes('icon')} />
          <span className="c-license-icons__licenselabel">
            {getLicenseRightByAbbreviation(licenseRight).description}
          </span>
        </span>
      : ''}
    {noText && clicked
      ? <span>
          <Button
            stripped
            onMouseEnter={() =>
              clicked(getLicenseRightByAbbreviation(licenseRight))}
            onMouseLeave={() => clicked(getLicenseRightByAbbreviation())}
            onClick={() =>
              clicked(getLicenseRightByAbbreviation(licenseRight))}>
            <LicenseIcon licenseRight={licenseRight} {...classes('icon')} />
          </Button>
          {activeLicenseRight === licenseRight
            ? <span className="c-license-icons__hover">
                {getLicenseRightByAbbreviation(licenseRight).description}
              </span>
            : ''}
        </span>
      : ''}
  </li>;

LicenseIconItem.propTypes = {
  licenseRight: PropTypes.string.isRequired,
  activeLicenseRight: PropTypes.string,
  noText: PropTypes.bool,
  clicked: PropTypes.func,
};

const LicenseIconList = ({
  licenseRights,
  noText,
  className,
  onLicenseIconClick,
  ...rest
}) => {
  const licenseRightsWithCC = [CC, ...licenseRights];
  return (
    <ul {...classes('list', '', `${className}`)}>
      {licenseRightsWithCC.map(licenseRight =>
        <LicenseIconItem
          key={licenseRight}
          licenseRight={licenseRight}
          noText={noText}
          clicked={onLicenseIconClick}
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
  className: PropTypes.string,
  onLicenseIconClick: PropTypes.func,
};

LicenseIconList.defaultProps = {
  noText: false,
};

export default LicenseIconList;
