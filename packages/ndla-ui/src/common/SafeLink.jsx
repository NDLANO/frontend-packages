/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Fallback to normal link if app is missing RouterContext
const SafeLink = (props, context) => {
  if (!context.router) {
    const { to, onClick, className } = props;
    const href = typeof to === 'string' ? to : '#';
    return <a href={href} onClick={onClick} className={className}>{props.children}</a>;
  }

  return <Link {...props}>{props.children}</Link>;
};


SafeLink.propTypes = Link.propTypes;

SafeLink.defaultProps = Link.defaultProps;

SafeLink.contextTypes = {
  router: PropTypes.object,
};

export default SafeLink;
