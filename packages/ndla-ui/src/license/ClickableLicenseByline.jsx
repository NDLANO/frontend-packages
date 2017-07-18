/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LicenseIconList from './LicenseIconList';
import { LicenseShape } from '../shapes';

class ClickableLicenseByline extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedLicenseRight: undefined };
    this.handleLicenseRightChange = this.handleLicenseRightChange.bind(this);
  }

  handleLicenseRightChange(licenseRight) {
    const { selectedLicenseRight } = this.state;
    if (
      !selectedLicenseRight ||
      selectedLicenseRight.short !== licenseRight.short
    ) {
      this.setState({ selectedLicenseRight: licenseRight });
    } else {
      this.setState({ selectedLicenseRight: undefined });
    }
  }

  render() {
    const { children, license, stacked } = this.props;
    const { selectedLicenseRight } = this.state;
    const activeLicenseRight = selectedLicenseRight
      ? selectedLicenseRight.short
      : undefined;
    const classList = ['license-byline'];
    if (stacked) {
      classList.push('license-byline--stacked');
    }

    return (
      <div className={classList.join(' ')}>
        <LicenseIconList
          licenseRights={license.rights}
          onLicenseIconClick={this.handleLicenseRightChange}
          activeLicenseRight={activeLicenseRight}
        />
        {selectedLicenseRight
          ? <div className="license-byline__body license-byline__body--black">
              <span>
                {selectedLicenseRight.description}
              </span>
            </div>
          : undefined}
        <div className="license-byline__body">
          <span>
            {license.author}
          </span>
        </div>
        {children
          ? <div className="license-byline__body">
              {children}
            </div>
          : null}
      </div>
    );
  }
}

ClickableLicenseByline.propTypes = {
  license: LicenseShape.isRequired,
  children: PropTypes.node,
  stacked: PropTypes.string,
};

export default ClickableLicenseByline;
