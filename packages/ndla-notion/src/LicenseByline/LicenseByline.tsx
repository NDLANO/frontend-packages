/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import LicenseIconList from "./LicenseIconList";
import StyledLicenseByline from "./StyledLicenseByline";

interface Props {
  children?: ReactNode;
  licenseRights: string[];
  locale?: string;
}

const LicenseByline = ({ children, licenseRights, locale }: Props) => {
  return (
    <StyledLicenseByline>
      <LicenseIconList licenseRights={licenseRights} locale={locale} horizontal />
      {children}
    </StyledLicenseByline>
  );
};

export default LicenseByline;
