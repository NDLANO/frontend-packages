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
import { LicenseShape } from '../shapes';

const LicenseByline = ({ children, license, noText }) =>
  <div className="license-byline">
    <LicenseIconList noText={noText} licenseRights={license.rights} />
    {children
      ? <div className="license-byline__body">
          {children}
        </div>
      : null}
  </div>;

LicenseByline.propTypes = {
  license: LicenseShape.isRequired,
  children: PropTypes.node,
  noText: PropTypes.bool,
};

export default LicenseByline;
