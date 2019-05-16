/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import FocusTrapReact from 'focus-trap-react';
import { injectT } from '@ndla/i18n';
import { css } from '@emotion/core';
import Button from '@ndla/button';

const classes = new BEMHelper({
  name: 'masthead',
  prefix: 'c-',
});

const cssWhiteButton = css`
  color: #fff;
`;

const MastheadLanguageSelector = ({
  ndlaFilm,
  options,
  currentLanguage,
  t,
}) => {
  const [infoLocale, setInfoLocale] = useState(currentLanguage);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div {...classes('change-language-wrapper')}>
      <Button
        css={ndlaFilm && cssWhiteButton}
        link
        onClick={() => setIsOpen(true)}>
        Change language
      </Button>
      {isOpen && (
        <FocusTrapReact
          active
          focusTrapOptions={{
            onDeactivate: () => {
              setIsOpen(false);
            },
            clickOutsideDeactivates: true,
            escapeDeactivates: true,
          }}>
          <div {...classes('change-language-modal', isOpen && 'animate-in')}>
            <Button
              link
              onClick={() => {
                setIsOpen(false);
              }}>
              {t('masthead.menu.close')}
            </Button>
            <nav>
              <ul>
                {Object.keys(options).map(key => (
                  <li key={key}>
                    {key === currentLanguage ? (
                      <span {...classes('selected')}>{options[key].name}</span>
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
          </div>
        </FocusTrapReact>
      )}
    </div>
  );
};

MastheadLanguageSelector.propTypes = {
  options: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
  currentLanguage: PropTypes.string.isRequired,
  ndlaFilm: PropTypes.bool,
};

export default injectT(MastheadLanguageSelector);
