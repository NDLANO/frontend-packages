/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BEMHelper from 'react-bem-helper';
import { injectT } from '@ndla/i18n';
import { DisplayOnPageYOffset } from '../Animation';

const classes = new BEMHelper({
  name: 'masthead',
  prefix: 'c-',
});

export const MastheadItem = ({ children, className, left, right }) => {
  const itemClassNames = classNames(
    { [classes('left').className]: left },
    { [classes('right').className]: right },
    className,
  );

  return <div className={itemClassNames}>{children}</div>;
};

MastheadItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  right: PropTypes.bool,
  left: PropTypes.bool,
};

MastheadItem.defaultProps = {
  right: false,
  left: false,
};

const MastheadInfo = ({ children }) => (
  <div {...classes('info')}>
    <div {...classes('info-content')}>{children}</div>
  </div>
);

MastheadInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Masthead = ({
  children,
  fixed,
  infoContent,
  showLoaderWhenNeeded,
  ndlaFilm,
  skipToMainContentId,
  t,
}) => (
  <>
    {skipToMainContentId && (
      <a tabIndex={0} href={`#${skipToMainContentId}`} {...classes('skip-to-main-content')}>
        {t('masthead.skipToContent')}
      </a>
    )}
    <div {...classes('placeholder', { infoContent })} />
    <div {...classes('', { fixed, infoContent, showLoaderWhenNeeded, ndlaFilm })}>
      {infoContent && (
        <DisplayOnPageYOffset yOffsetMin={0} yOffsetMax={90}>
          <MastheadInfo>{infoContent}</MastheadInfo>
        </DisplayOnPageYOffset>
      )}
      <div className={`u-1/1 ${classes('content').className}`}>{children}</div>
    </div>
  </>
);

Masthead.propTypes = {
  children: PropTypes.node,
  fixed: PropTypes.bool,
  showLoaderWhenNeeded: PropTypes.bool,
  infoContent: PropTypes.node,
  ndlaFilm: PropTypes.bool,
  skipToMainContentId: PropTypes.string,
};

Masthead.defaultProps = {
  showLoaderWhenNeeded: true,
};

export default injectT(Masthead);
