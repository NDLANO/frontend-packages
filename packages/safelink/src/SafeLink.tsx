/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { LocationDescriptor } from 'history';
import styled from '@emotion/styled';
import { Launch } from '@ndla/icons/common';
import isString from 'lodash/isString';
import MissingRouterContext from './MissingRouterContext';

const isExternalLink = (to?: LocationDescriptor) =>
  to && isString(to) && (to.startsWith('https://') || to.startsWith('http://'));

export const isOldNdlaLink = (to?: LocationDescriptor) =>
  to && isString(to) && to.match(/(.*)\/?node\/(\d+).*/) !== null;

const LaunchIconWrapper = styled.span`
  margin-left: 6px;
`;

type Props = {
  showNewWindowIcon?: boolean;
};

// Fallback to normal link if app is missing RouterContext, link is external or is old ndla link
const SafeLink: React.FunctionComponent<Props & LinkProps & React.HTMLAttributes<HTMLElement>> = ({
  to,
  replace,
  children,
  showNewWindowIcon,
  ...rest
}) => {
  const isMissingRouterContext = React.useContext(MissingRouterContext);

  if (isMissingRouterContext || isExternalLink(to) || isOldNdlaLink(to)) {
    const href = typeof to === 'string' ? to : '#';
    return (
      <>
        <a href={href} {...rest}>
          {children}
        </a>
        {showNewWindowIcon && (
          <LaunchIconWrapper>
            <Launch />
          </LaunchIconWrapper>
        )}
      </>
    );
  }

  return (
    <Link to={to} replace={replace} {...rest}>
      {children}
    </Link>
  );
};

export default SafeLink;
