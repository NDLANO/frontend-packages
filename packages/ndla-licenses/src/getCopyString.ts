/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Contributor, CopyrightType } from "./contributorTypes";
import { getLicenseByAbbreviation } from "./licenses";

type TranslationFunction = (id: string) => string;

const getFullNamesList = (roles: Contributor[]) => roles.map((creator) => creator.name);

const formatNames = (credits: string[], forcePunctuation: boolean) => {
  const formattedCredits = credits.join(", ");
  return formattedCredits + (forcePunctuation ? ". " : " ");
};

const getInitialsList = (roles: Contributor[]) => {
  return roles.map((creator) => {
    const names = creator.name.split(" ");
    const lastName = names.pop();
    if (!names.length) return lastName + ".";
    const initials = names.map((n) => n[0] + ".").join(" ");
    return lastName + ", " + initials;
  });
};

export const getCreditString = (copyright: Partial<CopyrightType> | undefined) => {
  if (!copyright) return "";

  const { creators, rightsholders, processors } = copyright;

  if (creators?.length && rightsholders?.length) {
    return formatNames(getInitialsList(creators).concat(getFullNamesList(rightsholders)), true);
  }

  if (creators?.length) {
    return formatNames(getInitialsList(creators), false);
  }
  if (rightsholders?.length) {
    return formatNames(getFullNamesList(rightsholders), true);
  }
  if (processors?.length) {
    return formatNames(getInitialsList(processors), false);
  }

  return "";
};

export const getDateString = (locale: string, date?: string) => {
  let dateObj = date ? new Date(date) : new Date();
  if (isNaN(dateObj.getTime())) {
    dateObj = new Date();
  }
  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleDateString(locale === "en" ? "en" : "no", { month: "long" });
  const day = dateObj.getDate();
  return locale === "en" ? `${year}, ${month} ${day}` : `${year}, ${day}. ${month}`;
};

export const getYearString = (date: string) => {
  const dateObj = new Date(date);
  return isNaN(dateObj.getTime()) ? "" : dateObj.getFullYear() + ", ";
};

export const getYearDurationString = (
  start: string | number | undefined,
  end: string | number | undefined,
  t: TranslationFunction,
) => {
  if (!start) return "";
  if (!end) return `(${start}-${t("license.copyText.now")}). `;
  if (start === end) return `(${start}). `;
  return `(${start}-${end}). `;
};

export const getLicenseString = (license: string | undefined, locale: string) => {
  if (license === "PD" || license === "N/A") return "";
  return license ? getLicenseByAbbreviation(license, locale).abbreviation : "";
};

export const figureApa7CopyString = (
  title: string | undefined,
  date: string | undefined,
  src: string | undefined,
  path: string | undefined,
  copyright: Partial<CopyrightType> | undefined,
  license: string | undefined,
  ndlaFrontendDomain: string | undefined,
  t: TranslationFunction,
  locale: string,
): string => {
  const titleString = title ?? t("license.copyText.noTitle");
  const yearString = date ? getYearString(date) : "";
  const creators = getCreditString(copyright);
  const prefix = t("license.copyText.by") + " ";
  const url = `(${path ? ndlaFrontendDomain + path : src}).`;

  const parsedLicense = getLicenseString(license, locale);
  const licenseString = parsedLicense ? ` ${parsedLicense}.` : "";

  // Ex: Tittel, 1914, av Nordmann, O. (https://ndla.no/urn:resource:123). CC BY-SA 4.0.
  return titleString + ", " + yearString + prefix + creators + url + licenseString;
};

export const webpageReferenceApa7CopyString = (
  title: string | undefined,
  src: string | undefined,
  lastUpdated: string | undefined,
  path: string | undefined,
  copyright: Partial<CopyrightType> | undefined,
  locale: string,
  ndlaFrontendDomain: string | undefined,
  t: TranslationFunction,
): string => {
  const creators = getCreditString(copyright);
  const titleString = title ?? t("license.copyText.noTitle");
  const url = `${path ? ndlaFrontendDomain + path : src}`;
  const dateString = `(${getDateString(locale, lastUpdated)}). `;

  // Ex: Nordmann, O. (2020, 11. januar). Tittel. NDLA. https://ndla.no/urn:resource:123
  return creators + dateString + titleString + ". NDLA. " + url;
};
