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

export { rights, getLicenseRightByAbbreviation } from "./licenseRights";

export {
  getLicenseByAbbreviation,
  getLicenseByNBTitle,
  isCreativeCommonsLicense,
  licenses,
  ALL_ABBREVIATIONS,
} from "./licenses";
export type { LicenseLocaleType } from "./licenses";

export {
  getCopyString,
  getLicenseCredits,
  figureApa7CopyString,
  podcastSeriesApa7CopyString,
  podcastEpisodeApa7CopyString,
  webpageReferenceApa7CopyString,
} from "./getCopyString";

export { getModelReleaseValue } from "./modelRelease";
