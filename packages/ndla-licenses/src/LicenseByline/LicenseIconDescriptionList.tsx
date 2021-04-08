/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { getLicenseRightByAbbreviation } from '../licenseRights';
import LicenseIcon from './LicenseIcon';
import StyledLicenseIconList from './StyledLicenseIconList';
import { StyledLicenseIconButton, StyledLicenseIconItem } from './LicenseIconList';

const StyledLicenseLabel = styled.div`
  margin-left: ${spacing.small};
`;

interface LicenseIconItemProps {
  licenseRight: string;
  locale?: string;
}

const LicenseIconItem: FC<LicenseIconItemProps> = ({ licenseRight, locale }) => {
  const { description } = getLicenseRightByAbbreviation(licenseRight, locale);

  return (
    <StyledLicenseIconItem>
      <StyledLicenseIconButton>
        <LicenseIcon licenseRight={licenseRight} description={description} />
        <span role="tooltip">{description}</span>
      </StyledLicenseIconButton>
      <StyledLicenseLabel>{description}</StyledLicenseLabel>
    </StyledLicenseIconItem>
  );
};

LicenseIconItem.propTypes = {
  licenseRight: PropTypes.string.isRequired,
  locale: PropTypes.string,
};

interface LicenseIconDescriptionListProps {
  licenseRights: string[];
  highlightCC?: boolean;
  color?: string;
  locale?: string;
}

const LicenseIconDescriptionList: FC<LicenseIconDescriptionListProps> = ({
  licenseRights,
  locale,
  color,
  highlightCC,
}) => (
  <StyledLicenseIconList color={color} highlightCC={highlightCC}>
    {licenseRights.map(licenseRight => (
      <LicenseIconItem key={licenseRight} licenseRight={licenseRight} locale={locale} />
    ))}
  </StyledLicenseIconList>
);

LicenseIconDescriptionList.propTypes = {
  licenseRights: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  highlightCC: PropTypes.bool,
  color: PropTypes.string,
  locale: PropTypes.string,
};

export default LicenseIconDescriptionList;
