/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { getLocaleOrDefault, type Locale } from "./types";

// TODO: Try to improve type safety

interface ModelReleaseLocaleInfo {
  yes: string;
  no: string;
  "not-applicable": string;
  "not-set": string;
}

const modelRelease: Record<string, ModelReleaseLocaleInfo> = {
  nb: { yes: "Ja", no: "Nei", "not-applicable": "Ikke relevant", "not-set": "Ikke valgt" },
  nn: { yes: "Ja", no: "Nei", "not-applicable": "Ikkje relevant", "not-set": "Ikkje valgt" },
  en: { yes: "Yes", no: "No", "not-applicable": "Not applicable", "not-set": "Not set" },
};

export const getModelReleaseValue = (modelReleaseValue: string, locale: string | Locale | undefined): string => {
  const surelyLocale = getLocaleOrDefault(locale, "nb");
  switch (modelReleaseValue) {
    case "yes":
      return modelRelease[surelyLocale].yes;
    case "no":
      return modelRelease[surelyLocale].no;
    case "not-applicable":
      return modelRelease[surelyLocale]["not-applicable"];
    case "not-set":
      return modelRelease[surelyLocale]["not-set"];
    default:
      return modelReleaseValue;
  }
};
