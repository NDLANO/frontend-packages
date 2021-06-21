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
  setInfoLocale(arg: string): void;
  infoLocale: string;
};

const LanguageSelectorContent: React.FunctionComponent<Props> = ({ setInfoLocale, infoLocale }) => {
  const { t, i18n } = useTranslation();
  const lngs = ['nn', 'nb'];

  return (
    <nav>
      <ul>
        {lngs.map(key => (
          <li key={key}>
            {key === i18n.language ? (
              <span>{t(`languages.${key}`)}</span>
            ) : (
              // eslint-disable-next-line
              <a
                onMouseOver={() => {
                  setInfoLocale(key);
                }}
                onMouseOut={() => {
                  setInfoLocale(i18n.language);
                }}
                onClick={() => {
                  i18n.changeLanguage(key);
                  setInfoLocale(key);
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
