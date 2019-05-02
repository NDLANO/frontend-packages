/*
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React from 'react';
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
  margin-top: ${spacing.small / 2};
  padding-top: ${spacing.small / 1.5};
  border-top: 2px solid ${colors.brand.light};
`;

const LicenseDescription = ({
  children,
  licenseRights,
  messages,
  locale,
  highlightCC,
  color,
  marginRight,
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
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
  messages: PropTypes.shape({
    modelPremission: PropTypes.string,
  }),
  highlightCC: PropTypes.bool,
  color: PropTypes.string,
  locale: PropTypes.string,
};

export default LicenseDescription;
