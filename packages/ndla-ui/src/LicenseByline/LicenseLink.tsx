/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { colors, fonts } from "@ndla/core";
import { SafeLink } from "@ndla/safelink";
import { LicenseType } from "./EmbedByline";

interface Props {
  license: LicenseType;
  asLink?: boolean;
}

const StyledSafeLink = styled(SafeLink)`
  color: ${colors.brand.primary};
  font-weight: ${fonts.weight.bold};
  text-decoration: underline;
  white-space: nowrap;
  box-shadow: none;
  &:hover,
  &:focus-within {
    text-decoration: none;
  }
`;

const StyledSpan = styled.span`
  font-weight: ${fonts.weight.bold};
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
  return <StyledSpan>{license.abbreviation}</StyledSpan>;
};

export default LicenseLink;
