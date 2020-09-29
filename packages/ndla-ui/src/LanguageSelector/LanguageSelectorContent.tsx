/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { WithInjectedTProps } from '@ndla/i18n/lib/injectT';

type Props = {
  options: {
    [key: string]: {
      name: string;
      url: string;
    };
  };
  currentLanguage: string;
  setInfoLocale(arg: string): void;
  infoLocale: string;
};

const LanguageSelectorContent: React.FunctionComponent<
  WithInjectedTProps<Props>
> = ({ options, currentLanguage, setInfoLocale, infoLocale, t }) => (
  <nav>
    <ul>
      {Object.keys(options).map(key => (
        <li key={key}>
          {key === currentLanguage ? (
            <span>{options[key].name}</span>
          ) : (
            <a
              href={options[key].url}
              onMouseOver={() => {
                setInfoLocale(key);
              }}
              onMouseOut={() => {
                setInfoLocale(currentLanguage);
              }}
              aria-label={t(`changeLanguage.${key}`)}>
              {options[key].name}
            </a>
          )}
        </li>
      ))}
    </ul>
    <p>{t(`currentLanguageText.${infoLocale}`)}</p>
  </nav>
);
export default injectT(LanguageSelectorContent);
