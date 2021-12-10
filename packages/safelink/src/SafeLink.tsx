/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes, useContext } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from '@emotion/styled';
import { Launch } from '@ndla/icons/common';
import isString from 'lodash/isString';
import MissingRouterContext from './MissingRouterContext';

const isExternalLink = (to?: LinkProps['to']) =>
  to && isString(to) && (to.startsWith('https://') || to.startsWith('http://'));

export const isOldNdlaLink = (to?: LinkProps['to']) => to && isString(to) && to.match(/(.*)\/?node\/(\d+).*/) !== null;

const LaunchIcon = styled(Launch)`
  margin-left: 6px;
  height: auto;
  width: auto;
  margin-top: 1px;
`;

type Props = {
  showNewWindowIcon?: boolean;
};

export type SafeLinkProps = Props & LinkProps & HTMLAttributes<HTMLElement>;

// Fallback to normal link if app is missing RouterContext, link is external or is old ndla link
const SafeLink = ({ to, replace, children, showNewWindowIcon, ...rest }: SafeLinkProps) => {
  const isMissingRouterContext = useContext(MissingRouterContext);

  if (isMissingRouterContext || isExternalLink(to) || isOldNdlaLink(to)) {
    const href = typeof to === 'string' ? to : '#';
    return (
      <a href={href} {...rest}>
        {children}
        {showNewWindowIcon && <LaunchIcon style={{ verticalAlign: 'text-top' }} />}
      </a>
    );
  }

  return (
    // React Router 6 becomes mad if to is undefined. This fix is only here to fix shoddy data in Storybook.
    <Link tabIndex={0} to={to ?? '/'} replace={replace} {...rest}>
      {children}
      {showNewWindowIcon && <LaunchIcon style={{ verticalAlign: 'text-top' }} />}
    </Link>
  );
};

export default SafeLink;
