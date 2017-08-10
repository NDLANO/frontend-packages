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
import { Sad } from '../icons';
import SafeLink from '../common/SafeLink';

const classes = new BEMHelper({
  name: 'error-message',
  prefix: 'c-',
});

export const ErrorMessage = ({ children, messages, toBack }) =>
  <div {...classes()}>
    <div>
      <Sad {...classes('icon')} />
      <h1>
        {messages.title}
      </h1>
      <p {...classes('description')}>
        {messages.description}
      </p>
      <SafeLink to={toBack()} {...classes('back-link')}>
        {messages.back}
      </SafeLink>
      <SafeLink to="/" {...classes('front-link')}>
        {messages.goToFrontPage}
      </SafeLink>
      {children}
    </div>
  </div>;

ErrorMessage.propTypes = {
  children: PropTypes.node,
  toBack: PropTypes.func.isRequired,
  messages: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    goToFrontPage: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired,
  }),
};

export default ErrorMessage;
