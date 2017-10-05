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

const ClickableLicenseByline = ({
  children,
  license,
  stacked,
  noText,
  className,
}) => {
  const classList = ['license-byline'];
  if (stacked) {
    classList.push('license-byline--stacked');
  }

  return (
    <div className={classList.join(' ')}>
      <LicenseIconList
        licenseRights={license}
        noText={noText}
        className={className}
      />
      <div className="license-byline__body">
        <span>
          {license.author}
        </span>
      </div>
      {children}
    </div>
  );
};

ClickableLicenseByline.propTypes = {
  license: LicenseShape.isRequired,
  children: PropTypes.node,
  stacked: PropTypes.string,
  noText: PropTypes.bool,
  className: PropTypes.string,
};

export default ClickableLicenseByline;
