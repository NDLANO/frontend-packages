/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { getLicenseByAbbreviation, getLicenseByNBTitle } from './licenses';

import {
  BY,
  SA,
  NC,
  ND,
  PD,
  CC0,
  CC,
  COPY,
  getLicenseRightByAbbreviation,
} from './licenseRights';

export {
  BY,
  SA,
  NC,
  ND,
  PD,
  CC0,
  CC,
  COPY,
  getLicenseByAbbreviation,
  getLicenseRightByAbbreviation,
  getLicenseByNBTitle,
};

export default getLicenseByAbbreviation;
