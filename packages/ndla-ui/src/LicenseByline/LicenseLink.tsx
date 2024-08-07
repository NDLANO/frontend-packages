/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { LicenseLocaleType } from "@ndla/licenses";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";

interface Props {
  license: LicenseLocaleType;
}

const StyledSafeLink = styled(SafeLink, {
  base: {
    color: "primary",
    textDecoration: "underline",
    whiteSpace: "nowrap",
    _hover: {
      textDecoration: "none",
    },
    _focusWithin: {
      textDecoration: "none",
    },
  },
});

export const LicenseLink = ({ license }: Props) => {
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
