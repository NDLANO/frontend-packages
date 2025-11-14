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

export const getCreditString = (
  copyright: Partial<CopyrightType> | undefined,
  config: {
    byPrefix?: boolean;
    withRole?: boolean;
    combineCreatorsAndRightsholders?: boolean;
  },
  t: TranslationFunction,
) => {
  const formatNames = (credits: string[], forcePunctuation?: boolean) => {
    const formattedCredits = credits.join(", ");

    const prefix = config.byPrefix ? t("license.copyText.by") + " " : "";
    const punctuation = forcePunctuation || config.withRole ? "." : "";
    return prefix + formattedCredits + punctuation + " ";
  };
  const getInitialsList = (roles: Contributor[]) => {
    const credits = roles.map((creator) => {
      const [lastName, ...names] = creator.name.split(" ").reverse();
      const initials = names.length
        ? ", " +
          [...names]
            .reverse()
            .map((name) => name[0] + ".")
            .join(" ")
        : ".";
      const role = config.withRole && creator.type ? ` (${t(creator.type.toLowerCase())})` : "";
      return lastName + initials + role;
    });
    return credits;
  };

  const getFullNamesList = (roles: Contributor[]) => {
    const credits = roles.map((creator) => {
      const role = config.withRole && creator.type ? ` (${t(creator.type.toLowerCase())})` : "";
      return creator.name + role;
    });
    return credits;
  };

  if (!copyright) {
    return "";
  }
  const { creators, rightsholders, processors } = copyright;

  if (config.combineCreatorsAndRightsholders && creators?.length && rightsholders?.length) {
    const credits = [...getInitialsList(creators), ...getFullNamesList(rightsholders)];
    return formatNames(credits, true);
  }

  if (creators?.length) {
    const credits = getInitialsList(creators);
    return formatNames(credits);
  }
  if (rightsholders?.length) {
    const credits = getFullNamesList(rightsholders);
    return formatNames(credits, true);
  }
  if (processors?.length) {
    const credits = getInitialsList(processors);
    return formatNames(credits);
  }

  return "";
};

const getValueOrFallback = <T>(value: T | undefined, fallback: T): T => {
  if (value === undefined) {
    return fallback;
  }
  return value;
};

export const getDateString = (locale: string, date?: string) => {
  const formatDate = (dateObject: Date, locale: string) => {
    if (locale === "en") {
      const year = dateObject.getFullYear();
      const month = dateObject.toLocaleDateString(locale, { month: "long" });
      const day = dateObject.getDate();
      return `${year}, ${month} ${day}`;
    }
    const year = dateObject.getFullYear();
    const month = dateObject.toLocaleDateString("no", { month: "long" });
    const day = dateObject.getDate();
    return `${year}, ${day}. ${month}`;
  };

  if (date) {
    const dateObject = new Date(date);
    if (dateObject && !isNaN(dateObject.getTime())) {
      return formatDate(dateObject, locale);
    }
  }
  return formatDate(new Date(), locale);
};

export const getYearString = (date: string) => {
  if (date) {
    const dateObject = new Date(date);
    if (dateObject && !isNaN(dateObject.getTime())) {
      return dateObject.getFullYear() + ", ";
    }
  }
  return "";
};

export const getYearDurationString = (
  start: string | number | undefined,
  end: string | number | undefined,
  t: TranslationFunction,
) => {
  if (!start) {
    return "";
  }
  if (!end) {
    return `(${start}-${t("license.copyText.now")}). `;
  }
  if (start === end) {
    return `(${start}). `;
  }
  return `(${start}-${end}). `;
};

export const getLicenseString = (license: string | undefined, locale: string) => {
  if (license === "PD" || license === "N/A") {
    return "";
  }

  const licenseAbbreviation = license && getLicenseByAbbreviation(license, locale).abbreviation;

  if (licenseAbbreviation?.startsWith("CC ")) {
    return `${licenseAbbreviation}`;
  }

  return licenseAbbreviation ?? "";
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
  const titleString = getValueOrFallback(title, t("license.copyText.noTitle")) + ", ";
  const yearString = date ? getYearString(date) : "";
  const creators = getCreditString(copyright, { byPrefix: true, combineCreatorsAndRightsholders: true }, t);
  const url = `(${path ? ndlaFrontendDomain + path : src}).`;

  const parsedLicense = getLicenseString(license, locale);
  const licenseString = parsedLicense ? ` ${parsedLicense}.` : "";

  // Ex: Tittel, 1914, av Nordmann, O. (https://ndla.no/urn:resource:123). CC BY-SA 4.0.
  return titleString + yearString + creators + url + licenseString;
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
  const creators = getCreditString(copyright, { combineCreatorsAndRightsholders: true }, t);
  const titleString = getValueOrFallback(title, t("license.copyText.noTitle")) + ". ";
  const url = `${path ? ndlaFrontendDomain + path : src}`;
  const dateString = `(${getDateString(locale, lastUpdated)}). `;

  // Ex: Nordmann, O. (2020, 11. januar). Tittel. NDLA. https://ndla.no/urn:resource:123
  return creators + dateString + titleString + "NDLA. " + url;
};

export const podcastSeriesApa7CopyString = (
  title: string | undefined,
  startYear: string | number | undefined,
  endYear: string | number | undefined,
  seriesId: string | number,
  copyright: Partial<CopyrightType> | undefined,
  ndlaFrontendDomain: string | undefined,
  t: TranslationFunction,
) => {
  const creators = getCreditString(copyright, { withRole: true, combineCreatorsAndRightsholders: true }, t);
  const titleString = getValueOrFallback(title, t("license.copyText.noTitle")) + " ";
  const url = `${ndlaFrontendDomain}/podkast/${seriesId}`;
  const yearString = getYearDurationString(startYear, endYear, t);
  const metaString = `[Audio ${t("license.copyText.podcast")}]. `;

  // Ex: Nordmann, O. (Rolle). (2020, 11. januar). Tittel [Audio podkast]. https://ndla.no/podkast/1
  return creators + yearString + titleString + metaString + "NDLA. " + url;
};

export const podcastEpisodeApa7CopyString = (
  title: string | undefined,
  date: string | undefined,
  seriesId: string | number,
  episodeId: string | number,
  copyright: Partial<CopyrightType> | undefined,
  locale: string,
  ndlaFrontendDomain: string | undefined,
  t: TranslationFunction,
) => {
  const creators = getCreditString(copyright, { withRole: true, combineCreatorsAndRightsholders: true }, t);
  const titleString = getValueOrFallback(title, t("license.copyText.noTitle")) + " ";
  const url = `${ndlaFrontendDomain}/podkast/${seriesId}#episode-${episodeId}`;
  const dateString = `(${getDateString(locale, date)}). `;
  const metaString = `[Audio ${t("license.copyText.podcast")} episode]. `;

  // Ex: Nordmann, O. (Rolle). (2020, 11. januar). Tittel [Audio podkast episode]. https://ndla.no/podkast/1#episode-14
  return creators + dateString + titleString + metaString + "NDLA. " + url;
};
