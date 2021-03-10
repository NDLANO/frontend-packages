/*
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { FC } from 'react';
import PropTypes from 'prop-types';
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
  children?: React.ReactNode;
  licenseRights: string[];
  messages?: {
    modelPremission?: string;
  };
  locale?: string;
  highlightCC?: boolean;
  color?: string;
}

const LicenseDescription: FC<Props> = ({
  children,
  licenseRights,
  messages,
  locale,
  highlightCC,
  color,
}) => (
  <StyledLicenseByline>
    <div>
      <LicenseIconDescriptionList
        licenseRights={licenseRights}
        locale={locale}
        color={color}
        highlightCC={highlightCC}
      />
      {messages && messages.modelPremission && (
        <StyledModelpermission>
          {messages.modelPremission}
        </StyledModelpermission>
      )}
    </div>
    {children}
  </StyledLicenseByline>
);

LicenseDescription.propTypes = {
  children: PropTypes.node,
  licenseRights: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  messages: PropTypes.shape({
    modelPremission: PropTypes.string,
  }),
  highlightCC: PropTypes.bool,
  color: PropTypes.string,
  locale: PropTypes.string,
};

export default LicenseDescription;
