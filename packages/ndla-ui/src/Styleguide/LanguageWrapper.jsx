/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IntlProvider, { phrases } from 'ndla-i18n';

export const LanguageContext = React.createContext();

class LanguageWrapperProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'nb',
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(lang) {
    this.setState({
      lang,
    });
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{ lang: this.state.lang, changeLanguage: this.changeLanguage }}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

LanguageWrapperProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const LanguageWrapper = storyFn => (
  <LanguageWrapperProvider>
    <LanguageContext.Consumer>
      {context => (
        <IntlProvider locale={context.lang} messages={phrases}>
          {storyFn()}
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  </LanguageWrapperProvider>
);

export default LanguageWrapper;
