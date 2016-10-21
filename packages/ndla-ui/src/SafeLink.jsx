/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import Link from 'react-router/lib/Link';

// Fallback to normal link if app is missing RouterContext
const SafeLink = (props, context) => {
  if (!context.router) {
    const { to, className } = props;
    return <a href={to} className={className}>{props.children}</a>;
  }

  return <Link {...props}>{props.children}</Link>;
};


SafeLink.propTypes = Link.propTypes;

export default SafeLink;
