/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import styled from "@emotion/styled";
import { colors, spacing } from "@ndla/core";
import LicenseBylineDescriptionList from "./LicenseBylineDescriptionList";
import StyledLicenseByline from "./StyledLicenseByline";

const StyledModelPermission = styled.div`
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
    modelPermission?: string;
  };
  locale?: string;
}

const LicenseBylineDescription = ({ children, licenseRights, messages, locale }: Props) => (
  <StyledLicenseByline>
    <div>
      <LicenseBylineDescriptionList licenseRights={licenseRights} locale={locale} />
      {!!messages?.modelPermission && <StyledModelPermission>{messages.modelPermission}</StyledModelPermission>}
    </div>
    {children}
  </StyledLicenseByline>
);

export default LicenseBylineDescription;
