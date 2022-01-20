import { TFunction } from 'i18next';
import { LocaleType } from './types';
import { Contributor } from './contributorTypes';

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

const makeCreditCopyString = (roles: Contributor[], locale: LocaleType, t: TFunction) => {
  if (!roles?.length) {
    return '';
  }
  return (
    roles
      .map((creator) => {
        const type = creator.type && t(locale, `${creator.type.toLowerCase()}`);
        return `${type}: ${creator.name?.trim()}`;
      })
      .join(', ') + '. '
  );
};

const getValueOrFallback = <T>(value: T | undefined, fallback: T): T => {
  if (value === undefined) {
    return fallback;
  }
  return value;
};

const makeDateString = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
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
  locale: LocaleType,
  ndlaFrontendDomain: string | undefined,
  t: TFunction,
): string => {
  const credits = getLicenseCredits(copyright);
  const creators = makeCreditCopyString(credits.creators, locale, t);
  const processors = makeCreditCopyString(credits.processors, locale, t);
  const rightsholders = makeCreditCopyString(credits.rightsholders, locale, t);
  const titleString = getValueOrFallback(title, t(locale, 'license.copyText.noTitle')) + ' ';
  const url = path ? ndlaFrontendDomain + path : src;
  const date = makeDateString();

  // Ex: Fotograf: Ola Nordmann. Tittel [Internett]. Opphaver: NTB. Hentet fra: www.ndla.no/urn:resource:123 Lest: 04.05.2021
  return (
    creators +
    processors +
    titleString +
    t(locale, 'license.copyText.internet') +
    rightsholders +
    t(locale, 'license.copyText.downloadedFrom') +
    url +
    ' ' +
    t(locale, 'license.copyText.readDate') +
    date
  );
};
