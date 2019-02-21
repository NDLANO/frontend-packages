/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React from 'react';
import PropTypes from 'prop-types';
import { colors, spacing } from '@ndla/core';
import styled from 'react-emotion';
import LicenseIconList from './LicenseIconList';
import LicenseIconDescriptionList from './LicenseIconDescriptionList';

const StyledLicenseByline = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

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

const LicenseByline = ({
  children,
  withDescription,
  licenseRights,
  messages,
  locale,
  appearances,
}) => (
  <StyledLicenseByline>
    {!withDescription ? (
      <LicenseIconList
        appearances={appearances}
        licenseRights={licenseRights}
        locale={locale}
      />
    ) : (
      <div>
        <LicenseIconDescriptionList
          licenseRights={licenseRights}
          locale={locale}
          appearances={appearances}
        />
        {messages && messages.modelPremission && (
          <StyledModelpermission>
            {messages.modelPremission}
          </StyledModelpermission>
        )}
      </div>
    )}
    {children}
  </StyledLicenseByline>
);

LicenseByline.propTypes = {
  children: PropTypes.node,
  licenseRights: PropTypes.arrayOf(PropTypes.string).isRequired,
  withDescription: PropTypes.bool,
  messages: PropTypes.shape({
    modelPremission: PropTypes.string,
  }),
  className: PropTypes.string,
  locale: PropTypes.string,
  appearances: PropTypes.arrayOf(
    PropTypes.oneOf(['horizontal', 'vertical', 'grey', 'marginRight']),
  ),
};

LicenseByline.defaultProps = {
  withDescription: false,
};

export default LicenseByline;
