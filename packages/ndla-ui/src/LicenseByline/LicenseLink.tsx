/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { LicenseLocaleType } from "@ndla/licenses";
import { SafeLink } from "@ndla/safelink";

interface Props {
  license: LicenseLocaleType;
}

const LicenseLink = ({ license }: Props) => {
  if (license.abbreviation === "unknown") {
    return null;
  }
  if (license.url?.length) {
    return (
      <SafeLink to={license.url} rel="license">
        {license.abbreviation}
      </SafeLink>
    );
  }
  return <span>{license.abbreviation}</span>;
};

export default LicenseLink;
