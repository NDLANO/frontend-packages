/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { Popover } from '@ndla/tooltip';
import React from 'react';
import { getLicenseRightByAbbreviation } from '@ndla/licenses';
import LicenseIcon from './LicenseIcon';
import { StyledLicenseIcon, StyledListItem } from './LicenseIconList';
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
    <StyledListItem>
      <IconLineWrapper>
        <Popover popover={description}>
          <StyledLicenseIcon>
            <LicenseIcon licenseRight={licenseRight} description={description} />
          </StyledLicenseIcon>
        </Popover>
        <StyledLicenseLabel>{description}</StyledLicenseLabel>
      </IconLineWrapper>
    </StyledListItem>
  );
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

export default LicenseIconDescriptionList;
