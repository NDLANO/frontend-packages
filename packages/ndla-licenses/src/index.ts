/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export {
  contributorTypes,
  contributorGroups,
  mkContributorString,
  getGroupedContributorDescriptionList,
} from "./contributorTypes";

export { resourceTypes, getResourceTypeNamespace, metaTypes } from "./CCRel";
export type { MetaType } from "./CCRel";

export {
  BY,
  SA,
  NA,
  NC,
  ND,
  PD,
  CC0,
  CC,
  COPYRIGHTED,
  licenseRights,
  getLicenseRightByAbbreviation,
} from "./licenseRights";

export {
  getLicenseByAbbreviation,
  getLicenseByNBTitle,
  isCreativeCommonsLicense,
  CC_BY_NC_ND_4,
  CC_BY_NC_SA_4,
  CC_BY_NC_4,
  CC_BY_ND_4,
  CC_BY_SA_4,
  CC_BY_4,
  CPRGHTD,
  CC0_LIC,
  PD_LIC,
  NA_LIC,
  ALL_ABBREVIATIONS,
} from "./licenses";
export type { LicenseLocaleType } from "./types";

export {
  getCopyString,
  getLicenseCredits,
  figureApa7CopyString,
  podcastSeriesApa7CopyString,
  podcastEpisodeApa7CopyString,
  webpageReferenceApa7CopyString,
} from "./getCopyString";

export { getModelReleaseValue } from "./modelRelease";
