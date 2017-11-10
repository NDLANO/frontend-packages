/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { getLicenseByAbbreviation, getLicenseByNBTitle, isCreativeCommonsLicense } from './licenses';

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

import {
  resourceTypes,
  getResourceTypeNamespace,
  microDataTypes,
  getMicroDataNamespaceByType,
  metaTypes,
  getMicroDataNamespaceByMicroDataTypeWithFallback,
} from './microData';

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
  resourceTypes,
  getResourceTypeNamespace,
  isCreativeCommonsLicense,
  microDataTypes,
  getMicroDataNamespaceByType,
  metaTypes,
  getMicroDataNamespaceByMicroDataTypeWithFallback,
};

export default getLicenseByAbbreviation;
