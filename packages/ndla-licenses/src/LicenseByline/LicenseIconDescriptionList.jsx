/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { spacing } from '@ndla/core';
import { getLicenseRightByAbbreviation } from '../licenseRights';
import LicenseIcon from './LicenseIcon';
import StyledLicenseIconList from './StyledLicenseIconList';

const StyledLicenseIconItem = styled.li`
  display: flex;
  padding-bottom: 5px;
  margin-bottom: 0;
  margin-right: 0.2em;
  line-height: 1.3rem;

  svg {
    width: 24px;
    height: 24px;
    min-width: 24px;
  }
`;

const StyledLicenseLabel = styled.span`
  margin-left: ${spacing.small};
`;

const LicenseIconItem = ({ licenseRight, locale }) => {
  const { description } = getLicenseRightByAbbreviation(licenseRight, locale);

  return (
    <StyledLicenseIconItem>
      <LicenseIcon licenseRight={licenseRight} description={description} />
      <StyledLicenseLabel>{description}</StyledLicenseLabel>
    </StyledLicenseIconItem>
  );
};

LicenseIconItem.propTypes = {
  licenseRight: PropTypes.string.isRequired,
  locale: PropTypes.string,
};

const LicenseIconDescriptionList = ({
  licenseRights,
  locale,
  color,
  highlightCC,
}) => (
  <StyledLicenseIconList color={color} highlightCC={highlightCC}>
    {licenseRights.map(licenseRight => (
      <LicenseIconItem
        key={licenseRight}
        licenseRight={licenseRight}
        locale={locale}
      />
    ))}
  </StyledLicenseIconList>
);

LicenseIconDescriptionList.propTypes = {
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
  highlightCC: PropTypes.bool,
  color: PropTypes.string,
  locale: PropTypes.string,
};

export default LicenseIconDescriptionList;
