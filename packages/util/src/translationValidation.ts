/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const getAllKeys = (o: object, prev: string = ""): string[] => {
  const keys: string[] = [];
  Object.entries(o).forEach(([key, value]: [string, unknown]) => {
    const path = prev + (prev ? "." : "") + key;
    if (typeof value === "object" && value !== null) {
      const nested = getAllKeys(value, path);
      keys.push(...nested);
    } else {
      keys.push(path);
    }
  });

  return keys;
};

const getUniqueKeys = (o: object): string[] => {
  const allKeys = getAllKeys(o);
  const uniqueKeys = new Set(allKeys);
  return Array.from(uniqueKeys.values());
};

const logTable = (langs: { languageName: string; missingKeys: string[] }[]) => {
  const table: {}[] = [];
  langs.forEach((l) => {
    l.missingKeys.forEach((key) => table.push({ language: l.languageName, missing: key }));
  });
  // oxlint-disable-next-line no-console
  console.table(table);
};

const getMissingLanguages = (languages: { languageName: string; translationObject: object }[]) => {
  const objs = languages.map((langObj) => {
    const keysForLanguage = getUniqueKeys(langObj.translationObject);
    return { ...langObj, keysForLanguage };
  });

  const everyKey = Array.from(new Set(objs.flatMap((langObj) => langObj.keysForLanguage)).values());

  return objs.map((lang) => {
    const missingKeys = everyKey.filter((x) => !lang.keysForLanguage.includes(x));
    return { ...lang, missingKeys };
  });
};

export const validateTranslationFiles = (
  languages: { languageName: string; translationObject: object }[],
  logging: "disabled" | "only-on-error" | "always",
): boolean => {
  const langs = getMissingLanguages(languages);
  const anyError = langs.some((l) => l.missingKeys.length > 0);
  if ((logging === "only-on-error" && anyError) || logging === "always") logTable(langs);
  return anyError;
};
