/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import LicenseIconList from './LicenseIconList';
import StyledLicenseByline from './StyledLicenseByline';

interface Props {
  children?: ReactNode;
  licenseRights: string[];
  locale?: string;
  color?: string;
  marginRight?: boolean;
  light?: boolean;
}

const LicenseByline = ({ children, licenseRights, locale, color, marginRight, light = false }: Props) => {
  return (
    <StyledLicenseByline>
      <LicenseIconList
        licenseRights={licenseRights}
        locale={locale}
        color={color}
        marginRight={marginRight}
        light={light}
        horizontal
      />
      {children}
    </StyledLicenseByline>
  );
};

export default LicenseByline;
