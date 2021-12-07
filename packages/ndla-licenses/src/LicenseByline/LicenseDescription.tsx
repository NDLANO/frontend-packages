/*
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import { ReactNode } from 'react';
import { colors, spacing } from '@ndla/core';
import styled from '@emotion/styled';
import LicenseIconDescriptionList from './LicenseIconDescriptionList';
import StyledLicenseByline from './StyledLicenseByline';

const StyledModelpermission = styled.div`
  svg {
    width: 24px;
    height: 24px;
    margin-right: ${spacing.small};
  }
  margin-top: ${spacing.xsmall};
  padding-top: ${spacing.nsmall};
  border-top: 2px solid ${colors.brand.light};
`;

interface Props {
  children?: ReactNode;
  licenseRights: string[];
  messages?: {
    modelPremission?: string;
  };
  locale?: string;
  highlightCC?: boolean;
  color?: string;
}

const LicenseDescription = ({ children, licenseRights, messages, locale, highlightCC, color }: Props) => (
  <StyledLicenseByline>
    <div>
      <LicenseIconDescriptionList
        licenseRights={licenseRights}
        locale={locale}
        color={color}
        highlightCC={highlightCC}
      />
      {messages && messages.modelPremission && (
        <StyledModelpermission>{messages.modelPremission}</StyledModelpermission>
      )}
    </div>
    {children}
  </StyledLicenseByline>
);

export default LicenseDescription;
