/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { By, Cc, Nc, Nd, Sa, Zero, Publicdomain, Copyright } from "@ndla/icons/licenses";
import { COPYRIGHTED, BY, SA, NA, NC, ND, PD, CC0, CC } from "@ndla/licenses";

interface Props {
  licenseRight: string;
  description: string;
}

const LicenseIcon = ({ licenseRight, description }: Props) => {
  switch (licenseRight) {
    case CC:
      return <Cc aria-label={description} aria-hidden="false" />;
    case BY:
      return <By aria-label={description} aria-hidden="false" />;
    case NC:
      return <Nc aria-label={description} aria-hidden="false" />;
    case ND:
      return <Nd aria-label={description} aria-hidden="false" />;
    case SA:
      return <Sa aria-label={description} aria-hidden="false" />;
    case CC0:
      return <Zero aria-label={description} aria-hidden="false" />;
    case PD:
      return <Publicdomain aria-label={description} aria-hidden="false" />;
    case COPYRIGHTED:
      return <Copyright aria-label={description} aria-hidden="false" />;
    case NA:
      return <Zero aria-label={description} aria-hidden="false" />;
    default:
      return null;
  }
};

export default LicenseIcon;
