/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { BY, SA, NC, ND, PD, CC0, CC, COPY } from 'ndla-licenses';
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

const LicenseIcon = ({ licenseRight, description, className }) => {
  switch (licenseRight) {
    case CC:
      return <LicenseCc className={className} aria-label={description} />;
    case BY:
      return <LicenseBy className={className} aria-label={description} />;
    case NC:
      return <LicenseNc className={className} aria-label={description} />;
    case ND:
      return <LicenseNd className={className} aria-label={description} />;
    case SA:
      return <LicenseSa className={className} aria-label={description} />;
    case CC0:
      return <LicenseCc0 className={className} aria-label={description} />;
    case PD:
      return <LicensePd className={className} aria-label={description} />;
    case COPY:
      return <LicenseCopy className={className} aria-label={description} />;
    default:
      return undefined;
  }
};

LicenseIcon.propTypes = {
  licenseRight: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default LicenseIcon;
