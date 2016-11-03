/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';

// Fallback to normal link if app is missing RouterContext
const SafeLink = (props, context) => {
  if (!context.router) {
    const { to, className } = props;
    const href = typeof to === 'string' ? to : '#';
    return <a href={href} className={className}>{props.children}</a>;
  }

  return <Link {...props}>{props.children}</Link>;
};


SafeLink.propTypes = Link.propTypes;

SafeLink.defaultProps = Link.defaultProps;

SafeLink.contextTypes = {
  router: PropTypes.object,
};

export default SafeLink;
