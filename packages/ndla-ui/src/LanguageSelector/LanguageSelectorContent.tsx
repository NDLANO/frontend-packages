/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { colors } from '@ndla/core';

type Props = {
  currentLanguage: string;
  setInfoLocale(arg: string): void;
  infoLocale: string;
};

const LanguageSelectorContent = ({ setInfoLocale, infoLocale }: Props) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const languages = (i18n.options.supportedLngs as string[]).filter((l) => !l.includes('cimode'));

  const StyledSelectedButton = styled.button`
    background: ${colors.brand.primary};
    color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const StyledButton = styled.button`
    background: transparent;
    color: ${colors.brand.dark};
    width: 100%;
    display: block;
    cursor: pointer;
    box-shadow: none;
    transition: background 200ms ease;
    &:hover,
    &:focus {
      background: ${colors.brand.tertiary};
    }
  `;

  return (
    <nav>
      <ul>
        {languages.map((key: string) => (
          <li key={key}>
            {key === currentLang ? (
              <StyledSelectedButton>{t(`languages.${key}`)}</StyledSelectedButton>
            ) : (
              <StyledButton
                onClick={() => i18n.changeLanguage(key)}
                onMouseOver={() => {
                  setInfoLocale(key);
                }}
                onMouseOut={() => {
                  setInfoLocale(currentLang);
                }}
                aria-label={t(`changeLanguage.${key}`)}>
                {t(`languages.${key}`)}
              </StyledButton>
            )}
          </li>
        ))}
      </ul>
      <p>{t(`currentLanguageText.${infoLocale}`)}</p>
    </nav>
  );
};
export default LanguageSelectorContent;
