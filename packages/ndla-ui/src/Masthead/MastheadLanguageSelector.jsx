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
import Button from '@ndla/button';
import ChevronDown from '@ndla/icons/lib/common/ChevronDown';

const classes = new BEMHelper({
  name: 'masthead',
  prefix: 'c-',
});

const MastheadLanguageSelector = ({
  options,
  currentLanguage,
  outline,
  center,
  inverted,
  t,
}) => {
  const [infoLocale, setInfoLocale] = useState(currentLanguage);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...classes('change-language-wrapper')}>
      <Button
        ghostPillOutline={outline && !inverted}
        ghostPill={!outline && !inverted}
        ghostPillOutlineInverted={outline && inverted}
        ghostPillInverted={!outline && inverted}
        onClick={() => setIsOpen(true)}>
        <span>{t(`languages.${infoLocale}`)}</span>
        <ChevronDown />
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
          <div
            {...classes('change-language-modal', [
              isOpen && 'animate-in',
              center && 'center',
            ])}>
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
  inverted: PropTypes.bool,
};

export default injectT(MastheadLanguageSelector);
