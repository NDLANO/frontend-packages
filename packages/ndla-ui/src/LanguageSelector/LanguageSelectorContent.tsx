/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  languages: string[];
  setInfoLocale(arg: string): void;
  infoLocale: string;
};

const LanguageSelectorContent = ({ setInfoLocale, infoLocale, languages }: Props) => {
  const { t, i18n } = useTranslation();

  const getURL = (locale: string, newLocale: string, location: Location) => {
    const { pathname, search } = location;
    const basePath = pathname.startsWith(`/${locale}/`) ? pathname.replace(`/${locale}/`, '/') : pathname;
    return `/${newLocale}${basePath}${search}`;
  };

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
                href={getURL(currentLang, key, window.location)}
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
