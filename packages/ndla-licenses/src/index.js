/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export {
  getLicenseByAbbreviation,
  getLicenseByNBTitle,
  isCreativeCommonsLicense,
} from './licenses';

export {
  BY,
  SA,
  NC,
  ND,
  PD,
  CC0,
  CC,
  COPYRIGHTED,
  getLicenseRightByAbbreviation,
} from './licenseRights';

export { resourceTypes, getResourceTypeNamespace, metaTypes } from './CCRel';

export { LicenseByline } from './LicenseByline';

export {
  contributorTypes,
  contributorGroups,
  mkContributorString,
  getGroupedContributorDescriptionList,
} from './contributorTypes';
