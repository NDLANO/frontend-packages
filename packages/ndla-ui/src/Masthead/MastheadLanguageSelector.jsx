/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import FocusTrapReact from 'focus-trap-react';
import { injectT } from '@ndla/i18n';
import Button from '@ndla/Button';

const classes = new BEMHelper({
  name: 'masthead',
  prefix: 'c-',
});

class MastheadLanguageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.autoOpen,
      infoLocale: props.currentLanguage,
    };
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.setState({
      isOpen: true,
    });
  }

  toggleLanguage(lang) {
    const infoLocale = lang || this.props.currentLanguage;
    this.setState({
      infoLocale,
    });
  }

  render() {
    const { options, currentLanguage, t } = this.props;
    const { isOpen, infoLocale } = this.state;
    return (
      <div {...classes('change-language-wrapper')}>
        <Button link onClick={this.handleOpen}>
          Change language
        </Button>
        {isOpen && (
          <FocusTrapReact
            active
            focusTrapOptions={{
              onDeactivate: () => {
                this.setState({
                  isOpen: false,
                });
              },
              clickOutsideDeactivates: true,
              escapeDeactivates: true,
            }}>
            <div {...classes('change-language-modal', isOpen && 'animate-in')}>
              <Button
                link
                onClick={() => {
                  this.setState({
                    isOpen: false,
                  });
                }}>
                {t('masthead.menu.close')}
              </Button>
              <nav>
                <ul>
                  {Object.keys(options).map(key => (
                    <li key={key}>
                      {key === currentLanguage ? (
                        <span {...classes('selected')}>
                          {options[key].name}
                        </span>
                      ) : (
                        <a
                          href={options[key].url}
                          onMouseOver={() => {
                            this.toggleLanguage(key);
                          }}
                          onMouseOut={() => {
                            this.toggleLanguage();
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
  }
}

MastheadLanguageSelector.propTypes = {
  options: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
  currentLanguage: PropTypes.string.isRequired,
};

export default injectT(MastheadLanguageSelector);
