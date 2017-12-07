/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import LicenseIconList from './LicenseIconList';
import LicenseIconDescriptionList from './LicenseIconDescriptionList';

const classes = new BEMHelper({
  name: 'license-byline',
  prefix: 'c-',
});

const LicenseByline = ({
  children,
  withDescription,
  licenseRights,
  className,
}) => (
  <div {...classes()}>
    {!withDescription ? (
      <LicenseIconList className={className} licenseRights={licenseRights} />
    ) : (
      <LicenseIconDescriptionList
        className={className}
        licenseRights={licenseRights}
      />
    )}
    {children}
  </div>
);

LicenseByline.propTypes = {
  children: PropTypes.node,
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
  withDescription: PropTypes.bool,
  className: PropTypes.string,
};

LicenseByline.defaultProps = {
  withDescription: false,
};

export default LicenseByline;
