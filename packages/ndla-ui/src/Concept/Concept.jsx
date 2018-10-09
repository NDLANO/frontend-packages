/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { createUniversalPortal } from '../utils/createUniversalPortal';
import ConceptDialog from './ConceptDialog';

const classes = new BEMHelper({
  name: 'concept',
  prefix: 'c-',
});

const Concept = ({ id, messages, children, ...rest }) => (
  <span {...classes('item')} id={id}>
    <button type="button" aria-label={messages.ariaLabel} {...classes('link')}>
      {children}
    </button>
    {createUniversalPortal(
      <ConceptDialog {...rest} id={id} messages={messages} />,
      'body',
    )}
  </span>
);

Concept.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  source: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  messages: PropTypes.shape({
    ariaLabel: PropTypes.string.isRequired,
    close: PropTypes.string.isRequired,
  }),
  license: PropTypes.string,
  children: PropTypes.string,
  linkTo: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
};

export default Concept;
