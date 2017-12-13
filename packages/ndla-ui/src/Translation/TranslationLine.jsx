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

const classes = new BEMHelper({
  name: 'translation',
  prefix: 'c-',
});

const TranslationLine = ({ children, lang }) => (
  <div {...classes('line')}>
    {children && <div {...classes('line-body')}>{children}</div>}
    {lang && <div {...classes('line-lang')}>{lang}</div>}
  </div>
);

TranslationLine.propTypes = {
  children: PropTypes.node,
  lang: PropTypes.string,
};

export default TranslationLine;
