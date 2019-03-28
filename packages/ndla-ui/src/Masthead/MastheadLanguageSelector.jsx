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
      manualOpen: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.setState({
      isOpen: true,
      manualOpen: true,
    });
  }

  render() {
    const { urls, currentLanguage, t } = this.props;
    const { isOpen, manualOpen } = this.state;
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
                  manualOpen: false,
                  isOpen: false,
                });
              },
              clickOutsideDeactivates: true,
              escapeDeactivates: true,
            }}>
            <div
              {...classes('change-language-modal', manualOpen && 'animate-in')}>
              <Button
                link
                onClick={() => {
                  this.setState({
                    isOpen: false,
                    manualOpen: false,
                  });
                }}>
                {t('masthead.menu.close')}
              </Button>
              <nav>
                <ul>
                  {Object.keys(urls).map(key => (
                    <li key={key}>
                      {key === currentLanguage ? (
                        <span {...classes('selected')}>
                          {t(`languages.${key}`)}
                        </span>
                      ) : (
                        <a
                          href={`${urls[key].url}?langselector=true`}
                          aria-label={t('changeLanguage', {
                            language: t(`languages.${key}`),
                          })}
                          {...classes('selected')}>
                          {t(`languages.${key}`)}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                <p>{t(`currentLanguageText.${currentLanguage}`)}</p>
              </nav>
            </div>
          </FocusTrapReact>
        )}
      </div>
    );
  }
}

MastheadLanguageSelector.propTypes = {
  urls: PropTypes.objectOf(PropTypes.string).isRequired,
  currentLanguage: PropTypes.string.isRequired,
  autoOpen: PropTypes.bool,
};

export default injectT(MastheadLanguageSelector);
