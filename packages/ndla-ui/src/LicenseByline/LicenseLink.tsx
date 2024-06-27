/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { colors } from "@ndla/core";
import { LicenseLocaleType } from "@ndla/licenses";
import { SafeLink } from "@ndla/safelink";

interface Props {
  license: LicenseLocaleType;
}

const StyledSafeLink = styled(SafeLink)`
  color: ${colors.brand.primary};
  text-decoration: underline;
  white-space: nowrap;
  box-shadow: none;
  &:hover,
  &:focus-within {
    text-decoration: none;
  }
`;

const LicenseLink = ({ license }: Props) => {
  if (license.abbreviation === "unknown") {
    return null;
  }
  if (license.url?.length) {
    return (
      <StyledSafeLink to={license.url} rel="license">
        {license.abbreviation}
      </StyledSafeLink>
    );
  }
  return <span>{license.abbreviation}</span>;
};

export default LicenseLink;
