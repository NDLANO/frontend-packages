/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// License rights
export const rights = {
  BY: "by", // Attribution
  SA: "sa", // Share-alike
  NC: "nc", // Non-commercial
  ND: "nd", // No derivative work
  PD: "pd", // Public Domain
  CC0: "cc0", // Public Domain Dedication
  CC: "cc", // Creative Commons
  COPYRIGHTED: "copyrighted", // Copyrighted
  NA: "n/a", // Not Applicable
  VERSION: "4.0", //Current license version
} as const;

const rightsValues = Object.values(rights);

export const isValidLicenseRight = (right: string): right is (typeof rightsValues)[number] => {
  return rightsValues.includes(right as (typeof rightsValues)[number]);
};
