/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import defined from 'defined';

const findFallbackTranslation = (translations, preferdLocales) => {
  const locale = preferdLocales.find(l =>
    translations.find(t => t.language === l),
  );
  if (!locale && translations.length > 0) {
    return translations[0];
  }

  return translations.find(t => t.language === locale);
};

const createFieldByLanguageFinder = (fieldName, propName) => (
  obj,
  lang,
  withFallback = false,
  preferdLocales = ['nb', 'nn', 'en'],
) => {
  const translations = defined(defined(obj, {})[fieldName], []);
  const translation = defined(
    translations.find(d => d.language === lang),
    withFallback ? findFallbackTranslation(translations, preferdLocales) : {},
    {},
  );
  return translation[defined(propName, fieldName)];
};

export const tagsI18N = createFieldByLanguageFinder('tags');
