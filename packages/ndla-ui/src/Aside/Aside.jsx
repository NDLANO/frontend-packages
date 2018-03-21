/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper({
  prefix: 'c-',
  name: 'aside',
});

const Aside = ({
  children,
  narrowScreen,
  dangerouslySetInnerHTML,
  wideScreen,
}) => {
  const modifiers = {
    narrowScreen,
    wideScreen,
  };

  return (
    <aside {...classes('', modifiers)}>
      <div
        {...classes('content')}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
        {children}
      </div>
    </aside>
  );
};

Aside.propTypes = {
  dangerouslySetInnerHTML: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
  narrowScreen: PropTypes.bool,
  wideScreen: PropTypes.bool,
};

Aside.defaultProps = {
  narrowScreen: null,
  wideScreen: null,
};

export default Aside;
