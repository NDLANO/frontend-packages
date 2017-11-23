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
  By,
  Cc,
  Nc,
  Nd,
  Sa,
  Zero,
  Publicdomain,
  Copy,
} from 'ndla-icons/es/license';

const LicenseIcon = ({ licenseRight, description, className }) => {
  switch (licenseRight) {
    case CC:
      return <Cc className={className} aria-label={description} />;
    case BY:
      return <By className={className} aria-label={description} />;
    case NC:
      return <Nc className={className} aria-label={description} />;
    case ND:
      return <Nd className={className} aria-label={description} />;
    case SA:
      return <Sa className={className} aria-label={description} />;
    case CC0:
      return <Zero className={className} aria-label={description} />;
    case PD:
      return <Publicdomain className={className} aria-label={description} />;
    case COPY:
      return <Copy className={className} aria-label={description} />;
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
