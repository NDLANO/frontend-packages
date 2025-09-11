/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { getLocaleOrDefault, type Locale } from "./types";

type ModelRelease = "yes" | "no" | "not-applicable" | "not-set";

const modelRelease: Record<ModelRelease, Record<Locale, string>> = {
  yes: { nb: "Ja", nn: "Ja", en: "Yes" },
  no: { nb: "Nei", nn: "Nei", en: "No" },
  "not-applicable": { nb: "Ikke relevant", nn: "Ikkje relevant", en: "Not applicable" },
  "not-set": { nb: "Ikke valg", nn: "Ikkje valgt", en: "Not set" },
};

export const getModelReleaseValue = (modelReleaseValue: string, locale: string | Locale | undefined): string => {
  return modelRelease[modelReleaseValue as ModelRelease]?.[getLocaleOrDefault(locale, "nb")] ?? modelReleaseValue;
};
