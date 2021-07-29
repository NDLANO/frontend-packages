/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

type Props = {
  languages: string[];
  setInfoLocale(arg: string): void;
  infoLocale: string;
};

const LanguageSelectorContent: React.FunctionComponent<Props> = ({ setInfoLocale, infoLocale, languages }) => {
  const paths: string[] = window.location.pathname.split('/');
  const { search } = window.location;

  const getURL = (language: string) => {
    const basename = languages.includes(paths[1] as string) ? `${paths[1]}` : '';
    if (!(basename === '' && language === 'nb')) {
      return `/${language}/${search}`;
    }
  };

  // @ts-ignore
  const t = global.t;
  // @ts-ignore
  const i18n = global.i18test;
  const currentLang = i18n.language;

  return (
    <nav>
      <ul>
        {languages.map((key: string) => (
          <li key={key}>
            {key === currentLang ? (
              <span>{t(`languages.${key}`)}</span>
            ) : (
              <a
                href={getURL(key)}
                onMouseOver={() => {
                  setInfoLocale(key);
                }}
                onMouseOut={() => {
                  setInfoLocale(currentLang);
                }}
                aria-label={t(`changeLanguage.${key}`)}>
                {t(`languages.${key}`)}
              </a>
            )}
          </li>
        ))}
      </ul>
      <p>{t(`currentLanguageText.${infoLocale}`)}</p>
    </nav>
  );
};

export default LanguageSelectorContent;
