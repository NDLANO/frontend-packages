/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';

type Props = {
  setInfoLocale(arg: string): void;
  infoLocale: string;
};
const languageButton = css`
  background: transparent;
  color: #184673;
  width: 100%;
  padding: 13px 65px;
  justify-content: center;
  border: none;
`;

const LanguageSelectorContent = ({ setInfoLocale, infoLocale }: Props) => {
  const { t, i18n } = useTranslation();
  const languages = i18n.options.supportedLngs as string[];

  //CIMODE is used for testing to consistently return the translation key instead of the variant value
  let i = languages.indexOf('cimode');
  if (i > -1) {
    languages.splice(i);
  }
  return (
    <nav>
      <ul>
        {languages.map(key => (
          <li key={key}>
            {key === i18n.language ? (
              <span>{t(`languages.${key}`)}</span>
            ) : (
              // eslint-disable-next-line
              <button
                css={languageButton}
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
              </button>
            )}
          </li>
        ))}
      </ul>
      <p>{t(`currentLanguageText.${infoLocale}`)}</p>
    </nav>
  );
};
export default LanguageSelectorContent;
