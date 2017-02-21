/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { PropTypes } from 'react';
import LicenseIconList from './LicenseIconList';
import { LicenseShape } from '../shapes';

const LicenseByline = ({ children, license }) => (
  <div className="license-byline">
    <LicenseIconList licenseRights={license.rights} />
    { children ?
      <div className="license-byline__body">
        { children }
      </div>
    : null}
  </div>
);

LicenseByline.propTypes = {
  license: LicenseShape.isRequired,
  children: PropTypes.node,
};

export default LicenseByline;
