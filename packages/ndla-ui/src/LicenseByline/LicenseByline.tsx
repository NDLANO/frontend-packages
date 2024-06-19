/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { getLicenseByAbbreviation } from "@ndla/licenses";
import LicenseLink from "./LicenseLink";

interface Props {
  license: LicenseType;
}
export type LicenseType = ReturnType<typeof getLicenseByAbbreviation>;

const LicenseByline = ({ license }: Props) => {
  return <LicenseLink license={license} asLink={!!license.url.length} />;
};

export default LicenseByline;
