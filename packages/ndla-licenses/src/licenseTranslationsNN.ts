/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { rights, type LicenseRight } from "./licenseRights";

export const licenseRights = {
  [rights.BY]: {
    title: "Namngiving",
    description: "Du må alltid oppgi kven som har laga innhaldet.",
  },
  [rights.SA]: {
    title: "Del på same vilkår",
    description: "Du kan berre dele innhaldet med same lisens som det opphavlege innhaldet.",
  },
  [rights.NC]: {
    title: "Ikkje-kommersiell",
    description: "Du kan ikkje tene pengar på bruk av dette innhaldet.",
  },
  [rights.ND]: {
    title: "Ingen tilarbeiding",
    description: "Du kan ikkje endre innhaldet.",
  },
  [rights.PD]: {
    title: "Offentleg eige",
    description: "Innhaldet er så gammalt at du kan bruke det som du vil.",
  },
  [rights.CC0]: {
    title: "Gjeve til fellesskapet",
    description: "Du kan bruke innhaldet fritt.",
  },
  [rights.COPYRIGHTED]: {
    title: "Opphavsrett",
    description:
      "Det er berre den som har laga innhaldet som kan endre, publisera og gje andre rett til å bruke innhaldet.",
  },
  [rights.CC]: {
    title: "Creative Commons",
    description: "Denne lisensen gir deg rett til å dele og bruke dette innhaldet på visse vilkår:",
  },
  [rights.NA]: {
    title: "N/A - ikkje relevant",
    description: "Dette merket er meint for innhald som ikkje treng lisens.",
  },
} satisfies Record<LicenseRight, object>;
