/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import isString from 'lodash/isString';

const isExternalLink = to =>
  to &&
  isString(to) &&
  (to.startsWith('https://') || to.startsWith('https://'));

export const isOldNdlaLink = to =>
  (to && isString(to) && to.match(/(.*)\/?node\/(\d+).*/)) !== null;

// Fallback to normal link if app is missing RouterContext, link is external or is old ndla link
const SafeLink = (props, context) => {
  if (!context.router || isExternalLink(props.to) || isOldNdlaLink(props.to)) {
    const { to, ...rest } = props;
    delete rest.replace;
    const href = typeof to === 'string' ? to : '#';
    return (
      <a href={href} {...rest}>
        {props.children}
      </a>
    );
  }

  return <Link {...props}>{props.children}</Link>;
};

SafeLink.propTypes = Link.propTypes;

SafeLink.defaultProps = Link.defaultProps;

SafeLink.contextTypes = {
  router: PropTypes.object, // eslint-disable-line
};

export default SafeLink;
