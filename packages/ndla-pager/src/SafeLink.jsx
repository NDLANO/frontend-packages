/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import isString from 'lodash/isString';

const isExternalLink = to =>
  to &&
  isString(to) &&
  (to.startsWith('https://') || to.startsWith('https://'));

export const isOldNdlaLink = to =>
  to && isString(to) && to.match(/(.*)\/?node\/(\d+).*/) !== null;

// Fallback to normal link if app is missing RouterContext, link is external or is old ndla link
const SafeLink = ({ to, replace, children, ...rest }) => {
  if (isExternalLink(to) || isOldNdlaLink(to)) {
    const href = typeof to === 'string' ? to : '#';
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} replace={replace} {...rest}>
      {children}
    </Link>
  );
};

SafeLink.propTypes = Link.propTypes;

SafeLink.defaultProps = Link.defaultProps;

export default SafeLink;
