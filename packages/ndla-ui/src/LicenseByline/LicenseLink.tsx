/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { colors } from "@ndla/core";
import { SafeLink } from "@ndla/safelink";
import { LicenseType } from "./EmbedByline";

interface Props {
  license: LicenseType;
  asLink?: boolean;
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

const LicenseLink = ({ license, asLink = true }: Props) => {
  if (license.abbreviation === "unknown") {
    return null;
  }
  if (asLink) {
    return (
      <StyledSafeLink to={license.url} rel="license">
        {license.abbreviation}
      </StyledSafeLink>
    );
  }
  return <span>{license.abbreviation}</span>;
};

export default LicenseLink;
