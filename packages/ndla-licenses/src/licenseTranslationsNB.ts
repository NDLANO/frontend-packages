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
    title: "Navngivelse",
    description: "Du må alltid oppgi hvem som har laget innholdet.",
  },
  [rights.SA]: {
    title: "Del på samme vilkår",
    description: "Du kan bare dele innholdet med samme lisens som det opprinnelige innholdet.",
  },
  [rights.NC]: {
    title: "Ikke-kommersiell",
    description: "Du kan ikke tjene penger på bruk av dette innholdet.",
  },
  [rights.ND]: {
    title: "Ingen bearbeiding",
    description: "Du kan ikke endre innholdet.",
  },
  [rights.PD]: {
    title: "Offentlig eie",
    description: "Innholdet er så gammelt at du kan bruke det som du vil.",
  },
  [rights.CC0]: {
    title: "Gitt til fellesskapet",
    description: "Du kan bruke innholdet fritt.",
  },
  [rights.COPYRIGHTED]: {
    title: "Opphavsrett",
    description:
      "Det er bare den som har laget innholdet som kan endre, publisere og gi andre rett til å bruke innholdet.",
  },
  [rights.CC]: {
    title: "Creative Commons",
    description: "Denne lisensen gir deg rett til å dele og bruke dette innholdet på visse vilkår:",
  },
  [rights.NA]: {
    title: "N/A - ikke relevant",
    description: "Dette merket er ment for innhold som ikke trenger lisens.",
  },
} satisfies Record<LicenseRight, object>;
