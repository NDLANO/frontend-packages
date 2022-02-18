import { Contributor, CopyrightType } from './contributorTypes';

export const getLicenseCredits = (copyright?: {
  creators?: Contributor[];
  rightsholders?: Contributor[];
  processors?: Contributor[];
}) => {
  return {
    creators: copyright?.creators ?? [],
    rightsholders: copyright?.rightsholders ?? [],
    processors: copyright?.processors ?? [],
  };
};

type TranslationFunction = (id: string) => string;

const _oldMakeCreditCopyString = (roles: Contributor[], t: TranslationFunction) => {
  if (!roles?.length) {
    return '';
  }
  return (
    roles
      .map((creator) => {
        const type = creator.type && t(`${creator.type.toLowerCase()}`);
        return `${type}: ${creator.name?.trim()}`;
      })
      .join(', ') + '. '
  );
};

export const creditString = (roles: Contributor[], byPrefix: boolean, withRole: boolean, t: TranslationFunction) => {
  if (!roles?.length) {
    return '';
  }
  const credits = roles.map((creator) => {
    const [lastName, ...names] = creator.name.split(' ').reverse();
    const initials = names.length ? ', ' + names.map((name) => name[0] + '.') : '.';
    const role = withRole && creator.type ? ` (${t(creator.type.toLowerCase())})` : '';
    return lastName + initials + role;
  });

  const lastCredit = credits.pop();

  const formattedCredits = credits.length ? credits.join(', ') + ' & ' + lastCredit : lastCredit;

  const prefix = byPrefix ? t('license.copyText.by') + ' ' : '';
  const punctuation = withRole ? '.' : '';
  return prefix + formattedCredits + punctuation + ' ';
};

const getValueOrFallback = <T>(value: T | undefined, fallback: T): T => {
  if (value === undefined) {
    return fallback;
  }
  return value;
};

const makeSimpleDateString = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
};

const makeDateString = (locale: string, date?: string) => {
  const getLocale = (locale?: string) => {
    if (locale === 'en') {
      return 'EN-us';
    } else if (locale === 'nn') {
      return 'NO-nn';
    }
    return 'NO-nb';
  };

  const formatDate = (dateObject: Date, locale: string) => {
    if (locale === 'en') {
      const year = dateObject.getFullYear();
      const month = dateObject.toLocaleDateString(getLocale(locale), { month: 'long' });
      const day = dateObject.getDate();
      return `${year}, ${month} ${day}`;
    }
    const year = dateObject.getFullYear();
    const month = dateObject.toLocaleDateString(getLocale(locale), { month: 'long' });
    const day = dateObject.getDate();
    return `${year}, ${day}. ${month}`;
  };

  if (date) {
    const dateObject = new Date(date);
    if (dateObject) {
      return formatDate(dateObject, locale);
    }
  }
  return new Date().toLocaleDateString(getLocale(locale), { year: 'numeric', month: 'long', day: 'numeric' });
};

const makeYearString = (start: string | number | undefined, end: string | number | undefined) => {
  if (!start) {
    return '';
  }
  if (!end || start === end) {
    return `(${start}). `;
  }
  return `(${start}-${end}). `;
};

export const figureApa7CopyString = (
  title: string | undefined,
  year: number | string | undefined,
  src: string | undefined,
  path: string | undefined,
  copyright: Partial<CopyrightType> | undefined,
  ndlaFrontendDomain: string | undefined,
  t: TranslationFunction,
): string => {
  const titleString = getValueOrFallback(title, t('license.copyText.noTitle')) + ', ';
  const yearString = year ? `${year}, ` : '';
  const creators = creditString(copyright?.creators || copyright?.rightsholders || [], true, false, t);
  const url = `(${path ? ndlaFrontendDomain + path : src}). `;
  const license = copyright?.license?.license ? copyright.license.license + '.' : '';

  // Ex: Tittel, 1914, av Nordmann, O. NDLA. (https://ndla.no/urn:resource:123). CC-BY-SA-4.0.
  return titleString + yearString + creators + 'NDLA. ' + url + license;
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
  const creators = creditString(copyright?.creators || copyright?.rightsholders || [], false, false, t);
  const titleString = getValueOrFallback(title, t('license.copyText.noTitle')) + '. ';
  const url = `${path ? ndlaFrontendDomain + path : src}`;
  const dateString = `(${makeDateString(locale, lastUpdated)}). `;

  // Ex: Nordmann, O. (2020, 11. januar). Tittel. NDLA. https://ndla.no/urn:resource:123
  return creators + dateString + titleString + 'NDLA. ' + url;
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
  const creators = creditString(copyright?.creators || copyright?.rightsholders || [], false, true, t);
  const titleString = getValueOrFallback(title, t('license.copyText.noTitle')) + ' ';
  const url = `${ndlaFrontendDomain}/podkast/${seriesId}`;
  const yearString = makeYearString(startYear, endYear);
  const metaString = `[Audio ${t('license.copyText.podcast')}]. `;

  // Ex: Nordmann, O. (Rolle). (2020, 11. januar). Tittel [Audio podkast]. https://ndla.no/podkast/1
  return creators + yearString + titleString + metaString + 'NDLA. ' + url;
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
  const creators = creditString(copyright?.creators || copyright?.rightsholders || [], false, true, t);
  const titleString = getValueOrFallback(title, t('license.copyText.noTitle')) + ' ';
  const url = `${ndlaFrontendDomain}/podkast/${seriesId}#episode-${episodeId}`;
  const dateString = `(${makeDateString(locale, date)}). `;
  const metaString = `[Audio ${t('license.copyText.podcast')} episode]. `;

  // Ex: Nordmann, O. (Rolle). (2020, 11. januar). Tittel [Audio podkast episode]. https://ndla.no/podkast/1#episode-14
  return creators + dateString + titleString + metaString + 'NDLA. ' + url;
};

export const getCopyString = (
  title: string | undefined,
  src: string | undefined,
  path: string | undefined,
  copyright:
    | {
        creators?: Contributor[];
        rightsholders?: Contributor[];
        processors?: Contributor[];
      }
    | undefined,
  ndlaFrontendDomain: string | undefined,
  t: TranslationFunction,
): string => {
  const credits = getLicenseCredits(copyright);
  const creators = _oldMakeCreditCopyString(credits.creators, t);
  const processors = _oldMakeCreditCopyString(credits.processors, t);
  const rightsholders = _oldMakeCreditCopyString(credits.rightsholders, t);
  const titleString = getValueOrFallback(title, t('license.copyText.noTitle')) + ' ';
  const url = (path ? ndlaFrontendDomain + path : src) + ' ';
  const date = makeSimpleDateString();

  // Ex: Fotograf: Ola Nordmann. Tittel [Internett]. Opphaver: NTB. Hentet fra: www.ndla.no/urn:resource:123 Lest: 04.05.2021
  return (
    creators +
    processors +
    titleString +
    t('license.copyText.internet') +
    rightsholders +
    t('license.copyText.downloadedFrom') +
    url +
    t('license.copyText.readDate') +
    date
  );
};
