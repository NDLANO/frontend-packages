/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import SafeLink from '../common/SafeLink';
import { SearchField } from '../Search';

const classes = new BEMHelper({
  name: 'error-message',
  prefix: 'c-',
});

export const ErrorMessage = ({ children, messages }) => (
  <div {...classes()}>
    <div>
      <p>[illustrasjon]</p>
      <h1>{messages.title}</h1>
      <p {...classes('description')}>{messages.description}</p>
      <h3>{messages.linksTitle && messages.linksTitle}</h3>
      <SearchField />
      {messages.back &&
        typeof window !== 'undefined' &&
        window.history.length > 1 && (
          <SafeLink
            to={`/#${encodeURI(messages.back)}`}
            onClick={() => window.history.back()}
            {...classes('back-link')}>
            {messages.back}
          </SafeLink>
        )}
      {messages.goToFrontPage && (
        <div>
          <SafeLink to="/" {...classes('front-link')}>
            {messages.goToFrontPage}
          </SafeLink>
        </div>
      )}
      {children}
    </div>
  </div>
);

ErrorMessage.propTypes = {
  children: PropTypes.node,
  messages: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    goToFrontPage: PropTypes.string,
    back: PropTypes.string,
  }),
};

export default ErrorMessage;
