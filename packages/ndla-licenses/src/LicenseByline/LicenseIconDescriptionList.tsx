/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import Tooltip from '@ndla/tooltip';
import PropTypes from 'prop-types';
import React from 'react';
import { getLicenseRightByAbbreviation } from '../licenseRights';
import LicenseIcon from './LicenseIcon';
import { StyledLicenseIcon, StyledLicenseIconItem } from './LicenseIconList';
import StyledLicenseIconList from './StyledLicenseIconList';

const StyledLicenseLabel = styled.div`
  margin-left: ${spacing.small};
`;

interface LicenseIconItemProps {
  licenseRight: string;
  locale?: string;
}

const IconLineWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LicenseIconItem = ({ licenseRight, locale }: LicenseIconItemProps) => {
  const { description } = getLicenseRightByAbbreviation(licenseRight, locale);

  return (
    <StyledLicenseIconItem>
      <Tooltip tooltip={description}>
        <IconLineWrapper>
          <StyledLicenseIcon>
            <LicenseIcon licenseRight={licenseRight} description={description} />
          </StyledLicenseIcon>
          <StyledLicenseLabel>{description}</StyledLicenseLabel>
        </IconLineWrapper>
      </Tooltip>
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

const LicenseIconDescriptionList = ({ licenseRights, locale, color, highlightCC }: LicenseIconDescriptionListProps) => (
  <StyledLicenseIconList color={color} highlightCC={highlightCC}>
    {licenseRights.map((licenseRight) => (
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
