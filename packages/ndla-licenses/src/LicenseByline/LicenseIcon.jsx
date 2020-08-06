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
  By,
  Cc,
  Nc,
  Nd,
  Sa,
  Zero,
  Publicdomain,
  Copyright,
} from '@ndla/icons/licenses';
import { COPYRIGHTED, BY, SA, NA, NC, ND, PD, CC0, CC } from '../licenseRights';

const LicenseIcon = ({ licenseRight, description }) => {
  switch (licenseRight) {
    case CC:
      return <Cc aria-label={description} />;
    case BY:
      return <By aria-label={description} />;
    case NC:
      return <Nc aria-label={description} />;
    case ND:
      return <Nd aria-label={description} />;
    case SA:
      return <Sa aria-label={description} />;
    case CC0:
      return <Zero aria-label={description} />;
    case PD:
      return <Publicdomain aria-label={description} />;
    case COPYRIGHTED:
      return <Copyright aria-label={description} />;
    case NA:
      return <Zero aria-label={description} />;
    default:
      return undefined;
  }
};

LicenseIcon.propTypes = {
  licenseRight: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LicenseIcon;
