/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'translation',
  prefix: 'c-',
});

const TranslationLine = ({ children, lang, langName, isTerm }) => {
  const content = (
    <Fragment>
      <div {...classes('line-body')} lang={lang}>
        {children}
      </div>
      <div {...classes('line-lang')}>{langName}</div>
    </Fragment>
  );

  if (isTerm) {
    return <dt {...classes('line')}>{content}</dt>;
  }

  return <dd {...classes('line')}>{content}</dd>;
};

TranslationLine.propTypes = {
  isTerm: PropTypes.bool,
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
  langName: PropTypes.string.isRequired,
};

TranslationLine.defaultProps = {
  isTerm: false,
};

export default TranslationLine;
