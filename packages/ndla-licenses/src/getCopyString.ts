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

const creditString = (roles: Contributor[], t: TranslationFunction) => {
  if (!roles?.length) {
    return '';
  }
  const credits = roles
    .map((creator) => {
      const [lastName, ...names] = creator.name.split(' ').reverse();
      const initials = names.length ? ', ' + names.map((name) => name[0] + '.') : '.';
      return lastName + initials;
    })
    .join(', ');

  return `${t('license.copyText.by')} ${credits} `;
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

export const inlineFigureApa7CopyString = (
  title: string | undefined,
  src: string | undefined,
  path: string | undefined,
  copyright: Partial<CopyrightType> | undefined,
  ndlaFrontendDomain: string | undefined,
  t: TranslationFunction,
): string => {
  const credits = getLicenseCredits(copyright);
  const creators = creditString([...credits.creators, ...credits.processors, ...credits.rightsholders], t);
  const titleString = getValueOrFallback(title, t('license.copyText.noTitle')) + ', ';
  const url = `(${path ? ndlaFrontendDomain + path : src}). `;
  const license = copyright?.license?.license ? copyright.license.license + '.' : '';

  // Ex: Tittel, <år>, av Nordmann, O. NDLA. (https://ndla.no/urn:resource:123). CC-BY-SA-4.0.
  return titleString + creators + 'NDLA. ' + url + license;
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
  const date = makeDateString();

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
